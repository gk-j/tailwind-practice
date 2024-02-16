export const Topbar=()=>{

    return(
        <div className="flex-1 flex flex-col p-1">
		<nav className="px-4 flex justify-between bg-white h-16 border-b-2 w-full">
		{/* <nav className=" fixed px-4 flex justify-between bg-white h-16 border-b-2"> */}
			<ul className="flex items-center">
				
				<li className="h-6 w-6 flex">
					<div>
						Payments
					</div>
					<div className="flex justify-center	">
						<div className="ml-3 pt-1 text-[#4D4D4D]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
						<div className="text-[#4D4D4D]  p-1">
							<p className="text-sm whitespace-nowrap">How it works</p>
						</div>
						
					</div>
				</li>
			</ul>

			<ul className="flex items-center p-3 m-2">
				<li>
                    <label for="default-search" className="mb-2 text-sm font-medium text-[#F2F2F2] sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-[#808080]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="  bg-[#F2F2F2] block w-full p-4 ps-10 text-sm text-[#808080] border  rounded-lg" placeholder="Search features,tutorials,etc." required />
                    </div>
				</li>
			</ul>

			
			<ul className="flex items-center">

				<li className="pr-6 flex">
					<div className="mr-2">
						<svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="18.5" cy="18" r="18" fill="#E6E6E6"/>
						<path d="M26.0789 9.02136L10.5042 12.0441C9.91684 12.1491 9.5 12.7158 9.5 13.3666V20.2517C9.5 20.9025 9.91684 21.4692 10.5042 21.5742L12.0958 21.8891C12.74 23.0646 13.9526 25.1007 15.5821 26.759C16.1316 27.3258 17.0411 26.822 16.9274 25.9824C16.7758 24.8698 16.8137 23.6733 16.8705 22.8337L26.0789 24.6389C26.8179 24.7859 27.5 24.1561 27.5 23.3165V10.3438C27.5 9.50416 26.8179 8.87442 26.0789 9.02136ZM15.3168 17.6698C15.3168 17.9007 15.1463 18.0896 14.9379 18.0896H13.3842C13.1758 18.0896 13.0053 17.9007 13.0053 17.6698V15.9485C13.0053 15.7176 13.1758 15.5287 13.3842 15.5287H14.9379C15.1463 15.5287 15.3168 15.7176 15.3168 15.9485V17.6698ZM19.6558 17.6698C19.6558 17.9007 19.4853 18.0896 19.2768 18.0896H17.7232C17.5147 18.0896 17.3442 17.9007 17.3442 17.6698V15.9485C17.3442 15.7176 17.5147 15.5287 17.7232 15.5287H19.2768C19.4853 15.5287 19.6558 15.7176 19.6558 15.9485V17.6698ZM24.0137 17.6698C24.0137 17.9007 23.8432 18.0896 23.6347 18.0896H22.0811C21.8726 18.0896 21.7021 17.9007 21.7021 17.6698V15.9485C21.7021 15.7176 21.8726 15.5287 22.0811 15.5287H23.6158C23.8242 15.5287 23.9947 15.7176 23.9947 15.9485V17.6698H24.0137Z" fill="#4D4D4D"/>
						</svg>
					</div>
					<div>
						<svg width="37" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_108424_2537)">
						<circle cx="20" cy="20" r="20" fill="#E6E6E6"/>
						<path d="M21.1109 25.5026C20.5156 26.1587 19.4844 26.1587 18.8891 25.5026L13.6151 19.6895C12.7406 18.7256 13.4245 17.1816 14.726 17.1816L25.274 17.1816C26.5755 17.1816 27.2594 18.7256 26.3849 19.6895L21.1109 25.5026Z" fill="#4D4D4D"/>
						</g>
						<defs>
						<clipPath id="clip0_108424_2537">
						<rect width="40" height="40" fill="white"/>
						</clipPath>
						</defs>
						</svg>
					</div>
					
				</li>
				

			</ul>

		</nav>
	</div>
    )
}