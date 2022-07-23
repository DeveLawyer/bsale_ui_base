<script>
  import { onMount } from "svelte"
  import { MDCSwitch } from "@material/switch"

  onMount(() => {
    const switchControl = new MDCSwitch(document.querySelector(".mdc-switch"))
  })
</script>

<div>
  <button
    id="basic-switch"
    class="mdc-switch mdc-switch--unselected"
    type="button"
    role="switch"
    aria-checked="false">
    <div class="mdc-switch__track" />
    <div class="mdc-switch__handle-track">
      <div class="mdc-switch__handle">
        <div class="mdc-switch__shadow">
          <div class="mdc-elevation-overlay" />
        </div>
        <div class="mdc-switch__ripple" />
        <div class="mdc-switch__icons">
          <svg
            class="mdc-switch__icon mdc-switch__icon--on"
            viewBox="0 0 24 24">
            <path
              d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
          </svg>
          <svg
            class="mdc-switch__icon mdc-switch__icon--off"
            viewBox="0 0 24 24">
            <path d="M20 13H4v-2h16v2z" />
          </svg>
        </div>
      </div>
    </div>
  </button>
  <label for="basic-switch">off/on</label>
</div>
