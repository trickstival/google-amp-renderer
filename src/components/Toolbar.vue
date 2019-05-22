<template>
    <aside class="amp-toolbar">
        <span>
            Download
        </span>
        <div class="component-list">
            <span
                v-for="component in $options.componentList"
                @click="$store.commit('addToTree', component)"
                :key="component.name">
                {{ component.name }}
            </span>
        </div>
    </aside>
</template>

<script>
import { componentList } from './amp'
export default {
    componentList,
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.component-list {
    display: flex;
    align-items: center;
    justify-content: center;
}
.amp-toolbar {
    border-top: 1px solid #000;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5vh;
}
</style>
