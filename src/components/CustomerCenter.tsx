import React from "react";
import cskakao from "@/assets/cskakao.svg";

export default function CustomerCenter() {
  return (
    <div>
      <div className="flex items-center">
        <div className="flex items-center max-md:w-[1px] md:w-[6px] max-md:h-[110px]  md:h-[154px] mr-[15px] bg-system-gray-light"></div>
        <div className="flex flex-col gap-[5px]">
          <div>
            <img src={cskakao} alt="cskakao" />
            <div></div>
          </div>
          <text className="max-md:text-[12px] md:ext-[18px] md:font-bold">
            고객센터 운영시간
          </text>
          <text className="max-md:text-[12px] md:text-[18px] ">
            월 ~ 토 : 오전 10시 ~ 오후 10시
          </text>
          <text className="max-md:text-[12px] md:text-[18px] ">
            점심시간 : 오후 12시 ~ 오후 1시
          </text>
          <text className="max-md:text-[12px] md:text-[18px] text-system-red-normallight">
            일,공휴일 : 휴무
          </text>
        </div>
      </div>
    </div>
  );
}
