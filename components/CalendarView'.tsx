"use client"
import { useState } from "react";

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jnauary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const calendarWidthClass = "w-[86vw]";

const poolClass = "bg-[#B4B4B4] md:w-[10.4vw] p-[2px_1px] g:p-[4px_3px] text-[10px] g:text-[14px] xl:text-[17px] overflow-hidden overflow-ellipsis whitespace-nowrap rounded-[5px]";

export default function CalendarView(props: any){
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth(); // 0 is January and 11 is December (I think)
    const year = date.getFullYear();

    const [displayMonth, setDisplayMonth] = useState(month);
    const [displayYear, setDisplayYear] = useState(year);

    return (
        <div className={calendarWidthClass + " bg-card-bg rounded m-auto drop-shadow"}>
            <div className="text-center md:text-[70px] lg:text-[87px] pt-[8px]">{months[displayMonth] + " " + displayYear}</div>
            <div className="grid-container grid items-center justify-items-center grid-cols-7 md:pt-[24px] lg:pt-[36px] pl-[10px] pr-[10px]">
            {
                daysOfWeek.map(function(day){
                    return <div className="text-center md:text-[14px] lg:text-[18px] xl:text-[28px] mb-[4px]">{day}</div>
                })
            }
                Array.from(Array(42).keys()).map(function(i){
                    const dayOfWeekOfFirst = new Date(displayYear, month, 1).getDay();
                    const daysInMonth = new Date(displayYear, month, 0).getDate();
                    return <>
                        <div className="w-[13vw] md:w-[11.5vw] h-[84px] lg:h-[112px] xl:h-[132px] rounded bg-accent mb-[8px] flex flex-col justify-between">   
                            <div className="md:text-[16px] lg:text-[19px] xl:text-[22px] pt-[5px] pl-[7px]">
                                {(i < dayOfWeekOfFirst) || (i - dayOfWeekOfFirst + 1 > daysInMonth)
                                 ? "" : daysInMonth}
                            </div>
                            <div className="flex flex-col items-center gap-[5px] mb-[3px]">
                                <div className={poolClass}>Philedelphia Airport</div>
                                <div className={poolClass}>Haverford College</div>
                                <div className={poolClass}>Philedelphia Concert Venue</div>
                            </div>
                        </div>
                    </>
                })
            }
            </div>
        </div>
    );
}