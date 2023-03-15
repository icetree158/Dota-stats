import { Route, Routes } from "react-router-dom";

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