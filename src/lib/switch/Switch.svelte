<script>
  import { onMount } from "svelte";
  import { MDCSwitch } from "@material/switch";

  onMount(() => {
    const switchControl = new MDCSwitch(document.querySelector(".mdc-switch"));
  });
</script>

<div>
  <button
    id="basic-switch"
    class="mdc-switch mdc-switch--unselected"
    type="button"
    role="switch"
    aria-checked="false"
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
  <label for="basic-switch">off/on</label>
</div>
