import React from "react";
import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";

const prices = {
  product1: 59,
  product2: 89,
  product3: 99,
  product4: 79,
};
class Shopping extends React.Component {
  state = {
    products: {
      product1: 0,
      product2: 0,
      product3: 0,
      product4: 0,
    },

    totalPrice: 0,
  };

  addProductHandler = (type) => {
    const prevcount = this.state.products[type];
    const updateCount = prevcount + 1;
    const updtateProducts = {
      ...this.state.products,
    }
    updtateProducts[type] = updateCount;
    const proceAdd = prices[type];
    const prevPrice = this.state.totalPrice;
    const newPrice = prevPrice + proceAdd;
    this.setState({ totalPrice: newPrice, products: updtateProducts});
    console.log('Add Product');
  }

  removeProductHandler = (type) =>{
    const prevcount = this.state.products[type];
    const updateCount = prevcount - 1;
    const updtateProducts = {
      ...this.state.products,
    }
    updtateProducts[type] = updateCount;
    const proceSub = prices[type];
    const prevPrice = this.state.totalPrice;
    const newPrice = prevPrice - proceSub;
    this.setState({ totalPrice: newPrice, products: updtateProducts});
    console.log('Remove Product');
  }

  render() {
    return (
      <Wrapper>
        <Controls productAdd={this.addProductHandler}
            productRemove={this.removeProductHandler}
        />
      </Wrapper>
    );
  }
}

export default Shopping;
