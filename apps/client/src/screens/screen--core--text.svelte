<script>
  import BlockBox from 'core/block/block--box.svelte'
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
    <BlockBox debug>
      <TextSmoky>Solution<br />Factory</TextSmoky>
    </BlockBox>
  </SectionCenter>

  <SectionCenter class="black">
    <BlockBox debugWhite>
      <TextBlackMirror label="CUTTING" />
    </BlockBox>
  </SectionCenter>
  <SectionCenter class="black">
    <TextBlackMirror label="EDGE TECHNOLOGIES" />
  </SectionCenter>
</div>
