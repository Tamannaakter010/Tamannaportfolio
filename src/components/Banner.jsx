import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import banner from '../images/Banner.jpeg';


const paragraphs = [
  "A Frontend Developer",
  "A MERN Stack Developer",
  "A Full Stack Developer",
  "A Software Developer",
  "A Reactjs Developer",
];

const Banner = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const paragraph = paragraphs[currentParagraph];
    let timer;

    if (isTyping) {
      // Typing effect
      if (displayText.length < paragraph.length) {
        timer = setTimeout(() => {
          setDisplayText(paragraph.slice(0, displayText.length + 1));
        }, 100); // Typing speed
      } else {
        // Wait before starting to erase (reduced staying time)
        timer = setTimeout(() => setIsTyping(false), 1000); // Reduced to 1 second
      }
    } else {
      // Erasing effect
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(paragraph.slice(0, displayText.length - 1));
        }, 50); // Erasing speed
      } else {
        // Move to the next paragraph
        setIsTyping(true);
        setCurrentParagraph((prev) => (prev + 1) % paragraphs.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isTyping, currentParagraph]);

  return (
    <section
      id="banner"
      className="h-screen flex items-center justify-start bg-cover bg-center text-white px-8"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="text-start ml-8">
        <h1 className="text-4xl font-bold animate-bounce">
          Hi, I am <span className="text-blue-700">Tamanna</span>
        </h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={currentParagraph}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-lg"
          >
            {displayText}
          </motion.p>
        </AnimatePresence>

        <button
  className="mt-8 px-4 py-1 bg-blue-900 text-white font-medium rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden"
  onClick={() => {
    // Add your download CV logic here
    window.open('/src/images/Tamanna Akter Kuet - 8801950768410.pdf', '_blank');
  }}
>
  <span className="relative z-8">Download CV</span>
  <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
</button>
      </div>
    </section>
  );
};

export default Banner;