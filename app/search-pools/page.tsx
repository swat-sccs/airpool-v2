"use client"
import AirpoolDropdown from "@/components/AirpoolDropdown";
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
    const [searchTerm, setSearchTerm] = useState(""); // store search input from searchbox
    const [filter, showFilter] = useState(false); // toggle to show filters or not when clicking
    const paymentOptions = Array.from(new Set(poolData.flatMap(obj => obj.paymentMethods)));

    function toggleDisplayType(){
        setDisplayTypeIndex((displayTypeIndex + 1) % displayTypes.length);
    }

    const searchData = poolData.filter((p) => { //can search all fields
        const query = searchTerm.toLowerCase();
        return Object.values(p).some((value) => {
            return value.toString().toLowerCase().includes(query);
        });
    });

    function toggleFilter() {
        showFilter(filter => !filter); //toggle on and off based on previous state
    }

    function resetFilter() {
        //resets data back to whatever in search bar
    }
    // this sets displaydata to searchdata for search, if not use poolData(all), allows us to only display search items
    const displayData = searchTerm ? searchData : poolData; 

    return (
        <>
            <button onClick={toggleDisplayType}>Toggle Display Type</button>
            
            {/* search box and search filter */}
            <div className="mt-[20px] flex justify-center space-x-1 items-center h-10 relative">
                {/* search filter options dropdown */}
                {/* Wrapper for search filter options dropdown */}
                <div className="relative">
                    <button className="flex items-center justify-start relative" onClick={toggleFilter}> 
                        <SCCSBox contents={"Search by:"} padding="p-0" gap="gap-0" extraClasses="p-0 m-0 hover:scale-[1.03]"/> 
                    </button>

                    {/* Search filter options */}
                    {filter && (
                        <div className="absolute top-full mt-1 bg-primary rounded drop-shadow w-[260%] z-10 pt-3">
                            <div className="relative flex items-center justify-center gap-[12px] m-auto rounded h-[30px] 
                                                                                        w-[75%] py-6 hover:scale-[1.03]">
                                <div className="flex items-center gap-2 bg-card-bg p-2 rounded shadow-lg">
                                    <input
                                        type="time"
                                        placeholder="Start Time"
                                        //onChange={(e) => setSearchTerm((prev) => ({ ...prev, startTime: e.target.value }))}
                                        className="border rounded p-1 bg-card-bg"
                                    />
                                    <span>to</span>
                                    <input
                                        type="time"
                                        placeholder="End Time"
                                        //onChange={(e) => setSearchTerm((prev) => ({ ...prev, endTime: e.target.value }))}
                                        className="border rounded p-1 bg-card-bg"
                                    />
                                </div>
                            </div>

                            <div className="relative flex items-center justify-center gap-[12px] m-auto rounded 
                                                                            h-[30px] w-[75%] py-6 hover:scale-[1.03] mt-1">
                                <div className="absolute top-0 flex items-center gap-2 mt-2 
                                                                                bg-card-bg p-2 rounded shadow-lg">
                                    <input
                                        type="date"
                                        placeholder="Start Date"
                                        //onChange={(e) => setSearchTerm((prev) => ({ ...prev, startTime: e.target.value }))}
                                        className="border rounded p-1 bg-card-bg"
                                    />
                                    <span>to</span>
                                    <input
                                        type="date"
                                        placeholder="End Date"
                                        //onChange={(e) => setSearchTerm((prev) => ({ ...prev, endTime: e.target.value }))}
                                        className="border rounded p-1 bg-card-bg"
                                    />
                                </div>
                            </div>

                            <div className="relative flex items-center justify-center gap-[12px] m-auto rounded 
                                                                            h-[30px] w-[75%] py-6 hover:scale-[1.03] mt-2.5">
                                <div className="absolute top-0 mt-2 bg-card-bg p-2 rounded shadow-lg z-10">
                                    <select
                                        className="border rounded p-1 w-full"
                                        onChange={(e) => console.log("Selected payment method:", e.target.value)}
                                    >
                                        <option value="">Select Payment Method</option>
                                        {paymentOptions.map((method, index) => (
                                            <option key={index} value={method} className="text-center">
                                                {method}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-center gap-[12px] bg-card-bg m-auto rounded 
                                                                            h-[10px] w-[75%] py-4 hover:scale-[1.03] mt-5 mb-3">
                                <button onClick={resetFilter} className="absolute inset-0 flex items-center justify-center
                                                                                                             w-full h-full">
                                    Reset All Filters
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                
                {/* searchbox */}
                <input
                    type="text"
                    placeholder="Search for carpools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="py-0.5 px-2 w-[25%] h-10 border rounded"
                />
            </div>
                        
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