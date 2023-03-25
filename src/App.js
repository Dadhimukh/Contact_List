import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddContact />}></Route>
        <Route path="/edit/:id" element={<EditContact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
