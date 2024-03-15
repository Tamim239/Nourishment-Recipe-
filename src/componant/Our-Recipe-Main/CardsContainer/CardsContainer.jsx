import { useEffect, useState } from "react"
import { Card } from "../Card/Card";

export const CardsContainer = () => {
const [cards, setCards] = useState([]);

useEffect(()=>{
 fetch('recipe.json')
 .then(res => res.json())
 .then(data => setCards(data))
},[])


  return (
    <div>
        
        {
            cards.map(card => <Card 
             key={card.recipe_id}
             card={card}
            ></Card>)
        }

    </div>
  )
}
