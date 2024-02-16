export const Tabletop=()=>{
    return(
        <div className="flex justify-between mt-2">
            <div className="border-2 rounded border-[#D9D9D9] ">
                <label for="default-search" className="mb-2 text-sm font-medium text-[#F2F2F2]  sr-only dark:text-white">Search</label>
                <div className="relative  border-[#D9D9D9]">
                    <div className=" absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-[#808080]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className=" block w-full p-4 ps-10 text-sm text-[#808080] border-[#D9D9D9]  rounded-lg" placeholder="Search by order ID..." required />
                </div>
            </div>
            <div className="flex">
                <div className="flex mr-2 rounded border-2 border-[#D9D9D9]">
                    <button className="flex justify-center text-[#4D4D4D] rounded p-3 pt-4">
                        <div>Sort</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                        </svg>
                    </button>
                </div>
                <div className="mr-4">
                    <button className="rounded border-2 border-[#D9D9D9] text-[#4D4D4D] p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>

                    </button>
                </div>
            </div>
        </div>
    )
}