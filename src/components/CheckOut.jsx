

function CheckOut({cartItems, cartAmount}) {
  return (
    <>
        <div className='cardContainer'>
          {cartItems.map(items => <div key={items.id}>{items.name} x {items.cartAmount} = ${items.price * items.cartAmount}</div>)}
        </div>
    </>
  )
}

export default CheckOut