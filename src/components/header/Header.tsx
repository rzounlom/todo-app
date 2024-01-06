import { FC } from "react";
import Image from "next/image";

const Header: FC = () => {
  return (
    <div className="container-flud h-[15vh] border-2 border-black">
      <div className="w-[109px] h-[20px] md:w-[167px] sm:h-[40px]">
        <Image src={"/images/logo.svg"} layout="fill" alt={"todo logo"} />
      </div>
    </div>
  );
};

export default Header;
