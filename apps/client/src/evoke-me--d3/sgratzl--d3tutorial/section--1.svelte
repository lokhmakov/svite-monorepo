<script>
  // https://github.com/sgratzl/d3tutorial
  // codepen.io/lokhmakov/pen/KKzezYN

  import * as d3 from 'd3'
  import {onMount} from 'svelte'

  onMount(() => {
    const circle = d3.select('circle')
    circle.attr('r', 10)
    circle.attr('cx', 20)
    circle.attr('cy', 23)

    // alternative syntax via chaining
    circle.attr('r', 10).attr('cx', 20).attr('cy', 23)

    // set css styles
    circle.style('stroke-width', 2)

    // add, remove css classes
    circle.classed('highlight', true)

    // set inner text
    d3.select('main p').text('Hello')
    d3.select('main span').html(`<strong>Hello</strong>`)
  })
</script>

<svg width="301" height="150">
  <circle />
</svg>

<main>
  <p />
  <span />
</main>
