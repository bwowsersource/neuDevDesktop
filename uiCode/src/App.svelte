<script>
  import svelteLogo from "./assets/svelte.svg";
  import Stdin from "./components/Stdin.svelte";
  import LogLines from "./components/LogLines.svelte";
  import { neu } from "./libs/neu.js";
  import Sidebar from "./components/Sidebar.svelte";
    import Pagebar from "./components/Pagebar.svelte";

  neu.init(); // Add this function call

  let history = [];
  function pushToHistory(procLines) {
    history = [procLines, ...history];
  }
</script>

<main class="window">
  <Pagebar/>
  <div class="stream">
    <Stdin onComplete={pushToHistory} />
    <div class="logScroll">
      {#each history as procLines}
        <LogLines printlines={procLines} />
      {/each}
    </div>
  </div>
  <Sidebar />
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

  .logScroll {
    display: flex;
    overflow: auto;
    flex-direction: column-reverse;
  }
</style>
