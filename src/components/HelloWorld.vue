<template>
  <div class="landing">
    <div class="wrapper">
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
</div>
<div class="banner">
  <div class="line">
    <h1>Hi, I'm Asandile Langeni</h1> <br>
    <h3>Full Stack Web developer</h3>
    <br>
    <div class="cv">
      <a href="https://drive.google.com/file/d/1BYKtfy99KqanJV2UgURwBnfU-urCvk8H/view?usp=drive_link" target="_blank">Download CV</a>
    </div>
  </div>
  <div class="iconz">
    <a href="https://github.com/Asandile26" target="_blank"> <i class="bi bi-github"> </i></a>
    <a href="https://twitter.com/LA_Nator21" target="_blank"><i class="bi bi-twitter"></i></a>
    <a href="https://m.facebook.com/100090013194612/" target="_blank"><i class="bi bi-facebook"></i></a>
    <a href="https://www.linkedin.com/in/asandile-langeni-05b027201/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
  </div>
</div>
  </div>
</template>
<script>
export default {
name: 'HelloWorld',
props: {
  msg: String
}
}
</script>
<style scoped>
*,
::after,
::before{
margin: 0;
padding: 0;
box-sizing: border-box;
}




.landing{
display: flex;
position: relative;
align-items: center;
background-color: #0c0c0c;
height: 100vh;
padding: 0 30%;
overflow-x: hidden;
z-index: 1;
}
.line h1{
font-size: 56px;
font-weight: 700;
}
.line{
max-width: 600px;
font-weight: 700;
}
.line h3{
font-size: 32px;
font-weight: 700;
color: #0072ff;
}
.line .cv {
display: flex;
align-items: center;
justify-content: center;
width: 345px;
height: 50px;
}
.cv a {
display: inline-flex;
align-items: center;
width: 130px;
height: 85%;
background: #0072ff;
justify-content: center;
border-radius: 10px;
font-size: 19px;
border: 2px solid #0072ff;
text-decoration: none;
font-weight: 600;
color: white;
margin-left: 220px;
}
.iconz{
display: flex;
justify-content: space-between;
position: absolute;
bottom: 40px;
width: 170px;
margin-left: 1px;
margin-bottom: 145px;
gap: 10px;
}
.iconz a {
display: inline-flex;
align-items: center;
justify-content: center;
width: 40px;
font-size: 20px;
background: transparent;
border: 2px solid white;
border-radius: 50%;
color: white;
text-decoration: none;
}
.wrapper span {
position: fixed;
bottom: -180px;
height: 50px;
width: 50px;
z-index: -1;
background-color: transparent;
border-radius: 50%;
box-shadow: 0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff, 0 0 200px #0072ff;
animation: animate 10s linear infinite;
}


.wrapper span:before {
content: "";
content: "";
position: absolute;
position: absolute;
top: 0;
top: 0;
left: 0;
left: 0;
width: 100%;
width: 100%;
height: 100%;
height: 100%;
border-radius: 50%;
border-radius: 50%;
background-color: #0072ff;
background-color: #0072ff;
}


.wrapper span:nth-child(1) {
left: 60px;
animation-delay: 0.6s;
}


.wrapper span:nth-child(2) {
left: 10%;
animation-delay: 3s;
width: 60px;
height: 60px;
}


.wrapper span:nth-child(3) {
left: 20%;
animation-delay: 2s;
}


.wrapper span:nth-child(4) {
left: 30%;
animation-delay: 5s;
width: 80px;
height: 80px;
}


.wrapper span:nth-child(5) {
left: 40%;
animation-delay: 1s;
}


.wrapper span:nth-child(6) {
left: 50%;
animation-delay: 7s;
}


.wrapper span:nth-child(7) {
left: 60%;
animation-delay: 6s;
width: 100px;
height: 100px;
}


.wrapper span:nth-child(8) {
left: 70%;
animation-delay: 8s;
}

.wrapper span:nth-child(9) {
left: 80%;
animation-delay: 6s;
width: 90px;
height: 90px;
}
.wrapper span:nth-child(10) {
left: 90%;
animation-delay: 4s;
}
.banner {
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
}
@keyframes animate {
0% {
transform: translateY(0);
opacity: 1;
}
80% {
opacity: .7;
}
100% {
transform: translateY(-800px) rotate(360deg);
opacity: 0;
}
}


@media screen and (max-width: 600px) {

  .line {
    max-width: none;
    text-align: center;
  }
 
  .cv a {
    margin-left: auto;
    margin-right: auto;
  }
  .iconz {
    display: flex;
    margin-left: 130px;
    margin-right: auto;
    padding-top: 40px ;
  }
  .landing{
    display: flex;
  }
}
@media screen and (max-width: 1100px) {
 
  .line {
    margin-bottom: 90px;
    text-align: center;
  }

}
@media screen and (max-width: 480px) {
  .iconz{
    display: none;
  }
}
</style>

