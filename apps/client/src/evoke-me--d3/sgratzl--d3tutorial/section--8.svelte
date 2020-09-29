<script>
  // https://codepen.io/lokhmakov/pen/poyZzVj

  import * as d3 from 'd3'
  import {onMount} from 'svelte'

  function main1() {
    const width = 800
    const height = 600

    const svg = d3.select('svg')

    const g = svg
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)

    const data = [1, 2, 0.5, 1, 1.5]

    const radius = Math.min(width, height) / 2

    const color = d3.scaleOrdinal(d3.schemeCategory10)

    const arc = d3
      .arc()
      .outerRadius(radius - 10)
      .innerRadius(0)

    const pie = d3.pie()

    const pied_data = pie(data)

    const arcs = g
      .selectAll('.arc')
      .data(pied_data)
      .join((enter) =>
        enter.append('path').attr('class', 'arc').style('stroke', 'white'),
      )

    arcs.attr('d', arc).style('fill', (d, i) => color(i))
  }

  onMount(main1)
</script>

<svg width="800" height="600" />
