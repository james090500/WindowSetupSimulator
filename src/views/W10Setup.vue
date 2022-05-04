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
            <SelectInstallationType v-else-if="state == 4" @previous_screen="previousScreen" @next_screen="nextScreen"/>
            <SelectDrive v-else-if="state == 5" @previous_screen="previousScreen" @next_screen="nextScreen"/>
            <InstallScreen v-else-if="state == 6"/>
          </Transition>
        </div>
      </div>
    </div>
    <div v-if="state >= 2">
      <div class="row g-1 text-white windows-progress">
        <div class="col-2">
          <div class="progress w-100">
            <div class="progress-bar" role="progressbar" :style="{'width': progressWidth()}"></div>
          </div>
          <div class="d-flex">
            <h1>1</h1>
            <p>Collecting Information</p>
          </div>
        </div>
        <div class="col">
          <div class="progress w-100">
            <div class="progress-bar" role="progressbar"></div>
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
  import LanguageSetup from '@/views/components/LanguageSetup.vue'
  import InstallNow from '@/views/components/InstallNow.vue'
  import ProductKey from '@/views/components/ProductKey.vue'
  import SelectEdition from '@/views/components/SelectEdition.vue'
  import SelectInstallationType from '@/views/components/SelectInstallationType.vue'
  import SelectDrive from '@/views/components/SelectDrive.vue'
  import InstallScreen from '@/views/components/InstallScreen.vue'

  export default {
    data() {
      return {
        state: 0
      }
    },
    methods: {
      previousScreen() {
        this.state--;
      },
      nextScreen() {
        this.state++;
      },
      progressWidth() {
        console.log(this.state)
        if(this.state == 6) {
          return "100%";
        } else if(this.state == 5) {
          return "77%";
        } else {
          return "33%";
        }
      }
    },
    components: {
      LanguageSetup,
      InstallNow,
      ProductKey,
      SelectEdition,
      SelectInstallationType,
      SelectDrive,
      InstallScreen
    }
  }
</script>

<style>
  html {
    font-family: "Segoe UI"
  }

  body {
    background-color: #180153 !important;
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
    border-radius: 0 !important;
  }

  .progress-bar {
    border-radius: 0 !important;
    background-color: #99CC33 !important;
  }

  .windows-progress {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
</style>
