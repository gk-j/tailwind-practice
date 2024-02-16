import { tableData } from "../data/table"


export const Datatable=()=>{
    return(
        <table className="table-auto p-2 rounded-lg bg-white">
        <thead className="bg-[#F2F2F2] p-3">
            <tr className="flex flex-row justify-between p-3 rounded-lg ">
            <th className="text-[#737373]"> Order ID</th>
            <th className="text-[#737373]">Status</th>
            <th className="text-[#737373]">Transaction ID</th>
            <th className="text-[#737373]">Order Amount</th>
            <th className="text-[#737373] flex">
                <div>Transaction fee</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
            </th>
            </tr>
        </thead>    
        <tbody>
            {tableData.map((row)=>{
                return(
                <div>
                    <tr key={row.orderId} className="flex justify-between">
                        <td className="text-blue-500">
                            <a href=""> 
                                {row.orderId}
                            </a>
                        </td>
                        <td className="mr-10">{row.status}</td>
                        <td className="mr-34">{row.transcationId}</td>
                        <td className="flex mr-44">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path  d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 " />
                                </svg>
                            </div>
                            <div>
                                {row.orderAmount}
                            </div>
                            
                        </td>
                        <td className="mr-4">{row.transactionFee}</td>
                        
                    </tr>
                    <hr className="h-px my-8"/>
                </div>
                )
            })}
        </tbody>
        </table>
    )
}