
export const RevenueCard = ({
    title,
    orderCount,
    amount,
    add
})=>{

        return(
            <div className={` rounded shadow-md  m-1 ${add?" text-white bg-blue-500  hover:bg-blue-900 ":"bg-white"}`}>
                <div className="p-3">
                <div className={`  ${add?"text-white":"text-gray-700"} flex flex-row justify-content ml-3`}>
                    <div className="flex">
                        <div>
                            {title}
                        </div>
                        <div className="ml-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-row justify-center font-semibold text-2xl">
                        <div className="mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 " />
                            </svg>
                        </div>
                        
                        <div>{amount}</div>
                    </div>
                    {orderCount ?
                    <div className={`flex underline cursor-pointer font-medium flex-col justify-center ${add?"text-white":"text-blue-500"} `}>
                        <div className="flex">
                            <div className={`${add?"text-white":"text-blue-500"}`}>
                                {orderCount} order(s)
                            </div>
                            <div>
                                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${add?"text-white":"text-blue-500"}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>:null}
                </div>
                </div>
                
                 {add?<div className="w-full flex justify-between rounded-md bg-blue-900 p-2 ">
                            <div>Next Payment Date:</div>
                            <div>Today, 4:00 PM</div>
                        </div>:null}           
            </div>
        )
}