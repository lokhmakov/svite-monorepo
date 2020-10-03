<script>
const year = new Date().toISOString().slice(0, 4)
</script>

<!-- <header>This is our header</header> -->
<div id="content" class="content">
  <slot />
</div>
<footer class="footer">Solution Factory &copy; 2007 - {year}</footer>

<style type="text/postcss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro');
.content {
  @apply w-full flex-1 flex flex-col;
}

.footer {
  @apply w-full p-4;
  @apply border-t;
  @apply text-center text-gray-500 font-semibold;
}

:global(body) {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.2em;

  display: flex;
  flex-direction: column;

  padding: 0;
  margin: 0;
  min-height: 100vh;
}
</style>
