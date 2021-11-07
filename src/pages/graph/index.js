import Page from "../../components/shared/page";
import { Scatter } from "react-chartjs-2";
export default function Graph() {
	return (
		<Page title="Graph">
			<ScatterChart />
		</Page>
	);
}

const rand = () => Math.round(Math.random() * 20 - 10);

const data = {
	datasets: [
		{
			label: "A dataset",
			data: [
				{ x: rand(), y: rand() },
				{ x: rand(), y: rand() },
				{ x: rand(), y: rand() },
				{ x: rand(), y: rand() },
				{ x: rand(), y: rand() },
				{ x: rand(), y: rand() },
				{ x: rand(), y: rand() },
				{ x: rand(), y: rand() },
				{ x: rand(), y: rand() },
				{ x: rand(), y: rand() },
				{ x: rand(), y: rand() },
				{ x: rand(), y: rand() },
				{ x: rand(), y: rand() },
				{ x: rand(), y: rand() },
			],
			backgroundColor: "rgba(255, 99, 132, 1)",
		},
	],
};

const ScatterChart = () => (
	<>
		<Scatter
			data={data}
			options={{
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true,
							},
						},
					],
				},
			}}
		/>
	</>
);
