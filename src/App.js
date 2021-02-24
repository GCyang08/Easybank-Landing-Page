import "./App.css";
import Easybank from "./containers/Easybank";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Easybank />
      </div>
    </BrowserRouter>
  );
}

export default App;
