<template>
  <div class="About" id="about">
    <h1>ABOUT</h1>
    <div class="container-fluid">
  <div class="intro col d-flex">
       <div class="photo-fluid">
          <img src="https://i.postimg.cc/jS77LWDG/DSC-3626.jpg" alt="profile img" class="img-fluid" >
              </div>
              <div class="text">
          <!-- <p id="about-p1">Hello I am Asandile Langeni</p> -->
                      <p class="mt-4 " id="about-p">Hello, welcome to my portfolio! My name is Asandile Langeni, and I am a  graduate of the University of the Western Cape, where I earned a Bachelor of Commerce with a major in Economics and Information Systems. I also have a certificate from Life Choices, which I obtained in 2023. <br><br>


I have always been interested in technology and its potential to change the world, and that's what drew me to web development. I believe that the internet has the power to connect people and ideas in ways that were once impossible, and I want to be a part of making that happen.


As a web developer, I am constantly learning and growing, and I am excited to take on new challenges and push myself to become the best developer I can be. Whether you need a simple website or a complex web application, I am confident that I have the skills and expertise to deliver high-quality results.


Thank you for taking the time to visit my website, and I look forward to working with you! <br><br>
                      D.O.B   : 1995-10-13 <br>
                      Location : Cape Town, Khayelitsha <br>
                      Email     : asandilelangeni@gmail.com <br>
                      Phone     : 067 6555 678 </p>
                    </div>
        </div>
</div>
</div>
</template>
<script>
export default {
  name: 'about'
}
</script>
<style scoped>
.intro{
display: flex;
/* color:white; */
justify-content: center;
align-items: center;
font-size: large;
z-index: 1;
}
.photo-fluid{
float: left;
width: 50%;
border-radius: 20px;
z-index: 1;
}
.text{
float: right;
width: 70%;
z-index: 1;
}

@media (max-width: 700px) {
  .photo-fluid {
    margin-right: 2rem;
    margin-bottom: 0;
  }

  .text {
    flex-wrap: wrap;
  }

  .intro{
    display: flex;
    flex-direction: column;
  }
}
@media (max-width: 900px) {
  .text{
    margin-top: 150px;
  }
} 
.img-fluid{
  height: 30em;
}
</style>
