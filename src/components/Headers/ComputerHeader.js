"use client";

import styles from "./computerHeader.module.css";
import { useEffect } from "react";
import { setupRedirectOnClick } from "@/utils/redirect.js";
import { useRouter } from "next/navigation";

export default function ComputerHeader() {
  const router = useRouter()

  useEffect(() => {
    setupRedirectOnClick(router, ['home', 'about', 'projects', 'contact']);
  }, [router]);
  return (
    <header className={styles.computerheader}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h1>CodeGrid</h1>
        </div>
        <ul>
          <li id="home" data-path="/home">Home</li>
          <li id="about" data-path="/about">About</li>
          <li id="projects" data-path="/projects">Projects</li>
          <li id="contact" data-path="/contact">Contact</li>
        </ul>
      </nav>
    </header>
  );
}