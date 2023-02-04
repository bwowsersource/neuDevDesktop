<script>
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<div>
  <input type="text" />
  <button on:click={exec}>Run</button>
</div>
