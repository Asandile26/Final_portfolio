<template lang="">
 <div class="container">
  <nav class="navbar navbar-expand-lg bg-body-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <ul class="nav-links">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <a href="#about">About</a>
          </li>
          <li class="nav-item">
            <a href="#resume">Resume</a>
          </li>
          <li class="nav-item">
            <a href="#skills">Skills</a>
          </li>
          <li class="nav-item">
          <a href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li class="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>

    </div>
  </nav>
</div>
    </template>
    <script>
    export default{}
    </script>
    <style scoped>
    *,
    ::before,
    ::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        z-index: 2;
    }
     
     
    .navbar .nav-links {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style: none;
    }
     
    .navbar .nav-links li {
        margin-left: 20px;
    }
 
     
    .navbar .nav-links li:first-child {
        margin-left: 0;
    }
     
    .navbar .nav-links a {
        color: white;
        text-decoration: none;
    }
   
    a:hover {
        transition: 1s;
        scale : 1.2;
    }
     
     
    @media screen and (max-width: 268px) {
    .navbar .nav-links {
          display:table-column-group;
        }
        .navbar.responsive .nav-links {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 60px;
          left: 0;
          right: 0;
        }
       
        .navbar.responsive .nav-links li {
          margin: 10px 0;
        }
       
        .navbar.responsive {
          position: absolute;
          top: 10px;
          right: 10px;
        }
      }

      @media screen and (max-width: 430px) {
  .navbar.responsive .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
  }
  .navbar.responsive .nav-links li {
    margin: 10px 0;
  }
  .navbar.responsive {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .nav-toggle {
    display: block;
  }
  .navbar{
    width: 20%;
  }
}

    </style>
    