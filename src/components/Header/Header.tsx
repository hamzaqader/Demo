"use client";

import React from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import useIsMobile from "@/Hooks/useIsMobile";
import styles from '@/styles/components/header.module.scss'

export default function Header() {
  const { isMobile } = useIsMobile();

  return (
    <div className={styles.headerMain}>
      {!isMobile && <HeaderDesktop />}
      {isMobile && <HeaderMobile />}
    </div>
  );
}


