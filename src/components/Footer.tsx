export default function Footer() {
    return (
        <footer className="bg-stone-100 w-full py-12 px-12 mt-24 border-t border-slate-200/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-screen-2xl mx-auto">
                <div className="flex flex-col gap-2">
                    <div className="uppercase tracking-widest text-[10px] text-slate-500">
                        © 2024 Laura Braun, BScN, RN, CAPP. Rise with clarity. Lead with coherence.
                    </div>
                </div>
                <div className="flex gap-10">
                    <a className="uppercase tracking-widest text-[10px] text-slate-500 hover:text-orange-700 transition-colors" href="#">Privacy Policy</a>
                    <a className="uppercase tracking-widest text-[10px] text-slate-500 hover:text-orange-700 transition-colors" href="#">Terms of Service</a>
                    <a className="uppercase tracking-widest text-[10px] text-slate-500 hover:text-orange-700 transition-colors" href="#">Contact</a>
                    <a className="uppercase tracking-widest text-[10px] text-slate-500 hover:text-orange-700 transition-colors" href="#">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}