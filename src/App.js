import React from "react"
import "./App.css"
import ClassCounter from "./components/ClassCounter"
import HookCounter from "./components/HookCounter"
import HookCounter2 from "./components/HookCounter2"
import HookCounter3 from "./components/HookCounter3"
import HookCounter4 from "./components/HookCounter4"

function App() {
	return (
		<div className="App">
			<ClassCounter />
			<hr />
			<HookCounter />
			<hr />
			<HookCounter2 />
			<hr />
			<HookCounter3 />
			<hr />
			<HookCounter4 />
		</div>
	)
}

export default App
