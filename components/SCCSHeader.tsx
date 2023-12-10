'use client'
import styles from "./SCCSHeader.module.css"
import Image from "next/image"
import sccsLogo from "@/img/sccs-dark-logo.png"

// TODO: Add hamburger drop-down icon in the top right

export default function SCCSHeader(){
    return (
        <header className={styles.SCCSHeader + " h-[49px] md:h-[60px] bg-primary"}>
            <Image src={sccsLogo} width={48} height={48} alt={"SCCS"}/>
        </header>
    );
}