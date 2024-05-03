import SCCSBox from "@/components/SCCSBox";
import CreateForm from "./create-form";



export default function Create_Pools() {

    return (
        <>
        <div className="mt-[64px]">
            <SCCSBox contents={"Create a Carpool"} extraClasses={"text-[50px] w-[88vw]"}></SCCSBox>
        </div>
        <CreateForm />
        </>
    )
}