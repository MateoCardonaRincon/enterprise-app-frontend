import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/shared/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
