import React from 'react';

export default class Buffet extends React.Component {
  state = {
    items: [],
    cost: [],
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <input
            type="checkbox"
            name="orders"
            id={12}
            value="beef"
            onChange={this.getFood}
            checked={this.state.items.includes('beef')}
          />
          <label>Shabu Shabu Beef</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="orders"
            id={7.5}
            value="chicken"
            onChange={this.getFood}
            checked={this.state.items.includes('chicken')}
          />
          <label>Chicken Fillet</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="orders"
            id={10}
            value="fish"
            onChange={this.getFood}
            checked={this.state.items.includes('fish')}
          />
          <label>Fish Fillet</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="orders"
            id={5.5}
            value="mushrooms"
            onChange={this.getFood}
            checked={this.state.items.includes('mushrooms')}
          />
          <label>Assorted mushhrooms</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="orders"
            id={2.5}
            value="spinach"
            onChange={this.getFood}
            checked={this.state.items.includes('spinach')}
          />
          <label>Spinach</label>
        </div>
        <h1>Total:{this.calculateTotal()}</h1>
      </React.Fragment>
    );
  }

  getFood = (e) => {
    if (!this.state.items.includes(e.target.value)) {
      let cloneItems = [...this.state.items];
      cloneItems.push(e.target.value);
      let cloneCost = [...this.state.cost];
      cloneCost.push(parseFloat(e.target.id));
      this.setState({
        items: cloneItems,
        cost: cloneCost,
      });
    } else {
      let cloneItems = [...this.state.items];
      // First, find the index of the element that matches e.target.value, then use splice to remove one element at that index.
      // arr.splice(4,1) removes 1 element at the 4th index.
      cloneItems.splice(
        cloneItems.findIndex((i) => i === e.target.value),
        1
      );
      let cloneCost = [...this.state.cost];
      cloneCost.splice(
        cloneCost.findIndex((i) => i === parseFloat(e.target.id)),
        1
      );
      this.setState({
        items: cloneItems,
        cost: cloneCost,
      });
    }
  };

  calculateTotal = () => {
    let cost = this.state.cost;

    if (cost.length > 0) {
      const reducer = (a, b) => a + b;
      return ' $' + cost.reduce(reducer);
    } else {
      return null;
    }
  };
}
