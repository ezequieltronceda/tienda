import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { Navbar } from "./components/Navbar/Navbar"
import "./style.scss"

function App() {
  

  return (
   <>
      <Navbar></Navbar>
      <ItemListContainer detalle="Todavia no tenemos nada cargado"></ItemListContainer>
   </>
   
  )
}

export default App
