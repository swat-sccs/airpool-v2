"use client"
import TickBox from "@/components/TickBox";
import SCCSBox from "@/components/SCCSBox";
import Description from "@/components/Instructions";
import Instructions from "@/components/Instructions";
import CreateFormTextBox from "@/components/CreateFormTextBox";
import AirpoolDropdown from "@/components/AirpoolDropdown";
import SmallTitle from "@/components/SmallTitle";
import SmallText from "@/components/SmallText";
import CreatePoolButton from "@/components/CreatePoolButton";
import { useState } from "react";

const monthOptions = [
    ["january", "January"],
    ["february", "February"],
    ["march", "March"],
    ["april", "April"],
    ["may", "May"],
    ["june", "June"],
    ["july", "August"],
    ["august", "August"],
    ["september", "September"],
    ["october", "October"],
    ["november", "November"],
    ["december", "December"],
]

export default function CreateForm(){

    var [lastDayInMonth, setLastDayInMonth] = useState(0);


    function onMonthChange(event: React.FormEvent<HTMLInputElement>){
        const newMonth = event.currentTarget.value;
        if (newMonth == "January"){
            setLastDayInMonth(31);
        }
        if (newMonth == "February"){
            setLastDayInMonth(28);
        }
    }

    const daysOptions: number[][] = [];
    for (let i = 1; i <= lastDayInMonth; i++){
        daysOptions.push([i, i]);
    }
    
    return(
        <div className="mt-[95px] w-[71vw] bg-card-bg rounded m-auto drop-shadow flex flex-col items-center">
        <Instructions Description={"Please Fill Out the Form Below"} ></Instructions>
        <div className="mt-[75px] flex flex-row items-center self-start">
            <div className="w-[384px]">
                <SmallTitle Description="Destination:"></SmallTitle> 
            </div>
            <div >
                <AirpoolDropdown options={["Swarthmore", "Philadelphia Airport", "Custom"]} width="552px"> </AirpoolDropdown>
            </div>
        </div>
        <div>Test</div>
        <div className="mt-[75px] flex flex-row items-center self-start">
            <div className="w-[384px]">
                <SmallTitle Description="Meeting Place:"></SmallTitle> 
            </div>
            <div>
                <AirpoolDropdown options={["Parrish Hall", "Whittier Circle", "Custom"]} width="552px"> </AirpoolDropdown>
            </div>
        </div>
        <div className="mt-[75px] flex flex-row items-center">
            <SmallTitle Description="Date:"></SmallTitle> 
            <AirpoolDropdown options={monthOptions} width="200px" onChange={onMonthChange}> </AirpoolDropdown>
            <AirpoolDropdown options={daysOptions} width="100px"> </AirpoolDropdown>
            <AirpoolDropdown options={["2024", "2023", "2022"]} width="100px"> </AirpoolDropdown>
        </div>
        <div className="mt-[20px] flex flex-row items-center ">
            <SmallTitle Description="Time:"></SmallTitle> 
            <div className="flex flex-row gap-[100px]">
                <AirpoolDropdown options={["1", "2", "3", "4", "5", "12"]} width="100px"> </AirpoolDropdown>
                <AirpoolDropdown options={["1", "2", "3", "4", "5", "60"]} width="100px"> </AirpoolDropdown>
                <AirpoolDropdown options={[["am", "AM"], ["pm", "PM"]]} width="100px"> </AirpoolDropdown>
            </div>
        </div>
        <div className="mt-[20px] flex flex-row items-center">
            <SmallTitle Description="Seats Available:"></SmallTitle> 
            <AirpoolDropdown options={["1", "2", "3", "4", "5", "6"]} width="100px"> </AirpoolDropdown>
            <SmallText Description= "(How many passengers other than yourself can you accommodate?)"></SmallText>
        </div>
        <div className="mt-[20-px] mb-[75px] flex flex-row items-center">
            <SmallTitle Description="Vehicle Type:"></SmallTitle> 
            <AirpoolDropdown options={[["personal-car", "Personal Car"], ["uber", "Uber"], ["lyft", "Lyft"]]} width="200px"> </AirpoolDropdown>
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
        <div className= "mt-[55px] self-start ml-[27px] mr-[27px]">
            <CreateFormTextBox 
                title={"Meetup Directions"} 
                smallText={"(Please describe in detail how and where you and the other passengers will meet for the carpool. One should be able to follow these directions to the car without any further assisstance)"}
                placeholder={"Write your meetup directions here..."} width= "864px" height="297px"></CreateFormTextBox>
        </div>
        <div className= "mt-[30px] self-start ml-[27px] mr-[27px]">
            <CreateFormTextBox title={"Description/Extra Information"} 
                smallText={"(Any further information you think it would be useful to provide?)"}
                placeholder={"Write your description here..."} width= "864px" height="297px"></CreateFormTextBox>
        </div>
        <div className= "text-white text-[42px] mt-[50px] mb-[20px]"> 
            <CreatePoolButton contents='Create Carpool'></CreatePoolButton>
        </div>
    </div>
    );
}