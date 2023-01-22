<template>
  
  <div id="app">
   
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
          <router-link class="nav-link" to="/">Участники</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/addMember">Добавить участника</router-link>
            </li>
           </ul>
        </div>
      </div>
    </nav>
     <br> 
    <router-view></router-view> 
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

