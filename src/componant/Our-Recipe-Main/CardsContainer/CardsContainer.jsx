import { useEffect, useState } from "react"
import { Card } from "../Card/Card";
import PropTypes from "prop-types";

export const CardsContainer = ({handleWantToCook}) => {
const [cards, setCards] = useState([]);

useEffect(()=>{
 fetch('recipe.json')
 .then(res => res.json())
 .then(data => setCards(data))
},[])


  return (
    <div className="grid grid-cols-2 gap-4 w-3/5">
        
        {
            cards.map(card => <Card 
             key={card.recipe_id}
             card={card}
             handleWantToCook={handleWantToCook}
            ></Card>)
        }

    </div>
  )
}

CardsContainer.propTypes ={
  handleWantToCook: PropTypes.func
}