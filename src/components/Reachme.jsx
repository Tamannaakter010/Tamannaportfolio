import "@fortawesome/fontawesome-free/css/all.min.css";

const Reachme = () => {
  return (
    <div className="bg-black text-white text-center py-10">
       <h2 className="text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-10">
       Reac Me 
      </h2>
      <div className="container mx-auto flex flex-col items-center gap-8">
        {/* Contact Info Section */}
        <div className="text-center space-y-3 w-full max-w-md bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Email */}
          <p className="flex items-center justify-center gap-2 hover:text-gray-300 transition duration-300">
            <i className="fas fa-envelope text-pink-500"></i> {/* Email Icon */}
            <a
              href="mailto:tamannapinks010@gmail.com"
              className="font-medium hover:underline"
            >
              tamannapinks010@gmail.com
            </a>
          </p>

          {/* Phone */}
          <p className="flex items-center justify-center gap-2 hover:text-gray-300 transition duration-300">
            <i className="fas fa-phone-alt text-blue-500"></i> {/* Phone Icon */}
            <a href="tel:01950768410" className="font-medium hover:underline">
              01950768410
            </a>
          </p>

          {/* Location */}
          <p className="flex items-center justify-center gap-2 hover:text-gray-300 transition duration-300">
            <i className="fas fa-map-marker-alt text-purple-500"></i> {/* Location Icon */}
            <span className="font-medium">Dhaka & Khulna,Bangladesh</span>
          </p>
        </div>

        {/* Social Links Section */}
        <div className="flex gap-6 text-2xl bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <a
            href="https://www.linkedin.com/in/tamanna-akter-01135819b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500 transition-transform duration-300 transform hover:scale-110"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://wa.me/01950768410"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-500 transition-transform duration-300 transform hover:scale-110"
          >
            <i className="fab fa-whatsapp"></i> {/* WhatsApp Icon */}
          </a>
          <a
            href="https://www.facebook.com/share/15tMoVQeBt/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 transition-transform duration-300 transform hover:scale-110"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/p_i_n_k_s_02?igsh=MXVibmdtNGE5NGhwdQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400 transition-transform duration-300 transform hover:scale-110"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://github.com/Tamannaakter010"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-400 transition-transform duration-300 transform hover:scale-110"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reachme;
