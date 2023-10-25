import React, { useId } from 'react'

const Select = ({
    options,
    label,
    className = "",
    ...props
}, ref) => {
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label
                className=''
                htmlFor={id}
            >{label}</label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 ${className}`}
            >
                //?is for checking the calue is existing or not if it is not existing then it is going to crash the application
                
                {options?.map((option)=>(
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)