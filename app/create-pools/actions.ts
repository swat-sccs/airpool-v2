'use server'
import { PrismaClient} from '@prisma/client'
import { redirect } from 'next/navigation'

export async function createPoolAction(formData: FormData) {
    
    const prisma = new PrismaClient({});
    
    const dateValue = formData.get('date');
        if (!dateValue) {
        // Handle the error: return a response or throw
        throw new Error("Date is required");
        }
        const meetingTime = new Date(dateValue.toString());

    try{
        await prisma.carpool.create({    
        data: {
            name: String(formData.get('name')),
            destination: String(formData.get('destination')),
            meetingTime: meetingTime,
            transportationType: String(formData.get('transportType')),
            availableSeats: Number(formData.get('seats')),
            meetingPlace: String(formData.get('meetingPlace')),
            paymentType: String(formData.get('payment')),
            meetingInstructions: String(formData.get('directions'))
        }
        })
    } catch (error) {
        console.error("error creating carpool:", error);        
    }

    redirect('/')
}
     