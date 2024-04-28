export default function SmallText(props: any){

    return (
      <>
      <div className = "ml-[15px] mr-[15px] mt-[10px] w-[60vw] flex flex-col w-fit items-center">
        <div className = "text-[22px] text-gray-500">
          <center>{props.Description}</center>
        </div> 
      </div>
      </>
    )
  }