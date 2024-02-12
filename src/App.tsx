import { useState } from 'react';
import Intro from './components/Intro';

export default function App() {
  const [isIntroFinished, setisIntroFinished] = useState(false);

  return (
    <>
      {isIntroFinished ? (
        <h1>finished</h1>
      ) : (
        <Intro setIsIntroFinished={setisIntroFinished} />
      )}
    </>
  );
}
