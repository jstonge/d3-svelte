<script>
    import * as d3 from 'd3';

	export let height;
	export let scale;
	
	var canvas_mult_size = 1.02;

	let transform;
	let g;

	$: {

		d3.select(g)
		  .call(d3.axisRight(scale))
		  .call((g) => g.select(".domain").remove())
		  .attr("transform", `translate(${height*canvas_mult_size-100}, 0) scale(-1, 1)`)
		  .selectAll('text')
		  .attr('dx', -28) 
		  .attr('dy', 15)
		  .attr('transform', 'rotate(45)')
		  .attr('font-size', 10)
	}
</script>

<g class='axisY' bind:this={g} {transform} />