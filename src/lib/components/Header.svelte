<header class="p-5 flex place-content-between border-slate-700">
  <div>
    <span />
    <span />
    <span />
  </div>

  <h1 class="text-3xl">Sbordle</h1>
  <h2 class="text-xl">Menus</h2>
</header>

<style>
  header {
    border-width: 1px;
    margin-bottom: 20px;
  }

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: #cdcdcd;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
</style>
