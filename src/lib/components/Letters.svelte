<script>
  import { word, rows } from "../stores/store";
  let letterRows = [
    "QWERTYUIOP".split(""),
    "ASDFGHJKL".split(""),
    ["ENTER", "ZXCVBNM".split(""), "DEL"].flat(),
  ];

  const regex = "qwertyuiopasdfghjklzxcvbnm";
  let chosenLetter = "";
  let rowIndex = 0;
  let wordIndex = 0;

  export const handleClick = (letter) => {
    if (wordIndex < 5) {
      const updatedRows = [...$rows]; // Create a shallow copy of rows
      updatedRows[rowIndex] = [...updatedRows[rowIndex]]; // Create a shallow copy of the first array
      updatedRows[rowIndex][wordIndex] = letter; // Update the first item in the first array
      rows.set(updatedRows);
      wordIndex += 1;
    }
  };
</script>

<svelte:window
  on:keydown|preventDefault={(e) => {
    let input = e.key;
    if (regex.includes(input)) {
      input = input.toUpperCase();
      handleClick(input);
    } else if (input === "Backspace") {
      wordIndex -= 1;
      const updatedRows = [...$rows]; // Create a shallow copy of rows
      updatedRows[rowIndex] = [...updatedRows[rowIndex]]; // Create a shallow copy of the first array
      updatedRows[rowIndex][wordIndex] = ""; // Update the first item in the first array
      rows.set(updatedRows);
    } else if (input === "Enter") {
      //validate word and go to next row
    }
  }}
/>

<div>
  {#each letterRows as row}
    <div class="flex justify-center">
      {#each row as letter}
        <div
          class="letter p-2 m-1"
          on:click={(e) => handleClick(e.target.innerHTML)}
          on:keyup={() => {}}
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
