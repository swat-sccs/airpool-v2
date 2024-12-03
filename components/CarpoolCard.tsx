import styles from "./CarpoolCard.module.css"
import SCCSBox from "./SCCSBox";

// TODO: Make it look good on mobile (breakpoints!)
// Just realized all the elements inside this component have a common baseline in the Figma. We could implement that if we want.

const paymentMethodSymbols = {
    "Cash": "$",
    "Venmo": "V",
    "Zelle": "Z",
    "Apple Pay": "A",
}

const DOT_BLUE = "bg-[#31425F]"
const DOT_ORANGE = "bg-[#F46523]"

/* 
How props will work is subject to change as we flesh out how data is stored in the backend.
All of this is placeholder 

displayType (string: "list" or "grid"): Controls how card is displayed in UI.
isDotBlue (bool): True if the dot on the left of the card is blue, false if it's orange
destination (string): The name of the location to which the carpool will arrive
vehicleType (string): The name of the type of vehicle or transportation service to be used
paymentMethods (string[]): A list of strings of which payment methods are accepted
seatCount (int): The number of seats available for the carpool
isRoundTrip (bool): True if the carpool is round trip and false if it's one-way
time (string): A string of the time of day the carpool will occur
date (string): A string of the date the carpool will occur
*/
export default function CarpoolCard (props: any){ 
    /* Breaks up the card into smaller components, and then assemble them into the full 
    card based on the display type */

    // Icon Dot
    const dotColor = props.isDotBlue ? DOT_BLUE : DOT_ORANGE;
    const dotClassHoriztonal = `w-[13px] h-[13px] md:w-[25px] md:h-[25px] lg:w-[40px] lg:h-[40px]`;
    const dotClassBox = 'w-[10px] h-[10px] lg:w-[20px] lg:h-[20px]'
    const dotDiv = (<div className={`rounded-[50%] ${dotColor} ${props.displayType == "list" ? dotClassHoriztonal: dotClassBox}`}></div>);

    // Payment Method Div
    const paymentMethods = props.paymentMethods || [];
    const paymentMethodsDiv = (
        <div className={`flex flex-row ${props.displayType == "grid" ? "justify-center" : ""}`}>
            {Object.entries(paymentMethodSymbols).map(function(entry){
                const [method, symbol] = entry;
                if (paymentMethods.includes(method)){
                    return <div className={styles["mini-icon"]}> {symbol} </div>
                }
            })}
        </div>
    );

    // Seat Count Div
    const seatCountDiv = (
        <div className={styles["small-text"] + " text-center"}>
            {props.seatCount}
            {props.displayType == "list" ? <br /> : " "}
            {props.seatCount == 1 ? "seat" : "seats"}
        </div>
    );

    // Destination Div
    const desinationDiv = (
        <div className={styles["regular-text"] + " text-left"}>
            {props.destination}
        </div>
    );

    // Vehicle Type Div
    const vehicleTypeDiv = (
        <div className={styles["small-text"]}>
            {props.vehicleType}
        </div>
    );

    // Date-Time Div
    const dateTimeDiv = (
        <div className={`flex flex-col ${props.displayType == "list" ? "text-center": "text-left"}`}>
            <div className={styles["regular-text"]}>
                {props.time}
            </div>
            <div className={styles["small-text"]}>
                {props.date}
            </div>
        </div>
    );

    // Roundtrip/One Way Div
    const isRoundTripDiv = (
        <div className={styles["small-text"]}>
            {props.isRoundTrip ? "round trip" : "one way"}
        </div>
    );

    // Make Carpool Card + Final Return
    let carpoolCard;
    if (props.displayType == "list") {
        // Main Info Div - Destination, Vehicle Type/Service, Payment Methods OR Seat Count
        const mainInfoDiv = (
            <div className="text-left">
                {desinationDiv}
                <div className="flex flex-row items-center">
                    <div className="mr-[8px] md:mr-[12px] lg:mr-[25px]"> {vehicleTypeDiv} </div>
                    {paymentMethodsDiv}
                </div>
            </div>
        );

        const layoutClass = "grid-container grid items-center grid-cols-12 sm:grid-cols-11 md:h-[100px] lg:h-[137px]";

        carpoolCard = (
            <div className={layoutClass + " bg-card-bg w-11/12 h-[81px] rounded drop-shadow pl-[5vw] pr-[4vw] md:pr-[6vw] lx:pr-[11vw] transition duration-[0.2s] scale-100 hover:scale-[1.01]"}>
                <div className="col-span-6 sm:col-span-5 flex flex-row items-center">
                    <div className="mr-[10px] md:mr-[42px]"> {dotDiv} </div>
                    {mainInfoDiv}
                </div>
                <div className="col-span-2 sm:col-span-3">
                    {seatCountDiv}
                </div>
                <div className="col-span-4 sm:col-span-3">
                    {dateTimeDiv}
                </div>
            </div>
        );
    }
    else if (props.displayType == "grid"){
        // This needs to be wrapped in div or else everything breaks
        const desinationDivWithDot = (
            <div className="flex flex-row items-center">
                <div className="mr-[4px] md:mr-[8px]">
                    {dotDiv}
                </div>
                {desinationDiv}
            </div>
        );

        const carpoolCardContents = (
            <div className="md:w-[234px] lg:w-[340px]">
                <div className="flex flex-col items-baseline gap-[5px] md:gap-[15px] lg:gap-[27px]">
                    {desinationDivWithDot}
                    <div className="flex flex-row gap-[20px] md:gap-[60px] xl:gap-[100px] text-left">
                        {vehicleTypeDiv} {seatCountDiv}
                    </div>
                    {isRoundTripDiv}
                </div>
                <div className="mt-[15px] md:mt-[30px] lg:mt-[40px]">
                    {paymentMethodsDiv}
                </div>
            </div>
        );
        carpoolCard = <SCCSBox contents={carpoolCardContents} extraClasses="w-[150px] h-[180px] md:w-[256px] md:h-[264px] lg:w-[357px] lg:h-[365px] transition duration-[0.2s] scale-100 hover:scale-[1.01]" />
    }
    else {
        carpoolCard = <SCCSBox contents={"Error"} />
    }

    return(
        <div onClick={props.onClick}>
            {carpoolCard}
        </div>
    );
}