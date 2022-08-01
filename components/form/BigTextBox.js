import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

function BigTextBox() {
    return (
        <div className={styles.textBoxWrapper}>
            <div className={styles.bigTextBoxContainer}>
                <div className={styles.textBoxLeft}>
                    <Image
                        src="/search.svg"
                        alt="Vercel Logo"
                        width={24}
                        height={24}
                    />
                </div>
                <input className={styles.textInput} type={"text"}></input>
                <div className={styles.textBoxLeft}>
                    <Image
                        src="/music.svg"
                        alt="Vercel Logo"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </div>
    );
}

export default BigTextBox;
