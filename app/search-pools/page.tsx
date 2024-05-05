import CarpoolCard from "@/components/CarpoolCard";
import Page from "./search-pools-page"
import Pools  from "./search-pools-page";
import { PrismaClient, TransportationType} from '@prisma/client'


export default async function SearchPoolsPage(){
    
    const displayType  = "list"; // TODO: make this dynamic
    const prisma = new PrismaClient({});
    const pools = await prisma.carpool.findMany();
    const data = pools.map(function(p){
        var paymentTypes = [""];
        if (p.acceptsApplePay) {paymentTypes.push("Apple Pay")}
        if (p.acceptsCash) {paymentTypes.push("Cash")}
        if (p.acceptsVenmo) {paymentTypes.push("Venmo")}
        if (p.acceptsZelle) {paymentTypes.push("Zelle")}
        return <CarpoolCard isDotBlue={true} destination={p.destination} vehicleType={p.transportationType.toString()} paymentMethods={paymentTypes} seatCount={p.availableSeats} time={p.meetingTime.toLocaleString()} date={p.meetingTime.toLocaleString()} displayType={displayType} />
    })
    return (
        <Page content={data}/> 
    )
}