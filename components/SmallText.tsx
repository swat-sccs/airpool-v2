export default function SmallText(props: any){

    return (
      <>
      <div className = "mt-[10px] w-[60vw] flex flex-col w-fit items-center">
        <div className = "text-[18px]">
          <center>{props.Description}</center>
        </div> 
      </div>
      </>
    )
  }