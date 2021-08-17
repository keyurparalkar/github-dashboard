import * as React from "react";
import { animated, config, useSpring } from "react-spring";

const CounterFormatter = ({ num }: any) => {
  const [flip] = React.useState(false);
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number:
    Math.abs(num) > 999
    //@ts-ignore
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1)
        : Math.sign(num) * Math.abs(num),
    delay: 200,
    config: config.molasses,
  });

  return (
    <>
      {Math.abs(num) > 999 ? (
        <>
          <animated.div style={{ display: 'inline-block'}}>{number.to((n) => n.toFixed(1))}</animated.div>k
        </>
      ) : (
        <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
      )}
    </>
  );
};

export default CounterFormatter;
