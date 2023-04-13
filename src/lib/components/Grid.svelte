<script>
  import Cell from "../components/Cell.svelte";
  import { rows } from "../stores/store";
</script>

<div class="wordGrid flex flex-col">
  {#each rows as row}
    <div class="flex gap-1">
      {#each row as cell}
        <Cell content={cell} />
      {/each}
    </div>
  {/each}
</div>

<style>
  .wordGrid {
    padding: 15px 30px;
  }
</style>
