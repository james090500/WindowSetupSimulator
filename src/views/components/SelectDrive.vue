<template>
    <div>
        <IconWindow title="Windows Setup">
            <div class="py-3 px-5">
                <p class="title pt-2 pb-4">Where do you want to install Windows?</p>
                <div class="table-responsive windows-border">
                    <table class="table table-borderless table-sm w-100">
                        <thead>
                            <tr>
                                <th class="col-1"></th>
                                <th>Name</th>
                                <th>Total size</th>
                                <th>Free space</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="active">
                                <td class="text-center"><font-awesome-icon icon="hard-drive"/></td>
                                <td>Drive 0: Unallocated Space</td>
                                <td>1000.0 GB</td>
                                <td>1000.0 GB</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row">
                    <div class="col-3 text-primary">
                        <font-awesome-icon icon="arrows-rotate"/> Refresh
                    </div>
                    <div class="col-3 text-muted">
                        <font-awesome-icon icon="x"/> Delete
                    </div>
                    <div class="col-3 text-muted">
                        <font-awesome-icon icon="eraser"/> Format
                    </div>
                    <div class="col-3 text-primary">
                        <font-awesome-icon icon="sun"/> New
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 text-primary">
                        <font-awesome-icon icon="compact-disc"/> Load driver
                    </div>
                    <div class="col-3 text-muted">
                        <font-awesome-icon icon="database"/> Extend
                    </div>
                </div>
            </div>
            <div class="text-end" style="margin-top: 10vh">
                <button class="m-3" @click="$emit('next_screen')">Next</button>
            </div>
        </IconWindow>
    </div>
</template>

<style scoped>
    .title {
        color: #005ACE;
        font-size: 1.15em;
    }

    .table-responsive {
        height: 17vh;
        overflow-y: scroll;
    }

    .active {
        background: #BEEBFE;
    }

    button {
        padding: 0 2vh;
    }

    .windows-border {
        border: 3px inset #AEAEAE !important
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
