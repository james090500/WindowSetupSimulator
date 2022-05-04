<template>
    <div>
        <IconWindow title="Windows Setup">
            <div class="py-3 px-5" style="margin-bottom:10vh">
                <p class="title pt-2 pb-4">Which type of installation do you want?</p>
                <div class="card" @click="$emit('next_screen')">
                    <p class="card-title">Upgrade: Install Windows and keep files, settings, and applications</p>
                    <p>The files, settings, and applications are moved to Windows with this option. The option is only available when a supported version of Windows is already running on the computer.</p>
                </div>
                <div class="card" @click="$emit('next_screen')">
                    <p class="card-title">Custom: Install Windows only (advanced)</p>
                    <p>The files, settings, and applications aren't moved to Windows with this option. If you want to make changes to partitions and drives, start the computer using the installation disc. We recommend backing up your files before you continue.</p>
                </div>
            </div>
        </IconWindow>
    </div>
</template>

<style scoped>
    .card {
        cursor: pointer;
        border: none;
        border-radius: 0;
    }

    .card:hover {
        border: 1px solid grey;
    }

    .title, .card {
        color: #005ACE;
    }

    .title, .card-title {
        font-size: 1.15em;
    }

    .card-title {
        font-weight: 700;
    }

    .table-responsive {
        height: 17vh;
        overflow-y: scroll;
    }

    .active {
        color: white;
        background: #00036E;
    }
</style>

<script>
    import IconWindow from '@/views/components/templates/IconWindow.vue'

    export default {
        emits: ["previous_screen", "next_screen"],
        components: {
            IconWindow
        }
    }
</script>
