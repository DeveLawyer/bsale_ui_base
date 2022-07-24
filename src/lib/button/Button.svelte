<script>
  import { onMount } from 'svelte'
  import { MDCRipple } from '@material/ripple'

  onMount(() => {
    const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'))
  })
</script>

<div class="mdc-touch-target-wrapper">
  <button class="mdc-button mdc-button--raised" on:click>
    <span class="mdc-button__ripple" />
    <span class="mdc-button__touch" />
    <span class="mdc-button__label">
      <slot />
    </span>
  </button>
</div>
