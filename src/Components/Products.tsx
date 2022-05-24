import React, { Component } from "react"
import { IProduct } from "./Home"

interface IProps {
  products: Array<IProduct>
}

class Products extends Component<IProps> {
  render() {
    return (
      <div className="products__container">
        {this.props?.products?.map((product: any) => (
          <div className="products_card__container" key={product.id}>
            <div className="products_flex__div">
              <div>
                <h2>ID: {product.id}</h2>
              </div>
              <div>
                <h2>SKU: {product.sku}</h2>
              </div>
            </div>
            <div className="products_flex__div">
              <div>
                <p>
                  <strong>Name:</strong> {product.name}
                </p>
                <p>
                  <strong>Description:</strong> {product.description}
                </p>
                <p>
                  <strong>Price:</strong> {product.price}
                </p>
              </div>
            </div>
            <div className="products_flex__div">
              <div>
                <h3>CategoryId: {product.categoryId}</h3>
              </div>
              <div>
                <h3>StockId: {product.stockId}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Products

