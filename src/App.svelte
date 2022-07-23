<script>
  import { TextField, Switch } from "$lib";
  import Counter from "$lib/counter/Counter.svelte";
</script>

<main>
  <h1>Bsale UI Base</h1>

  <form on:submit|preventDefault>
    <div class="textfield-wrapper">
      <TextField id="name" label="Name" />
    </div>
    <Switch />
    <Counter />
  </form>

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>
</main>

<style>
  form {
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .textfield-wrapper {
    width: 100%;
  }
</style>
