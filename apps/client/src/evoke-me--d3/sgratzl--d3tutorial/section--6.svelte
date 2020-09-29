<script>
  // https://github.com/sgratzl/d3tutorial
  // codepen.io/lokhmakov/pen/KKzezYN

  import * as d3 from 'd3'
  import {onMount} from 'svelte'

  function main1() {
    const data = [1, 2, 3]
    const circles = d3
      .select('svg')
      .selectAll('circle')
      .data(data)
      .join((enter) =>
        enter
          .append('circle')
          .attr('r', 10)
          .attr('cy', 40)
          .attr('cx', (d, i) => 30 + i * 30)
          .on('click', function (event, d) {
            console.log(`clicked on: ${d}`)
            const circle = d3.select(this) // can't use arrow scoping
            circle.style('stroke', 'orange')
          }),
      )
  }

  onMount(main1)
</script>

<style>
  :global(circle) {
    stroke-width: 5;
  }
</style>

<svg width="500" height="500" />
