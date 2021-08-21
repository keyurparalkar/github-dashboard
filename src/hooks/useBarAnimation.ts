import { useSpring, config } from "react-spring";
import * as React from "react";

const useBarAnimation = (yVal: number, delay?: number) => {
  const [flip, set] = React.useState(false);

  const props = useSpring({
    to: { y: yVal },
    from: { y: 0 },
    reset: true,
    reverse: flip,
    delay: delay ? delay : 20,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return props;
};

export default useBarAnimation;
