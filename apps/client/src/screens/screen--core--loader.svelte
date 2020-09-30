<script>
  import BlockBox from 'core/block/block--box.svelte'
  import SectionCenter from 'core/section/section--center.svelte'
  import LoaderTimer from 'core/loader/loader--timer.svelte'
  import LoaderTyping from 'core/loader/loader--typing.svelte'
</script>

<style type="postcss">
  .screen :global(.first) {
    @apply bg-gray-600;
  }
</style>

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
