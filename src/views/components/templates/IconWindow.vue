<template>
    <div class="window">
        <div class="window-title">
            <button v-if="!hideIcon" class="btn btn-outline-light rounded-circle btn-primary me-1" @click="$parent.$emit('previous_screen')">
                <font-awesome-icon icon="arrow-left"/>
            </button>
            <span class="col-form-label">{{title}}</span>
            <div class="buttons">
                <button class="btn btn-danger btn-sm"><font-awesome-icon icon="x"/></button>
            </div>
        </div>
        <div class="windows-border">
            <slot/>
        </div>
    </div>
</template>

<style scoped>
    .window {
        background: white;
        min-height: 100px;
        border: 10px solid #D9D9D9;
        border-radius: 0.25rem;
        overflow: hidden;
    }

    .window-title {
        background: #D9D9D9;
        padding: 0 0vh 1vh 1vh;
        display: flex;
    }

    .buttons {
        margin-left: auto;
    }

    .buttons > button {
        padding-top: -1vh;
        padding: 0 1.5vh;
    }

    span {
        color: #180052
    }

    .windows-border {
        border: 2px inset #D1D3D2 !important
    }
</style>

<script>
    export default {
        props: {
            hideIcon: Boolean,
            title: String
        }
    }
</script>