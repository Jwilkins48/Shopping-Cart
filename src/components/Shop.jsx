
function Shop({handleClick, CardData}) {
  return (
    <>
      <div className='shoppingContainer'>
        {CardData.map((item) => (
          <div key={item.id} id={item.id} className='cardContainer'>
            <div className="leftShop">
              <h3>{item.name}</h3> <p>${item.price}</p>
              <img width='300px' height='280px' src={item.src} alt={item.name}></img>
            </div>
            <div className="rightShop">
              <p className="rightShopMessage">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod dolor sit amet, consectetur adipiscing elit tempor incididunt eget est lorem
               eget est loremeget est lorem ut labore dolor sit amet, consectetur adipiscing elit et dolore magna aliqua. Dolor magna eget est lorem
               magna aliqua.</p>
              <button className="addToCartBtn" onClick={() => handleClick(item.id) }>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Shop
