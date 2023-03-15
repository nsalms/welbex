import Header from "./components/Header/Header";
import ContentMain from "./components/ContentMain/ContentMain";
import Footer from "./components/Footer/Footer";
import DynamicBackground from "./components/DynamicBackground/DynamicBackground";

function App() {
  return (
    <div className="App" style={{ overflow: "hidden", position: "relative" }}>
      <DynamicBackground />

      <div className="container">
        <Header />
        <ContentMain />
        <Footer />
      </div>
    </div>
  );
}

export default App;
