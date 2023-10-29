import * as React from "react";

import styles from "./SCCSBox.module.css"

/*
content (string or ReactComponent) - Content to appear inside div
*/
export default function SCCSBox(props: any){
    return (
        <div className={styles.CardBorder + " bg-primary"}>
            <div className={styles.Card + " bg-card-bg"}>
                {props.content || "No content specified"}
            </div>
        </div>
    );
}