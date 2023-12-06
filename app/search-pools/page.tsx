import CarpoolCard from "@/components/CarpoolCard";
import SCCSBox from "@/components/SCCSBox";

// This is completely temporary and just for testing until we get the hecking backend setup
const poolData = [
    {
        "isDotBlue": true,
        "destination": "Wonderland",
        "vehicleType": "White Rabbit",
        "paymentMethods": ["Cash", "Venmo"],
        "seatCount": 3,
        "time": "8:00 AM",
        "date": "November 1, 1865"
    },
    {
        "isDotBlue": false,
        "destination": "SCCS Lab",
        "vehicleType": "UberX",
        "paymentMethods": ["Cash", "Venmo", "Zelle"],
        "seatCount": 69,
        "time": "4:20 PM",
        "date": "April 1, 2024"
    },
    {
        "isDotBlue": true,
        "destination": "Mushroom Kingdom",
        "vehicleType": "Yoshi",
        "paymentMethods": ["Apple Pay"],
        "seatCount": 4,
        "time": "11:11 PM",
        "date": "October 20, 5418"
    },
]

export default function Pools(){
    return (
        <>
            <div className="mt-[25px]">
                <SCCSBox heightWidthClasses="w-[88vw]" contents={"Search Pools"} />
            </div>
            
            <div className="flex flex-col items-center mt-[40px]">
            {
                poolData.map(function(p){
                    return <CarpoolCard isDotBlue={p.isDotBlue} destination={p.destination} vehicleType={p.vehicleType} paymentMethods={p.paymentMethods} seatCount={p.seatCount} time={p.time} date={p.date} />
                })
            }
            </div>
        </>
    )
}