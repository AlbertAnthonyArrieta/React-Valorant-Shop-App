import Item from "./Item"

const Cart = ({removeItem, items}) => {
    return (
        <div className="container">
        <h1>YOUR CART</h1>
        <br/>
        <br/>
        
        <div className="card-deck">
            {items.filter(it => it.cart === true).map((item) => (
            <Item 
            item={item}
            addToCart={removeItem}
            />
            ))}
        </div>
    </div>
    )
}

export default Cart