import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";

function App() {
  return (
    <div>
      <Header />
      <div>  
        <HomeScreen />
      </div>
      <Footer />
    </div>
  );
}

export default App; 