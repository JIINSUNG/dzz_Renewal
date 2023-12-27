import React from "react";
import rightarrow from "@/assets/rightarrow.svg";
export default function FaqList() {
  return (
    <>
      <div className="flex items-center max-md:h-[34px] md:h-[44px] px-[10px] py-[8px] gap-[10px] bg-white text-black rounded-[15px]">
        <text>01</text>
        <text className="w-[293px]">인증번호가 오지 않아요</text>
      </div>
      <div className="flex items-center px-[10px] py-[8px] gap-[10px] bg-system-black-light text-white rounded-[15px]">
        <text>02</text>
        <text className="w-[293px]">
          매칭이 계속 실패되어요. (티켓이 계속 반환되어요.)
        </text>
        <img src={rightarrow} alt="arrow" className="md:ml-[40px]" />
      </div>
      <div className="flex items-center max-md:h-[34px] md:h-[44px] px-[10px] py-[8px] gap-[10px] bg-white text-black rounded-[15px]">
        <text>03</text>
        <text className="w-[293px]">
          캠퍼스 인증을 진행했는데 아직 티켓을 받지 못했어요.
        </text>
      </div>
      <div className="flex items-center max-md:h-[34px] md:h-[44px] px-[10px] py-[8px] gap-[10px] bg-white text-black rounded-[15px]">
        <text>04</text>
        <text className="w-[293px]">
          매칭 확인 당일, 상대방의 프로필이 아직 오지 않았어요.
        </text>
      </div>
      <div className="flex items-center max-md:h-[34px] md:h-[44px] px-[10px] py-[8px] gap-[10px] bg-white text-black rounded-[15px]">
        <text>05</text>
        <text className="w-[293px]">젤리를 충전했는데 되지 않았어요.</text>
      </div>
    </>
  );
}
