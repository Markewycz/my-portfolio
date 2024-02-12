import { useState } from 'react';
import Intro from './components/Intro';
import Hero from './components/Hero';

export default function App() {
  const [isIntroFinished, setIsIntroFinished] = useState(false);

  return (
    <>
      {isIntroFinished ? (
        <Hero />
      ) : (
        <Intro setIsIntroFinished={setIsIntroFinished} />
      )}
      {/* <Intro setIsIntroFinished={setIsIntroFinished} /> */}
      {/* <Hero /> */}
    </>
  );
}
