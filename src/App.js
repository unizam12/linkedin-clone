import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home"
import Header from "./components/header/header"
import route from "color-convert/route";


function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Route path="/home">
						<Header/>
						<Home/>
					</Route>
				</Switch>
				
			</Router>
		</div>
	);
}

export default App;
