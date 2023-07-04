<script>
    import * as d3 from 'd3';

	export let height;
	export let scale;
	export let max_xy;
	export let xy;
	

	// Background polygons
	function draw_polygon(g, tri_coords, bg_color) {
     g.append("polygon")
        .attr("fill",bg_color)
        .attr("fill-opacity", 0.2)
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        .attr("points", tri_coords)
   }

	const blue_triangle = [
		{"x":max_xy, "y":max_xy}, {"x":0, "y":0}, {"x":0, "y":max_xy}
	].map(d => [xy(d.x)*canvas_mult_size, xy(d.y)*canvas_mult_size].join(',')).join(" ")

	const grey_triangle = [
    {"x":max_xy, "y":max_xy}, {"x":0, "y":0}, {"x":max_xy, "y":0}
	].map(d => [xy(d.x)*canvas_mult_size, xy(d.y)*canvas_mult_size].join(',')).join(" ")
	

	var canvas_mult_size = 1.02;

	let transform;
	let g;

	$: {
		g = d3.select(g)

		draw_polygon(g, grey_triangle, "grey")
		draw_polygon(g, blue_triangle, "#89CFF0")

		g
          .attr("transform", `translate(0, ${height*canvas_mult_size-100})`)
		  .call(d3.axisBottom(scale))
		  .call((g) => g.select(".domain").remove()) 
		  .selectAll('text')
		  .attr('dy', 10)
		  .attr('dx', 13)
		  .attr('transform', 'scale(-1,1) rotate(45)')
		  .attr('font-size', 10)
	}
</script>

<g class='axisX' bind:this={g} {transform} />