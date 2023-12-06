import SCCSBox from '@/components/SCCSBox'
import SCCSFooter from '@/components/SCCSFooter'
import PoolCardGrouping from '@/components/PoolCardGrouping'
import SCCSHeader from '@/components/SCCSHeader'


export default function Home() {

  return (
    <>
      <div className="text-center mt-[44px]">
        <div className="text-[85px] md:text-[125px]">AirPool</div>
        <div className="text-[24px] md:text-[30px] mt-[3px] ml-[208px] md:ml-[342px] mb-[10px]">by SCCS</div>
      </div>

      <div className='mt-[16px'>
        <SCCSBox heightWidthClasses="w-[317px] md:w-[532px]" contents={["Join a Pool", "Create a Pool"]} />
      </div>

      <div className="flex flex-row flex-wrap justify-between mt-[9vh] gap-[30px] md:gap-[40px] lg:gap-[70px] mb-[32px]">
        <PoolCardGrouping header={"Common Pools"} contents={["A", "B", "C"]}/>
        <PoolCardGrouping header={"Recent Pools"} contents={["X", "Y", "Z"]}/>
      </div>
    </>
  )
}
