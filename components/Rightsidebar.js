import { ViewGridIcon } from '@heroicons/react/solid'
import TravelOptions from './TravelOptions';

function Rightsidebar() {
    return (
        <div style={{flex: "0.4"}} className="p-10">
            <header className="flex justify-between">
                <ViewGridIcon className="h-5 w-5 cursor-pointer"/>
                <div className="flex items-center">
                    <p className="link">Gallery</p>
                    <p className="link"> Stories</p>
                    <img className="h-6 w-6 rounded-2xl cursor-pointer" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="" />
                </div>
            </header>
            <h1 className="text-blue font-semibold text-3xl mt-4">Discover</h1>
            <div className="flex justify-evenly mt-2 w-80">
                <p className="text-orange text-lg border-b-[2px] border-orange cursor-pointer">Popular</p>
                <p className="text-gray text-lg hover:text-orange hover:border-b-[2px] border-orange cursor-pointer">Adventure</p>
                <p className="text-gray text-lg hover:text-orange hover:border-b-[2px] border-orange cursor-pointer">Tour</p>
            </div>
            <div className="flex justify-between overflow-scroll hidescrollbar w-full mt-3">
                <img className="w-60 h-60 mx-2 rounded-xl" src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" />

                <img className="w-60 h-60 mx-2 rounded-xl" src="https://images.unsplash.com/photo-1581881067989-7e3eaf45f4f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80" alt="" />

                <img className="w-60 h-60 mx-2 rounded-xl" src="https://images.unsplash.com/photo-1468283380056-24c74af41097?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" alt="" />

            </div>
            <h1 className="text-blue font-semibold text-3xl mt-3">Types of Travel</h1>
            <div className="flex justify-evenly">
                <TravelOptions emoji="&#11088;" title="Luxury" active/>
                <TravelOptions emoji="&#128053;" title="Safari" />
                <TravelOptions emoji="&#127981;" title="Train" />
                <TravelOptions emoji="&#128106;" title="Family" />
                <TravelOptions emoji="&#128119;" title="Alone" />
            </div>
        </div>
    )
}

export default Rightsidebar;
