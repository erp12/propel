// Get reference to elements on the page
const svg = d3.select('svg');
const width = svg.attr('width');
const height = svg.attr('height');


//Data Variables


// Define a margin to give space for axis labels.
const margin = { left: 30, right: 0, top: 0, bottom: 30 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

// Scales
const integerColorScale = d3.interpolateRdBu
const stringLengthColorScale = d3.interpolateGreens

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
   function draw() {

     svg.selectAll("*").remove();

     d3.json("WHAT GOES HERE?",
      function(d) {

      }, function(error, data) {
        if (error) throw error;
      }
   }
