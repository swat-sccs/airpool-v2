"use client"
import AirpoolDropdown from "@/components/AirpoolDropdown";
import CalendarView from "@/components/CalendarView'";
import CarpoolCard from "@/components/CarpoolCard";
import CarpoolCardPopup from "@/components/CarpoolCardPopup";
import SCCSBox from "@/components/SCCSBox";
import SearchFilter from "@/components/SearchFilter";
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
    const [displayData, setDisplayData] = useState(poolData);
    
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedPool, setSelectedPool] = useState<typeof poolData[0] | null>(null);

    const handleCardClick = (pool: typeof poolData[0]) => {
        setSelectedPool(pool);
        setIsPopupOpen(true);
    }

    function toggleDisplayType(){
        setDisplayTypeIndex((displayTypeIndex + 1) % displayTypes.length);
    }

    return (
        <>
            <button onClick={toggleDisplayType}>Toggle Display Type</button>
            
            {/* search box and search filter */}
            <SearchFilter 
                poolData={poolData} 
                onFilterChange={(filteredData) => setDisplayData(filteredData)} 
            />
                        
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
                                onClick={() => handleCardClick(p)}
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
            <CarpoolCardPopup 
                isOpen={isPopupOpen} 
                onClose={() => setIsPopupOpen(false)}
                pool={selectedPool}
            >
            </CarpoolCardPopup>
        </>
    )
}