import { FC } from "react";

const Spinner: FC = () => {
  return (
    <div className="w-[100px] h-[100px] rounded-full animate-spin  border-solid border-[6px] border-blue-500 border-t-transparent"></div>
  );
};

export default Spinner;
