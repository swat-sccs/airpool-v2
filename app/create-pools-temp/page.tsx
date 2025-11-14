import { PrismaClient, TransportationType} from '@prisma/client'


export default function Page(){

    async function createPool(formData: FormData){
        // Make this button create a pool on the backend!
        // here, I have already set up the extraction of the form data
        // each of the checkbox variables set to undefined if the checkbox is
        // not checked and set to the string "on" if the checkbox is checked
        'use server';
        const inData = Object.fromEntries(formData);
        const prisma = new PrismaClient({});

        console.log("test"); //logs in docker logs
        try{
            const data = {
                destination: inData.destination,
                meetingPlace: inData.meetingLocation,
                date: inData.date, //2025-02-14T17:04
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

            const carpool = await prisma.carpool.create({
                data: {
                    name: 'Name',
                    destination: data.destination.toString(),
                    meetingPlace: data.meetingPlace.toString(),
                    meetingTime: new Date(data.date.toString()),
                    //meetingTime: new Date(parseInt(data.dateYear.toString()), month, parseInt(data.dateDay.toString()), hour, parseInt(data.dateMinute.toString()), 0),
                    availableSeats: parseInt(data.seatsAvailable.toString()),
                    transportationType: TransportationType[data.vehicleType as keyof typeof TransportationType],
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
            vehicleType: <select id="vehicleType" name="vehicleType" className="w-[200px]">
                <option>PERSONAL_CAR</option>
                <option>UBER</option>
                <option>LYFT</option>
                <option>TAXI</option>
            </select>
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