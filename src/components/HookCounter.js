import React, { useState } from "react"

// Step 1
function HookCounter() {
	/**
	 *  Steps 2 and 3
	 *  count: state variable
	 *  setCount: method that updates the state variable
	 */

	const [count, setCount] = useState(0) // Array Destructuring

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>HookCounter: {count}</button>
		</div>
	)
}

export default HookCounter
