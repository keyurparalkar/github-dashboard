import dayjs from "dayjs";

let timerId: any = null;

export const debounceFunction = function (func: any, delay: number) {
  clearTimeout(timerId);

  timerId = setTimeout(func, delay);
  return func;
};


export const convertToDateValObject = (data: any) => {
  let tempObj:any = {};
  let tempArray: any = [];

  //Create date categories:
  for(const item of data){
    const newDate = dayjs(item?.created_at).format("YYYY-MM-DD");
    if(!tempObj.hasOwnProperty(newDate)){
      tempObj[newDate] = 0;
    }
  }

  //Add count to each date category
  for(const item of data){
    const newDate = dayjs(item?.created_at).format("YYYY-MM-DD");

    if(tempObj.hasOwnProperty(newDate)){
      tempObj[newDate] += 1;
    }
  }

  for(const item of Object.keys(tempObj)){
    tempArray.push({
      time: new Date(item).getTime(),
      value: tempObj[item]
    });
  }

  return tempArray;
}