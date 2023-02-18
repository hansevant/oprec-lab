import {BrowserRouter, Routes,Route} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/admin/Dashboard";
import Table from "./pages/admin/Table";
import Data from "./pages/admin/Data"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/register" element={<Register/>}/> 
        <Route path="*" element={<NotFound/>}/> 
        <Route path="/dashboard" element={<Dashboard/>}/> 
        <Route path="/table" element={<Table/>}/> 
        <Route path="/user/:npm" element={<Data />}/> 
      </Routes>
    </BrowserRouter>
  );
}


export default App;
