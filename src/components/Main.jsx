import React, { useEffect } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../ai";

export default function Main(){
    const [ingredients, setIngredients] = React.useState(["Mushroom", "Basil", "Cheese", "Pasta"])
    const [recipe, setRecipe] = React.useState("")

    const recipeSection = React.useRef(null)

    useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    },[recipe])

    console.log(useEffect);
    

    function addIngredient (formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients((prevIngredients)=>[...prevIngredients,newIngredient])
    }

    async function getRecipe(){
        const aiRecipe = await getRecipeFromMistral(ingredients)
        setRecipe(aiRecipe)
    }

    return(
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && 
                <IngredientsList
                    ref = {recipeSection}
                    ingredients = {ingredients} 
                    getRecipe={getRecipe}
                />}

            {recipe && <ClaudeRecipe recipe = {recipe}/>}
        </main>
    )
}