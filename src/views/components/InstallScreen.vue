<template>
    <div>
        <IconWindow title="Windows Setup" hideIcon>
            <div class="py-3 px-5">
                <p class="title pt-2 pb-2">Installing Windows</p>
                <p class="pb-4">Status</p>
                <ul class="list-unstyled px-3" style="margin-bottom:15vh">
                    <li v-for="item in installList" :key="item.name">
                        <span class="text-success tick-item" v-if="item.complete"><font-awesome-icon icon="check"/></span>
                        <span :class="{'fw-bold': item.active}">{{item.name}}
                            <span v-if="item.active && item.percent !== false">({{item.percent}}%)</span>
                        </span>
                    </li>
                    <!-- <li id="item-2" class="fw-bold">Getting files ready for installation (0%)</li> -->
                </ul>
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

    .tick-item {
        position: absolute;
        margin-left: -1.5vh;
    }
</style>

<script>
    import IconWindow from '@/views/components/templates/IconWindow.vue'

    export default {
        data() {
            return {
                initallActive: 0,
                installList: [
                    {
                        active: true,
                        name: "Copying Windows files",
                        complete: false,
                        percent: 0
                    },
                    {
                        active: false,
                        name: "Getting files ready for installation",
                        complete: false,
                        percent: 0
                    },
                    {
                        active: false,
                        name: "Installing features",
                        complete: false,
                        percent: false
                    },
                    {
                        active: false,
                        name: "Installing updates",
                        complete: false,
                        percent: false
                    },
                    {
                        active: false,
                        name: "Finishing up",
                        complete: false,
                        percent: false
                    }
                ]
            }
        },
        mounted() {
            //Copying windows files
            this.installList[0].active = true;
            setTimeout(() => {
                this.installList[0].percent = 100;
                this.installList[0].complete = true;
            }, 2000)

            //Getting files ready for installation
            setTimeout(() => {
                this.installList[0].active = false;
                this.installList[1].active = true;
                let tempInterval = setInterval(() => {
                    this.installList[1].percent++;
                    if(this.installList[1].percent >= 100) {
                        clearInterval(tempInterval);
                        setTimeout(() => {
                            this.installList[1].complete = true;
                            this.installList[1].active = false;
                            this.installList[2].active = true;

                            //Install Features
                            setTimeout(() => {
                                this.installList[2].complete = true;
                                this.installList[2].active = false;
                                this.installList[3].active = true;
                            }, 3000)

                            //Install Updates
                            setTimeout(() => {
                                this.installList[3].complete = true;
                                this.installList[3].active = false;
                                this.installList[4].active = true;
                            }, 6000)
                        }, 500)
                    }
                }, 100)
            }, 2500)
        },
        unmounted() {
           clearInterval(this.installTimer)
        },
        emits: ["previous_screen", "next_screen"],
        components: {
            IconWindow
        }
    }
</script>
