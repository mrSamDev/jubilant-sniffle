import Layout from "./components/shared/layout";
import { Routes, Route } from "react-router-dom";
import Table from "./pages/table";
import Graph from "./pages/graph";
import Page from "./components/shared/page";

function App() {
	return (
		<Layout>
			<Routes>
				<Route
					path="/"
					element={
						<Page title="Table">
							<Table />
						</Page>
					}
				/>
				<Route
					path="graph"
					element={
						<Page title="Graph">
							<Graph />
						</Page>
					}
				/>
			</Routes>
		</Layout>
	);
}

export default App;
