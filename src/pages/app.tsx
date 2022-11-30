import { Content, Footer, Hero, Navbar, Sidebar } from "../components";

const App = (): JSX.Element => {
	return (
		<div className="App">
			<Navbar />
			<Hero />

			<Content />
			<Sidebar />
			<Footer />
		</div>
	);
};

export default App;
