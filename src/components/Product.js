const Product = (props) => {
    const { product, removeFromShoppingList } = props
  
    return (
      <div className="d-flex align-items-center justify-content-between">
        {product}
        <button
          className="btn btn-sm btn-warning"
          onClick={() => removeFromShoppingList(product)}
        >
          <span role="img" aria-hidden>
            ✖️
          </span>{" "}
          ok
        </button>
      </div>
    )
  }
  
  export default Product