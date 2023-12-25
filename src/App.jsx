import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";
import NavBar from "./components/NavBar";



function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        {/*Aca se muestran todos los productos*/}
        <Route path="/" element={<ItemListContainer />} />
        {/*Aca se muestran los productos por categorias*/}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;


