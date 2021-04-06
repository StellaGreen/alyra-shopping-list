import { useState } from "react"
import AddPopularProduct from "./AddPopularProduct"
import ShoppingList from "./ShoppingList"
import AddProductForm from "./AddProductForm"

const ShoppingApp = () => {
  const [shopping, setShopping] = useState(["cumin", "curry"])
  const [filter, setFilter] = useState("")
  const addToShoppingList = (product) => {
    setFilter("")
    setShopping([...shopping, product])
  }

  const removeFromShoppingList = (product) => {
    setShopping(shopping.filter((el) => el !== product))
  }
  return (
    <main className="row">
      <section className="col-lg-8">
        <ShoppingList
          filter={filter}
          setFilter={setFilter}
          shopping={shopping}
          removeFromShoppingList={removeFromShoppingList}
        />
      </section>
      <section className="col-lg-4">
        <div className="bg-light border p-4">
          <h2 className="mb-3 h4">Ajouter un produit :</h2>

          <AddProductForm
            shopping={shopping}
            addToShoppingList={addToShoppingList}
          />
          <AddPopularProduct
            shopping={shopping}
            addToShoppingList={addToShoppingList}
            removeFromShoppingList={removeFromShoppingList}
          />
        </div>
      </section>
    </main>
  )
}

export default ShoppingApp
