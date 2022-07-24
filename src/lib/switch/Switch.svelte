<script>
  import { onMount } from 'svelte'
  import { MDCSwitch } from '@material/switch'

  export let selected = false

  let switchControl

  const toggle = () => (selected = !switchControl.selected)

  onMount(() => {
    switchControl = new MDCSwitch(document.querySelector('.mdc-switch'))
    selected = switchControl.selected
  })
</script>

<div>
  <button
    id="basic-switch"
    class="mdc-switch"
    class:mdc-switch--selected={selected}
    class:mdc-switch--unselected={!selected}
    type="button"
    role="switch"
    aria-checked={selected ? 'true' : 'false'}
    on:click={toggle}
  >
    <div class="mdc-switch__track" />
    <div class="mdc-switch__handle-track">
      <div class="mdc-switch__handle">
        <div class="mdc-switch__shadow">
          <div class="mdc-elevation-overlay" />
        </div>
        <div class="mdc-switch__ripple" />
      </div>
    </div>
  </button>
  <label for="basic-switch">{selected ? 'On' : 'Off'}</label>
</div>
