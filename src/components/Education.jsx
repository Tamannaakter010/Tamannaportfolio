const Education = () => {
  return (
      <section className="">
          <div className="bg-black mx-auto text-white min-h-screen flex flex-col justify-center items-center">
              {/* Title */}
              <h2 className="text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                  Education
              </h2>

              {/* Adjusted margin-top and gap for mobile */}
              <div className="mt-8 md:mt-10 flex flex-col md:flex-row justify-between items-center w-full max-w-4xl gap-4 md:gap-6">
                  {/* MSc Section */}
                  <div className="w-full md:w-1/2 text-center md:text-right pr-0 md:pr-6">
                      <h3 className="text-xl font-semibold text-gray-300">
                          MSc in Information and Communication Technology (Current)
                      </h3>
                      <p className="text-sm md:text-base">Khulna University of Engineering and Technology</p>
                  </div>

                  {/* Enhanced Separator Line (Hidden on Mobile) */}
                  <div className="hidden md:flex flex-col items-center">
                      <div className="w-1 h-30 bg-gradient-to-b from-blue-500 to-transparent rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                  </div>

                  {/* BSc Section */}
                  <div className="w-full md:w-1/2 text-center md:text-left pl-0 md:pl-6">
                      <h3 className="text-xl font-semibold text-gray-300">
                          BSc in Computer Science and Engineering
                      </h3>
                      <p className="text-sm md:text-base">North Western University, Bangladesh</p>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Education;