
function Shop({handleClick, CardData}) {
  return (
    <>
      <div className='shoppingContainer'>
        {CardData.map((item) => (
          <div key={item.id} id={item.id} className='cardContainer'>
            <img width='200px' height='195px' src={item.src} alt={item.name}></img>
            <button onClick={() => handleClick(item.id) }>Add to cart</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Shop
