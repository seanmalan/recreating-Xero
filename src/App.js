
import Header from "./Components/Header/Header";
import Body from "./Components/Body";
import { Route, Routes } from "react-router-dom"
import Features from "./Components/Features/FeaturesPage";
import Plans from "./Components/Plans/Plans"


const App = () => {
  


  return (
    <>
    <div >
      <Header />
        <Routes>
          <Route path="/Components/Features/FeaturesPage" element={<Features />} />
          <Route path="./Components/Plans/Plans" element={<Plans /> } />
        </Routes>
    </div>
    <div>
      <Body />
    </div>
    </>
  );
}

export default App;
