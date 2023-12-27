import React, { useEffect } from "react";
import { useState } from "react";
import mainlogo from "@/assets/mainlogo.svg";
import mobilelogo from "@/assets/mobilelogo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import dot from "@/assets/dot.svg";
import { debounce } from "lodash";
import useWindowSize from "@/utils/useWindowSize";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isWideScreen = useWindowSize();

  return (
    <div className="flex w-full max-md:h-[48px] md:h-[68px] md:bg-system-nutral-white justify-center ">
      {/* 컨텐츠 영역 */}
      <div className="flex flex-1 max-w-[1140px]   max-md:mx-[20px] md:mx-[30px] md:justify-between items-center ">
        {/* 컨텐츠 - 로고영역 */}
        <div className="flex w-[80px] h-[20px] max-md:mx-[14px] max-md:my-[20px]  cursor-pointer  ">
          <a href="/">
            <img src={isWideScreen ? mainlogo : mobilelogo} alt="mainlogo" />
          </a>
        </div>
        {/* 컨텐츠 - 메뉴 영역 */}
        <div className="flex flex-1  md:text-center max-md:mx-[20px] items-center md:justify-between  max-md:justify-end">
          {/* 모바일 에서의 Responsive 메뉴 영역 */}
          {(isOpen || isWideScreen) && (
            <div className="flex flex-1 w-full   max-md:w-full max-md:absolute max-md:top-[48px] max-md:left-0 max-md:right-0 rounded  max-md:bg-white max-md:flex-col max-md:items-start  md:h-[22px]   ">
              <ul className="flex max-md:flex-col w-full justify-around   order-1 max-md:text-gray-500 md:text-system-black-light">
                <li className="flex cursor-pointer max-md:mx-[20px] max-md:my-[20px] text-base max-md:text-system-black-light">
                  <img src={dot} alt="dot" className="mr-[5px]" />
                  <a href="/service">서비스 소개</a>
                </li>
                <li className="cursor-pointer max-md:mx-[20px] max-md:my-[20px] text-base  ">
                  <a href="/notice">공지사항</a>
                </li>
                <li className="cursor-pointer max-md:mx-[20px] max-md:my-[20px] text-base ">
                  <a href="/guide">단짠 가이드</a>
                </li>
                <li className="cursor-pointer max-md:mx-[20px] max-md:my-[20px] text-base ">
                  <a href="/advertise">제휴 및 광고 문의</a>
                </li>
                <li className="cursor-pointer max-md:mx-[20px] max-md:my-[20px] text-base ">
                  <a href="/terms">이용약관 및 동의사항</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="w-[75px] h-[28px] mr-[15px] rounded-2xl bg-system-black-light text-center ">
          <text className="text-[12px] text-system-nutral-white">
            앱 다운로드
          </text>
        </div>
        <div
          className="md:hidden flex items-center  w-[32px] h-[32px]"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <MenuIcon />
        </div>
      </div>
    </div>
  );
}
