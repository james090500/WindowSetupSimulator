<template>
    <div class="window">
        <div class="title">
            <button class="pr-1" @click="$parent.$emit('previous_screen')">
                <font-awesome-icon icon="circle-arrow-left"/>
            </button>
            <span>{{title}}</span>
            <div class="buttons">
                <button><font-awesome-icon icon="minus"/></button>
                <button disabled><font-awesome-icon :icon="['far', 'square']"/></button>
                <button><font-awesome-icon icon="x"/></button>
            </div>
        </div>
        <slot/>
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

    .title {
        background: #D9D9D9;
        padding: 0 0vh 1vh 1vh;
        display: flex;
    }

    .buttons {
        margin-left: auto;
    }

    button {
        margin-left: 1px;
        margin-right: 10px
    }

    span {
        color: #180052
    }
</style>

<script>
    export default {
        props: {
            title: String
        }
    }
</script>