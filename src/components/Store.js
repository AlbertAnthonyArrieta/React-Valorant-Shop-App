import Item from "./Item"



const Store = ({ addToCart, items }) => {

    //create the list of items

    return (
        <div className="container">
            <h1>WELCOME TO THE VALORANT STORE</h1>
            <br/>
            <br/>
            
            <div className="card-columns">
                {items.filter(it => it.cart === false).map((item) => (
                <Item 
                item={item}
                addToCart={addToCart}
                />
                ))}
            </div>
        </div>
    )
}

export default Store