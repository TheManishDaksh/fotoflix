import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import './App.css'
import Photos from "./Components/Photos";
import Favourites from "./Components/Favourites";

function App() {
  return (
    <BrowserRouter>
    <div>
      <nav className="navbar">
        <div className="navbarlogo">
          fotofelix
        </div>
        <div className="navbarlinks">
          <Link to ="/">Home</Link>
          <Link to = "/favourites">Favourites</Link>
        </div>
        <Routes>
          <Route path="/" element={<Photos/>} />
          <Route path="/favourites" element ={<Favourites/>}/>
        </Routes>
      </nav>
    </div>
    </BrowserRouter>
  )
}

export default App
 