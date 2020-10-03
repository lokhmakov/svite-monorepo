<script>
import BlockBox from 'core/block/block--box.svelte'
import SectionCenter from 'core/sections/section--center.svelte'
import ButtonAnimatedHover from 'core/button/animated-hover.svelte'
</script>

<div class="screen">
  <SectionCenter class="first">
    <BlockBox debug>
      <ButtonAnimatedHover />
    </BlockBox>
  </SectionCenter>
</div>

<style type="postcss">
.screen :global(.first) {
  @apply bg-gray-600;
}
</style>
