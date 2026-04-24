import './RecipeDetails.css'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import api from '../services/api'

const RecipeDetails = () => {
  const {id} = useParams();
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await api.get(`lookup.php?i=${id}`)
        setRecipe(response.data.meals[0])
      } catch (error) {
        console.error("Erro ao buscar a receita:", error)
      }
    }
    fetchRecipe()
  }, [id])

  if (!recipe) return <p className="neon-text">Carregando Receita...</p>;

  return (
    <div className="detail-container">
      <h1 className="neon-text">{recipe.strMeal}</h1>
      <div className="detail-content">
        <div className="image-wrapper">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </div>
        <div className="instructions-wrapper">
          <p className="instructions-text">{recipe.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;