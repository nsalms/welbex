import Header from "./components/Header/Header";
import ContentMain from "./components/ContentMain/ContentMain";
import background from "./assets/img/background.png";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App" style={{ overflow: "hidden", position: "relative" }}>
      <picture className="background">
        <img src={background} alt="" decoding="async" />
      </picture>
      <div className="container">
        <Header />
        <ContentMain />
        <Footer />
      </div>
    </div>
  );
}

export default App;
