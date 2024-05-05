"use client"
import CalendarView from "@/components/CalendarView'";
import CarpoolCard from "@/components/CarpoolCard";
import SCCSBox from "@/components/SCCSBox";
import { useState } from "react";
export const dynamic = 'force-dynamic' // defaults to auto
import { Carpool, PrismaClient, TransportationType} from '@prisma/client'

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
        "date": "April 1, 2023"
    },
    {
        "isDotBlue": false,
        "destination": "SCCS Lab",
        "vehicleType": "UberX",
        "paymentMethods": ["Apple Pay", "Cash", "Venmo", "Zelle"],
        "seatCount": 61,
        "isRoundTrip": false,
        "time": "2:30 PM",
        "date": "April 6, 2023"
    },
    {
        "isDotBlue": false,
        "destination": "Walmart",
        "vehicleType": "Lyft",
        "paymentMethods": ["Apple Pay"],
        "seatCount": 1,
        "isRoundTrip": false,
        "time": "11:00 AM",
        "date": "April 4, 2023"
    },
    {
        "isDotBlue": true,
        "destination": "Haverford",
        "vehicleType": "Car",
        "paymentMethods": ["Cash"],
        "seatCount": 3,
        "isRoundTrip": false,
        "time": "3:45 PM",
        "date": "April 10, 2023"
    },
    {
        "isDotBlue": false,
        "destination": "Mushroom Kingdom",
        "vehicleType": "Yoshi",
        "paymentMethods": ["Apple Pay", "Venmo", "Zelle"],
        "seatCount": 4,
        "isRoundTrip": false,
        "time": "11:11 PM",
        "date": "April 11, 2023"
    },
]

const displayTypes = ["list", "grid"];


export default function Pools(props: {carpools:Carpool[]}){

    const [displayTypeIndex, setDisplayTypeIndex] = useState(0);

    function toggleDisplayType(){
        setDisplayTypeIndex((displayTypeIndex + 1) % displayTypes.length);
    }

    const data = props.carpools.map(function(p){
        var paymentTypes = [""];
        if (p.acceptsApplePay) {paymentTypes.push("Apple Pay")}
        if (p.acceptsCash) {paymentTypes.push("Cash")}
        if (p.acceptsVenmo) {paymentTypes.push("Venmo")}
        if (p.acceptsZelle) {paymentTypes.push("Zelle")}
        return <CarpoolCard isDotBlue={true} destination={p.destination} vehicleType={p.transportationType.toString()} paymentMethods={paymentTypes} seatCount={p.availableSeats} time={p.meetingTime.toLocaleTimeString('en-US', { timeZone: 'UTC' })} date={p.meetingTime.toDateString()} displayType={displayTypes[displayTypeIndex]} />
    })

    return (
        <>
            <button onClick={toggleDisplayType}>Toggle Display Type</button>
            <div className="mt-[25px]">
                <SCCSBox extraClasses="w-[88vw]" contents={"Search Pools"} />
            </div>
                        
            <div className={`flex flex-wrap items-center ${displayTypeIndex == 0 ? "flex-col" : "flex-row gap-[80px]"} mt-[40px]`}>
            {
                
                data

            }
            </div>
        </>
    )
}