<template>
    <section class="amp-renderer">
        <iframe ref="sandbox" sandbox="allow-scripts allow-same-origin"></iframe>
    </section>
</template>

<script>
import { mapState } from 'vuex'

const AmpSandbox = (iframe) => {
    iframe.contentDocument.open()

    // State
    const registeredElements = []

    const sandbox = {
        /**
         * Appends script to iframe sandbox
         * @arg { String } src
         * @arg { String } attrs
         */
        appendScript (src, attrs) {
            iframe.contentDocument.write(`<script async ${attrs} src="${src}"><\/script>`)
        },
        loadComponent (componentName) {
            if (registeredElements.includes(componentName)) {
                return
            }

            this.appendScript(`https://cdn.ampproject.org/v0/${componentName}-0.1.js`, 'custom-element')
            registeredElements.push(componentName)
        }
    }
    sandbox.appendScript('https://cdn.ampproject.org/v0.js')
    return sandbox
}

export default {
    data () {
        return {
            sandbox: null
        }
    },
    watch: {
        ampTree (ampTree) {
            ampTree.forEach(comp => this.sandbox.loadComponent(comp.name))
        }
    },
    computed: {
        ...mapState(['ampTree'])
    },
    methods: {
    },
    mounted () {
        this.sandbox = AmpSandbox(this.$refs.sandbox)
    }
}
</script>

<style>

</style>
