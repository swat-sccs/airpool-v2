"use client"
import CalendarView from "@/components/CalendarView'";
import CarpoolCard from "@/components/CarpoolCard";
import SCCSBox from "@/components/SCCSBox";
import { useState } from "react";

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

export default function Pools(){

    const [displayTypeIndex, setDisplayTypeIndex] = useState(0);
    const [isSearching, setIsSearching] = useState(false); // enter a search box
    const [searchTerm, setSearchTerm] = useState(""); // store search input

    function toggleDisplayType(){
        setDisplayTypeIndex((displayTypeIndex + 1) % displayTypes.length);
    }

    function searchPools(){
        setIsSearching(true);
    }

    const searchData = poolData.filter((p) => { //can search all fields
        const query = searchTerm.toLowerCase();
        return Object.values(p).some((value) => {
            return value.toString().toLowerCase().includes(query);
        });
    });

    // this sets displaydata to searchdata for search, if not use poolData(all), allows us to only display search items
    const displayData = searchTerm ? searchData : poolData; 

    return (
        <>
            <button onClick={toggleDisplayType}>Toggle Display Type</button>
            <div className="flex justify-center w-full">
                <button className="flex justify-center items-center" onClick={searchPools}> 
                    <SCCSBox extraClasses="w-[88vw]" contents={"Search Pools"}/>
                </button>
            </div> 

            {/* search box to be displayed and typed into */}
            {isSearching && (
                <div className="mt-[20px] flex justify-center">
                    <input
                        type="text"
                        placeholder="Search for carpools..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 border rounded w-fit"
                    />
                </div>
            )}
                        
            <div className={`flex flex-wrap items-center ${displayTypeIndex == 0 ? "flex-col" : "flex-row gap-[80px]"} mt-[40px]`}>
            {
                displayData.length > 0 ? (
                    displayData.map(function(p){
                        return <CarpoolCard 
                                isDotBlue={p.isDotBlue} 
                                destination={p.destination} 
                                vehicleType={p.vehicleType} 
                                paymentMethods={p.paymentMethods} 
                                seatCount={p.seatCount} 
                                time={p.time} 
                                date={p.date} 
                                displayType={displayTypes[displayTypeIndex]} 
                        />
                    })
                ) : (
                    <div className="flex justify-center items-center w-full h-32">
                        <div className="flex flex-wrap items-center p-4 border rounded w-fit bg-gray-100"> {/* displays this if no matches*/}
                        No carpools found.
                        </div>
                    </div>
                )
            }
            </div>
        </>
    )
}