import styles from "./SCCSHeader.module.css"
import Image from "next/image"

// TODO: Add hamburger drop-down icon in the top right

export default function SCCSHeader(){
    return (
        <header className={styles.SCCSHeader + " h-[49px] md:h-[60px] bg-primary"}>
            <Image src="/../img/sccs-dark-logo.png" width={51} height={46} alt={"SCCS"}/>
        </header>
    );
}