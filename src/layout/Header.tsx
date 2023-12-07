import React from "react";

import Logo from "@/assets/Logo.svg";

export default function Header() {
  return (
    <div className="flex w-full h-[80px] ">
      <div className="flex mx-[120px] items-center ">
        <div className="w-[43px] h-[34px] ml-[30px]">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex w-[1073px] h-[22px] ml-[24px] my-[23px] gap-[32px] ">
          <span className="cursor-pointer">단짠단짠</span>
          <span className="cursor-pointer">단짠 가이드</span>
          <span className="cursor-pointer">공지사항</span>
          <span className="cursor-pointer">통계리포트</span>
          <span className="cursor-pointer">FAQ</span>
        </div>
      </div>
    </div>
  );
}
