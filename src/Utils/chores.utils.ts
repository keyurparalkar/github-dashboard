let timerId: any = null;

export const debounceFunction = function (func: any, delay: number) {
  clearTimeout(timerId);

  timerId = setTimeout(func, delay);
  return func;
};
