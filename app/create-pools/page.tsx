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
import SingleDropdown from "@/components/SingleDropdown";

export default function Create_Pools() {


    return ( 
        <>  
        <div className="mt-[64px]">
            <SCCSBox contents={"Create a Carpool"} extraClasses={"text-[50px] w-[88vw]"}></SCCSBox>
        </div>
        <div className="mt-[95px] w-[71vw] bg-card-bg rounded m-auto drop-shadow flex flex-col items-center">
            <Instructions Description={"Please Fill Out the Form Below"} ></Instructions>
            <div className="mt-[75px] flex flex-row items-center">
                <SmallTitle Description="Destination:"></SmallTitle> 
                <AirpoolDropdown options={["Philadelphia Airport", "Haverford", "Custom"]} width="552px"> </AirpoolDropdown>
            </div>
            <div className="mt-[75px] flex flex-row items-center">
                <SmallTitle Description="Meeting Place:"></SmallTitle> 
                <AirpoolDropdown options={["Parrish Hall", "Whittier Circle", "Custom"]} width="552px"> </AirpoolDropdown>
            </div>
            <div className="mt-[75px] flex flex-row items-center">
                <SmallTitle Description="Date:"></SmallTitle> 
                <AirpoolDropdown options={["January", "February", "March", "April", "May", "June"]} width="200px"> </AirpoolDropdown>
                <AirpoolDropdown options={["1", "2", "3", "4", "5", "31"]} width="100px"> </AirpoolDropdown>
                <AirpoolDropdown options={["2024", "2023", "2022"]} width="100px"> </AirpoolDropdown>
            </div>
            <div className="mt-[20px] flex flex-row items-center">
                <SmallTitle Description="Time:"></SmallTitle> 
                <AirpoolDropdown options={["1", "2", "3", "4", "5", "12"]} width="100px"> </AirpoolDropdown>
                <AirpoolDropdown options={["1", "2", "3", "4", "5", "60"]} width="100px"> </AirpoolDropdown>
                <AirpoolDropdown options={["AM", "PM"]} width="100px"> </AirpoolDropdown>
            </div>
            <div className="mt-[20px] flex flex-row items-center">
                <SmallTitle Description="Seats Available:"></SmallTitle> 
                <AirpoolDropdown options={["1", "2", "3", "4", "5", "6"]} width="100px"> </AirpoolDropdown>
                <SmallText Description= "(How many passengers other than yourself can you accommodate?)"></SmallText>
            </div>
            <div className="mt-[20-px] mb-[75px] flex flex-row items-center">
                <SmallTitle Description="Vehicle Type:"></SmallTitle> 
                <AirpoolDropdown options={["Uber", "Lyft"]} width="200px"> </AirpoolDropdown>
            </div>
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