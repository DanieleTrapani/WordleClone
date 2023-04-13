<script>
  let rows = [
    "QWERTYUIOP".split(""),
    "ASDFGHJKL".split(""),
    ["ENTER", "ZXCVBNM".split(""), "DEL"].flat(),
  ];

  let chosenLetter = "";

  export const handleClick = (e) => {
    console.log(e.target.innerHTML);
    chosenLetter = e.target.innerHTML;
  };

  export const handleKeyPress = (e) => {
    console.log(e);
  };
</script>

<div>
  {#each rows as row}
    <div class="flex justify-center">
      {#each row as letter}
        <div
          class="letter p-2 m-1"
          on:click={(e) => handleClick(e)}
          on:keyup={(e) => handleKeyPress(e)}
        >
          {letter}
        </div>
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
