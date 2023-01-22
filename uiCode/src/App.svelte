<script>
  import svelteLogo from "./assets/svelte.svg";
  import Stdin from "./lib/stdin.svelte";

  // @ts-ignore
  window.Neutralino.init(); // Add this function call


</script>

<main class="window">
  <div class="stream">
    <Stdin/>
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
    background-color: red; 
     flex-grow: 4; /* default 0 */
     align-content: flex-start;
  }

  .sidebar {
    display: flex;
    background-color: blueviolet;
    flex-direction: column;
     flex-grow: 1; /* default 0 */
     min-width: 200px;
  }
</style>
