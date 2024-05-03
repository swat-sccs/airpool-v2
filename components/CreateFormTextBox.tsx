
/**
 * 
 * Props:
 *   title (string): The title/header/label describing what to put in the textbox
 *   smallText (string): The small text that appears below the textbox giving further context/prompting (parens are automatically included)
 *   titleClass (string of tailwind classes): Tailwind classes to apply to the title
 *   smallTextClass (string of tailwind classes): Tailwind classes to apply to the smallTest
 *   placeholder (string): Text/prompt to display in the textbox when it is empty (i.e. "Type your text here...")
 *   width (int): The width of textbox (default pixels)
 *   height (int): The height of textbook (default pixels)
 *   [TO GIA: Don't worry yet about prpviding values for these fields below]
 *   name (string): Name for the contents of the text field (for use in forms)
 *   id (string): ID for the contents of the text field (for use in forms)
 * 
 */
export default function CreateFormTextBox(props: any){
    return (
        <div className="flex flex-col items-center">
            <div className={props.bigTextClass + " mb-[30px] text-[42px] self-start"}>{props.title}:</div>
            <textarea 
                name={props.name} 
                id={props.id} 
                placeholder={props.placeholder} 
                style={{width: props.width, height: props.height,}}
                className="bg-accent rounded-slight drop-shadow-dropdown outline-none placeholder:italic p-[17px_13px] text-[24px] self-start ml-[60px]"/>
            <div className={props.smallTextClass + " mt-[21px] text-[22px] text-center text-gray-500"}>{props.smallText}</div>
        </div>
    )
}