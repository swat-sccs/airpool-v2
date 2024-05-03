export default function SmallTitle(props: any){

    return (
      <>
      <div className = "flex flex-col items-end">
        <div className = "text-[42px] mr-[16px]">
          {props.Description}
        </div> 
      </div>
      </>
    )
  }