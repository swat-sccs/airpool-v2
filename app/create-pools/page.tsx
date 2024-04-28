import TickBox from "@/components/TickBox";
import SCCSBox from "@/components/SCCSBox";
import Description from "@/components/Instructions";
import Instructions from "@/components/Instructions";
import CreateFormTextBox from "@/components/CreateFormTextBox";
import AirpoolDropdown from "@/components/AirpoolDropdown";
import SmallTitle from "@/components/SmallTitle";
import SmallText from "@/components/SmallText";
import DateDropdown from "@/components/DateDropdown";
import CreatePoolButton from "@/components/CreatePoolButton";

export default function Create_Pools() {


    return ( 
        <>  
        <div className="mt-[64px]">
            <SCCSBox contents={"Create a Carpool"} extraClasses={"text-[50px] w-[88vw]"}></SCCSBox>
        </div>
        <div className="mt-[55px] w-[71vw] bg-card-bg rounded m-auto drop-shadow flex flex-col items-center">
            <Instructions Description={"Please Fill Out the Form Below"} ></Instructions>
            <SmallTitle Description="Payment Methods" ></SmallTitle>
            <SmallText Description="Select all payment methods that you would accept from fellow passengers"></SmallText>
            <div className="gap-[5vw] flex flex-row">
                <TickBox PaymentMethod={"Cash"}></TickBox>
                <TickBox PaymentMethod={"Venmo"}></TickBox>
                <TickBox PaymentMethod={"Apple Pay"}></TickBox>
                <TickBox PaymentMethod={"Zelle"}></TickBox>
            </div>
            <SmallText Description="Please note AirPool is not responsible for handling any transactions, and that negotiating or ensuring a fair split of payment is to be handled among you and the other passengers."></SmallText>
            <div className= "mt-[55px]">
                <CreateFormTextBox 
                    title={"Meetup Directions"} 
                    smallText={"(Please describe in detail how and where you and the other passengers will meet for the carpool. One should be able to follow these directions to the car without any further assisstance)"}
                    placeholder={"Write your meetup directions here..."} width= "864px" height="297px"></CreateFormTextBox>
            </div>
            <div className= "mt-[30px]">
                <CreateFormTextBox title={"Description/Extra Information"} 
                    smallText={"(Any further information you think it would be useful to provide?)"}
                    placeholder={"Write your description here..."} width= "864px" height="297px"></CreateFormTextBox>
            </div>
            <div className= "text-white text-[42px] mt-[50px] mb-[20px]"> 
                <CreatePoolButton contents='Create Carpool'></CreatePoolButton>
            </div>
        </div>
        </>
    )
}