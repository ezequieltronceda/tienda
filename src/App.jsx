import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { Navbar } from "./components/Navbar/Navbar"
import "./style.sass"
import { BrowserRouter } from "react-router-dom"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"

function App() {
  

  return (
   <>
      
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<ItemListContainer></ItemListContainer>} ></Route>
          <Route path="category/:idCategory" element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path="item/:idItem" element={ <ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path="*" element={<>Error 404 not found</>} ></Route>
        </Routes>
        
      </BrowserRouter>
      
      
      
   </>
   
  )
}

export default App
