import React, { Component } from "react"

// Step 1
class ClassCounter extends Component {
	constructor(props) {
		super(props)

		// Step 2
		this.state = {
			count: 0,
		}
	}

	// Step 3
	incrementCount = () => {
		this.setState({
			count: this.state.count + 1,
		})
	}

	render() {
		return (
			<div>
				<button onClick={this.incrementCount}>ClassCount: {this.state.count}</button>
			</div>
		)
	}
}

export default ClassCounter
