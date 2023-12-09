import React, { useEffect } from "react";
import { useState } from "react";
import Logo from "@/assets/Logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { debounce } from "lodash";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isWideScreen, setIsWideScreen] = useState<boolean>(
    window.innerWidth >= 1200
  );

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsWideScreen(window.innerWidth >= 1200);
    }, 200); // 200ms 디바운스 시간

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex w-full h-[48px] pc:h-[68px]">
      {/* 컨텐츠 영역 */}
      <div className="flex flex-1 pc:mx-[120px] items-center">
        {/* 컨텐츠 - 로고영역 */}
        <div className="flex w-[80px] h-[20px] max-pc:mx-[14px] max-pc:my-[20px] pc:ml-[30px] pc:mr-[24px] cursor-pointer ">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        {/* 컨텐츠 - 메뉴 영역 */}
        <div className="flex flex-1 max-pc:mx-[20px] items-center pc:justify-start max-pc:justify-end">
          <div className="pc:hidden w-[75px] h-[28px] mr-[15px] rounded-2xl bg-dzzmain text-center ">
            <text className="text-[12px] text-white">앱 다운로드</text>
          </div>
          <div
            className="pc:hidden flex items-center  w-[32px] h-[32px]"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <MenuIcon />
          </div>
          {/* 모바일 에서의 Responsive 메뉴 영역 */}
          {(isOpen || isWideScreen) && (
            <div className="flex  max-pc:w-full max-pc:absolute max-pc:top-[48px] max-pc:left-0 max-pc:right-0 rounded  max-pc:bg-white max-pc:flex-col max-pc:items-start  pc:h-[22px]   ">
              <ul className="flex max-pc:flex-col  pc:gap-[32px] order-1 ml-[28px]">
                <li className="cursor-pointer max-pc:mx-[20px] max-pc:my-[20px] ">
                  <a href="/service">서비스 소개</a>
                </li>
                <li className="cursor-pointer max-pc:mx-[20px] max-pc:my-[20px]">
                  <a href="/notice">공지사항</a>
                </li>
                <li className="cursor-pointer max-pc:mx-[20px] max-pc:my-[20px]">
                  <a href="/guide">단짠 가이드</a>
                </li>
                <li className="cursor-pointer max-pc:mx-[20px] max-pc:my-[20px]">
                  <a href="/advertise">제휴 및 광고 문의</a>
                </li>
                <li className="cursor-pointer max-pc:mx-[20px] max-pc:my-[20px]">
                  <a href="/terms">이용약관 및 동의사항</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="pc:hidden flex fixed w-full h-[58px]  justify-center  bottom-[20px]">
        <div className="flex flex-1 rounded-[30px] items-center justify-center mx-[60px] bg-dzzbutton">
          <text className="text-white">고객센터 문의하기</text>
        </div>
      </div>
    </div>
  );
}
