import Layout from './container/Layout';
import Header from './container/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
// import Sidebar from './components/Sidebar';
import Section3 from './components/Section3';

function App() {
  return (
    <Layout>
      <Header />
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10 py-8">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
      {/* <Sidebar /> */}
    </Layout>
  );
}

export default App;
