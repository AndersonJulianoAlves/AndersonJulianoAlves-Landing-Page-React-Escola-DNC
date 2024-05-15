import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/section/Navbar';
import Presentation from './componentes/section/Presentation';
import Projects from './componentes/section/Projects';
import Skills from './componentes/section/Skills';
import Footer from './componentes/section/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
