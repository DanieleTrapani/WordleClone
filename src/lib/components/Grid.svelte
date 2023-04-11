<script>
  import Cell from "../components/Cell.svelte";
  let cells = Array(30).fill("");
</script>

<div class="wordGrid flex flex-wrap">
  {#each cells as cell}
    <Cell />
  {/each}
</div>

<style>
  .wordGrid {
    align-self: center;
    padding: 30px;
  }
</style>
