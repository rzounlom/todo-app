import { Dispatch, FC, SetStateAction } from "react";

import { type Tab } from "@/types/tabs";
import { tabs } from "@/data/tabs";

interface TodoFooterProps {
  activeTab: "all" | "active" | "completed";
  setActiveTab: Dispatch<SetStateAction<"all" | "active" | "completed">>;
  todoLength: number;
  loading?: boolean;
}

const TodoFooter: FC<TodoFooterProps> = ({
  activeTab,
  setActiveTab,
  todoLength,
  loading,
}) => {
  if (loading) {
    return null;
  }

  return (
    <div className="w-full h-[48px] flex justify-center items-center rounded bg-[#FFF] dark:bg-[#25273D] text-[#9495A5] font-bold px-6 mt-[16px] md:mt-[1px] shadow-md">
      <div className="w-full h-full flex justify-center md:justify-between items-center">
        <div className="hidden md:block">{todoLength} items left</div>
        <div className="w-[166px] flex justify-between items-center">
          {tabs.map((tab: Tab) => (
            <div
              key={tab.id}
              className={`hover:cursor-pointer ${
                tab.name === activeTab ? "text-[#3A7CFD]" : ""
              } $}`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className="hover:cursor-pointer hidden md:block">
          Clear Completed
        </div>
      </div>
    </div>
  );
};

export default TodoFooter;
