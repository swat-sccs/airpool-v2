"use client"
import CalendarView from "@/components/CalendarView'";
import CarpoolCard from "@/components/CarpoolCard";
import SCCSBox from "@/components/SCCSBox";
import { useState } from "react";
export const dynamic = 'force-dynamic' // defaults to auto
import { Carpool, PrismaClient, TransportationType} from '@prisma/client'


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