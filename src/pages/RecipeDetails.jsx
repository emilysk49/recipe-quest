import './RecipeDetails.css'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import api from '../services/api'
import { getIngredients } from "../utils/recipeUtils.js";

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

  const recipeIngredients = getIngredients(recipe);

  if (!recipe) return <p className="neon-text">Carregando Receita...</p>;

  return (
    <div className="detail-container card-glass">
      <h1 className="neon-text">{recipe.strMeal}</h1>

      <div className="main-content-layout">
        <aside className="image-wrapper">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          
          <div className="stat-item">
            <span className="stat-label">Origin:</span>
            <span className="stat-value">{recipe.strArea}</span>
          </div>

          <div className="stat-item">
            <span className="stat-label">Category:</span>
            <span className="stat-value">{recipe.strCategory}</span>
          </div>

          {recipe.strYoutube && (
            <a
              href={recipe.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-btn"
            >
              <span className="play-icon">▶</span> Watch Tutorial
            </a>
          )}
        </aside>

        <div className="info-section">
          <div className="ingredients-section">
            <div className="ingredients-grid">
              {recipeIngredients.map((item) => (
                <div key={item.id} className="ingredient-tag">
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${item.name}.png`}
                    alt={item.name}
                    className="ingredient-icon"
                  />
                  <span className="qty">{item.measure}</span>
                  <span className="item">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="instructions-section">
            <h3>Execution Quest</h3>
            <p className="instructions-text">{recipe.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;