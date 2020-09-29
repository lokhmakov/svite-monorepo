<script>
  // https://github.com/sgratzl/d3tutorial
  // codepen.io/lokhmakov/pen/KKzezYN

  import * as d3 from 'd3'
  import {onMount} from 'svelte'

  function main1() {
    console.log(d3.color('steelblue'))
    console.log(d3.hsl('steelblue'))
    console.info(`d3.schemeCategory10`, d3.schemeCategory10)
    console.info(
      `d3.scaleOrdinal(d3.schemeAccent)`,
      d3.scaleOrdinal(d3.schemeAccent),
    )
    console.log(d3.interpolateSinebow(0.5))
  }

  function main2() {
    const scale = d3.scaleBand().domain(['a', 'b', 'c']).range([0, 500])

    const axis = d3.axisBottom().scale(scale)

    // create a container to put the axis
    const axisContainer = d3
      .select('svg')
      .append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(0,200)')

    // call axis to create the SVG elements for you
    //axis_container.call(axis);
    axis(axisContainer)
  }

  onMount(main2)
</script>

<svg width="500" height="500" />
