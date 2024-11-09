"use client"
import CalendarView from "@/components/CalendarView";
import CarpoolCard from "@/components/CarpoolCard";
import SCCSBox from "@/components/SCCSBox";
import { useState } from "react";

enum DisplayMode {
    List,
    Grid,
    Calendar
}

export default function PoolResults(props: any){
    const [displayMode, setDisplayMode] = useState(DisplayMode.List);

    const switch_view_button_class = "bg-alt-blue hover:bg-deep-blue w-[27vw] h-[30px] text-center text-white leading-[30px] scale-100 hover:scale-[1.01]";
    const view = 1;

    let poolList;
    if (displayMode == DisplayMode.List){
        poolList = (    <div className="flex flex-wrap items-center flex-col">
                        {
                            props.pools.map(function(p: any){
                                return <CarpoolCard isDotBlue={p.isDotBlue} destination={p.destination} vehicleType={p.vehicleType} paymentMethods={p.paymentMethods} seatCount={p.seatCount} time={p.time} date={p.date} displayType={"list"} />
                            })
                        }
                        </div>);
    }
    else if (displayMode == DisplayMode.Grid){
        poolList = (    <div className="flex flex-wrap items-center flex-row gap-[80px]">
                        {
                            props.pools.map(function(p: any){
                                return <CarpoolCard isDotBlue={p.isDotBlue} destination={p.destination} vehicleType={p.vehicleType} paymentMethods={p.paymentMethods} seatCount={p.seatCount} time={p.time} date={p.date} displayType={"grid"} />
                            })
                        }
                        </div>);
    }
    else if (displayMode == DisplayMode.Calendar){
        poolList = <CalendarView pools={props.pools}/>
    }

    return  <>  
            <div className="flex flex-row justify-center gap-[3px]">
                <div className={switch_view_button_class + " rounded-[15px_0px_0px_15px]"} onClick={() => setDisplayMode(DisplayMode.List)}>List</div>
                <div className={switch_view_button_class} onClick={() => setDisplayMode(DisplayMode.Grid)}>Grid</div>
                <div className={switch_view_button_class + " rounded-[0px_15px_15px_0px]"} onClick={() => setDisplayMode(DisplayMode.Calendar)}>Calendar</div>
            </div>
            <div className="mt-[40px]">{poolList}</div>
            </>
}