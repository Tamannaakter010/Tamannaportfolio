const Services = () => {
    return (
        <div className="bg-[#0D1117] min-h-screen p-8 text-white flex flex-col items-center">
            <h2 className="text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                MY SERVICES
            </h2>

            <div className="flex flex-col gap-6 mt-10 max-w-2xl">
                {/* Website Development */}
                <div className="bg-[#161B22] rounded-lg shadow-lg p-4" data-aos="fade-right">
                    <div className="flex items-center gap-3 justify-center">
                        <span className="text-xl">💻</span>
                        <h3 className="text-sm font-semibold">Website Development</h3>
                    </div>
                    <p className="text-gray-400 mt-2  text-sm text-center">
                        I create websites based on your ready-made design. Whether it is a landing page or a business card website, I will make it look great and work smoothly on any device.
                    </p>
                </div>

                {/* Web Design */}
                <div className="bg-[#161B22] rounded-lg shadow-lg p-6" data-aos="fade-left">
                    <div className="flex items-center gap-3 justify-center">
                        <span className="text-xl">✏️</span>
                        <h3 className="text-sm font-semibold">Web Design</h3>
                    </div>
                    <p className="text-gray-400 mt-2  text-sm  text-center">
                        I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals.
                    </p>
                </div>

                {/* WordPress Development */}
                <div className="bg-[#161B22] rounded-lg shadow-lg p-6" data-aos="fade-up">
                    <div className="flex items-center gap-3 justify-center">
                        <span className="text-xl">🔵</span>
                        <h3 className="text-sm font-semibold">Machine Learning</h3>
                    </div>
                    <p className="text-gray-400 mt-2   text-sm  text-center">
                    I specialize in developing machine learning models using various algorithms to uncover patterns, make accurate predictions, and facilitate informed decision-making.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
