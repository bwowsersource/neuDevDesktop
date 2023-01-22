<script>
  // @ts-nocheck

  export let printlines = [];

</script>


  <div class="output">
    {#each printlines as lineOut}
      <span class={lineOut.class}>{lineOut.text}</span>
    {/each}
  </div>

<style>
  .output {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    text-align: start;
    font-family: monospace;
    font-weight: bold;
    padding-left: 5px;
  }

  .output *,
  .output *::before {
    display: block;
    float: left;
  }
  .stderr {
    color: red;
  }
  .stdin {
    color: green;
  }
  .stdin::before {
    content: "»";
  }
  .stdout {
    color: rgb(37, 37, 37);
  }
  .stdout::before,
  .stderr::before {
    content: "«";
  }
  .procExit {
    color: black;
  }
  .procExit::before {
    content: "!";
  }
</style>
