<script>
  // General Update Pattern, Parts I
  // https://observablehq.com/d/1525bbce8b964848

  import * as d3 from 'd3'
  import {onMount} from 'svelte'

  function randomLetters() {
    return d3
      .shuffle('abcdefghijklmnopqrstuvwxyz'.split(''))
      .slice(0, Math.floor(6 + Math.random() * 20))
      .sort()
  }

  const width = document.body.clientWidth

  const delay = (ms) => new Promise((rs) => setTimeout(rs, ms))

  function main1() {
    const svg = d3
      .select('svg')
      .attr('width', width)
      .attr('height', 33)
      .attr('viewBox', `0 -20 ${width} 33`)

    svg
      .selectAll('text')
      .data(randomLetters())
      .join('text')
      .attr('x', (d, i) => i * 16)
      .text((d) => d)
  }

  function main2() {
    const svg = d3
      .select('svg')
      .attr('width', width)
      .attr('height', 33)
      .attr('viewBox', `0 -20 ${width} 33`)

    async function loop() {
      while (true) {
        svg
          .selectAll('text')
          .data(randomLetters())
          .join('text')
          .attr('x', (d, i) => i * 16)
          .text((d) => d)

        await delay(2500)
      }
    }

    loop()
  }

  function main3() {
    const svg = d3
      .select('svg')
      .attr('width', width)
      .attr('height', 33)
      .attr('viewBox', `0 -20 ${width} 33`)

    async function loop() {
      while (true) {
        svg
          .selectAll('text')
          .data(randomLetters(), (d) => d)
          .join(
            (enter) =>
              enter
                .append('text')
                .attr('fill', 'green')
                .text((d) => d),
            (update) => update.attr('fill', 'gray'),
          )
          .attr('x', (d, i) => i * 16)

        await delay(2500)
      }
    }

    loop()
  }

  function main4() {
    const svg = d3
      .select('svg')
      .attr('width', width)
      .attr('height', 33)
      .attr('viewBox', `0 -20 ${width} 33`)

    async function loop() {
      while (true) {
        const t = svg.transition().duration(750)

        svg
          .selectAll('text')
          .data(randomLetters(), (d) => d)
          .join(
            (enter) =>
              enter
                .append('text')
                .attr('fill', 'green')
                .attr('x', (d, i) => i * 16)
                .attr('y', -30)
                .text((d) => d)
                .call((enter) => enter.transition(t).attr('y', 0)),
            (update) =>
              update
                .attr('fill', 'black')
                .attr('y', 0)
                .call((update) =>
                  update.transition(t).attr('x', (d, i) => i * 16),
                ),
            (exit) =>
              exit
                .attr('fill', 'brown')
                .call((exit) => exit.transition(t).attr('y', 30).remove()),
          )

        await delay(2500)
      }
    }

    loop()
  }

  onMount(main4)
</script>

<svg />
