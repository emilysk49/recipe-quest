export const getIngredients = (recipe) => {
    if (!recipe) return [];

    const ingredients = [];
    // TheMealDB tem limite maximo de 20 ingredientes
    for (let i = 1; i <= 20; i++) {
        const name = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];

        // trim() -> tira espaços do cantos
        if (name && name.trim() !== "") {
            ingredients.push({
                id: i,
                name: name,
                measure: measure ? measure.trim() : ""
            })
        }
    }

    return ingredients;
}