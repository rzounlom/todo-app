import { FC } from "react";
import Image from "next/legacy/image";
import { useTheme } from "next-themes";

const Header: FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    switch (resolvedTheme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      default:
        setTheme("system");
    }
  };

  return (
    <div className="w-[327px] md:w-[540px] h-[15vh] flex justify-between items-center">
      <div className="w-[109px] h-[20px] md:w-[167px] sm:h-[40px] relative">
        <Image src={"/images/logo.svg"} layout="fill" alt={"todo logo"} />
      </div>

      <div
        className="w-[20px] h-[20px] md:w-[26px] sm:h-[26px] relative hover:cursor-pointer"
        onClick={toggleTheme}
      >
        <Image
          src={`${
            resolvedTheme === "dark"
              ? "/images/icon-sun.svg"
              : "/images/icon-moon.svg"
          }`}
          layout="fill"
          alt={`resolvedTheme === "dark"
          ? "sun incon"
          : "moon icon"
      }`}
        />
      </div>
    </div>
  );
};

export default Header;
