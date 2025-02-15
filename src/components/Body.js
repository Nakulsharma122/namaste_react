import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {resList} from "../utilis/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body =() =>{
    // const arr = useState(reslist);
    // const listOfRestaurants = arr[0];
    // const setListOfRestaurants = arr[1];
    //                           This is a same as below line listOfRestaurants . 
    //   😂

const [listOfRestaurants,setListOfRestaurants]=useState(resList);
const [filteredRestaurant,setFilteredRestaurant] = useState(resList);
const [searchText, setSearchText] = useState("");

// console.log(filteredRestaurant);
// useEffect(() =>{
//     fetchData();
// },[]);

//   const fetchData = async () =>{
//   const data  = await fetch 
// (
//   "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9715987&lng=77.5945627&carousel=true&third_party_vendor=1"
// );
//   const json = await data.json();
//   console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
//   setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//   setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// };
// const fetchData = async () => {
//   try {
//     const response = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.5041304&lng=77.6554802&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const json = await response.json();

//     console.log('Full JSON response:', json);

//     const restaurants = json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//     console.log('Extracted restaurants:', restaurants);

//     if (!restaurants) {
//       throw new Error('Restaurants data not found in the API response.');
//     }

//     setListOfRestaurants(restaurants);
//     setFilteredRestaurant(restaurants);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };


return (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box"
            value={searchText} onChange={(e) =>{
              setSearchText(e.target.value);
            }}/>

            <button 
            onClick={()=>{
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.resName.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}>
              search</button>

          </div>
            <button className="filter-btn"
            onClick={()=>{
                const filteredList = listOfRestaurants.filter(
                    (res) => res.rating > 4.5
                );
                
                setFilteredRestaurant(filteredList);

            }}>
                Top Rated Restaurants 
                </button> 
            </div>
          <div className="res-container">
              {filteredRestaurant.map((res) =>(
                <Link key={res.id} to={`/restaurants/${res.id}`}>
                 <RestaurantCard resData = {res}/>
                 </Link>
            
         
                ) )}
            
        </div>
      </div>
)    
    
  }

  export default Body
