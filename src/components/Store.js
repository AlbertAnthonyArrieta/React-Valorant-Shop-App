import Item from "./Item"



const Store = ({ addToCart, items }) => {

    //create the list of items

    return (
        <div className="container">
            <h1>WELCOME TO THE VALORANT STORE</h1>
            <br/>
            <br/>
            
            <div className="card-deck">
                {items.map((item) => (
                <Item 
                name={item.name} 
                picture={item.picture} 
                price={item.price} 
                addToCart={addToCart} />
                ))}
            </div>
        </div>
    )
}

export default Store