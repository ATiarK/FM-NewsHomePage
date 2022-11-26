import Layout from './container/Layout';
import Header from './container/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

function App() {
  return (
    <Layout>
      <Header />
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 py-8">
        <Section1 />
        <Section2 />
      </div>
    </Layout>
  );
}

export default App;
