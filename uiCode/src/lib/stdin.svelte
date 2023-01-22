<script>
  // @ts-nocheck

  function subminOnReturn(e){
    if(e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation ();
      exec();
    }
  }

  async function exec() {
    const cmdField = document.getElementById("input");
    const cmd = cmdField.value;
    console.log(cmd)
    await Neutralino.os.execCommand(cmd, { background: true });
    cmdField.value="";
  }
</script>

<div>
  <input type="text" id="input" on:keypress={subminOnReturn}/>
  <button on:click={exec}>Run</button>
</div>
