<template>
    <div class="nav-bar">
<nav class="navbar navbar-expand-xl navbar-light bg-light">
    <div class="col-3">
  <a class="navbar-brand"  @click="$router.push({name:'home'})"><img class="barlogo" src="@/assets/decodedlogopng.png" alt=""></a>
    </div>
    <div class="col-3 offset-3">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    </div>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" @click="$router.push({name:'dictionary'})">
            <p>Dictionary</p><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  @click="$router.push({name:'challenges'})">
        <p>Challenges</p></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  @click="$router.push({name:'about'})">
            <p>About</p></a>
      </li>
    </ul>
  </div>
</nav>

    </div>
</template>


<script>
export default {
    name: 'nav-bar',
    data(){
        return {}
    },
    computed:{},
    methods:{},
    components:{}
}
</script>


<style scoped>
.barlogo{
    cursor: pointer;
    max-height: 75px;
    max-width: 33vw;
}
</style>