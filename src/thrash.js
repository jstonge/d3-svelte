	// ticks for x axis - first day of each month found in the data
	// let xTicks = [];
	
    // data.forEach(d => {
		// 	if(d.date.getDate() == 1) {
		// 		xTicks.push(d.date);
		// 	}
		// })
		
	// x axis labels string formatting
	// let xLabel = (x) => 
	// 	monthNames[x.getMonth()] + ' 20' + x.getYear().toString().substring(x.getYear(), 1)
		
	// y ticks count to label by 5's
	// let yTicks = [];
	
    // for (let i = Math.round(extentY[0]); i < Math.round(extentY[1] + 1); i=i+5) {
	// 	yTicks.push(Math.floor(i/5)*5);
	// }
	
	// d's for axis paths
	// let xPath = `M${margin.left + .5},6V0H${width - margin.right + 1}V6`
	// let yPath = `M-5.5,${height - 25}H-5.5V-5.5H`

	// bind:this={el} transform="translate({margin.left}, {margin.top})"

	// <!-- x axis -->
    // <g transform="translate(0, {height-15})">
    //             <path stroke="currentColor" d="{xPath}" fill="none" />
                
    //             {#each xTicks as x} 
    //                 <g class="tick" opacity="1" transform="translate({xScale(x)},0)">
    //                     <line stroke="currentColor" y2="6" />
    //                     <text fill="currentColor" y="4" dy="0.71em" x="1">
    //                         {xLabel(x)}
    //                     </text>
    //                 </g>
    //             {/each}

        //   <!-- y axis -->
        //   <g transform="translate({margin.left}, 0)">
        //         <path stroke="currentColor" d="{yPath}" fill="none" />
        
        //         {#each yTicks as y} 
        //             <g class="tick" opacity="1" transform="translate(0,{yScale(y)})">
        //                 <line stroke="currentColor" x2="-5" />
        //                 <text dy="0.32em" fill="currentColor" x="-{margin.right+5}">
        //                     {y}
        //                 </text>
        //             </g>
        //          {/each}
        //     </g>

        // <svg bind:this={el} transform="translate({margin.left}, {margin.top})" height={height}>