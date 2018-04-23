// Get reference to elements on the page
const svg = d3.select('svg');
const width = svg.attr('width');
const height = svg.attr('height');
const g = svg.append("g");

const stackLabelHeight = 50;

// Scales
const x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
const y = d3.scaleLinear().range([height, 0]);
const integerColorScale = d3.interpolateRdBu;
const stringLengthColorScale = d3.interpolateGreens;

// Define the tooltips
 const tip = d3.tip()
   .attr('class', 'd3-tip')
   .offset([-10, 0])
   .html(function(d) {
     return `<ul class="tipList">
       <li>Tool Tip Goes Here</li>
     </ul>`;
   })


 // Draw the plots
 function drawState(pushState) {

   console.log(pushState);

   g.selectAll("*").remove();

   var types = Object.keys(pushState);

   x.domain(types);
   y.domain([0, d3.max(pushState, function(d) { return d.length; })]);

   var typeBoxes = g.selectAll(".typeBox")
    .data(types)
    .enter()
      .append("rect")
      .attr("class", "typeBox")
      .attr("width", x.bandwidth())
      .attr("height", stackLabelHeight)
      .attr("transform", d =>  `translate(${x(d)}, ${height - stackLabelHeight})`)
      .style("fill", "grey")

   var typeBoxes = g.selectAll(".typeLabel")
    .data(types)
    .enter()
      .append("text")
      .attr("class", "typeLabel")
      .attr("x", d => x(d) + (x.bandwidth() / 2))
      .attr("y", height - (stackLabelHeight / 4))
      .text(d => d)
      .attr("font-family", "sans-serif")
      .attr("font-size", stackLabelHeight / 2)
      .attr("text-anchor", "middle")
      .attr("fill", "white");


 }
