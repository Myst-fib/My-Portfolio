import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Services from './components/Services';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Services />
        <Contact /> 
      </main>
    </>
  );
}

export default App;