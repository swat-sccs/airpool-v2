"use client"
import CalendarView from "@/components/CalendarView";
import CarpoolCard from "@/components/CarpoolCard";
import SCCSBox from "@/components/SCCSBox";
import { useState } from "react";
import PoolResults from "./PoolResults";

// This is completely temporary and just for testing until we get the hecking backend setup
const poolData = [
    {
        "isDotBlue": true,
        "destination": "Philly Airport",
        "vehicleType": "UberX",
        "paymentMethods": ["Cash", "Venmo"],
        "seatCount": 4,
        "isRoundTrip": false,
        "time": "1:00 AM",
        "date": "Novemeber 1, 2024"
    },
    {
        "isDotBlue": false,
        "destination": "SCCS Lab",
        "vehicleType": "UberX",
        "paymentMethods": ["Apple Pay", "Cash", "Venmo", "Zelle"],
        "seatCount": 61,
        "isRoundTrip": false,
        "time": "2:30 PM",
        "date": "November 6, 2024"
    },
    {
        "isDotBlue": false,
        "destination": "Walmart",
        "vehicleType": "Lyft",
        "paymentMethods": ["Apple Pay"],
        "seatCount": 1,
        "isRoundTrip": false,
        "time": "11:00 AM",
        "date": "December 4, 2024"
    },
    {
        "isDotBlue": true,
        "destination": "Haverford",
        "vehicleType": "Car",
        "paymentMethods": ["Cash"],
        "seatCount": 3,
        "isRoundTrip": false,
        "time": "3:45 PM",
        "date": "October 10, 2024"
    },
    {
        "isDotBlue": false,
        "destination": "Mushroom Kingdom",
        "vehicleType": "Yoshi",
        "paymentMethods": ["Apple Pay", "Venmo", "Zelle"],
        "seatCount": 4,
        "isRoundTrip": false,
        "time": "11:11 PM",
        "date": "November 11, 2024"
    },
]

enum DisplayMode {
    List,
    Grid,
    Calendar
}

export default function Pools(){

    const [displayMode, setDisplayMode] = useState(DisplayMode.List);

    function toggleDisplayType(displayMode: DisplayMode){
        setDisplayMode(displayMode);
    }

    return (
        <>
            <div className="mt-[25px]">
                <SCCSBox extraClasses="w-[88vw]" contents={"Search Pools"} />
            </div>

            <div className="mt-[20px]">
                <PoolResults pools={poolData}/>
            </div>
        </>
    )
}