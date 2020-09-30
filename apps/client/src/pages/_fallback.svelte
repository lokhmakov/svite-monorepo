<script>
  import {url} from '@roxi/routify/runtime'
</script>

<style type="postcss">
  .root {
    @apply flex items-center justify-center flex-col flex-1 text-xl;
  }
</style>

<div class="root">
  <div class="text-6xl">404</div>
  <div>Page not found</div>
  <a class="text-red-600" href={$url('../')}>Go back</a>
</div>
