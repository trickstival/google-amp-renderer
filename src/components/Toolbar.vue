<template>
    <aside class="amp-toolbar">
        <button @click="download">
            Download
        </button>
        <div class="component-list">
            <button
                v-for="component in $options.componentList"
                @click="$store.commit('addAmpElements', component)"
                :key="component.name">
                Adicionar {{ component.name }}
            </button>
        </div>
    </aside>
</template>

<script>
import { componentList } from './amp'

const element = document.createElement('a')
const download = (filename, text) => {
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
  element.setAttribute('download', filename)
  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}
export default {
    componentList,
    methods: {
        download () {
            const iframe = document.querySelector('iframe')
            const html = `<html>
                <head>
                    ${iframe.contentDocument.head.innerHTML}
                </head>
                <body>
                    ${iframe.contentDocument.body.innerHTML}
                </body>
            </html>`

            download('index.html', html)
        }
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
