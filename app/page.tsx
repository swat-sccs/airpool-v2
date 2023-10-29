import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import SCCSBox from '@/components/SCCSBox'
import SCCSFooter from '@/components/SCCSFooter'
import CarpoolCard from '@/components/CarpoolCard'
import PoolCardGrouping from '@/components/PoolCardGrouping'
import SCCSHeader from '@/components/SCCSHeader'


export default function Home() {
  return (
    <main className={styles.main}>
      <SCCSHeader />

      <SCCSBox />

      <PoolCardGrouping header="Common Pools" contents={["Content 1", "Content 2"]} />

      <CarpoolCard destination={"Philly Airport"} vehicleType={"UberX"} seatCount={2} time={"11:00 AM"} date={"April 1, 2023"} paymentMethods={["Cash", "Venmo", "Zelle", "Apple Pay"]} isDotBlue={false}/>

      <SCCSFooter />
    </main>
  )
}
