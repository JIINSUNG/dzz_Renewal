import React from "react";

export default function FaqCategoryList() {
  return (
    <>
      <div className="px-[10px] py-[8px] rounded-[30px] bg-system-gray-200">
        <text className="max-md:text-[12px] md:text-[16px]">
          자주 물어보는 질문
        </text>
      </div>
      <div className="px-[10px] py-[8px] rounded-[30px] bg-system-gray-200">
        <text className="max-md:text-[12px] md:text-[16px]">웹메일 · 인증</text>
      </div>
      <div className="px-[10px] py-[8px] rounded-[30px] bg-system-gray-200">
        <text className="max-md:text-[12px] md:text-[16px]">
          로그인 · 회원가입
        </text>
      </div>
      <div className="flex items-center px-[10px] py-[8px] rounded-[30px] bg-system-gray-200">
        <text className="max-md:text-[12px] md:text-[16px] text-system-black-light">
          젤리 · 티켓
        </text>
      </div>
      <div className="flex items-center px-[10px] py-[8px] rounded-[30px] bg-system-gray-200">
        <text className="max-md:text-[12px] md:text-[16px] text-system-black-light">
          사진 · 캠퍼스 심사
        </text>
      </div>
      <div className="flex items-center px-[10px] py-[8px] rounded-[30px] bg-system-gray-200">
        <text className="max-md:text-[12px] md:text-[16px] text-system-black-light">
          커뮤니티
        </text>
      </div>{" "}
      <div className="flex items-center px-[10px] py-[8px] rounded-[30px] bg-system-gray-200">
        <text className="max-md:text-[12px] md:text-[16px] text-system-black-light">
          단짠 매칭
        </text>
      </div>
      <div className="flex items-center px-[10px] py-[8px] rounded-[30px] bg-system-gray-200">
        <text className="max-md:text-[12px] md:text-[16px] text-system-black-light">
          신고 · 이용제한
        </text>
      </div>
      <div className="flex items-center px-[10px] py-[8px] rounded-[30px] bg-system-gray-200">
        <text className="max-md:text-[12px] md:text-[16px] text-system-black-light">
          광고 · 제휴
        </text>
      </div>
      <div className="flex items-center px-[10px] py-[8px] rounded-[30px] bg-system-gray-200">
        <text className="max-md:text-[12px] md:text-[16px] text-system-black-light">
          기타 일반 문의
        </text>
      </div>
    </>
  );
}
