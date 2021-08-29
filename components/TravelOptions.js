function TravelOptions({emoji, title, active}) {
    return (
        <div className={active ? "bg-orange h-28 w-16 mt-3 rounded-full items-center justify-center shadow-lg" : "bg-white h-28 w-16 mt-3 rounded-full items-center justify-center shadow-lg hover:bg-orange duration-150 delay-150"}>
            <p className="bg-lightGray rounded-full p-1 m-4 w-8 h-8 cursor-pointer">{emoji}</p>
            <p className={active ? "text-white m-3 cursor-pointer" : "text-black m-3 hover:text-white cursor-pointer"}>{title}</p>
        </div>
    )
}

export default TravelOptions;
