import SCCSBox from "./SCCSBox";

// TODO: Make each SCCSBox the same width and height, even when the contents provided have different dimensions

/*
header (string) - text to appear above SCCSBoxes
contents (string[] or ReactComponent[]) - a list of contents to add to each SCCSBox
*/
export default function PoolCardGrouping(props: any){

    const contents = props.contents || [];

    return (
        <div className="text-center gap-4 mx-auto my-[1rem]">
            <span className="text-[35px] md:text-[42px] lg:text-[60px]">
                {props.header}
            </span>
            <div className="flex flex-row gap-[1.5vw] content-center mt-[20px]">
                {
                    contents.map(function(content: any){
                        return <SCCSBox extraClasses="w-[93px] md:w-[140px] lg:w-[149px] h-[60px] md:h-[84px] lg:h-[97px]" contents={content}/>;
                    })
                }
            </div>
        </div>
    )
}