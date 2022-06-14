

function CheckOut({cartItems}) {
  return (
    <>
        <div className='checkOutContainer'>

          <h2 className="checkoutTitle">Check Out</h2>
          {cartItems.map(items => <div className="checkOutItem" key={items.id}>{items.name} x {items.cartAmount} = ${items.price * items.cartAmount}</div>)}

          <h2 className="total">Total:</h2>
        </div>
    </>
  )
}

export default CheckOut