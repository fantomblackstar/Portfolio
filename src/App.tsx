import React, { useEffect } from 'react';

import Intro from './blocks/Intro';
import PageLayout from './layouts/PageLayout';
import Tech from './blocks/Tech';
import Experience from './blocks/Experience';
import Projects from './blocks/Projects';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <PageLayout>
      <Intro />
      <Tech />
      <Experience />
      <Projects />
    </PageLayout>
  );
}

export default App;
