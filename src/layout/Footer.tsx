import React, { useState, useEffect } from "react";
import whitelogo from "@/assets/whitelogo.svg";
import arrow from "@/assets/arrowwhite.svg";
import instagram from "@/assets/instagramwhite.svg";
import thread from "@/assets/threadwhite.svg";
import tiktok from "@/assets/tiktokwhite.svg";
import useWindowSize from "@/utils/useWindowSize";

export default function Footer() {
  const isWideScreen = useWindowSize();

  return (
    <div className="flex w-full max-md:h-[667px] md:h-[443px] bg-system-black-light">
      <div className="flex max-md:flex-1 md:w-[634px] md:h-[293px]      max-md:flex-col  max-md:my-[87px] max-md:mx-[60px]  md:mx-auto md:mt-[50px]  md:flex md:justify-between">
        {/* 로고 및 제휴 */}
        <div className="flex  max-md:flex-col md:flex-col-reverse md:self-start">
          <div className="max-md:w-[110px] max-md:h-[45px] md:w-[217px] md:h-[103px] my-[10px]">
            <a href="/">
              <img src={whitelogo} alt="Logo" className="w-full" />
            </a>
          </div>
          <div className="max-md:mt-[10px] max-md:w-[174px] max-md:h-[105px]">
            {!isWideScreen ? (
              <text className="text-2xl font-bold text-white">
                지금까지
                <br />
                겪어보지 못한
                <br />
                캠퍼스 라이프
              </text>
            ) : (
              <text className="text-[40px] font-bold text-white leading-[44px]">
                지금까지 겪어보지 못한
                <br />
                캠퍼스 라이프
              </text>
            )}
          </div>
        </div>
        {/* SNS */}
        <div>
          <div className="flex max-md:mt-[40px] max-md:gap-[10px]">
            <div className="flex border-b border-solid border-white">
              <text className=" text-xl text-white  ">광고ㆍ제휴 문의하기</text>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          {/* 회사 정보가 들어가는 곳 */}
          <div className="flex flex-col justify-center  max-md:mt-[30px] md:my-[15px]">
            <div className="flex flex-col gap-[5px] text-white">
              <div className="text-[12px]">파이브이얼즈 | (주) 서화</div>
              <div className="text-[12px]">
                서울특별시 서초구 마방로6길 13, 4층 4193호
              </div>
            </div>
            <div className="flex flex-col gap-[5px] text-white  mt-[15px]">
              <div className="text-[12px]">사업자 번호: 295-40-01132</div>
              <div className="text-[12px]">통신판매업: 서울 마포-2018</div>
            </div>
            <div className="flex flex-col gap-[5px] text-white mt-[15px] ">
              <div className="text-[12px]">전자금융분쟁처리</div>
              <div className="text-[12px]">TEL . 0507-0177-1683 </div>
              <div className="text-[12px]">5iveyears.official@gmail.com </div>
              <div className="text-[12px]">dzzdzz.official@gmail.com </div>
            </div>
          </div>
          <div className="flex gap-[20px] my-[15px]">
            <img src={instagram} alt="instagram" className="cursor-pointer" />
            <img src={thread} alt="thread" className="cursor-pointer" />
            <img src={tiktok} alt="tiktok" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
