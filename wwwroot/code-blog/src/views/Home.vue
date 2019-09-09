<template>
  <div class="home">
Home View
<dictintro></dictintro>
<chalintro></chalintro>
<guides></guides>
  </div>
</template>

<script>
import Dictintro from "@/components/Dictionary/Dictintro.vue"
import Chalintro from "@/components/Challenges/Chalintro.vue"
import Guides from "@/components/Guides/Guidesintro.vue"
export default {
  name: 'home',
  components: {
    Dictintro,
    Chalintro,
    Guides
  }
}
</script>
