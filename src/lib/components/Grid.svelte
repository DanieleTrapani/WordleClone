<script>
  import { rows } from "../stores/store";
</script>

<div class="wordGrid flex flex-col">
  {#each $rows as row}
    <div class="flex gap-1">
      {#each row as content}
        <div class="parent flex justify-center">
          <div class="child">
            {content}
          </div>
        </div>
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

  .parent {
    height: 0;
    border-width: 1.1px;
    border-color: #525252;
    flex-basis: 20%;
    padding-bottom: 20%;
    border-radius: 5px;
  }

  .child {
    text-align: center;
    font-size: 2rem;
    color: rgb(210, 209, 209);
  }
</style>
