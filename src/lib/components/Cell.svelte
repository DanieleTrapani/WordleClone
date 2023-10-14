<script>
  export let content;
</script>

<div class="parent flex justify-center">
  <div class="child">
    {content}
  </div>
</div>

<style>
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
