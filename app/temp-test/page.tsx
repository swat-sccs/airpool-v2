import SCCSBox from '@/components/SCCSBox'
import SCCSFooter from '@/components/SCCSFooter'
import PoolCardGrouping from '@/components/PoolCardGrouping'
import SCCSHeader from '@/components/SCCSHeader'
import Link from 'next/link'
import CalendarView from '@/components/CalendarView\''
import AirpoolDropdown from '@/components/AirpoolDropdown'

export default function Home() {

  const mainButtonsClass = "w-[317px] md:w-[532px] transition duration-[0.2s] scale-100 hover:scale-[1.01]";

  const joinPoolButton = (
    <Link href="/search-pools">
      <button className={mainButtonsClass}>
        Join a Pool
      </button>
    </Link>
  );

  return (
    <>
        <div className='mt-[10px]'>
            <AirpoolDropdown id={"test"} 
            options={[["Swarthmore", "swarthmore"], ["Bryn Mawr", "bryn-mawr"], ["Haverford", "haverford"], ["Custom", "custom"]]}
            widthClass={"w-[260px]"}/>
        </div>
    </>
  )
}
