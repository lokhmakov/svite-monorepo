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
      .join(
        (enter) =>
          enter.append('circle').attr('r', 10).attr('cx', 100).attr('cy', 100), // useful default values for animation
      )

    circles
      .transition()
      .duration(1000) // duration of the animation
      .delay(200) // delay animation start
      .attr('cx', (d, i) => d * 50)
      .attr('cy', (d, i) => 40 + i * 100)
      .transition() // start another transition after the first one ended
      .attr('r', 20)
  }

  onMount(main1)
</script>

<style>
  :global(circle) {
    stroke-width: 5;
  }
</style>

<svg width="500" height="500" />
