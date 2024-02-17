'use client'
import * as React from "react";

import styles from "./SCCSBox.module.css"

/*
content (string or ReactComponent) - Content to appear inside div
extraClasses (string) - Extra CSS/Tailwind classes to add to content
*/
export default function SCCSBox(props: any){

    var contents: any = props.contents || [];
    if (!(contents instanceof Array)){
        contents = Array.of(contents);
    }

    return (
        <div className={styles.CardBorder + " bg-primary m-auto rounded w-fit"}>
            <div className="flex flex-col gap-[12px]"> {
                contents.map(function(content: any){
                    return (
                        <div className={styles.Card + " bg-card-bg flex items-center justify-center text-center rounded " + props.extraClasses}>
                            <div>
                                {content || "No content specified"}
                            </div>
                        </div>
                    )
                })
            } </div>
        </div>
    );
}