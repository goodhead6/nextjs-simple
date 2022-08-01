import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import HyperLink from "./HyperLink";
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerBottom}>
                <div className={styles.footerBottomLink}>
                    <HyperLink text={"About"}></HyperLink>
                    <HyperLink text={"Contact"}></HyperLink>
                    <HyperLink text={"How to use?"}></HyperLink>
                    <HyperLink text={"Terms & Condition"}></HyperLink>
                    <HyperLink text={"License"}></HyperLink>
                    <HyperLink text={"Settings"}></HyperLink>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
