export default function Instructions(props: any){

  return (
    <>
    <div className = "flex flex-col w-fit">
      <div className = "mt-[50px] mb-[25px] text-[64px]">
        {props.Description}
      </div> 
    </div>
    </>
  )
}