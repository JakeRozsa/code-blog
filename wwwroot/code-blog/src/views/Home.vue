<template>
  <div class="home">
Home View
<dictintro></dictintro>
<chalintro></chalintro>
<guides></guides>
  </div>
</template>

<script>
import Dictintro from "@/components/Dictintro.vue"
import Chalintro from "@/components/Chalintro.vue"
import Guides from "@/components/Guidesintro.vue"
export default {
  name: 'home',
  components: {
    Dictintro,
    Chalintro,
    Guides
  }
}
</script>
