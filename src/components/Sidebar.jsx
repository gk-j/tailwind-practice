import { Datatable } from './Datatable'
import { RevenueCard } from './RevenueCard'
import { Tabletop } from './Tabletop'
import { Topbar } from './Topbar'

const menuItems=[
    {icon:"/home.png",name:"Home"},
    {icon:"/orders.png",name:"Orders"},
    {icon:"/products.png",name:"Products"},
    {icon:"/delivery.png",name:"Delivery"},
    {icon:"/marketing.png",name:"Marketing"},
    {icon:"/analytics.png",name:"Analytics"},
    {icon:"/payouts.png",name:"Payouts"},
    {icon:"/discounts.png",name:"Discounts"},
    {icon:"/audience.png",name:"Audience"},
    {icon:"/appearence.png",name:"Appearence"},
    {icon:"/plugins.png",name:"Plugins"},
]
export const Sidebar = ()=>{
    return (
        <div >
            
        <div>
            <aside id="logo-sidebar" className="fixed overflow-y-scroll top-0 left-0 z-40 w-64 h-screen pt-10 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="flex mb-5 ml-2 flex-row text-white ">
                <div>
                <img className="w-10 h-10 m-3  rounded" src="/nishyam.png"/>
                </div>
                <div className="flex flex-row justify-center">
                <div className="flex flex-col  justify-center ">
                <div className="font-medium text-base">Nishyan</div>
                <div className="font-normal text-sm underline">Visit store</div>
                </div>
                <div className="flex justify-center mt-8 pl-3 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </div>
                </div>
            </div>
            <div className="pl-3 bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {menuItems.map((item)=>{
                        return(
                            <li className="h-8" key={item.name}>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#FFFFFF]/10 dark:hover:bg-gray-700 group">
                                <img  className="w-5 h-5" src={item.icon}/>
                                <span className="ms-3">{item.name}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="flex  items-center bg-[#FFFFFF]/10 m-5 p-2 rounded">
                <div className="w-9 h-9 bg-[#FFFFFF]/10 rounded p-[6px] flex justify-center items-center">
                    <img alt="wallet_icon"  width="23.65" height="19.6"   src="/wallet.svg"/>
                </div>
                <div className="flex flex-col text-white gap-[2px] ml-2">
                    <h3 className="text-[13px] text-[#FFFFFF] font-light">Available Credits</h3>
                    <h6 className="text-base font-medium">224.10</h6>
                </div>
            </div>
            
                     
            </aside>    
        </div>

        <div className="p-4 sm:ml-64 bg-[#F2F2F2]" >
            <div className='grid'>
                <div className="flex flex-col w-full">
                    <Topbar />
                </div>          
            </div>        
            <div className=" grid grid-cols-1">
                <div className="grid grid-cols-1  md:grid-cols-2" >
                    <div className="cols-span-12 md:cols-span-6">
                        <RevenueCard add="true" title="Next Payout" orderCount="23" amount="7,687.08"/>    
                    </div>
                    <div className="cols-span-12 md:cols-span-6">
                        <RevenueCard title="Amount Pending" orderCount="13" amount="87,654.08"/>
                    </div>   
                </div>
                <div className="grid">
                    <div className="cols-span-12 md:cols-span-12">
                        <RevenueCard title="Amount Processed"  amount="23,87,654.08"/>
                    </div>
                </div>
                <div className='ml-1 mt-5 mb-3'>
                    <div className='font-bold text-xl'>Transactions | This Month</div>
                </div>
                <div className='bg-white pl-2 pr-2 ml-1 mr-1 rounded'>
                    <div className='grid'>
                        <div className="flex flex-col w-full mb-2">
                            <Tabletop/>
                        </div>          
                    </div> 
                    <div className='grid'>
                        <Datatable/>
                    </div>
                </div>
        </div>
    </div>
</div>

        
    )
}
    