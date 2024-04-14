export default function TickBox(props: any){

  return (
    <>
    <div className = "flex flex-col w-fit">
      <div className = "mt-[30px] mb-[25px] text-[42px]">
        {props.PaymentMethod}
      </div> 
      <input className = "mb-[20px]" type="checkbox"></input>
    </div>
    </>
  )
}