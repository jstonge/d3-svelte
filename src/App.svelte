<script>
	import DiamondChart from './DiamondPlot.svelte';
	import data from './data.js';

	import data2 from './diamond_dat.js'

	export let name;

	import { Select, Label } from 'flowbite-svelte';
	
	let cities = [
		{ value: "austin", name: "austin" },
		{ value: "ny", name: "New York" },
		{ value: "sf", name: "San Francisco" }
	];
	
	let city = 'austin';

	const printCity = () => {
		console.log(city)
		console.log(data.map(d => d[city]))
	}

	// <div class='chart'>
	// 	<LineChart data={data} city={city}/>
	// </div>
	
</script>


<main>
	<h1>Hello {name}!</h1>
	<p>New allotax is on its way</p>
	
	<Label>Select an option
		<Select class="mt-2" items={cities} bind:value={city} on:change={printCity} />
	</Label>
	

	<div class='chart'>
		<DiamondChart diamond_dat={data2} />
	</div>

</main>



<style>
	h1 {
		font: 2.5rem 'Alata', sans-serif;
		text-align: center;
		margin: 1rem 0;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 48rem;
		margin: 0 auto;
	}

	.chart {
		width: 100%;
		position: relative;
		margin-bottom: 5rem;
	}

</style>
