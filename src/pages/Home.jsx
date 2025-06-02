import Hero from '../components/Hero/Hero';
import Menu from '../components/Menu/Menu';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Portfolio from '../components/Portfolio/Portfolio';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Menu/>
      <About />
      <Skills />
      <Portfolio />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;