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
.container {
  margin-bottom: 50px;
  width: 48%;
}
 /* Apply styles to the Resume title */
 h1 {
        font-size: 36px;
        color: #333;
      }
      
      /* Apply styles to the timeline container */
      .timeline {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
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
      
      /* Apply styles to the left container */
      .container.left {
        width: 50%;
      }
      
      /* Apply styles to the right container */
      .container.right {
        width: 50%;
      }
      
      /* Apply styles to the year headings */
      .content h2 {
        font-size: 24px;
        color: #333;
      }
      
      /* Apply styles to the company/school names */
      .content p:first-child {
        font-size: 18px;
        color: #555;
        font-weight: bold;
        margin-bottom: 10px;
      }
      
      /* Apply styles to the duration information */
      .content p:not(:first-child) {
        font-size: 16px;
        color: #777;
        margin-bottom: 10px;
      }
      
      /* Apply styles to the reason for leaving */
      .content p:last-child {
        font-style: italic;
      }
      .right{
        left: 0%;
        margin-top: 190px;
      }

      /* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -15px;
  background-color: white;
  border: 4px solid #FF9F55;
  top: 60px;
  border-radius: 50%;
  z-index: 1;
  
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
 
</style>