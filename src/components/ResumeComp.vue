<template lang="">
        <h1>RESUME</h1>
    <div class="Resume">
      <div class="timeline">
        <div class="container left">
    <div class="content">
      <h2>2022</h2>
      <p>Name of School: Life Choices Academy <br>
        Duration: Current
       
      </p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2021</h2>
      <p>Name of Company: ACDC Dynamics <br>
        Duration: November 2021-September 2022 <br>
        Reason for leaving: I left to study </p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h2>2019</h2>
      <p>Name of Company: IkamvaYouth <br>
        Duration: July 2019-December 2019 <br>
        Reason for leaving: Contract Ended
      </p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2018</h2>
      <p>Name of Company: Levi's Strauss <br>
        Duration: May 2018-October 2018<br>
        Reason for leaving: Contract Ended </p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h2>2015-2020</h2>
      <p>Name of School: University of the Western Cape <br>
        Qualification: Bachelor of Commerce <br>
        Majors: Economics and Information Systems
      </p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2012-2014</h2>
      <p>Name of School: J.S Skenjana S.S.S <br>
        Qualification: Matric <br>
        Subjects: Economics, Accounting, Business Studies, Maths</p>
    </div>
  </div>
    </div>
    </div>

</template>
<script>
export default {
    name: 'Resume'
}
</script>
<style>
*,
::before,
::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.Resume{
    background-color: #FF9F55;
}
/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 100vw;
  margin: 0 auto;
  margin-left: 5rem; /* add a left margin to center the timeline */
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: rgb(162, 77, 77);
  top: 0;
  bottom: 0;
  left: 30%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 5px 20px;
  position: relative;
  background-color: inherit;
  width: 3%;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: rgb(179, 71, 71);
  border: 4px solid #FF9F55;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: -50%;
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
  border: medium solid rgb(171, 118, 118);
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
  border-width: 10px 10px 10px 10px;
  border-color: transparent rgb(40, 35, 35) transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 10px 0px;
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
    width: 5%;
    padding-left: 30px;
    padding-right: 7px;
  }

/* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 30px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

/* Make sure all circles are at the same spot */
  .container::after {
    left: 15px;
  }
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
  padding: 5px 20px;
  position: relative;
  background-color: inherit;
  width: 5%;
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
  left: -50%;
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
  /* padding: 10px 15px; */
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
    width: 50%;
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
  .container::after {
    left: 15px;
  }
}
 
</style>