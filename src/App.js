import Layout from "./components/shared/layout";
import { Routes, Route } from "react-router-dom";
import Table from "./pages/table";
import Graph from "./pages/graph";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Table />} />
				<Route path="graph" element={<Graph />} />
			</Routes>
		</Layout>
	);
}

export default App;
