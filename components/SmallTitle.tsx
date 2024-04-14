export default function SmallTitle(props: any){

    return (
      <>
      <div className = "flex flex-col w-fit items-center">
        <div className = "text-[42px]">
          {props.Description}
        </div> 
      </div>
      </>
    )
  }