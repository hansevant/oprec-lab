import {BrowserRouter, Routes,Route} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Register from "./pages/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/register" element={<Register/>}/> 
        <Route path="*" element={<NotFound/>}/> 
      </Routes>
    </BrowserRouter>
  );
}


export default App;
