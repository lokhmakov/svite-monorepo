<script>
  // Nested Selections
  // https://bost.ocks.org/mike/nest/

  import * as d3 from 'd3'
  import {onMount} from 'svelte'

  console.log(`d3.version`, d3.version)

  const width = document.body.clientWidth

  function main1() {
    const td = d3.selectAll(`tbody tr`).selectAll(`td`)

    td.style('color', function (d, i, j) {
      return i ? null : 'red'
    })
  }

  function main2() {
    const matrix = [
      [2, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
    ]

    const table = d3.select('table')

    const tr = table.selectAll('tr').data(matrix).enter().append('tr')

    const td = tr
      .selectAll('td')
      .data((d) => d)
      .enter()
      .append('td')
      .text((d) => d)

    td.style('color', function (d, i) {
      return i ? null : 'red'
    })
  }

  onMount(main2)
</script>

<table />
