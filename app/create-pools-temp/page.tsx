import { useState } from "react";


export default function Page(){

    async function createPool(formData: FormData){
        // Make this button create a pool on the backend!
        // here, I have already set up the extraction of the form data
        // each of the checkbox variables set to undefined if the checkbox is
        // not checked and set to the string "on" if the checkbox is checked
        'use server'
        const inData = Object.fromEntries(formData);
        console.log("test");
        try{
            const data = {
                destination: inData.destination,
                meetingPlace: inData.meetingLocation,
                dateMonth: inData.dateMonth,
                dateDay: inData.dateDay,
                dateYear: inData.dateYear,
                dateHour: inData.dateHour,
                dateMinute: inData.dateMinute,
                dateAMPM: inData.dateAMPM,
                seatsAvailable: inData.seatsAvailable,
                vehicleType: inData.vehicleType,
                takesCash: inData.takesCash,
                takesVenmo: inData.takesVenmo,
                takesApplePay: inData.takesApplePay,
                takesZelle: inData.takesZelle,
                meetupDirections: inData.meetupDirections,
                description: inData.description,
            }
            // Continue Code Here
        }
        catch (error: any){
            console.log("error");
        }
    }

    return(
    <form action={createPool}>
        <div className="flex flex-col">
            Destination: <input type="text" id="destination" name="destination" className="w-[200px]"></input>
            Meeting Place: <input type="text" id="meetingLocation" name="meetingLocation" className="w-[200px]"></input>
            Date Month: <input type="text" id="dateMonth" name="dateMonth" className="w-[200px]"></input>
            Date Day: <input type="text" id="dateDay" name="dateDay" className="w-[200px]"></input>
            Date Year: <input type="text" id="dateYear" name="dateYear" className="w-[200px]"></input>
            Date Hour: <input type="text" id="dateHour" name="dateHour" className="w-[200px]"></input>
            Date Minute: <input type="text" id="dateMinute" name="dateMinute" className="w-[200px]"></input>
            Date AM/PM: <input type="text" id="dateAMPM" name="dateAMPM" className="w-[200px]"></input>
            Seats Available: <input type="text" id="seatsAvailable" name="seatsAvailable" className="w-[200px]"></input>
            vehicleType: <input type="text" id="vehicleType" name="vehicleType" className="w-[200px]"></input>
            Cash: <input type="checkbox" id="takesCash" name="takesCash"></input>
            Venmo: <input type="checkbox" id="takesVenmo" name="takesVenmo"></input>
            Apple Pay: <input type="checkbox" id="takesApplePay" name="takesApplePay"></input>
            Zelle: <input type="checkbox" id="takesZelle" name="takesZelle"></input>
            Meetup Directions: <input type="text" id="meetupDirections" name="meetupDirections" className="w-[200px]"></input>
            Description: <input type="text" id="description" name="description" className="w-[200px]"></input>
            <button type="submit" className="bg-alt-blue w-[200px] text-accent">
                Submit
            </button>
        </div>
    </form>
    )
    
}