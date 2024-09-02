const Navbar = () => {
    return (
        <div>
            <div className='mx-auto'>
                <nav className='flex items-center w-full px-5 h-[100px] shadow-lg drop-shadow-xl'>
                <div className='w-1/2 flex items-center gap-8 justify-start'>
                <menu className="text-[24px] font-semibold">Logo</menu>
                <menu>Tutorials</menu>
                <menu>Exercise</menu>
                <menu>Example</menu>
                </div>
                <div className='w-1/2 flex items-center gap-8 justify-end'>
                <input type="search" value={"Search"} className="py-1 border px-2 rounded-3xl cursor-pointer"/>
                <button className="bg-primary text-[#ffffff] px-4 py-2 rounded-3xl">Login</button>
                </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;