import { Component } from "react";

type CounterProps = {
  message?: String;
};

type CounterState = {
  count: number;
};

class Counter extends Component<CounterProps, CounterState> {
  /**
   *
   */
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message}
        {this.state.count}
      </div>
    );
  }
}

export default Counter;
