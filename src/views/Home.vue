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
