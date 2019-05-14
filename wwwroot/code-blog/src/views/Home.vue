<template>
  <div class="home">
Home View
<dictintro></dictintro>
<chalintro></chalintro>
  </div>
</template>

<script>
import Dictintro from "@/components/Dictintro.vue"
import Chalintro from "@/components/Chalintro.vue"
export default {
  name: 'home',
  components: {
    Dictintro,
    Chalintro
  }
}
</script>
