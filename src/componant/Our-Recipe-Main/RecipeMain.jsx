import { useState } from "react";
import { CardsContainer } from "./CardsContainer/CardsContainer";
import { CartsContainer } from "./CartsContainer/CartsContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = () => toast("Already exist!");

export const RecipeMain = () => {
  const [card, setCard] = useState([]);
  const [cart, setCart] = useState([]);


  const handleWantToCook = (data) => {
    const isExist = card.find((dt) => dt.recipe_id == data.recipe_id);
    if (!isExist) {
      setCard([...card, data]);
    } else {
      notify();
    }
  };

  const handlePreparing = (data) => {
    // setCart([...cart, data])
    const newCart = card.filter(c => c.recipe_id != data.recipe_id);
    const newRemoveCart = card.find(rc => rc.recipe_id == data.recipe_id)
    if(newCart){
      setCart([...cart, newRemoveCart])
      setCard(newCart)
    }
  }
  console.log(cart)
  return (
    <div className="w-4/5 mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Our Recipes</h1>
        <p className="md:w-2/3 mx-auto">
          Indulge in a tantalizing array of culinary creations with Our Recipes.
          From savory delights to sweet sensations, our collection offers a
          diverse range of dishes to satisfy every palate and occasion.{" "}
        </p>
      </div>
      <div className="flex justify-between my-10">
        <CardsContainer handleWantToCook={handleWantToCook}></CardsContainer>
        <ToastContainer />
        <CartsContainer card={card} cart={cart} handlePreparing={handlePreparing}></CartsContainer>
      </div>
    </div>
  );
};
