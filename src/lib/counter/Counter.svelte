<script>
  import { Button } from '$lib'

  let count = 0

  const increment = () => {
    count += 1
  }
</script>

<div class="counter-container">
  <h2>Counter:</h2>

  <Button on:click={increment}>
    Clicks: {count}
  </Button>
</div>

<style src="./counter.scss"></style>
