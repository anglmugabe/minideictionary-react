import "./App.css";
import Dictionary from "./Dictionary";

function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-form">
					<Dictionary />
				</header>

				<footer className="App-footer">
					{" "}
					This website was coded by <a href=""> Angela Mugabe </a>, is{" "}
					<a href="https://github.com/anglmugabe/minideictionary-react">
						open-sourced{" "}
					</a>
					, and hosted on{" "}
					<a href="https://minidicionarioreact.netlify.app/">Netlify </a>
				</footer>
			</div>
		</div>
	);
}

export default App;
