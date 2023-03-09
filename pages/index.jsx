import HomePage from '@/components/HomePage';
import Portfolio from '@/components/Portfolio';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Experience from '@/components/Experience';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Design from '@/components/design';
import BsFillMoonStarsFill from 'react-icons/bs';

export default function Index() {
  return (
    <div>
      <HomePage />
      <Portfolio />
      <Experience />
      <Design />
      <About />
      <Contact />
    </div>
  );
}
