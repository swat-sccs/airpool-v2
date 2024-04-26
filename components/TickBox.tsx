"use client"
import checkedBoxSVG from "@/svg/checkedbox.svg"
import Image from "next/image"
import { useState } from "react"

export default function TickBox(props: any){

  var [checked, setChecked] = useState(false);

  function onCheck(){
    setChecked(!checked);
  }

  const uncheckedBox = (<span className = "mb-[20px] bg-accent2 hover:bg-accent w-[28px] h-[28px] block rounded-slight drop-shadow-dropdown" />)
  const checkedBox = (<span className="drop-shadow-dropdown"><Image src={checkedBoxSVG} width={28} height={28} alt="Y" /></span>);

  return (
    <>
    <div className = "flex flex-col w-fit items-center">
      <div className = "mt-[30px] mb-[25px] text-[42px]">
        {props.PaymentMethod}
      </div>
      <label>
        <input type="checkbox" className="hidden" onChange={onCheck}></input>
          {
            checked ? checkedBox : uncheckedBox
          }
      </label>
    </div>
    </>
  )
}