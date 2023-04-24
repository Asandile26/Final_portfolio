<template>
  <div class="landing">
    <div class="line">
      <h1>Hi, I'm Asandile Langeni</h1> <br>
      <h3>Full Stack Web developer</h3>
      <br>
      <div class="cv">
        <a href="#" target="_blank">Download CV</a>
      </div>
    </div>
    <div class="iconz">
      <a href="https://github.com/Asandile26" target="_blank"> <i class="bi bi-github"> </i></a>
      <a href="https://twitter.com/LA_Nator21" target="_blank"><i class="bi bi-twitter"></i></a>
      <a href="https://m.facebook.com/100090013194612/" target="_blank"><i class="bi bi-facebook"></i></a>
      <a href="https://www.linkedin.com/in/asandile-langeni-05b027201/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
    </div>
    <div class="image  img-fluid">
      <img src="https://i.postimg.cc/hPTTdbg2/IMG-20200911-144520-removebg-preview.png" alt="">
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


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*,
::after,
::before{
margin: 0;
padding: 0;
box-sizing: border-box;
}




/* The actual timeline (the vertical ruler) */
.timeline {
position: relative;
max-width: 1200px;
margin: 0 auto;
}


/* The actual timeline (the vertical ruler) */
.timeline::after {
content: '';
position: absolute;
width: 6px;
background-color: white;
top: 0;
bottom: 0;
left: 50%;
margin-left: -3px;
}


/* Container around content */
.container {
padding: 10px 40px;
position: relative;
background-color: inherit;
width: 50%;
}


/* The circles on the timeline */
.container::after {
content: '';
position: absolute;
width: 25px;
height: 25px;
right: -17px;
background-color: white;
border: 4px solid #FF9F55;
top: 15px;
border-radius: 50%;
z-index: 1;
}


/* Place the container to the left */
.left {
left: 0;
}


/* Place the container to the right */
.right {
left: 50%;
}


/* Add arrows to the left container (pointing right) */
.left::before {
content: " ";
height: 0;
position: absolute;
top: 22px;
width: 0;
z-index: 1;
right: 30px;
border: medium solid white;
border-width: 10px 0 10px 10px;
border-color: transparent transparent transparent white;
}


/* Add arrows to the right container (pointing left) */
.right::before {
content: " ";
height: 0;
position: absolute;
top: 22px;
width: 0;
z-index: 1;
left: 30px;
border: medium solid white;
border-width: 10px 10px 10px 0;
border-color: transparent white transparent transparent;
}


/* Fix the circle for containers on the right side */
.right::after {
left: -16px;
}


/* The actual content */
.content {
padding: 20px 30px;
background-color: white;
position: relative;
border-radius: 6px;
}


/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
/* Place the timelime to the left */
.timeline::after {
  left: 31px;
}


/* Full-width containers */
.container {
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
}


/* Make sure that all arrows are pointing leftwards */
.container::before {
  left: 60px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}


/* Make sure all circles are at the same spot */
.left::after, .right::after {
  left: 15px;
}


/* Make all right containers behave like the left ones */
.right {
  left: 0%;
}
}




/* @media screen and (max-width: 820px) {
.intro{
flex-direction: column;
}
}
@media screen and (max-width: 400px) {
.photo{
width: 18rem;
justify-content: center;
}
} */
.landing{
display: flex;
align-items: center;
background-color: #0c0c0c;
height: 90vh;
padding: 0 10%
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
color: #FF9F55;
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
background: white;
justify-content: center;
border-radius: 10px;
font-size: 19px;
border: 2px solid #FF9F55;
text-decoration: none;
font-weight: 600;
color: black;
margin-left: 220px;
}
.image{
position: absolute;
top: 100px;
right: 100px;
width: 45%;
height: 100%;
}


.iconz{
display: flex;
justify-content: space-between;
position: absolute;
bottom: 40px;
width: 170px;
margin-left: 190px;
margin-bottom: 100px;
gap: 10px;

}
.iconz a {
display: inline-flex;
align-items: center;
justify-content: center;
width: 40px;
height: 40px;
font-size: 20px;
background: transparent;
border: 2px solid white;
border-radius: 50%;
color: white;
text-decoration: none;
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
  .image{
    margin-left: 700px;
  }

}
@media screen and (max-width: 900px) {
  .image{
    display: none;
  }
}
@media screen and (max-width: 480px) {
  .iconz{
    display: none;
  }
}
</style>
