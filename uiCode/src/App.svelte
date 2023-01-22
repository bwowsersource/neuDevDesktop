<script>
  import svelteLogo from "./assets/svelte.svg";
  import Stdin from "./lib/stdin.svelte";
  import LogLines from "./lib/LogLines.svelte";
  // @ts-ignore
  window.Neutralino.init(); // Add this function call

  let history = [];
  function pushToHistory(procLines) {
    history = [procLines, ...history];
  }
</script>

<main class="window">
  <div class="stream">
    <Stdin onComplete={pushToHistory} />
    <div class="logScroll">
      {#each history as procLines}
      <LogLines printlines={procLines} />
      {/each}
    </div>
  </div>
  <div class="sidebar" />
</main>

<style>
  main.window {
    display: flex;
    background-color: orange;
    flex-direction: row;
    align-items: stretch;
    height: 100%;
  }
  .stream {
    display: flex;
    flex-direction: column-reverse;
    background-color: rgb(168, 168, 168);
    flex-grow: 4; /* default 0 */
    overflow: auto;
    align-content: flex-start;
  }

  .sidebar {
    display: flex;
    background-color: blueviolet;
    flex-direction: column;
    flex-grow: 1; /* default 0 */
    min-width: 200px;
  }
  .logScroll{
    display: flex;
    overflow: auto;
    flex-direction: column-reverse;
  }
</style>
