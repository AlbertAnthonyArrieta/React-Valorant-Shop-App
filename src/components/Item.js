

const Item = ({item, addToCart}) => {
    return (
            <div className="card">
                <img src={item.picture} className="card-img-top" height={"90px"}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.price}</p>
                    </div>
                    <div className="card-footer">
                        <button 
                        className="btn btn-outline-dark"
                        onClick={() => addToCart(item.id)}
                        >Add to Cart</button>
                    </div>
            </div>
    )
}

export default Item