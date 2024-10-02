"use client"
import leftArrow from "@/svg/leftarrow.svg"
import rightArrow from "@/svg/rightarrow.svg"
import Image from "next/image"
import { useState } from "react";

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jnauary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const lineClampClass = "line-clamp-2 overflow-ellipsis";
const arrowClass = "w-[70px] transition duration-[0.2s] scale-100 hover:scale-[1.01]";

interface Pool {
    "isDotBlue": boolean,
    "destination": string,
    "departure": string,
    "vehicleType": string,
    "paymentMethods": Array<string>,
    "seatCount": number,
    "isRoundTrip": boolean,
    "time": string,
    "month": number,
    "day": number, 
    "year": number,
}

const poolData = [
    {
        "isDotBlue": true,
        "destination": "Philly Airport",
        "departure": "Swarthmore",
        "vehicleType": "UberX",
        "paymentMethods": ["Cash", "Venmo"],
        "seatCount": 4,
        "isRoundTrip": false,
        "time": "1:00 AM",
        "month": 4,
        "day": 12, 
        "year": 2024
    },
    {
        "isDotBlue": false,
        "destination": "SCCS Lab",
        "departure": "Bryn Mawr",
        "vehicleType": "UberX",
        "paymentMethods": ["Apple Pay", "Cash", "Venmo", "Zelle"],
        "seatCount": 61,
        "isRoundTrip": false,
        "time": "2:30 PM",
        "month": 4,
        "day": 12, 
        "year": 2024
    },
    {
        "isDotBlue": false,
        "destination": "Walmart",
        "departure": "My House",
        "vehicleType": "Lyft",
        "paymentMethods": ["Apple Pay"],
        "seatCount": 1,
        "isRoundTrip": false,
        "time": "11:00 AM",
        "month": 4,
        "day": 28, 
        "year": 2024
    },
    {
        "isDotBlue": true,
        "destination": "Haverford",
        "departure": "Swarthmore",
        "vehicleType": "Car",
        "paymentMethods": ["Cash"],
        "seatCount": 3,
        "isRoundTrip": false,
        "time": "3:45 PM",
        "month": 5,
        "day": 1, 
        "year": 2024,
    },
    {
        "isDotBlue": false,
        "destination": "Mushroom Kingdom",
        "departure": "Green Hill Zone",
        "vehicleType": "Yoshi",
        "paymentMethods": ["Apple Pay", "Venmo", "Zelle"],
        "seatCount": 4,
        "isRoundTrip": false,
        "time": "11:11 PM",
        "month": 8,
        "day": 20, 
        "year": 2024
    },
]

function createDay(dayOnCalendar: number, monthOnCalendar: number, daysInMonth: number, currentDay: number, currentMonth: number, poolsOnDay: Array<Pool>){
    let backgroundColorClass = "bg-accent";
    if (dayOnCalendar == currentDay && monthOnCalendar == currentMonth){
        backgroundColorClass = "bg-[#FFFFAA]"
    }
    return (
    <div className={backgroundColorClass + " w-[13vw] md:w-[11.5vw] h-[84px] lg:h-[112px] xl:h-[180px] rounded mb-[8px] pb-[7px] flex flex-col justify-between"}>   
        <div className="md:text-[16px] lg:text-[19px] xl:text-[22px] pt-[5px] pl-[7px]">
            {(dayOnCalendar < 1) || (dayOnCalendar > daysInMonth)
            ? "" : dayOnCalendar}
        </div>
        <div className="flex flex-col items-center gap-[5px] mb-[3px]">
            {
                (poolsOnDay !== undefined && poolsOnDay.length > 0) ?
                (<div className="bg-[#B4B4B4] w-[10.4vw] p-[2px_1px] g:p-[4px_3px] text-[10px] g:text-[14px] xl:text-[17px] text-center rounded-slight pb-[6px]">
                    <div className="text-left text-[12px] font-bold mt-[2px] ml-[3px] mb-[6px]">8:30 AM</div>
                    <div className={lineClampClass}>{poolsOnDay[0].departure}</div>
                    <div className={lineClampClass}>↧</div>
                    <div className={lineClampClass}>{poolsOnDay[0].destination}</div>
                </div>) : <></> 
            }
            {
                (poolsOnDay !== undefined && poolsOnDay.length > 1) ?
                (<div className="text-center mt-[12px] mb-[3px]">+{poolsOnDay.length - 1} more carpools</div>) : <></>
            }
        </div>
    </div>
    )
}

export default function CalendarView(props: any){
    const poolDateMap: any = {};
    poolData.forEach(function(pool){
        const month = pool.month;
        const day = pool.day;
        if (poolDateMap[month] === undefined){
            console.log("h1", month);
            poolDateMap[month] = {};
        }
        if (poolDateMap[month][day] === undefined){
            console.log("h2", day);
            poolDateMap[month][day] = [];
        }
        console.log(poolDateMap);
        poolDateMap[month][day].push(pool);
    })

    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth(); // 0 is January and 11 is December (I think)
    const currentYear = date.getFullYear();

    const [displayMonth, setDisplayMonth] = useState(currentMonth);
    const [displayYear, setDisplayYear] = useState(currentYear);
    const [atEarliestMonth, setAtEarliestMonth] = useState(false);
    const [atLatestMonth, setAtLatestMonth] = useState(false);


    const monthsInPast = 1;
    const monthsInFuture = 6;
    const earliestDisplayMonth = (currentMonth - monthsInPast + 1) % 12; // Idk why but if there's no +1 or -1 here, there's an off by one error (b/c how React state works)
    const latestDisplayMonth = (currentMonth + monthsInFuture - 1) % 12;
    const earliestDisplayYear = currentYear - Math.floor((currentMonth - monthsInPast)/12);
    const latestsDisplayYear = currentYear + Math.floor((currentMonth + monthsInFuture)/12);

    
    function nextMonth(){
        if (displayMonth == 11){
            setDisplayYear(displayYear + 1);
        }
        setDisplayMonth((displayMonth + 1) % 12);

        setAtEarliestMonth(false);
        if (displayYear == latestsDisplayYear && displayMonth == latestDisplayMonth){
            setAtLatestMonth(true);
        }
        console.log(latestDisplayMonth, latestsDisplayYear)
    }

    function prevMonth(){
        if (displayMonth == 0){
            setDisplayYear(displayYear - 1);
        }
        setDisplayMonth((displayMonth - 1) % 12);

        setAtLatestMonth(false);
        if (displayYear == earliestDisplayYear && displayMonth == earliestDisplayMonth){
            setAtEarliestMonth(true);
        }
        console.log(earliestDisplayMonth, earliestDisplayYear)
    }

    return (
        <div className="flex flex-row items-center gap-[14px] w-fit m-auto">
            <div className={arrowClass} onClick={prevMonth}>
                <Image src={leftArrow} alt="<" className={(atEarliestMonth ? "hidden" : "")}/>
            </div>
            <div className={"w-[86vw] bg-card-bg rounded m-auto drop-shadow"}>
                <div className="text-center md:text-[70px] lg:text-[87px] pt-[8px]">{months[displayMonth] + " " + displayYear}</div>
                <div className="grid-container grid items-center justify-items-center grid-cols-7 md:pt-[24px] lg:pt-[36px] pl-[10px] pr-[10px]">
                {
                    daysOfWeek.map(function(day){
                        return <div className="text-center md:text-[14px] lg:text-[18px] xl:text-[28px] mb-[4px]">{day}</div>
                    })
                }
                {
                    Array.from(Array(42).keys()).map(function(i){
                        const daysInMonth = new Date(displayYear, displayMonth + 1, 0).getDate();
                        const dayOfWeekOfFirst = new Date(displayYear, displayMonth, 1).getDay();
                        const dayOnCalendar = i - dayOfWeekOfFirst + 1;
                        const poolsOnDay = poolDateMap.hasOwnProperty(displayMonth) ? poolDateMap[displayMonth][dayOnCalendar] : undefined;
                        return (createDay(dayOnCalendar, displayMonth, daysInMonth, currentDay, currentMonth, poolsOnDay));
                    })
                }
                </div>
            </div>
            <div className={arrowClass} onClick={nextMonth}>
                <Image src={rightArrow} alt="<" className={(atLatestMonth ? "hidden" : "")}/>
            </div>
        </div>
    );
}