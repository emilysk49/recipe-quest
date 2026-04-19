import './Favorites.css'
import { IoHeart } from "react-icons/io5"
// import axios from 'axios'
// import {useState, useEffect} from 'react'

const Favorites = () => {

  //const [selectedRecipe, setSelectedRecipe] = useState(null)
  // const [meal, setMeal] = useState(null);

  // useEffect(() => {
  //   // 1. inicia requisição HTTP GET no URL => retorna Promise (JS nao fica parado)
  //   // 2. mas proximo método "then" fica esperando até resposta de API
  //   // 3. se API responde com sucesso (200) objeto response chega
  //   // 4. seta meals com response.data.meals[0]
  //   // Erro: Se o servidor da API cair, se a internet falhar ou se a URL estiver errada, a Promise será "rejeitada"
  //   axios
  //     .get("https://www.themealdb.com/api/json/v1/1/random.php")
  //     .then((response) => {
  //       console.log("Dados da API:", response.data);
  //       setMeal(response.data.meals[0]);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  const mockFavorites = [
    {
      idMeal: "52855",
      strMeal: "Banana Pancakes",
      strCategory: "Dessert",
      strArea: "American",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",
    },
    {
      idMeal: "52944",
      strMeal: "Escovitch Fish",
      strCategory: "Seafood",
      strArea: "Jamaican",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1520084413.jpg",
    },
    {
      idMeal: "52971",
      strMeal: "Kafteji",
      strCategory: "Vegetarian",
      strArea: "Tunisian",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1525872624.jpg",
    },
    {
      idMeal: "52971",
      strMeal: "Kafteji",
      strCategory: "Vegetarian",
      strArea: "Tunisian",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1525872624.jpg",
    },
    {
      idMeal: "52971",
      strMeal: "Kafteji",
      strCategory: "Vegetarian",
      strArea: "Tunisian",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1525872624.jpg",
    },
    {
      idMeal: "52971",
      strMeal: "Kafteji",
      strCategory: "Vegetarian",
      strArea: "Tunisian",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1525872624.jpg",
    },
  ];

  // if (!meal) return <p>Carregando dados da API...</p>;

  return (
    <div className="container-favorites">
      {mockFavorites.map((recipe) => (
        <div key={recipe.idMeal} className="card-glass favorites">
          <div className="image-wrapper">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              style={{ width: "100%" }}
            />
            <button className="btn-heart">
              <IoHeart />
            </button>
          </div>
          <div className="info favorites">
            <h3>{recipe.strMeal}</h3>
            <p>Categoria: {recipe.strCategory}</p>
            <p>Origem: {recipe.strArea}</p>
          </div>
          <button className="btn-view">Ver Receita</button>
        </div>
      ))}
    </div>
  );
}

export default Favorites;