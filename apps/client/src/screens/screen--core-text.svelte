<script>
  import SectionCenter from 'sections/section--center.svelte'
  import TextSmoky from 'core/text/text--smoky.svelte'
  import TextBlackMirror from 'core/text/text--black-mirror.svelte'
</script>

<style type="postcss">
  .screen :global(.first) {
    @apply bg-gray-600;
  }

  .screen :global(.black) {
    @apply bg-gray-900;
  }
</style>

<div class="screen">
  <SectionCenter class="first">
    <TextSmoky>Solution<br />Factory</TextSmoky>
  </SectionCenter>

  <SectionCenter class="black">
    <TextBlackMirror label="CUTTING" />
  </SectionCenter>
  <SectionCenter class="black">
    <TextBlackMirror label="EDGE TECHNOLOGIES" />
  </SectionCenter>
</div>
