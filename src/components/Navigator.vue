<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="#">YunOSC 雲科開源</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbatNav" aria-expanded="false" aria-label="Toggle navgaton">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav">
        <router-link to="/" class="nav-item nav-link">首頁 Index</router-link>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdownAbout" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">關於 About</a>
          <div class="dropdown-menu" aria-labelledby="dropdownAbout">
              <router-link to="/history" class="dropdown-item">沿革 History</router-link>
              <router-link to="/cadre" class="dropdown-item">歷屆幹部 Cadres</router-link>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdownLesson" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">社課 Lesson</a>
          <div class="dropdown-menu" aria-labelledby="dropdownLesson">
            <div class="dropdown-item disabled">學期課程</div>
            <router-link to="/lesson/2017" class="dropdown-item">2018(107學年)</router-link>
            <div class="dropdown-divider"></div>
            <router-link to="/lt" class="dropdown-item">Lightning Talk</router-link>
          </div>
        </li>
        <router-link to="/events" class="nav-item nav-link">活動 Events</router-link>
        <a href="#introduction" v-smooth-scroll>a</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigator'
}
</script>

<style scoped>
  nav {
    background-color: #344c36;
  }
  a {
    text-align: left;
  }
</style>
