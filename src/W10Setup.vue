<template>
  <div>
    <div class="container-fluid div-mid">
      <div class="row justify-content-center pt-4">
        <div class="col-4">
          <Transition mode="out-in">
            <LanguageSetup v-if="state == 0" @next_screen="nextScreen"/>
            <InstallNow v-else-if="state == 1" @next_screen="nextScreen"/>
            <ProductKey v-else-if="state == 2" @previous_screen="previousScreen" @next_screen="nextScreen"/>
            <SelectEdition v-else-if="state == 3" @previous_screen="previousScreen" @next_screen="nextScreen"/>
          </Transition>
        </div>
      </div>
    </div>
    <div v-if="state >= 2">
      <div class="row g-1 text-white windows-progress">
        <div class="col-2">
          <div class="progress w-100">
            <div class="progress-bar" role="progressbar" style="width: 33%"></div>
          </div>
          <div class="d-flex">
            <h1>1</h1>
            <p>Collecting Information</p>
          </div>
        </div>
        <div class="col">
          <div class="progress w-100">
            <div class="progress-bar" role="progressbar" style="width: 0%"></div>
          </div>
          <div class="d-flex">
            <h1>2</h1>
            <p>Installing Windows</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LanguageSetup from '@/components/LanguageSetup.vue'
  import InstallNow from '@/components/InstallNow.vue'
  import ProductKey from '@/components/ProductKey.vue'
  import SelectEdition from '@/components/SelectEdition.vue'

  export default {
    data() {
      return {
        state: 2
      }
    },
    methods: {
      previousScreen() {
        this.state--;
      },
      nextScreen() {
        this.state++;
      }
    },
    components: {
      LanguageSetup,
      InstallNow,
      ProductKey,
      SelectEdition
    }
  }
</script>

<style>
  html {
    font-family: "Segoe UI"
  }

  body {
    background: #180153;
  }

  .div-mid {
    position: absolute;
    top: 50%;
    transform: translateY(-50%)
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.25s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .progress {
    border-radius: 0;
  }

  .progress-bar {
    border-radius: 0;
    background: green;
  }

  .windows-progress {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
</style>
