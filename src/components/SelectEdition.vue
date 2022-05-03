<template>
    <div>
        <IconWindow title="Windows Setup">
            <div class="p-5">
                <h3>Select the operating system you want to install</h3>
                <div class="table-responsive border">
                    <table class="table table-borderless table-sm">
                        <thead>
                            <tr>
                                <th>Operating System</th>
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
                    <p>Windows 10</p>
                </div>
                <div class="text-right" style="margin-top: 10vh">
                    <button style="padding: 0 1vw" @click="$emit('next_screen')">Next</button>
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
    import IconWindow from '@/components/templates/IconWindow.vue'

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
