import SCCSBox from '@/components/SCCSBox'
import SCCSFooter from '@/components/SCCSFooter'
import PoolCardGrouping from '@/components/PoolCardGrouping'
import SCCSHeader from '@/components/SCCSHeader'
import Link from 'next/link'
import { PrismaClient, TransportationType} from '@prisma/client'

const displayTypes = ["list", "grid"];

export default async function Home() {

  const mainButtonsClass = "w-[317px] md:w-[532px] transition duration-[0.2s] scale-100 hover:scale-[1.01]";

  const joinPoolButton = (
    <Link href="/search-pools">
      <button className={mainButtonsClass}> 
        Join a Pool
      </button>
    </Link>
  );

  const createPoolButton = (
    <Link href="/create-pools-temp">
      <button className={mainButtonsClass}> 
        Create Pool
      </button>
    </Link>
  );

  const prisma = new PrismaClient({});
      //change findMany to find recent only
      const poolsOrdered = await prisma.carpool.findMany({
        orderBy: {
          id: 'desc',
        },
        take: 3,
      })

  const data = [""];
  data.push(poolsOrdered[0].destination)
  data.push(poolsOrdered[1].destination)
  data.push(poolsOrdered[2].destination)

  return (
    <>
      <div className="text-center mt-[44px]">
        <div className="text-[85px] md:text-[125px]">AirPool</div>
        <div className="text-[24px] md:text-[30px] mt-[3px] ml-[208px] md:ml-[342px] mb-[10px]">by SCCS</div>
      </div>

      <div className='mt-[16px]'>
        <SCCSBox extraClasses={mainButtonsClass} contents={[joinPoolButton, createPoolButton]} />
      </div>

      <div className="flex flex-row flex-wrap justify-between mt-[9vh] gap-[30px] md:gap-[40px] lg:gap-[70px] mb-[32px]">
        <PoolCardGrouping header={"Common Pools"} contents={["A", "B", "C"]}/>
        <PoolCardGrouping header={"Recent Pools"} contents={data}/>
      </div>
    </>
  )
}