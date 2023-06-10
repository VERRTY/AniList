import './App.css';
import AppRouter from "./providers/router/ui/AppRouter";
import Navbar from "../widgets/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
      <AppRouter/>
    </div>
  );
}

export default App;
