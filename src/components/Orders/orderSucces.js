import React, { Component } from "react";
import { Link } from "react-router-dom";

class OrderSuccess extends Component {
    componentDidMount() {
        setTimeout(() => this.props.history.push("/item"), 5000)
    }
    render() {
        return (
            <div className="order-success">
                Your order is successfully placed.
                <Link to={`/item`}>
                    &nbsp;Go to HomePage...
                </Link>
            </div>
        )
    }
}

export default OrderSuccess