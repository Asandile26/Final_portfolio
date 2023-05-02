<template>
  <!--This is the main container that contains the whole timeline.-->
  <section class="design-section">
    <div class="timeline">
      <div class="timeline-empty"></div>
      <div class="timeline-middle">
        <div class="timeline-circle"></div>
      </div>
      <div class="timeline-component timeline-content">
        <h2>2022</h2>
        <p>
          Name of School: Life Choices Academy <br />
          Duration: Current
        </p>
      </div>
      <div class="timeline-component timeline-content">
        <h2>2021</h2>
        <p>
          Name of Company: ACDC Dynamics <br />
          Duration: November 2021 - September 2022 <br />
          Reason for leaving: I left to study
        </p>
      </div>
      <div class="timeline-middle">
        <div class="timeline-circle"></div>
      </div>
      <div class="timeline-empty"></div>
      <div class="timeline-empty"></div>
      <div class="timeline-middle">
        <div class="timeline-circle"></div>
      </div>
      <div class="timeline-component timeline-content">
        <h2>2019</h2>
        <p>
          Name of Company: IkamvaYouth <br />
          Duration: July 2019 - December 2019 <br />
          Reason for leaving: Contract Ended
        </p>
      </div>
      <div class="timeline-empty"></div>
      <div class="timeline-empty"></div>
      <div class="timeline-middle">
        <div class="timeline-circle"></div>
      </div>
      <div class="timeline-component timeline-content">
        <h2>2018</h2>
        <p>
          Name of Company: Levi's Strauss <br />
          Duration: May 2018 - October 2018<br />
          Reason for leaving: Contract Ended
        </p>
      </div>
      <!-- <div class="timeline-empty"></div> -->
      <div class="timeline-middle">
        <div class="timeline-circle"></div>
      </div>
      <div class="timeline-empty"></div>
      <div class="timeline-empty"></div>
      <div class="timeline-middle">
        <div class="timeline-circle"></div>
      </div>
      <div class="timeline-component timeline-content">
        <h2>2015-2020</h2>
        <p>
          Name of School: University of the Western Cape <br />
          Qualification: Bachelor of Commerce <br />
          Majors: Economics and Information Systems
        </p>
      </div>
      <div class="timeline-empty"></div>
      <div class="timeline-empty"></div>
      <div class="timeline-middle">
        <div class="timeline-circle"></div>
      </div>
      <div class="timeline-component timeline-content">
        <h2>2012-2014</h2>
      <p>Name of School: J.S Skenjana S.S.S <br>
        Qualification: Matric <br>
        Subjects: Economics, Accounting, Business Studies, Maths</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&display=swap');
.design-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0c0c0c;;
  min-height: 100vh;
  padding: 100px 0;
  
}

.design {
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline {
  width: 80%;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.timeline-content {
  padding: 20px;
  background: #1f1f1f;
  -webkit-box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #242424;
          box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #242424;
  border-radius: 5px;
  color: white;
  padding: 1.75rem;
  transition: 0.4s ease;
  overflow-wrap: break-word !important;
  margin: 1rem;
  margin-bottom: 20px;
  border-radius: 6px;
}

.timeline-component {
  margin: 0px 20px 20px 20px;
}

@media screen and (min-width: 768px) {
  .timeline {
    display: grid;
    grid-template-columns: 1fr 3px 1fr;
  }
  .timeline-middle {
    position: relative;
    background-image: linear-gradient(45deg, #F27121, #E94057, #8A2387);
    width: 3px;
    height: 100%;
  }
  .main-middle {
    opacity: 0;
  }
  .timeline-circle {
    position: absolute;
    top: 0;
    left: 50%;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-image: linear-gradient(45deg, #F27121, #E94057, #8A2387);
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
  }
}
  
</style>