<template>
    <SimpleWindow title="Windows Setup">
        <div class="p-5">
            <div class="row justify-content-center">
                <div class="col-4">
                    <img src="/images/logo.png" class="img-fluid">
                </div>
            </div>
            <div class="row justify-content-center text-white mb-2" style="margin-top: 10vh;">
                <label class="col-sm-4 text-right">Language to install:</label>
                <div class="col-sm-7">
                    <select class="w-100">
                        <option>English (UK)</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center text-white mb-2">
                <label class="col-sm-4 text-right">Time and currency format:</label>
                <div class="col-sm-7">
                    <select class="w-100">
                        <option>English (UK)</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center text-white mb-2">
                <label class="col-sm-4 text-right">Keyboard or input method:</label>
                <div class="col-sm-7">
                    <select class="w-100">
                        <option>English (UK)</option>
                    </select>
                </div>
            </div>
            <p class="text-white text-center" style="margin: 5vh 0 2vh">Enter your language and other preferences and click "Next" to continue.</p>
            <div class="text-right">
                <button style="padding: 0 1vw" @click="$emit('next_screen')">Next</button>
            </div>
            <small class="text-white">Microsoft Corporation. All rights reserved.</small>
        </div>
    </SimpleWindow>
</template>

<style scoped>
    .text-right {
        text-align: right;
    }
</style>

<script>
    import SimpleWindow from '@/components/templates/SimpleWindow.vue'

    export default {
        emits: ["next_screen"],
        components: {
            SimpleWindow
        }
    }
</script>
