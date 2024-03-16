import { useState } from "react"
import { CardsContainer } from "./CardsContainer/CardsContainer"
import { CartsContainer } from "./CartsContainer/CartsContainer"

export const RecipeMain = () => {
  const [card, setCard] = useState([]);


const handleWantToCook = (data) => {
  setCard([...card, data])
}
  
  return (
    <div className="w-4/5 mx-auto">
          <div className="text-center">
        <h1 className="text-3xl font-semibold">Our Recipes</h1>
        <p className="md:w-2/3 mx-auto">Indulge in a tantalizing array of culinary creations with Our Recipes. From savory delights to sweet sensations, our collection offers a diverse range of dishes to satisfy every palate and occasion. </p>
      </div>
      <div className="flex justify-between my-10">
        <CardsContainer handleWantToCook={handleWantToCook}></CardsContainer>
        <CartsContainer card={card}></CartsContainer>
      </div>

    </div>
  )
}
