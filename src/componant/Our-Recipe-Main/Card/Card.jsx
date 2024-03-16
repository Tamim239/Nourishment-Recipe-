import PropTypes from "prop-types";
import { IoMdTime } from "react-icons/io";
import { RiFireLine } from "react-icons/ri";
export const Card = ({ card, handleWantToCook }) => {
  const {recipe_image, name, description, ingredients, preparing_time, calories} = card
  console.log(card.length);
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl p-4 border rounded-2xl h-[700px]">
        <figure>
          <img
            src={recipe_image}
            alt="recipe"
            className="h-48 w-full"
          />
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <hr />
          <h3 className="text-xl font-medium text-[#282828]">Ingredients: {ingredients.length}</h3>
          <ul className="list-disc ml-3">
            {
              ingredients.map((ing, index) =>  <li key={index}>{ing}</li>)
            }
          </ul>
          <hr />
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 text-base">
              <span><IoMdTime /></span>
              <p>{preparing_time} minutes</p>
             </div>
             <div className="flex items-center gap-2 text-base">
              <span><RiFireLine /></span>
              <p>{calories} calories</p>
             </div>

          </div>

          <div className="card-actions">
            <button onClick={()=>handleWantToCook(card)} className="btn rounded-full bg-[#0BE58A]">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  handleWantToCook: PropTypes.func
};
