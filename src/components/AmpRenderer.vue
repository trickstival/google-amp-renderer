<template>
    <section class="amp-renderer">
        <iframe src="about:blank" ref="sandbox" sandbox="allow-scripts allow-same-origin"></iframe>
    </section>
</template>

<script>
import { mapState } from 'vuex'

const AmpSandbox = (iframe) => {
    const document = iframe.contentDocument
    const window = iframe.contentWindow
    document.open()
    document.close()

    // State
    const registeredElements = []

    const sandbox = {
        /**
         * Appends script to iframe sandbox
         * @arg { String } src
         * @arg { String } attrs
         */
        appendScript (src, attrs = '') {
            return new Promise((resolve) => {
                const listener = () => {
                    window.removeEventListener('load', listener)
                    resolve()
                }
                window.addEventListener('load', listener)
                const s = document.createElement('script')
                s.setAttribute('async', '')
                s.setAttribute('src', src)
                Object.entries(attrs).forEach(([attr, val]) => s.setAttribute(attr, val))
                document.head.appendChild(s)
                // document.head.innerHTML += `<script async ${attrs} src="${src}"><\/script>`
            })
        },
        loadComponent (componentName) {
            const newComponent = document.createElement(componentName)
            // console.log(window.customElements.get('amp-date-picker'))
            document.body.appendChild(newComponent)
            if (registeredElements.includes(componentName)) {
                return
            }

            this.appendScript(`https://cdn.ampproject.org/v0/${componentName}-0.1.js`, { 'custom-element': componentName })

            registeredElements.push(componentName)
        }
    }
    sandbox.appendScript('https://cdn.ampproject.org/v0.js')
        .then(() => {

        })
    return sandbox
}

export default {
    data () {
        return {
            sandbox: null
        }
    },
    watch: {
        lastAmpChunk (componentsChunk) {
            componentsChunk.forEach(newComponent => this.sandbox.loadComponent(newComponent.name))
        }
    },
    computed: {
        ...mapState(['lastAmpChunk'])
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
