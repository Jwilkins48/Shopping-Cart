
function Shop({handleClick, CardData}) {
  return (
    <>
      <div className='shoppingContainer'>
        {CardData.map((item) => (
          <div key={item.id} id={item.id} className='cardContainer'>
            <h3>{item.name}</h3> <p>${item.price}</p>
            <img width='200px' height='195px' src={item.src} alt={item.name}></img>
            <button className="addToCartBtn" onClick={() => handleClick(item.id) }>Add to cart</button><hr></hr>
          </div>
        ))}
      </div>
    </>
  )
}

export default Shop
