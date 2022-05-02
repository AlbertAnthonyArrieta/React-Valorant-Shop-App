

const Item = ({name, picture, price, addToCart}) => {
    return (
            <div className="card">
                <img src={picture} className="card-img-top" height={"90px"}/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{price}</p>
                    </div>
                    <div className="card-footer">
                        <button 
                        className="btn btn-outline-dark"
                        onClick={addToCart}
                        >Add to Cart</button>
                    </div>
            </div>
    )
}

export default Item