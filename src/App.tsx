import Layout from './container/layout';
import Header from './container/Header';
import Section1 from './components/Section1';

function App() {
  return (
    <Layout>
      <Header />
      <div className="grid grid-cols-3">
        <Section1 />
      </div>
    </Layout>
  );
}

export default App;
