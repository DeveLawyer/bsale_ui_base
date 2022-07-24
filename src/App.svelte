<script>
  import { TextField, Switch, Button } from '$lib'
  import Counter from '$lib/counter/Counter.svelte'
  import bsaleLogo from './assets/logo_bsale_web_naranjo_500x200.svg'

  let textInput = ''

  const getDataFromApi = async () => {
    const response = await fetch('/api/example')
    const data = await response.json()
    console.log(`data: ${data}`)
    return data
  }

  let promise = getDataFromApi()
</script>

<main>
  <section class="example">
    <div class="example-title">
      <img src={bsaleLogo} alt="logo Bsale" width="200" />
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

  <section class="api-call">
    <Button on:click={() => (promise = getDataFromApi())}>Obtener data</Button>

    {#await promise}
      <p>Cargando data desde API...</p>
    {:then data}
      <p>Data desde API: {data.message}</p>
    {/await}
  </section>

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>
</main>
