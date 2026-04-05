export default function Homepage() {
    return (
        <main className="bg-[#fafaf5] text-[#1a1c19]">
            {/* Hero Section */}
            <header className="relative pt-48 pb-32 overflow-hidden px-12">
                <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 z-10">
                        <span className="text-[#944925] uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">
                            Leadership, Performance & Resilience
                        </span>
                        <h1 className="text-6xl md:text-8xl font-serif font-light leading-[1.1] text-[#36485b] mb-8 tracking-tight">
                            Rise with clarity. <br/><span className="italic font-normal">Lead with coherence.</span>
                        </h1>
                        <p className="text-lg text-[#424849] max-w-lg mb-12 leading-relaxed">
                            Elevated leadership grounded in coherence — supported by clinical insight, performance coaching, and resilience science.
                        </p>
                        <div className="flex items-center gap-8">
                            <button className="bg-[#36485b] text-white px-8 py-4 rounded-md font-medium transition-all hover:bg-[#4e6073] shadow-xl shadow-primary/10">
                                Schedule a Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* About Section */}
            <section className="py-32 bg-[#f4f4ef] px-12">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
                        <div className="md:col-span-7">
                            <span className="text-[#944925] uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Meet Laura</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-[#36485b] mb-4">
                                Laura Braun, <span className="italic text-3xl block mt-2 opacity-80">BScN, RN, CAPP</span>
                            </h2>
                            <p className="text-sm text-[#944925] uppercase tracking-widest mb-8">
                                Certified Resilience Trainer | Leadership, Performance & Resilience Coach
                            </p>
                            <div className="space-y-6 text-lg text-[#424849] max-w-2xl">
                                <p>Laura brings over 3 decades of experience in healthcare, leadership development, and performance coaching.</p>
                                <p>Her work is grounded, modern, and attuned — helping leaders rise through clarity, coherence, and intentional action.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}