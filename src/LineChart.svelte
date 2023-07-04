<script>
	import * as d3 from 'd3';
	import Axis from './Axis.svelte';

	export let data;
	export let city;
    
	// let city = 'austin';

	// let el;

	// const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
	// 	"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	// ];
	
	// var width = 1150;
	let width;
	
	var height = 300;
	var margin = 40;
	
	data.forEach((d) => {
		d.date = d3.timeParse("%Y%m%d")(d.date);
		d.date = new Date(d.date); // x
    d.temp = ++d[city]; // y
	});

	$: xScale = d3.scaleTime()
		.domain(d3.extent(data, (d) => d.date))
		.range([margin, width - margin]);

	$: yScale = d3.scaleLinear()
	    .domain(d3.extent(data, (d) => d[city]))
		.range([height - margin, margin]);
		
	$: path = d3.line()
		.x((d) => xScale(d.date))
		.y((d) => yScale(d[city]))
		.curve(d3.curveStep);
		

</script>

<div class='line-chart' bind:clientWidth={width}>
	{#if width}
        <svg width={width} height={height}>
			<Axis {width} {height} {margin} scale={xScale} position='bottom' />
			<Axis {width} {height} {margin} scale={yScale} position='left' />
            <path
				d={path(data)}
				fill="none"
				stroke="blue"
			/>
        </svg>
	{/if}
</div>



