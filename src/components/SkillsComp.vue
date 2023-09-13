<template lang="">
  <div class="skills d-flex">
    <div class="soft">
      <h3 id="tech">Soft Skills</h3>
      <div class="buttons">
        <button class="raise">Team player</button>
        <button class="raise">A great communicator</button>
        <button class="raise">Analytic</button>
        <button class="raise">Customer service champ</button>
        <button class="raise">Inquisitive</button>
        <br>
        <button class="raise">Time Management</button>
        <button class="raise">Self awareness</button>
        <button class="raise">Patient</button>
        <button class="raise">Problem solver</button>
        <button class="raise">Creativity</button>
      </div>
    </div>
    <h3 id="tech">Technical Skills</h3>
    <div class="Tech1">
      <i class="fa fa-html5" aria-hidden="true" style="font-size: 7em"></i>
      <i class="bi bi-bootstrap-fill" style="font-size: 7em"></i>
      <i class="fa-brands fa-node-js" style="font-size: 7em"></i>
      <i class="fa-brands fa-css3" style="font-size: 7em"></i>
    </div>
    <div class="Tech2">
      <i class="fa-brands fa-js" style="font-size: 7em"></i>
      <i class="fa-brands fa-vuejs" style="font-size: 7em"></i>
      <i class="fa fa-github" aria-hidden="true" style="font-size: 7em"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Skills",
};
</script>
<style scoped>
.skills {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  z-index: 0;
  overflow-x: hidden;
}

.Tech1 {
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;
  align-content: center;
  z-index: 1;
}

button {
  background: #0c0c0c;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  z-index: 2;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: #fff;
  transition: color 0.80s, box-shadow 0.25s;
  box-shadow: inset 0 0 0 0 transparent;
}

button:hover,
button:focus { 
  border-color: #fff;
  color: #fff;
}
.raise {
  color: #fff;
  
}
.raise:hover,
.raise:focus { 
  color: #0072ff;
  box-shadow: 0 0.5em 0.5em -0.3em #0072ff;
  transform: translateY(-0.25em)
}
.Tech2 {
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;
  align-content: center;
  z-index: 1;
}

#tech {
  margin-top: 50px;
  font-size: 50px;
  font-weight: 500;
  margin: 50px;
  padding: 30px;
  z-index: 1;
}
@media only screen and (min-width: 768px) {
  .Tech1,
  .Tech2 {
    gap: 5rem;
  }

  .Tech1 i,
  .Tech2 i {
    font-size: 8em;
  }
}

@media only screen and (min-width: 1200px) {
  .Tech1,
  .Tech2 {
    gap: 10rem;
  }

  .Tech1 i,
  .Tech2 i {
    font-size: 10em;
  }
}
</style>
