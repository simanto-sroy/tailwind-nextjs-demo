function Profile() {
    return (
        <div className="flex flex-col text-center sm:text-left sm:items-center sm:flex-row sm:p-10">

        <img className="w-full coursor-pointer ring-red-600 sm:w-2/5 sm:rounded-full sm:max-w-sm sm:ring-4 transition duration-100 ease-in transform sm:hover:scale-110" src="https://miro.medium.com/max/3150/1*8iC6vXqgRDBlQnlsdDEewA.png" alt="" />

        <div className="mt-5 sm:ml-5">
            <h1 className="text-5xl">Simanto Roy</h1>
            <h1 className="text-2xl">I code quite alot...</h1>
        </div>
        
    </div>
    )
}

export default Profile
