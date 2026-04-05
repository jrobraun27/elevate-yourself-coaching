export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md">
            <div className="flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto">
                <div className="text-2xl font-serif tracking-tight text-slate-800">Laura Braun</div>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10 font-serif italic text-lg">
                    <a className="text-orange-800 border-b border-orange-800/30 pb-1" href="#">Home</a>
                    <a className="text-slate-600 hover:text-slate-900 transition-colors" href="#">Services</a>
                    <a className="text-slate-600 hover:text-slate-900 transition-colors" href="#">The Coherence Journey</a>
                    <a className="text-slate-600 hover:text-slate-900 transition-colors" href="#">About</a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="bg-[#36485b] text-white px-6 py-2.5 rounded-md font-medium text-sm hover:bg-[#4e6073] transition-all active:scale-95 duration-300">
                        Book a Discovery Call
                    </button>
                </div>
            </div>
        </nav>
    )
}