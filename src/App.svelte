<script>
	import DiamondChart from './DiamondPlot.svelte';
	import data from './diamond_dat.js'
	import { Select, Label } from 'flowbite-svelte';

	export let name;

	let years_in_data = Object.keys(data)

	let years = []
	
	for (let i in years_in_data) {
		years.push({
			'value': years_in_data[i],
			'name': `${years_in_data[i]}-${parseInt(years_in_data[i])+5}`
		}
		)
	}


	let year = '1885';

	
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>New allotax is on its way</p>
	
	<Label>Select an option
		<Select class="mt-2" items={years} bind:value={year} />
	</Label>
	

	<div class='chart'>
		<DiamondChart diamond_dat={data[year]} />
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
