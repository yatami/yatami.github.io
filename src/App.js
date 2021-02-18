import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import Portfolio from "./components/Portfolio";
import Experiences from "./components/Experiences";
import ReleasedGames from "./components/ReleasedGames";
import Particles2 from "react-particles-js";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Particles
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 1000
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color:"#f9ab00"
            }
            
          },
          line_linked:{
            width:1
          }

        }
      }

      }
      />
      
      <ReleasedGames />
      <Particles2   
      params={{
       
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 1000
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color:"#f9ab00"
            }
            
          },
          line_linked:{
            width:0
          }

        }
      }

      }
      />
      <Portfolio />
      <Footer />
     
    
    </>
  );
}

export default App;
