<script>
import BlockBox from 'core/block/block--box.svelte'
import SectionCenter from 'core/sections/section--center.svelte'
import LoaderTimer from 'core/loaders/timer.svelte'
import LoaderTyping from 'core/loaders/typing.svelte'
</script>

<div class="screen">
  <SectionCenter class="first" debug>
    <BlockBox debug>1234</BlockBox>
  </SectionCenter>

  <SectionCenter class="first" debug>
    <BlockBox debug>
      <LoaderTyping />
    </BlockBox>
  </SectionCenter>
</div>

<style type="postcss">
.screen :global(.first) {
  @apply bg-gray-600;
}
</style>
