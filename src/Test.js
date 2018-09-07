import React, { Component } from 'react';


class Test extends Component {

	constructor(props){
		super(props);
		this.state= { counter : 1, data : 100, apple : 10};

	}

	Increament = () => {
		console.log('control inside Increament method');
		this.setState({counter: this.state.counter+1, data: this.state.data+1, apple: this.state.apple+1});
	}
	Decreament = () => {
		console.log('control inside Decreament method');
		this.setState({counter: this.state.counter-1, data: this.state.data-1, apple: this.state.apple-1});
	}

	render () {
		return (
			<div>
				<h3> {this.state.counter}</h3>
				<h2> {this.state.data} </h2>
				<h4> {this.state.apple} </h4>
				<button onClick={this.Increament}>Increment</button>
				<button onClick={this.Decreament}>Decreament</button>
			</div>
		);		
	}
}
export default Test;