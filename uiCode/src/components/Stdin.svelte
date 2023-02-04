<script>
  // @ts-nocheck
  import LogLines from "./LogLines.svelte";
  import { getSession } from "../libs/shellSession";

  let printlines = [];
  let exitCode = null; // not exited yet
  let childProc = null;
  export let onComplete = () => {};

  function subminOnReturn(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      exec();
    }
  }

  function cleanUp() {
    // cleanup
    printlines = [];
    exitCode = null; // not exited yet
    childProc = null;
  }
  function addLine(lineType, text) {
    printlines = [...printlines, { class: lineType, text: text }];
  }

  function procListener(childProc) {
    const listener = (evt) => {
      if (childProc.id == evt.detail.id) {
        switch (evt.detail.action) {
          case "stdOut":
            addLine("stdout", evt.detail.data);
            console.log(evt.detail.data);
            break;
          case "stdErr":
            addLine("stderr", evt.detail.data);
            console.error(evt.detail.data, printlines);
            break;
          case "exit":
            exitCode = evt.detail.data;
            addLine(
              "procExit",
              `process terminated with exit code: ${evt.detail.data}`
            );
            onComplete(printlines);
            Neutralino.events.off("spawnedProcess", listener);
            cleanUp();
            console.log(
              `Ping process terminated with exit code: ${evt.detail.data}`
            );
            break;
        }
      }
    };

    return listener;
  }

  async function exec() {
    const cmdField = document.getElementById("input");
    const cmd = cmdField.value;
    const shellConnection = await getSession();
    // await Neutralino.os.execCommand(cmd, { background: true });

    if (childProc) {
      console.log("implement updateChileProc here");
    } else {
      childProc = await Neutralino.os.spawnProcess(cmd);
      Neutralino.events.on("spawnedProcess", procListener(childProc));
    }
    addLine("stdin", cmdField.value);

    // printlines = [...printlines, { class: "stdin", text: cmdField.value }];
    cmdField.value = "";
  }
</script>

<div class="proc">
  {#if exitCode === null}
    <div class="inputLine">
      <input
        type="text"
        id="input"
        on:keypress={subminOnReturn}
        disabled={exitCode != null}
      />
      <button on:click={exec}>Run</button>
    </div>
  {/if}

  <LogLines {printlines} />
</div>

<style>
  .proc {
    display: flex;
    background-color: rgb(214, 214, 214);
    flex-direction: column;
    align-items: stretch;
    /* min-height: 69px; */
  }
  .inputLine {
    display: flex;
    flex-direction: row;
    align-content: flex-start;
  }
  .inputLine input {
    flex-grow: 4;
  }
  .inputLine button {
    flex-grow: 1;
  }
</style>
