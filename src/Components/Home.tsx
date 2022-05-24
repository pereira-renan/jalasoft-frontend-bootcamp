import React, { Component, MouseEventHandler } from "react"
import Message from "./Message"
import Products from "./Products"

export interface IProduct {
  sku: string
  name: string
  description: string
  price: number
  categoryId: number
  stockId: number
}

type Statuses = "warning" | "error" | "info" | null

export interface IStatuses {
  status: Statuses
}

export interface IState {
  products: Array<IProduct>
  status: Statuses
}

class Home extends Component<{}, IState> {
  constructor(props: IState) {
    super(props)
    this.state = {
      products: [],
      status: null,
    }
  }

  warningAlert = () => {
    this.setState({
      status: "warning",
    })
  }

  errorAlert = () => {
    this.setState({
      status: "error",
    })
  }

  infoAlert = () => {
    this.setState({
      status: "info",
    })
  }

  closeAlert = () => {
    this.setState({
      status: null,
    })
  }

  componentDidMount() {
    fetch("http://localhost:5289/api/Products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data })
      })
  }

  render() {
    return (
      <>
        <Message status={this.state.status} />
        <Products products={this.state.products} />

        <div className="alert_flex__div">
          <div className="alert__button" onClick={this.errorAlert}>
            Show Error Alert
          </div>
          <div className="alert__button" onClick={this.warningAlert}>
            Show Warning Alert
          </div>
          <div className="alert__button" onClick={this.infoAlert}>
            Show Info Alert
          </div>
          <div className="alert__button" onClick={this.closeAlert}>
            Close Alert
          </div>
        </div>
      </>
    )
  }
}

export default Home
