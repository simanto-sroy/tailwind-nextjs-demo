function leftSidebar() {
    return (
        <div style={{background: "url(https://images.unsplash.com/photo-1481956877760-f6dfc6a98342?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGRhcmslMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80)", flex: "0.6",}}
			className="font-poppins flex flex-col h-screen justify-center items-center !bg-cover !bg-bottom object-contain rounded-r-3xl"
		>
			<h2 className="text-xl font-bold absolute top-10 left-10 text-white">TooTravel</h2>
			<div className="flex flex-col w-3/5">
				<h2 className="text-white font-semibold text-5xl">The most beautiful place in the world!</h2>
				<p className="text-white text-sm mt-5">Plan your vacation on the most beautiful place in the world</p>
				<button className="bg-orange w-60 mt-10 text-[#fff] py-2 px-5 rounded-xl">Get Started</button>
			</div>
			<div className="absolute bottom-10 left-20 flex items-center">
				<p className="text-white mr-2">01</p>
				<div className="h-[2px] w-8 bg-white mr-2 cursor-pointer"></div>
				<div className="h-[2px] w-8 bg-white duration-75 mr-2 bg-opacity-20 hover:bg-opacity-100 cursor-pointer"></div>
				<div className="h-[2px] w-8 bg-white mr-2 duration-75 bg-opacity-20 hover:bg-opacity-100 cursor-pointer"></div>
				<p className="text-white">03</p>
			</div>
		</div>
    )
}

export default leftSidebar;
