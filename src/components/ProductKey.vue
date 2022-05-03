<template>
    <div>
        <IconWindow title="Windows Setup">
            <div class="p-5">
                <h3>Activate Windows</h3>
                <p>If this is the first time you're install Windows on this PC (of if you're installing a different edition), you need to enter a valid Windows product key. Your product key should be in the confirmation email you recieved after buying a digital copy of Windows or on a label inside the box that Windows came in.</p>
                <p>The product key looks like this: XXXXX-XXXXX-XXXXX-XXXXX-XXXXX</p>
                <p>If you're reinstalling Windows, select I don't have a product key. Your copy of Windows will be automatically activated later.</p>
                <input type="text" class="col-6">
                <div class="row" style="margin-top: 10vh">
                    <div class="col-4">
                        <a href="#">Privacy Statement</a>
                    </div>
                    <div class="col-6 text-right">
                        <a href="#" @click="$emit('next_screen')">I don't have a product key</a>
                    </div>
                    <div class="col-2 text-right">
                        <button style="padding: 0 1vw" @click="$emit('next_screen')">Next</button>
                    </div>
                </div>
            </div>
        </IconWindow>
        <h1 class="text-danger">Dev note: This option does not always appear</h1>
    </div>
</template>

<style scoped>
    .text-right {
        text-align: right;
    }

    h3 {
        color: #005ACE
    }
</style>

<script>
    import IconWindow from '@/components/templates/IconWindow.vue'

    export default {
        emits: ["previous_screen", "next_screen"],
        components: {
            IconWindow
        }
    }
</script>
