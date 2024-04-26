
import styles from "./AirpoolDropdown.module.css"

/**
 * 
 * Props:
 *      options (string[][]) - An array where each element is an array of two elements [optionID, and optionName]
 *      width (int) - The width of the dropdown (0px by default)
 *      id (string) - The ID to be assigned to the dropdown
 * 
 */

export default function AirpoolDropdown(props: any){
    const SVGFilter = (
        <svg visibility="hidden" widths="0" xHeight="0" xmlnsXlink="http://www.w3.org/2000/svg">
            <defs>
                <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />    
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                </filter>
            </defs>
        </svg>
    );


    return(
        <>
            <select id={props.id} 
                    style = {{width: props.width,}}
                    className={props.widthClass + " bg-accent rounded-slight drop-shadow-dropdown appearance-none outline-none h-[48px] text-[32px] pl-[8px]"}>
                <option id="NA"><i>- Select -</i></option>
                {
                    props.options.map(function(option: any){
                        return (<option id={option[1]}>{option[0]}</option>);
                    })
                }
            </select>
            <div className="relative inline pointer-events-none">
                <div className="absolute bg-[#B1B1B1] top-[-15px] left-[-45px] w-[38px] h-[38px] rounded">
                    <div className={styles.filter}>
                        <div className={styles.arrow + " absolute w-[28px] h-[28px] top-[9px] left-[5px]"} />
                    </div>
                    {SVGFilter}
                </div>   
            </div>
        </>
    );
}