"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import "bootstrap-icons/font/bootstrap-icons.css";

const navigation = () => {
  const pathname = usePathname();
  const [hamburger, sethamburger] = useState(false);

  const toggleMenu = () => {
    sethamburger(!hamburger);
  };

  return (
    <header>
      <nav className="w-full h-[95px] bg-black flex items-center justify-between px-[55px] text-white font-bold">
        <svg
          width="103"
          height="43"
          viewBox="0 0 103 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 12.0786H24.1549V16.9096L10.1443 35.6305H24.1549V42.2728H0V37.4418L14.0696 18.7209H0V12.0786Z"
            fill="white"
          />
          <path
            d="M40.9415 11.6553C43.2754 11.6553 45.4107 12.0289 47.3426 12.7714C49.2745 13.5163 50.925 14.5733 52.2942 15.9424C53.6633 17.3116 54.7179 18.9621 55.4652 20.894C56.21 22.8259 56.5813 24.9612 56.5813 27.2951V42.2704H49.3336V39.3713C48.6101 40.2983 47.4916 41.1022 45.9829 41.7856C44.4743 42.469 42.6109 42.8119 40.3976 42.8119C38.1843 42.8119 36.2099 42.4383 34.3583 41.6958C32.5068 40.9509 30.9154 39.8939 29.5888 38.5248C28.2599 37.1557 27.2242 35.5051 26.4793 33.5732C25.7345 31.6413 25.3632 29.5084 25.3632 27.1721C25.3632 24.8359 25.7345 22.7148 26.4793 20.8018C27.2242 18.8911 28.2812 17.2595 29.6503 15.9093C31.0195 14.5615 32.6605 13.5139 34.5712 12.7691C36.4818 12.0242 38.6076 11.653 40.9415 11.653V11.6553ZM49.336 27.2336C49.336 24.415 48.5817 22.2206 47.0707 20.6504C45.5597 19.0803 43.5379 18.2953 41.0006 18.2953C38.4634 18.2953 36.4298 19.0803 34.9022 20.6504C33.3723 22.2206 32.6085 24.415 32.6085 27.2336C32.6085 30.0523 33.3723 32.2467 34.9022 33.8168C36.4321 35.3869 38.4657 36.172 41.0006 36.172C43.5355 36.172 45.5597 35.3869 47.0707 33.8168C48.5817 32.2467 49.336 30.0523 49.336 27.2336Z"
            fill="white"
          />
          <path
            d="M60.2062 0H67.4539V30.6174L81.1002 12.0786H89.7359L78.563 27.1745L89.4924 42.2704H80.9182L74.2759 33.0317L67.4515 42.2704H60.2039V0H60.2062Z"
            fill="white"
          />
          <path
            d="M89.7359 36.5811C89.7359 34.7272 90.3105 33.2422 91.4621 32.1166C92.6113 30.9934 94.1152 30.433 95.9691 30.433C97.823 30.433 99.3222 30.9958 100.474 32.1166C101.623 33.2398 102.2 34.7272 102.2 36.5811C102.2 38.4349 101.623 40.0074 100.474 41.1283C99.3222 42.2515 97.8206 42.8119 95.9691 42.8119C94.1176 42.8119 92.6137 42.2491 91.4621 41.1283C90.3105 40.0051 89.7359 38.4893 89.7359 36.5811Z"
            fill="#3FA9F5"
          />
        </svg>

        <div
          className={`${
            hamburger
              ? "flex flex-col items-center justify-center absolute top-[95px] left-0 w-full bg-black pb-5"
              : "hidden"
          } md_2:static md_2:w-max md_2:pb-0  md_2:flex md_2:flex-row md_2:items-center md_2:justify-center`}
        >
          <Link
            className={`${
              pathname === "/" ? "text-zluta" : "text-white"
            } my-3 md_2:mx-5 md_2:my-0 hover:text-zluta`}
            href="/"
          >
            Domů
          </Link>
          <Link
            className={`${
              pathname === "/identity" ? "text-zluta" : "text-white"
            } my-3 md_2:mx-5 md_2:my-0 hover:text-zluta`}
            href="/identity"
          >
            Identity
          </Link>
          <Link
            className={`${
              pathname === "/5" ? "text-zluta" : "text-white"
            } my-3 md_2:mx-5 md_2:my-0 hover:text-zluta`}
            href="/as"
          >
            Portfolio
          </Link>
          <Link
            className={`${
              pathname === "/5" ? "text-zluta" : "text-white"
            } my-3 md_2:mx-5 md_2:my-0 hover:text-zluta`}
            href="/as"
          >
            Jak funguji
          </Link>
          <Link
            className={`${
              pathname === "/5" ? "text-zluta" : "text-white"
            } my-3 md_2:mx-5 md_2:my-0 hover:text-zluta`}
            href="/as"
          >
            O mě
          </Link>
          <Link
            className={`${
              pathname === "/" ? "bg-zluta" : "bg-modra"
            } my-3 md_2:ml-5 md_2:my-0 py-2 px-5 rounded-xl text-white `}
            href="/asassa"
          >
            Napište mi
          </Link>
        </div>

        <button className="md_2:hidden" onClick={toggleMenu}>
          {hamburger ? (
            <i className="bi bi-x-lg text-[50px]"></i>
          ) : (
            <i className="bi bi-list text-[50px]"></i>
          )}
        </button>
      </nav>
    </header>
  );
};

export default navigation;
