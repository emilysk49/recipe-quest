import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Explore from '../pages/Explore'
import Favorites from "../pages/Favorites"
import RecipeDetails from "../pages/RecipeDetails";
import Register from '../pages/Register'
import Navbar from '../components/Navbar'

export function AppRoutes() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
}