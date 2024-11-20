import React, { useState } from 'react';
import SCCSBox from "@/components/SCCSBox";

// Define the pool data type
interface PoolData {
    isDotBlue: boolean;
    destination: string;
    vehicleType: string;
    paymentMethods: string[];
    seatCount: number;
    isRoundTrip: boolean;
    time: string;
    date: string;
}

interface SearchFilterProps {
    poolData: PoolData[];
    onFilterChange: (filteredData: PoolData[]) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ poolData, onFilterChange }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, showFilter] = useState(false);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
    const [selectedRideshareOption, setSelectedRideshareOption] = useState("");

    const paymentOptions = Array.from(new Set(poolData.flatMap(obj => obj.paymentMethods)));
    const rideshareOptions = Array.from(new Set(poolData.flatMap(obj => obj.vehicleType)));

    function toggleFilter() {
        showFilter(filter => !filter);
    }

    function resetFilter() {
        setSearchTerm("");
        setStartTime("");
        setEndTime("");
        setStartDate("");
        setEndDate("");
        setSelectedPaymentMethod("");
        setSelectedRideshareOption("");
    }

    const parseTime = (time: string): number => {
        const [hours, minutes] = time.match(/\d+/g)?.map(Number) || [0, 0];
        const isPM = time.toLowerCase().includes("pm");
        const convertedHours = isPM && hours !== 12 ? hours + 12 : hours === 12 && !isPM ? 0 : hours;
        return convertedHours * 60 + minutes;
    };

    React.useEffect(() => {
        const searchData = poolData.filter((p) => {
            const query = searchTerm.toLowerCase();
            const matchesSearchTerm = Object.values(p).some((value) =>
                value.toString().toLowerCase().includes(query)
            );

            const poolTime = parseTime(p.time);
            const startMinutes = startTime ? parseTime(startTime) : null;
            const endMinutes = endTime ? parseTime(endTime) : null;

            const matchesTime = (() => {
                if (startMinutes !== null && endMinutes !== null) {
                    return poolTime >= startMinutes && poolTime <= endMinutes;
                } else if (startMinutes !== null) {
                    return poolTime >= startMinutes;
                } else if (endMinutes !== null) {
                    return poolTime <= endMinutes;
                }
                return true;
            })();

            const poolDate = new Date(p.date).getTime();
            const startD = startDate ? new Date(startDate).getTime() : null;
            const endD = endDate ? new Date(endDate).getTime() : null;
            const matchesDate = startD && endD ? poolDate >= startD && poolDate <= endD : true;

            const matchesPayment =
                selectedPaymentMethod === "" || p.paymentMethods.includes(selectedPaymentMethod);
            
            const matchesRideshare =
                selectedRideshareOption === "" || 
                p.vehicleType.toLowerCase() === selectedRideshareOption.toLowerCase();
    
            return matchesSearchTerm && matchesTime && matchesDate && matchesPayment && matchesRideshare;
        });

        const displayData =
            searchTerm || startTime || endTime || startDate || endDate || selectedPaymentMethod || selectedRideshareOption
                ? searchData
                : poolData;

        onFilterChange(displayData);
    }, [searchTerm, startTime, endTime, startDate, endDate, selectedPaymentMethod, selectedRideshareOption, poolData]);

    return (
        <div className="mt-[20px] flex justify-center space-x-1 items-center h-10 relative space-x-3">
            <div className="relative">
                <button className="flex items-center justify-start relative" onClick={toggleFilter}> 
                    <SCCSBox contents={"Search by:"} padding="p-0" gap="gap-0" extraClasses="p-0 m-0 hover:scale-[1.03]"/> 
                </button>

                {filter && (
                <div className="absolute top-full mt-2 bg-primary rounded drop-shadow w-[260%] z-10 pt-4 pb-4 px-4 space-y-4">
                    <div className="flex flex-col items-center gap-2 bg-card-bg p-2 rounded shadow-lg">
                        <div className="flex gap-2">
                            <input
                                type="time"
                                placeholder="Start Time"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                                className="border rounded p-1 text-center bg-white w-32"
                            />
                            <span className="self-center">to</span>
                            <input
                                type="time"
                                placeholder="End Time"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                                className="border rounded p-1 text-center bg-white w-32"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2 bg-card-bg p-2 rounded shadow-lg">
                        <div className="flex gap-2 justify-center">
                            <input
                                type="date"
                                placeholder="Start Date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="border rounded p-1 bg-white w-36"
                            />
                            <span className="self-center">to</span>
                            <input
                                type="date"
                                placeholder="End Date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="border rounded p-1 bg-white w-36"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center bg-card-bg p-2 rounded shadow-lg">
                        <select
                            className="border rounded p-2 w-72 text-center h-10"
                            value={selectedPaymentMethod}
                            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                        >
                            <option value="">Select Payment Method</option>
                            {paymentOptions.map((method, index) => (
                                <option key={index} value={method} className="text-center">
                                    {method}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="flex justify-center bg-card-bg p-2 rounded shadow-lg">
                        <select
                            className="border rounded p-2 w-72 text-center h-10"
                            value={selectedRideshareOption}
                            onChange={(e) => setSelectedRideshareOption(e.target.value)}
                        >
                            <option value="">Select Rideshare Service</option>
                            {rideshareOptions.map((method, index) => (
                                <option key={index} value={method} className="text-center">
                                    {method}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex justify-center bg-card-bg p-2 rounded shadow-lg mb-0">
                        <button
                            onClick={resetFilter}
                            className="text-sm font-medium text-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Reset All Filters
                        </button>
                    </div>
                </div>
                )}
            </div>
            
            <input
                type="text"
                placeholder="Search for carpools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="py-0.5 px-2 w-[40%] h-10 border rounded"
            />
        </div>
    );
};

export default SearchFilter;