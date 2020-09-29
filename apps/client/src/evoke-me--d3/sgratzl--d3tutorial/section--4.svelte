<script>
  // https://github.com/sgratzl/d3tutorial
  // codepen.io/lokhmakov/pen/KKzezYN

  import * as d3 from 'd3'
  import {onMount} from 'svelte'

  function main1() {
    // hierarchical data
    const data = [
      {name: 'a', arr: [1, 2, 3]},
      {name: 'b', arr: [3, 2, 4]},
    ]

    const groups = d3.select('svg').selectAll('g').data(data).join('g')

    groups.attr('transform', (d, i) => `translate(${i * 20 + 10},10)`)

    // select all circles within each group and bind the inner array per data item
    const circles = groups
      .selectAll('circle')
      .data((d) => d.arr)
      .join('circle')

    circles.attr('r', (d) => d * 2).attr('cy', (d, i) => i * 20)
  }

  function main2() {
    const data = [1, 2, 3]
    const circles = d3
      .select('svg')
      .selectAll('circle')
      .data(data)
      .join((enter) => {
        const circles_enter = enter.append('circle').attr('r', 10)
        // need to be separate since .append returns the appended element
        circles_enter.append('title')
        return circles_enter
      })

    circles.attr('cx', (d, i) => d * 10).attr('cy', (d, i) => i * 50)

    circles.select('title').text((d) => d)
  }

  onMount(main2)
</script>

<svg />
