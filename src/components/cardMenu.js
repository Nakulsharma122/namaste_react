const cardMenu = (props) =>{
    const {resMenu} = props;
    console.log(resMenu);
    const {resName,cuisine,rating} = resMenu;
    // const {cloudinaryImageId,name,avgRating}= resData?.info;
    
    return(
      <div className="res-card" style={{  backgroundColor : "#f0f0f0"}}>
        <img 
        className="res-logo"
        alt ="res-logo"
        src={CDN_URL+img}/>
        <h3 className="res-name">{resName}</h3>
        {/* <h3 className="res-name">{name}</h3> */}
        <h4>{cuisine }</h4>
        {/* <h4>{avgRating}</h4> */}
        <h4>38 minutes </h4>
      </div>
    );
  };
  export default cardMenu;