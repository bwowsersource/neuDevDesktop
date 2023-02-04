<script>
  import { neu } from "../libs/neu";
  import { onDestroy } from "svelte";
  import { getHome } from "../libs/crossPlatform";

  let projects = ["p1", "p2"];
  let commands = ["curl", "wget", "aws", "docker", "git", "npm"];
  let cwd = "";
  getHome().then((path) => {
    cwd = path;
    console.log("path", path);
  });
  async function setCWD() {
    console.log("current selection...");
    cwd = await neu.os.showFolderDialog("Set working directory", {
      // defaultPath: cwd,
    });
    console.log("new selection", cwd);
    // if(cwd.)
  }

  onDestroy(() => {
    console.log(99);
  });
</script>

<div class="sidebar sb">
  <div class="sb-section">
    <ul>
      <li class="sb-title">Projects</li>
      {#each projects as project}
        <li>{project}</li>
      {/each}
    </ul>
    <ul>
      <li class="sb-title">Quick Commands</li>
      {#each commands as cmd}
        <li>{cmd}</li>
      {/each}
    </ul>
  </div>
  <div class="sb-section sb-bottom">
    <ul>
      <a on:click={setCWD}>
        <li class="sb-title">cwd: {cwd}<bold>/</bold></li>
      </a>
      {#each commands as cmd}
        <li class="path">{cmd}</li>
      {/each}
    </ul>
    <div>Sign in</div>
  </div>
</div>

<style>
  .sidebar,
  .sb {
    display: flex;
    background-color: rgb(208, 235, 252);
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    flex-grow: 1; /* default 0 */
    min-width: 200px;
    text-align: start;
    font-size: 0.9em;
    font-weight: 500;
    font-family: Georgia, "Times New Roman", Times, serif;
  }
  .sb-title {
    display: flex;
  }
  .sb-section {
    /* flex-grow: 2; */
  }
  .sb-section > * {
    overflow: auto;
    margin: 15px 0;
    padding-bottom: 5px;
  }
  .sb-section.sb-bottom {
    display: flex;
    align-items: stretch;
    flex-direction: column;
  }
  .sb-section li {
    text-align: start;
    padding: 0 5px;
    vertical-align: middle;
  }
  .sb-section li::marker {
    content: "#";
    font-size: 0.7em;
    font-weight: bold;
  }
  .sb-section li.path::marker {
    content: "./";
  }
</style>
