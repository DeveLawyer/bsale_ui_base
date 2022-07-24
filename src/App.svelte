<script>
  import { TextField, Switch } from "$lib";
  import Counter from "$lib/counter/Counter.svelte";

  let textInput = "";
</script>

<main>
  <section class="example">
    <div class="example-title">
      <img
        src="/logo_bsale_web_naranjo_500x200.svg"
        alt="logo Bsale"
        width="200"
      />
      <h1>UI Base</h1>
    </div>

    <form class="example-form" on:submit|preventDefault>
      <div class="textfield-wrapper">
        <TextField id="name" label="Escribe aquí" bind:value={textInput} />
      </div>
      <p>El texto ingresado es: {textInput}</p>
      <Switch />
      <Counter />
    </form>
  </section>

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>
</main>
