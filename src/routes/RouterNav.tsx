import { Route, Routes } from "react-router-dom";
import App from "../App";
import HeroesPage from "../pages/heroesPage/HeroesPage";

function RouterNav() {
  return (
    <Routes>
      <Route path='/' element={<HeroesPage />} >
      </Route>
    </Routes>
  )
}

export default RouterNav