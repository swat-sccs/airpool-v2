import styles from "./CarpoolCard.module.css"

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

isDotBlue (bool): True if the dot on the left of the card is blue, false if it's orange
destination (string): The name of the location to which the carpool will arrive
vehicleType (string): The name of the type of vehicle or transportation service to be used
paymentMethods (string[]): A list of strings of which payment methods are accepted
seatCount (int): The number of seats available for the carpool
time (string): A string of the time of day the carpool will occur
date (string): A string of the date the carpool will occur
*/
export default function CarpoolCard (props: any){ 

    // Icon Dot
    // Idk what the different colors means... but it can change color!
    const dotColor = props.isDotBlue ? DOT_BLUE : DOT_ORANGE;
    const dotDiv = (<div className={`w-[13px] h-[13px] md:w-[25px] md:h-[25px] lg:w-[40px] lg:h-[40px] ${dotColor} rounded-[50%]`}></div>);

    // Payment Method Div
    // Figure out what payment methods are accepted, and add them to the payment methods div
    // All highly subject to change as we specify how this is stored in the backend
    const paymentMethods = props.paymentMethods || [];
    const paymentMethodsDiv = (
        <div className="flex flex-row">
            {Object.entries(paymentMethodSymbols).map(function(entry){
                const [method, symbol] = entry;
                if (paymentMethods.includes(method)){
                    return <div className={styles["mini-icon"]}> {symbol} </div>
                }
            })}
        </div>
    );

    // Main Info Div - Destination, Vehicle Type/Service, Payment Methods
    const mainInfoDiv = (
        <div className="text-left">
            <div className={styles["regular-text"] + " col-span-2"}>
                {props.destination}
            </div>
            <div className="flex flex-row items-center">
                <div className={styles["small-text"] + " mr-[8px] md:mr-[12px] lg:mr-[25px]"}>
                    {props.vehicleType}
                </div>
                {paymentMethodsDiv}
            </div>
        </div>
    );

    // Seat Count Div
    const seatCountDiv = (
        <div className={styles["small-text"] + " text-center"}>
            {props.seatCount}
            <br />
            {props.seatCount == 1 ? "seat" : "seats"}
        </div>
    );

    // Time Div
    const timeDiv = (
        <div className="flex flex-col text-center">
            <div className={styles["regular-text"]}>
                {props.time}
            </div>
            <div className={styles["small-text"]}>
                {props.date}
            </div>
        </div>
    );

    // Final Return
    return(
        <div className="grid-container grid grid-cols-12 sm:grid-cols-11 items-center bg-card-bg w-11/12 h-[81px] md:h-[100px] lg:h-[137px] rounded drop-shadow pl-[5vw] pr-[4vw] md:pr-[6vw] lx:pr-[11vw]">
            <div className="col-span-6 sm:col-span-5 flex flex-row items-center">
                <div className="mr-[10px] md:mr-[42px]">
                    {dotDiv}
                </div>
                {mainInfoDiv}
            </div>
            <div className="col-span-2 sm:col-span-3">
                {seatCountDiv}
            </div>
            <div className="col-span-4 sm:col-span-3">
                {timeDiv}
            </div>
        </div>
    );
}