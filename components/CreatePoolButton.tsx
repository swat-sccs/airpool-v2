'use client'
import * as React from "react";

import styles from "./SCCSBox.module.css"



export default function CreatePoolButton(props: any){

    var contents: any = props.contents || [];
    if (!(contents instanceof Array)){
        contents = Array.of(contents);
    }
    return (
        <div className={styles.Card + " bg-primary m-auto rounded w-fit"}>
            <div className="flex flex-col gap-[12px]"> {
                contents.map(function(content: any){
                    return (
                            <div>
                                {content || "No content specified"}
                            </div>
                    )
                })
            } </div>
        </div>
    );
}