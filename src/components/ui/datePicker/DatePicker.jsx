import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MyDatePicker({ className = "", label, labelClass = "", required = false, placeholder, inputClass = "!h-[46px]" }) {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className={`relative flex flex-col gap-0 ${className}`}>
            {label &&
                <label htmlFor="" className={`font-kanit font-medium text-white text-sm md:text-base !leading-tight mb-2 ${labelClass}`}>
                    {label}
                    {required &&
                        <span className='text-red-500'> *</span>
                    }
                </label>
            }
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText={placeholder}
                isClearable={false}
                showPopperArrow={false}
                className={`md:h-[50px] bg-white/[4%] border border-solid border-white/[4%] focus:border-primary/20 rounded-[10px] block px-4 w-full text-[#B3B3B3] font-light text-sm md:text-base placeholder:transition-all placeholder:duration-300 placeholder:relative placeholder:left-0 focus:placeholder:left-2 focus:placeholder:opacity-0 ${inputClass}`}
            />
        </div>
    );
}

export default MyDatePicker;
