<template>
  <div class="home">
    <amp-renderer></amp-renderer>
    <toolbar />
  </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from '@/components/Toolbar'
import AmpRenderer from '@/components/AmpRenderer'

export default {
  name: 'home',
  components: {
    Toolbar,
    AmpRenderer
  }
}
</script>
<style lang="scss" scoped>
.home {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
