import Layout from './container/Layout';
import Header from './container/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Sidebar from './components/Sidebar';
import Section3 from './components/Section3';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 py-8">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </Layout>
  );
}

export default App;
