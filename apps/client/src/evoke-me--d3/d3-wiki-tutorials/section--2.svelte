<script>
  // https://bost.ocks.org/mike/circles/

  import * as d3 from 'd3'
  import {onMount} from 'svelte'

  function main1() {
    const circle = d3.selectAll(`circle`).data([32, 57, 112, 293])

    circle.style('fill', 'steelblue')
    circle.attr('r', 30)

    // circle.attr('cx', function () {
    //   return Math.random() * 720
    // })

    circle.attr('r', function (d) {
      return Math.sqrt(d)
    })

    circle.attr('cx', function (d, i) {
      return i * 100 + 30
    })
  }

  function main2() {
    const svg = d3.select('svg')

    svg
      .selectAll('circle')
      .style('fill', 'steelblue')
      .data([32, 57, 112, 293])
      .enter()
      .append('circle')
      .attr('cy', 60)
      .attr('cx', function (d, i) {
        return i * 100 + 30
      })
      .attr('r', function (d) {
        return Math.sqrt(d)
      })

    const circle = svg.selectAll(`circle`).data([32, 57])
    circle.exit().remove()
  }

  onMount(() => {
    main2()
  })
</script>

<svg width="720" height="120">
  <circle cx="40" cy="60" r="10" />
  <circle cx="80" cy="60" r="10" />
  <circle cx="120" cy="60" r="10" />
</svg>
