
import Header from "./Components/Header/Header";
import Body from "./Components/Body";
import { Route, Routes } from "react-router-dom"

const App = () => {
  


  return (
    <div >
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/" element={ <Body /> } />
      </Routes>
        
    </div>
  );
}

export default App;
