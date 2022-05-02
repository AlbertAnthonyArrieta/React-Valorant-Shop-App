const CartItem = ({ item, removeFromCart }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.picture} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Price: ${item.price}</p>
                        <button 
                        className="btn btn-danger" 
                        onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem