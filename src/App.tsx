import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import ParticleCanvas from './components/ParticleCanvas';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

export default function App() {
  return (
    <>
      {/* FRAMER MOTION TO SCROLL BEHAVIOR */}
      <ParticleCanvas />

      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Resume />
    </>
  );
}
