<script>
  import Cell from "../components/Cell.svelte";
  import { rows } from "../stores/store";
</script>

<div class="wordGrid flex flex-col">
  {#each $rows as row}
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

  @media only screen and (min-width: 750px) {
    .wordGrid {
      padding: 15px 200px;
    }
  }

  @media only screen and (min-width: 1020px) {
    .wordGrid {
      padding: 15px 250px;
    }
  }

  @media only screen and (min-width: 1200px) {
    .wordGrid {
      padding: 15px 520px;
    }
  }
</style>
