'use client'
import styles from "./SCCSFooter.module.css"

export default function SCCSFooter(){
    // Current Figma design doesn't specify anything to appear in the footer.
    // Presumably, this will be filled in later
    return (
        <footer className={styles.SCCSFooter + " h-[24px] bg-primary"}></footer>
    );
}
