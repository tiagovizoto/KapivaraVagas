<template lang="html">
<div class="">
  <section class="hero is-primary is-medium">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item">
              <img  class="logo" src="https://www.python.org/static/opengraph-icon-200x200.png" alt="Logo">
            </a>
          </div>
          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu">
            <a class="nav-item is-active">
              <router-link to='/'>
              Home
              </router-link>
            </a>
            <a class="nav-item">
              <router-link to='/jobs/'>
              Vagas
              </router-link>
            </a>
            <a class="nav-item">
              <router-link to='/job/new'>
              Anuncie
              </router-link>
            </a>
          </div>
        </div>
      </header>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          KapivaraPy
        </h1>
        <h2 class="subtitle">
          Buscando um pythonista? Ni! Ni! Ni! Ni!
        </h2>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'CcHeard'
}
</script>

<style lang="css">
section{
  background-image: url('http://cdn.ultraswank.net/uploads/Monty_Python_and_the_Holy_Grail_1-1000x603.jpg');
}
.hero-head{
  background-color: rgba(0, 0, 0, 0.6)
}


</style>
