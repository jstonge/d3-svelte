<script>
	import * as d3 from 'd3';
	import AxisY from './AxisY.svelte';
	import AxisX from './AxisX.svelte';

	// let el;

	export let diamond_dat;

	var height = 600;
	var width = 600;
	// var bin_size = 1.5
	// var ncells = 60
	// var margin = ({ top: 100, left: 0, right: 140, bottom: 140 });

	const max_xy   = d3.max(diamond_dat, d => d.x1)
	const max_rank = d3.max(diamond_dat, (d) => d.rank_L[1]);
    const max_val  = 140
    const color_scale = d3.scaleSequentialLog().domain([max_val, 1]).interpolator(d3.interpolateInferno)
	
    const xyDomain   = [1, 10**Math.ceil(Math.max(Math.log10(max_rank))-1)];
    const xy  = d3.scaleBand().domain(d3.range(60)).range([0, 600])
	const xyScale = d3.scaleLog().domain(xyDomain).range([0, 512])
</script>

<div class='diamond-chart'>
        <svg width={width} height={height} transform="translate(200, 150)  scale (-1,1) rotate(45)">
			<AxisY {height} scale={xyScale}/>
			<AxisX {height} scale={xyScale} max_xy={max_xy} xy={xy}/>
			{#each diamond_dat as d}
            	<rect
				x={xy(d.x1)}
				y={xy(d.y1)}
				width={xy.bandwidth()}
				height={xy.bandwidth()}
				fill={color_scale(d.value)}
				stroke="black"
				stroke-width=0.3
			/>
			{/each}
        </svg>
</div>



