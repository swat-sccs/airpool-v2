"use client"
import CalendarView from "@/components/CalendarView";
import CarpoolCard from "@/components/CarpoolCard";
import SCCSBox from "@/components/SCCSBox";
import { useState, useEffect } from "react";

enum DisplayMode {
    List,
    Grid,
    Calendar
}

export default function PoolResults(props: any){
    const [displayMode, setDisplayMode] = useState(DisplayMode.List);
    const [isSmallScreen, setIsSmallScreen] = useState(true);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
    
        const updateScreenSize = () => setIsSmallScreen(mediaQuery.matches);
    
        // Initial check
        updateScreenSize();
    
        // Listen for changes
        mediaQuery.addEventListener('change', updateScreenSize);
    
        // Cleanup listener on component unmount
        return () => mediaQuery.removeEventListener('change', updateScreenSize);
      }, []);    

    let poolList;
    if (displayMode == DisplayMode.List || (displayMode == DisplayMode.Calendar && isSmallScreen)){
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
    else if (displayMode == DisplayMode.Calendar && !isSmallScreen){
        poolList = <CalendarView pools={props.pools}/>
    }

    const switch_view_button_class = "bg-alt-blue hover:bg-deep-blue h-[30px] text-center text-white leading-[30px] scale-100 hover:scale-[1.01]";
    let modeSwitchBar = isSmallScreen ? 
        (<>
            <div className={switch_view_button_class + " w-[40.5vw] rounded-[15px_0px_0px_15px]"} onClick={() => setDisplayMode(DisplayMode.List)}>List</div>
            <div className={switch_view_button_class + " w-[40.5vw] rounded-[0px_15px_15px_0px]"} onClick={() => setDisplayMode(DisplayMode.Calendar)}>Grid</div>
        </>)
        : 
        (<>
            <div className={switch_view_button_class + " w-[27vw] rounded-[15px_0px_0px_15px]"} onClick={() => setDisplayMode(DisplayMode.List)}>List</div>
            <div className={switch_view_button_class + " w-[27vw]"} onClick={() => setDisplayMode(DisplayMode.Grid)}>Grid</div>
            <div className={switch_view_button_class + " w-[27vw] rounded-[0px_15px_15px_0px]"} onClick={() => setDisplayMode(DisplayMode.Calendar)}>Calendar</div>
        </>)

    return  <>  
            <div className="flex flex-row justify-center gap-[3px]">
                {modeSwitchBar}
            </div>
            <div className="mt-[40px]">{poolList}</div>
            </>
}