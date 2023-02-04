<script>
  let projects = ["p1", "p2"];
  let commands = ["curl", "wget", "aws", "docker", "git", "npm"];
</script>

<div class="pagebar pb">
  <h2 class="pb-current">$</h2>
  
</div>

<style>
  .pagebar,
  .pb {
    display: flex;
    background-color: rgb(208, 235, 252);
    flex-direction: column;
    flex-grow: 1; /* default 0 */
    align-items: center;
  }
  .pb-title {
    display: flex;
  }
  .pb-section li {
    text-align: start;
    padding: 0 5px;
    vertical-align: middle;
  }
  .pb-section li::marker {
    content: "#";
    font-size: 0.7em;
    font-weight: bold;
  }
  .pb-current {
    background-color: white;
    display: block;
    width: 100%;
    padding: 15px 0;
  }
</style>
