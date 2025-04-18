import { useState } from "react";
import { PrismaClient, TransportationType} from '@prisma/client'
import { redirect } from "next/dist/server/api-utils";

export default function Page(){

    async function createPool(formData: FormData){
        // Make this button create a pool on the backend!
        // here, I have already set up the extraction of the form data
        // each of the checkbox variables set to undefined if the checkbox is
        // not checked and set to the string "on" if the checkbox is checked
        'use server'
        const inData = Object.fromEntries(formData);
        const prisma = new PrismaClient({});
        /*
            Date Month: <input type="text" id="dateMonth" name="dateMonth" className="w-[200px]"></input>
            Date Day: <input type="text" id="dateDay" name="dateDay" className="w-[200px]"></input>
            Date Year: <input type="text" id="dateYear" name="dateYear" className="w-[200px]"></input>
            Date Hour: <input type="text" id="dateHour" name="dateHour" className="w-[200px]"></input>
            Date Minute: <input type="text" id="dateMinute" name="dateMinute" className="w-[200px]"></input>
            Date AM/PM: <input type="text" id="dateAMPM" name="dateAMPM" className="w-[200px]"></input>
        */
        console.log("test"); //logs in docker logs
        try{
            const data = {
                destination: inData.destination,
                meetingPlace: inData.meetingLocation,
                date: inData.date, //2025-02-14T17:04
                // dateMonth: inData.dateMonth,
                // dateDay: inData.dateDay,
                // dateYear: inData.dateYear,
                // dateHour: inData.dateHour,
                // dateMinute: inData.dateMinute,
                // dateAMPM: inData.dateAMPM,
                seatsAvailable: inData.seatsAvailable,
                vehicleType: inData.vehicleType,
                takesCash: inData.takesCash,
                takesVenmo: inData.takesVenmo,
                takesApplePay: inData.takesApplePay,
                takesZelle: inData.takesZelle,
                meetupDirections: inData.meetupDirections,
                description: inData.description,
            }
            console.log(data.date)
            // create carpool
            // var hour = parseInt(data.dateHour.toString()); // Date hours start at 0
            // var month = parseInt(data.dateMonth.toString()) - 1; // Date months start at 0
            // var amPm = data.dateAMPM.toString().toLowerCase();
            // if (amPm == "pm" && hour < 12){
            //     hour += 12;
            // }
            // if (amPm == "am" && hour == 12){ // midnight
            //     hour = 0;
            // }
            var car = data.vehicleType.toString();
            if (car.toLowerCase() == "car"){
                car = "PERSONAL_CAR";
            }

            const carpool = await prisma.carpool.create({
                data: {
                    name: 'Name',
                    destination: data.destination.toString(),
                    meetingPlace: data.meetingPlace.toString(),
                    meetingTime: new Date(data.date.toString()),
                    //meetingTime: new Date(parseInt(data.dateYear.toString()), month, parseInt(data.dateDay.toString()), hour, parseInt(data.dateMinute.toString()), 0),
                    availableSeats: parseInt(data.seatsAvailable.toString()),
                    transportationType: TransportationType[car.toUpperCase() as keyof typeof TransportationType],
                    acceptsVenmo: Boolean(data.takesVenmo),
                    acceptsApplePay: Boolean(data.takesApplePay),
                    acceptsZelle: Boolean(data.takesZelle),
                    acceptsCash: Boolean(data.takesCash),
                    meetingInstructions: data.meetupDirections.toString(),
                    message: data.description.toString(),
                    students: {
                        create: [{name: 'Name', studentId: 123456789}] // TODO: replace 'Name' and 'StudentID' with actual values
                    }

                }
            })

            console.log("got this far!");
        }
        catch (error: any){
            console.log("error");
            console.log(error);
        }
    }

    return(
    <form action={createPool}>
        <div className="flex flex-col">
            Destination: <input type="text" id="destination" name="destination" className="w-[200px]"></input>
            Meeting Place: <input type="text" id="meetingLocation" name="meetingLocation" className="w-[200px]"></input>
            Date: <input type="datetime-local" id = "date" name = "date" className="w-[200px]"></input>
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