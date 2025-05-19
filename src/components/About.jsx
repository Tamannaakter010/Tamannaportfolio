
import { motion } from 'framer-motion';
import tamannaImg from '../assets/images/Tamanna.png';

const About = () => {
  const text = "I am a Full Stack Software Developer with expertise in frontend development and a strong grasp of the MERN stack. I thrive on creating visually appealing, interactive, and user-friendly web applications. Passionate about innovation, I am always ready to pick up new technologies and expand my skill set to stay ahead in the ever-evolving tech landscape.";

  const words = text.split(" ");

  return (
    <section id="about" className="min-h-screen p-8 bg-black text-white">
       
      <div className="container max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-52 h-52 rounded-full flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full animate-rotate-border bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
              <div className="w-48 h-48 rounded-full overflow-hidden bg-black relative z-10">
                <img 
                  src={tamannaImg} 
                  alt="Tamanna" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2 mt-10 md:mt-0 md:ml-10"
          >
            
            <h2 className="text-2xl mb-8 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
               About Me
            </h2>
            <p className="text-sm text-center ">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {word}{" "}
                </motion.span>
              ))}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;