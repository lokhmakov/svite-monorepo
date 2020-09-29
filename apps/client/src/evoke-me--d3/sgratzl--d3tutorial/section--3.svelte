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
        (enter) => {
          const circlesEnter = enter.append('circle')
          circlesEnter.attr('r', 10)
          return circlesEnter
        },
        (update) => update,
        (exit) => {
          return exit.remove()
        },
      )

    circles.attr('cx', (d, i) => d * 10)
    circles.attr('cy', (d, i) => i * 50)
  }

  function main2() {
    const data = [1, 2, 3]
    d3.select('svg')
      .selectAll('circle')
      .data(data)
      .join((enter) => enter.append('circle').attr('r', 10))
      .attr('cx', (d, i) => d * 10)
      .attr('cy', (d, i) => i * 50)
  }

  function main3() {
    const data = [1, 2, 3]
    d3.select('svg')
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('r', 10)
      .attr('cx', (d, i) => d * 10)
      .attr('cy', (d, i) => i * 50)
  }

  onMount(main3)
</script>

<svg />
