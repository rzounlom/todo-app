import { FC } from "react";

type SpinnerProps = {
  height?: string;
  width?: string;
  borderWidth?: string;
};
const Spinner: FC<SpinnerProps> = ({ height, width, borderWidth }) => {
  console.log({ height, width, borderWidth });
  return (
    <div
      className={`w-[${width ? width : "100"}px] h-[${
        height ? height : "100"
      }px] rounded-full animate-spin  border-solid border-[${
        borderWidth ? borderWidth : "6"
      }px] border-blue-500 border-t-transparent`}
    ></div>
  );
};

export default Spinner;
