<template>
    <div>
        <IconWindow title="Windows Setup">
            <div class="py-3 px-5">
                <p class="title pt-2 pb-4">Select the operating system you want to install</p>
                <div class="table-responsive windows-border">
                    <table class="table table-borderless table-sm w-100">
                        <thead>
                            <tr>
                                <th class="col-8">Operating System</th>
                                <th>Architecture</th>
                                <th>Data modified</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="edition in editions" :key="edition" :id="edition" @click="activeEdition = edition" :class='{ active: (activeEdition == edition) }'>
                                <td>{{edition}}</td>
                                <td>x64</td>
                                <td>3/5/22</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <p class="m-0">Description:</p>
                    <p>{{activeEdition}}</p>
                </div>
            </div>
            <div class="text-end" style="margin-top: 10vh">
                <button class="m-3" @click="$emit('next_screen')">Next</button>
            </div>
        </IconWindow>
        <h1 class="text-danger">Dev note: This option does not always appear</h1>
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
        color: white;
        background: #00036E;
    }

    button {
        padding: 0 2vh;
    }

    tbody {
        cursor: pointer;
    }

    .windows-border {
        border: 2px inset #D1D3D2 !important
    }
</style>

<script>
    import IconWindow from '@/views/components/templates/IconWindow.vue'

    export default {
        data() {
            return {
                activeEdition: "Windows 10 Home",
                editions: [
                    "Windows 10 Home",
                    "Windows 10 Home N",
                    "Windows 10 Education",
                    "Windows 10 Education N",
                    "Windows 10 Pro",
                    "Windows 10 Pro N",
                    "Windows 10 Enterprise",
                    "Windows 10 Enterprise N",
                ]
            }
        },
        emits: ["previous_screen", "next_screen"],
        components: {
            IconWindow
        }
    }
</script>
