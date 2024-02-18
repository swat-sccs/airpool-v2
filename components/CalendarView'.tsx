
const monthName = "October"
const year = "1999";
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const calendarWidthClass = "w-[93vw]";
const calendarHeightClass = "h-[654px] xxl:h-[1064px]";

export default function CalendarView(){
    return (
        <div className={calendarWidthClass + " " + calendarHeightClass + " bg-card-bg rounded m-auto drop-shadow"}>
            <div className="text-center text-[95px] pt-[16px]">{monthName + " " + year}</div>
            <div className="grid-container grid items-center justify-items-center grid-cols-7 pt-[36px] pl-[10px] pr-[10px]">
            {
                daysOfWeek.map(function(day){
                    return <div className="text-center text-[18px] xxl:text-[28px] mb-[4px]">{day}</div>
                })
            }
            {
                Array.from(Array(42).keys()).map(function(i){
                    return <>
                        <div className="w-[13vw] md:w-[12.4vw] h-[84px] xxl:h-[142px] rounded bg-accent mb-[8px]">
                            <div className="text-[24px] pt-[5px] pl-[7px]">{i}</div>
                        </div>
                    </>
                })
            }
            </div>
        </div>
    );
}