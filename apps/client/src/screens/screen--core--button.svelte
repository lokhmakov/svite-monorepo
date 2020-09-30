<script>
  import BlockBox from 'core/block/block--box.svelte'
  import SectionCenter from 'core/section/section--center.svelte'
  import ButtonAnimatedHover from 'core/button/button--animated-hover.svelte'
</script>

<style type="postcss">
  .screen :global(.first) {
    @apply bg-gray-600;
  }
</style>

<div class="screen">
  <SectionCenter class="first">
    <BlockBox debug>
      <ButtonAnimatedHover />
    </BlockBox>
  </SectionCenter>
</div>
