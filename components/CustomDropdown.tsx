export default function CustomDropdown(props: any){

    return (
      <>
      <div className = "flex flex-col w-fit">
        <div className = "text-[42px]">
          {props.Description}
        </div> 
      </div>
      </>
    )
  }