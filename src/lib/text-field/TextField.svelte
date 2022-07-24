<script>
  import { onMount } from 'svelte'
  import { MDCTextField } from '@material/textfield'

  export let id = ''
  export let label = ''
  export let value = ''

  onMount(() => {
    const textField = new MDCTextField(
      document.querySelector('.mdc-text-field')
    )
  })
</script>

<label class="mdc-text-field mdc-text-field--filled">
  <span class="mdc-text-field__ripple" />
  <span class="mdc-floating-label" {id}>{label}</span>
  <input
    class="mdc-text-field__input"
    type="text"
    aria-labelledby={id}
    bind:value
  />
  <span class="mdc-line-ripple" />
</label>
