
import cafe from '../assets/images/cafe.jpg'; // Import your images
import car from '../assets/images/car.jpg';
import img3 from '../assets/images/img3.jpeg';
import Tamanna from '../assets/images/Tamanna.png';
import img4 from '../assets/images/img4.jpeg';
import news from '../assets/images/news.png';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Import an icon for "View Project"

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      name: 'Cafe 19', 
      description: 'A web application built with React and Tailwind CSS.', 
      image: cafe, // Use imported image
      link: 'https://restrurant-project.web.app/' 
    },
      { 
      id: 2, 
      name: 'Space Architecten', 
      description: 'A Architecture farm website using Daisy UI and React.', 
      image: img3, // Use imported image
      link: 'https://tamannaakter010.github.io/Space-Architecten/' 
    },
    { 
      id: 3, 
      name: 'Car Doctor', 
      description: 'An e-commerce platform using Node.js and MongoDB.', 
      image: car, // Use imported image
      link: 'https://cars-doctor-9410d.web.app/' 
    },
  
    { 
      id: 4, 
      name: 'News Portal', 
      description: 'A Shopping  website using Daisy UI,Tailwind and Java Script.', 
      image: news, // Use imported image
      link: 'https://news-portal-23e60.web.app/career' 
    },
   
    { 
      id: 5, 
      name: 'Portfolio', 
      description: 'A portfolio website using Daisy UI and React.', 
      image: Tamanna, // Use imported image
      link: 'https://tamannaakter010.github.io/portfolio/' 
    },
     { 
      id: 6, 
      name: 'Aronty', 
      description: 'A portfolio website using Daisy UI and React.', 
      image: img4, // Use imported image
      link: 'https://tamannaakter010.github.io/Aaronty/' 
    },
  ];

  return (
    <section id="projects" className=" bg-[#0D1117] text-white    ">
      <div className="container mx-auto my-auto px-4">
        <h2 className=" p-8 text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
          MY Projects
        </h2>
        <div className=" items-center mt-4 grid grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card bg-[#161B22] shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out group relative overflow-hidden"
            >
              {/* Image Container with Zoom Animation */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-32 object-cover rounded-t-lg transform transition-transform duration-500 group-hover:scale-110" 
                />
                {/* Enhanced Overlay with Gradient and Icon Animation */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <FaExternalLinkAlt className="text-4xl text-white mb-2 mx-auto animate-bounce" /> {/* Animated Icon */}
                 
                  
                  </div>
                </div>
              </div>
              <div className="p-2 text-center flex flex-col items-center">
  <h3 className="card-title text-sm font-bold">{project.name}</h3>
{/* <p className="mt-2 text-gray-300 text-sm">{project.description}</p> */}

</div>

            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;