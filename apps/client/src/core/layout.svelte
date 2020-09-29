<script>
  const year = new Date().toISOString().slice(0, 4)
</script>

<style type="text/postcss">
  .content {
    @apply w-full flex-1 p-6;
  }

  .footer {
    @apply w-full p-4;
    @apply border-t;
    @apply text-center text-gray-500 font-semibold;
  }

  :global(body) {
    padding: 0;
    margin: 0;
    min-height: 100vh;
  }
</style>

<!-- <header>This is our header</header> -->
<div id="content" class="content">
  <slot />
</div>
<footer class="footer">Solution Factory &copy; 2007 - {year}</footer>
