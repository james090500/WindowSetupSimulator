<template>
    <div class="window">
        <div class="title">
            {{title}}
            <div class="buttons">
                <button class="btn btn-light"><font-awesome-icon icon="minus"/></button>
                <button class="btn btn-light" disabled><font-awesome-icon :icon="['far', 'square']"/></button>
                <button class="btn btn-danger"><font-awesome-icon icon="x"/></button>
            </div>
        </div>
        <slot/>
    </div>
</template>

<style scoped>
    .window {
        background: transparent;
        min-height: 100px;
        border: 10px solid #A6C1DC;
        border-radius: 0.25rem;
        overflow: hidden;
    }

    .title {
        background: #A6C1DC;
        padding: 0 0vh 1vh 1vh;
        display: flex;
    }

    .buttons {
        margin-left: auto;
    }

    button {
        margin-left: 1px;
    }

    .btn {
        padding-top: -1vh;
        padding: 0 1.5vh;
    }
</style>

<script>
    export default {
        props: {
            title: String
        }
    }
</script>