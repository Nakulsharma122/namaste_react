
import {resMenu} from"../utilis/mockData";
import  "../../index.css";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=>{
const {resId} = useParams();
const restaurant = resMenu.find((item)=> item.id === resId);

if (! restaurant){
  return <div> Restaurant not found</div>
}
return (
  <div className="menu">
    <h1>{restaurant.resName}</h1>
    <h2>Cuisine: {restaurant.cuisine}</h2>
    <h3>Rating: {restaurant.rating}</h3>
    <h2>Menu</h2>
    <ul>
      {restaurant.menu.map((menuItem, index) => (
        <li key={index} className="restaurant-item">
          {menuItem}
        </li>
      ))}
    </ul>
  </div>
);
};


export default RestaurantMenu;
