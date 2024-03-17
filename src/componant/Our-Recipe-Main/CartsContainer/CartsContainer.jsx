import PropTypes from "prop-types";
export const CartsContainer = ({card, handlePreparing, cart, prepareTime, totalCalories}) => {
  return (
    <div className="md:w-2/5 md:ml-5  p-2 border rounded-2xl">
      <h1 className="text-center text-2xl font-semibold p-5 border-b ">
        Want to cook: {card.length}
      </h1>
      <div className="w-1/2">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
               <th></th>
            </tr>
          </thead>
          <tbody className="md:pr-5">
            {/* row */}
            {
              card.map((card, index) => <tr key={card.id}>
                <th>{index + 1}</th>
                <td>{card.name.slice(0, 10)}</td>
                <td>{card.preparing_time} minutes</td>
                <td>{card.calories} calories</td>
                 <td> 
                  <button onClick={()=>handlePreparing(card, card.preparing_time, card.calories)} className="btn rounded-full bg-[#0BE58A] text-xs">
                    Preparing
                  </button>
                  </td>
              </tr>)
            }
           
          </tbody>
        </table>
      </div>
      <h1 className="text-center text-2xl font-semibold p-5 border-b ">
        Currently cooking: {cart.length}
      </h1>
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}

            {
              cart.map((ct, index)=> <tr key={ct.recipe_id}>
                <th>{index + 1}</th>
                <td>{ct.name}</td>
                <td>{ct.preparing_time} minutes</td>
                <td>{ct.calories} calories</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      <div className="text-right my-5 p-5">
        <p>Total Time = {prepareTime} minutes</p>
        <p>Total Calories = {totalCalories} calories</p>
      </div>
    </div>
  );
};

CartsContainer.propTypes ={
  card: PropTypes.array,
  handlePreparing: PropTypes.func,
  cart: PropTypes.array,
  totalCalories: PropTypes.number,
  prepareTime: PropTypes.number
}