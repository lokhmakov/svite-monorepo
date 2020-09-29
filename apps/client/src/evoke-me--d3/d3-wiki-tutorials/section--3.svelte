<script>
  // https://bost.ocks.org/mike/join/

  import * as d3 from 'd3'
  import {onMount} from 'svelte'

  const data = [
    {x: 1.0, y: 1.1},
    {x: 2.0, y: 2.5},
  ]

  function main1() {
    const svg = d3.select(`svg`)

    const d = data[0]

    svg.append('circle').attr('cx', d.x).attr('cy', d.y).attr('r', 2.5)

    svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', function (d) {
        return d.x
      })
      .attr('cy', function (d) {
        return d.y
      })
      .attr('r', 2.5)
  }

  function main2() {
    const svg = d3.select(`svg`)

    const circle = svg.selectAll('circle').data(data)

    circle.exit().remove()

    circle
      .enter()
      .append('circle')
      .attr('r', 2.5)
      .merge(circle)
      .attr('cx', function (d) {
        return d.x
      })
      .attr('cy', function (d) {
        return d.y
      })
  }

  onMount(main2)
</script>

<svg width="720" height="120">
  <circle cx="40" cy="60" r="10" />
</svg>
