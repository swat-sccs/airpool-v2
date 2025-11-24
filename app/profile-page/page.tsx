"use client"


import SCCSBox from '@/components/SCCSBox'
import SCCSFooter from '@/components/SCCSFooter'
import SCCSHeader from '@/components/SCCSHeader'
import Link from 'next/link'
import AirpoolDropdown from '@/components/AirpoolDropdown'
import CreateFormTextBox from '@/components/CreateFormTextBox'
import ProfilePicture from '@/components/ProfilePicture'

import CarpoolCard from "@/components/CarpoolCard";
import { useState } from "react";

import { PrismaClient } from '@prisma/client'


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
////////////////////////////////////////////////////////////////////////

export default function Home() {

  const [name, setName] = useState('')  //[stateVariable, setterFunctionForVariable], useState(default value), updates name, React re-renders when name changes
  const [message, setMessage] = useState('') //stores confirmation of new user created

    const handleSubmit = async (event: React.FormEvent) => { //runs when user submits form 
    event.preventDefault() //stops page from refreshing which is default behavior for submitting
    const nameResult = await fetch('/api/create-user', { //fetch() = browser API for HTTP requests, gets from created api route
      method: 'POST', //HTTP request = POST
      headers: { 'Content-Type': 'application/json' }, //JSON data type
      body: JSON.stringify({ name }) //convert name data to JSON string
    })
    const data = await nameResult.json() //waits for server response (read as JSON), response = new user row 
    setMessage(`Created user: ${data.name} (id: ${data.id})`) //change message to show inputted name & id #, react re-renders
    setName('') //reset input field 
  }

////////////////////////////////////////////////////////////////////////
        const [displayTypeIndex, setDisplayTypeIndex] = useState(0);
    
        function toggleDisplayType(){
            setDisplayTypeIndex((displayTypeIndex + 1) % displayTypes.length);
        }



  return (
    <>

    <div className="text-left mt-[22px] ml-[20px]">
      <form onSubmit={handleSubmit}> {/*create form, calls function when form is submitted*/}
        <input 
          value={name}
          onChange={event => setName(event.target.value)}
          placeholder="Enter a name"
        /> {/*shows name user is typing (event.target.value), React updates state based on input --> sets name when changed*/}
        <button type="submit">Create User</button> {/*create button*/}
      </form>
      {message && <p>{message}</p>} {/*render message if it exists*/}
    </div>

{/*//////////////////////////////////////////////////////////////////////*/}
    
    <div className="text-left mt-[22px] ml-[20px]">
        <div className="text-[40px] md:text-[50px] mb-[50px]">Profile</div>
      </div>

    <div className="flex gap-4">



        <div className="flex flex-col gap-2">

                <ProfilePicture />
                <div className="text-[24px] md:text-[30px] mt-[20px] ml-[50px]">Insert name here</div> 
                {/*text = size for all, md:text = size for medium devices, mt = top margin, ml = left margin */}
                <div className="text-[16px] md:text-[20px] mt-[20px] ml-[50px]">Hometown?</div>


                <button className ="btn block px-4 py-2 m-2 bg-blue-500 hover-bg-blue-700 text-white font-semibold rounded mt-[20px] ml-[50px]">
                    Edit Profile</button> {/* btn block puts buttons on its own line, rest from Sign In button formatting */}

                <button className ="btn block px-4 py-2 m-2 bg-blue-500 hover-bg-blue-700 text-white font-semibold rounded mt-[20px] ml-[50px]">
                    Settings</button>


            </div>

        <div className="flex flex-col gap-2">

                <div className="text-center text-[30px] md:text-[35px]">Ride History</div>

                <div className={`flex flex-wrap items-center ${displayTypeIndex == 0 ? "flex-col" : "flex-row gap-[5px]"} mt-[5px]`}>
                {
                    poolData.map(function(p){
                        return (
                        <div className="scale-50 [&>*]:[20px] [&>*]:mb-[20px]">

                            <CarpoolCard isDotBlue={p.isDotBlue} destination={p.destination} vehicleType={p.vehicleType} paymentMethods={p.paymentMethods} seatCount={p.seatCount} time={p.time} date={p.date} displayType={displayTypes[displayTypeIndex]} />
                        </div>

                        )
                    })
                }
                </div>
        </div>
        


    </div>
    </>
  )
}
