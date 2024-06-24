import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./tom_header.module.scss";
import PAGES from "@/constants/pages";
import Link from "next/link";
import { useRouter } from "next/router";

const TopHeader = () => {
  const router = useRouter();

  return (
    <nav className={styles.top_nav}>
      <CustomContainer>
        <ul>
          {PAGES.map((p) => {
            return (
              <li
                key={p.name}
                className={`${styles.item} ${
                  router.pathname === p.href ? styles.active : ""
                }`}
              >
                <Link href={p.href}>{p.name}</Link>
              </li>
            );
          })}
        </ul>
      </CustomContainer>
    </nav>
  );
};

export default TopHeader;
