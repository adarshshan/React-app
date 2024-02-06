
import Header from "./components/Header";
import Footer from "./components/Footer"
import List from "./list/list";
function App() {
  return (
    <div className="app" style={{ textAlign: 'center', fontSize: '20px' }}>
      <Header />
      <div className="app-body">
        <List />
      </div>
      <Footer />
    </div>
  );
}

export default App;
