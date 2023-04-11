<script>
  import Grid from "../lib/components/Grid.svelte";
  import Header from "../lib/components/Header.svelte";
  import Letters from "../lib/components/Letters.svelte";
</script>

<body class="bg-black min-h-screen">
  <Header />
  <main>
    <Grid />
    <Letters />
  </main>
</body>

<style>
  body {
    color: #cdcdcd;
  }
</style>
