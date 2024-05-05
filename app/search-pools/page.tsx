import CarpoolCard from "@/components/CarpoolCard";
import Page from "./search-pools-page"
import Pools  from "./search-pools-page";
import { PrismaClient, TransportationType} from '@prisma/client'


export default async function SearchPoolsPage(){
    
    const prisma = new PrismaClient({});
    const pools = await prisma.carpool.findMany();
    return (
        <Page carpools={pools}/> 
    )
}