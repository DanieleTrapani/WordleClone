<script>
  import { word, rows } from "../stores/store";
  let letterRows = [
    "QWERTYUIOP".split(""),
    "ASDFGHJKL".split(""),
    ["ENTER", "ZXCVBNM".split(""), "DEL"].flat(),
  ];
  let guess = "";

  const regex = "qwertyuiopasdfghjklzxcvbnm";
  let rowIndex = 0;
  let wordIndex = 0;

  const updateRows = (letter) => {
    const updatedRows = [...$rows]; // Create a shallow copy of rows
    updatedRows[rowIndex] = [...updatedRows[rowIndex]]; // Create a shallow copy of the first array
    updatedRows[rowIndex][wordIndex] = letter; // Update the first item in the first array
    rows.set(updatedRows);
  };

  const validate = () => {
    guess = $rows[rowIndex].join("").toLowerCase();
    if (guess === $word) {
      console.log(guess);
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
  };

  export const handleClick = (letter) => {
    if (wordIndex < 5) {
      switch (letter) {
        case "ENTER":
          if (wordIndex === 5) {
            validate();
          } else {
            alert("Word not complete");
          }
          break;
        case "DEL":
          wordIndex > 0 ? (wordIndex -= 1) : (wordIndex = 0);
          updateRows("");
          break;
        default:
          updateRows(letter);
          wordIndex += 1;
      }
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
      wordIndex > 0 ? (wordIndex -= 1) : (wordIndex = 0);
      updateRows("");
    } else if (input === "Enter") {
      //validate word and go to next row
      if (wordIndex === 5) {
        validate();
      } else {
        alert("Word not complete");
      }
    }
  }}
/>

<div class="letterGrid">
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

  @media only screen and (min-width: 750px) {
    .letterGrid {
      padding: 15px 180px;
    }

    .letter {
      width: 200px;
    }
  }

  @media only screen and (min-width: 1020px) {
    .letterGrid {
      padding: 15px 200px;
      text-align: center;
    }

    .letter {
      height: 60px;
      font-size: 1.5rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    .letterGrid {
      padding: 15px 550px 50px;
    }
  }
</style>
