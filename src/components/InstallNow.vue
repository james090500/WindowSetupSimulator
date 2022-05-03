<template>
    <SimpleWindow title="Windows Setup">
        <div class="p-5">
            <div class="row justify-content-center">
                <div class="col-4">
                    <img src="/images/logo.png" class="img-fluid">
                </div>
            </div>
            <div style="margin: 10vh 0" class="text-center">
                <button @click="$emit('next_screen')">Install Now</button>
            </div>
            <a href="#" class="text-white">Repair your computer</a><br>
            <small class="text-white">Microsoft Corporation. All rights reserved.</small>
        </div>
    </SimpleWindow>
</template>

<style scoped>
    button {
        background: transparent;
        color: white;
        padding: 1vh 3vh;
        border: 1px solid white;
    }
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
