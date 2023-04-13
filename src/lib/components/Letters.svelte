<script>
  let rows = [
    "QWERTYUIOP".split(""),
    "ASDFGHJKL".split(""),
    ["ENTER", "ZXCVBNM".split(""), "DEL"].flat(),
  ];
</script>

<div>
  {#each rows as row}
    <div class="flex justify-center">
      {#each row as letter}
        <div class="letter p-2 m-1">{letter}</div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .letter {
    background-color: grey;
    margin-right: 1px;
    margin-bottom: 3px;
    width: 100px;
    border-radius: 3px;
    color: white;
  }
</style>
