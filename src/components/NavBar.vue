<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
  <div class="container-fluid">
    <div class="dropdown">
              <button class="btn btn-secondary btn-light px-3 " type="button" data-bs-toggle="dropdown" aria-expanded="false" id="drop">
                  <span class="navbar-toggler-icon"></span>
              </button>
          <ul class="dropdown-menu" id="menu">
            <li><a class="dropdown-item" href="/">Home</a></li>
            <li><a class="dropdown-item" href="#about">About</a></li>
            <li><a class="dropdown-item" href="#resume">Resume</a></li>
            <li><a class="dropdown-item" href="#skills">Skills</a></li>
            <li><a class="dropdown-item" href="#projects">Projects</a></li>
            <li><a class="dropdown-item" href="#testimonials">Testimonials</a></li>
            <li><a class="dropdown-item" href="#contact">Contact</a></li>
          </ul>
    </div>
  </div>
</nav>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style scooped>
.navbar {
  position: fixed;
  top: 0;
}

#menu a {

}
</style>