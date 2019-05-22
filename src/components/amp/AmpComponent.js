export default {
    props: {
        tag: {
            required: true,
            default: 'div'
        }
    },
    render (h) {
        return customElements.whenDefined(this.tag)
            .then(() => h(this.tag))
    },
    methods: {
        parseAmp () {

        }
    }
}
