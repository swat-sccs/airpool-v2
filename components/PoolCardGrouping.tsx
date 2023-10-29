import SCCSBox from "./SCCSBox";

// TODO: Make each SCCSBox the same width and height, even when the contents provided have different dimensions

/*
header (string) - text to appear above SCCSBoxes
contents (string[] or ReactComponent[]) - a list of contents to add to each SCCSBox
*/
export default function PoolCardGrouping(props: any){

    const contents = props.contents || [];

    return (
        <div className="text-center gap-4">
            <span className="text-[35px] md:text-[42px] lg:text-[60px]">
                {props.header}
            </span>
            <div className="flex flex-row gap-[1.5vw] content-center">
                {
                    contents.map(function(content: any){
                        return <SCCSBox content={content}/>;
                    })
                }
            </div>
        </div>
    )
}