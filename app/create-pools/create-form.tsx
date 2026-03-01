"use client";
import { createPoolAction } from "./actions";

export default function CreateForm() {
  return (
    <div className="flex flex-col gap-8 ml-[5%] mt-[5%] w-full">
      <div className="grid grid-cols-5">
        <div className="col-start-2 col-span-4 text-5xl">Create an Airpool</div>
      </div>

      <form
        action={createPoolAction}
        className="grid grid-cols-5 gap-4 items-center"
      >
        <label htmlFor="name" className="text-3xl text-right">
          Pool Name:
        </label>
        <input
          name="name"
          id="name"
          className={
            "text-2xl col-span-4 p-2 border border-black rounded-slight bg-gray-500/30 focus:outline-none w-[40%]"
          }
        ></input>

        <label htmlFor="destination" className="text-3xl text-right">
          Destination:
        </label>
        <input
          name="destination"
          id="destination"
          className={
            "text-2xl col-span-4 p-2 border border-black rounded-slight bg-gray-500/30 focus:outline-none w-[40%]"
          }
        ></input>

        <label htmlFor="date" className="text-3xl text-right">
          Date:
        </label>
        <input
          type="datetime-local"
          id="date"
          name="date"
          className={
            "text-2xl col-span-4 p-2 border border-black rounded-slight bg-gray-500/30 focus:outline-none w-[40%]"
          }
        ></input>

        <label htmlFor="transportType" className="text-3xl text-right">
          Transport Type:
        </label>
        <select
          name="transportType"
          id="transportType"
          className={
            "text-2xl col-span-4 p-2 border border-solid border-black rounded-slight bg-gray-500/30 w-[20%]"
          }
        >
          <option>Uber</option>
          <option>Lyft</option>
          <option>Personal Car</option>
          <option>Taxi</option>
        </select>

        <label htmlFor="seats" className="text-3xl text-right">
          Available Seats:
        </label>
        <input
          name="seats"
          id="seats"
          type="number"
          min="1"
          max="8"
          className={
            "text-2xl col-span-4 p-2 border border-black rounded-slight bg-gray-500/30 focus:outline-none w-[5%]"
          }
        ></input>

        <label htmlFor="meetingPlace" className="text-3xl text-right">
          Meeting Location:
        </label>
        <input
          name="meetingPlace"
          id="meetingPlace"
          placeholder="e.g. Parrish Circle"
          className={
            "text-2xl col-span-4 placeholder:text-white p-2 border border-black rounded-slight bg-gray-500/30 focus:outline-none w-[30%]"
          }
        ></input>

        <label htmlFor="payment" className="text-3xl text-right">
          Payment:
        </label>
        <select
          name="payment"
          id="payment"
          className={
            "text-2xl col-span-4 p-2 border border-solid border-black rounded-slight bg-gray-500/30 w-[20%]"
          }
        >
          <option>Cash</option>
          <option>Venmo</option>
          <option>Apple Pay</option>
          <option>Zelle</option>
        </select>

        <label htmlFor="directions" className="text-3xl text-right">
          Meeting Directions:
        </label>
        <textarea
          name="directions"
          id="directions"
          className={
            "text-2xl col-span-4 p-2 border border-solid border-black rounded-slight bg-gray-500/30 w-[40%] placeholder:text-white"
          }
          placeholder="e.g. time of day"
        ></textarea>

        <button
          type="submit"
          className="col-start-2 col-span-1 p-4 text-2xl rounded-slight border border-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
