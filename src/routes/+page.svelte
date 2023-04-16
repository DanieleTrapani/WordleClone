<script>
  import Grid from "../lib/components/Grid.svelte";
  import Header from "../lib/components/Header.svelte";
  import Letters from "../lib/components/Letters.svelte";

  import { word, rows } from "../lib/stores/store";
</script>

<body class="bg-black min-h-screen">
  <Header />
  <main class="flex flex-col">
    <Grid />
    <Letters />
  </main>
</body>

<style>
  body {
    color: white;
  }

  main {
    padding: 0px 60px;
  }
</style>
