<template lang="">
  <div class="skills d-flex">
    <div class="soft">
      <h3 id="tech">Soft Skills</h3>
      <div>
        <button class="btn btn-primary" id="btnz">Team player</button>
        <label for="button1"></label>
        <button class="btn btn-primary" id="btnz">A great communicator</button>
        <label for="button2"></label>
        <button class="btn btn-primary" id="btnz">Analytic</button>
        <label for="button3"></label>
        <button class="btn btn-primary" id="btnz">
          Customer service champ
        </button>
        <label for="button4"></label>
        <button class="btn btn-primary" id="btnz">Inquisitive</button>
        <label for="button5"></label>
        <br />
        <button class="btn btn-primary" id="btnz">Time Management</button>
        <label for="button5"></label>
        <button class="btn btn-primary" id="btnz">Self awareness</button>
        <label for="button5"></label>
        <button class="btn btn-primary" id="btnz">Patient</button>
        <label for="button5"></label>
        <button class="btn btn-primary" id="btnz">Problem solver</button>
        <label for="button5"></label>
        <button class="btn btn-primary" id="btnz">Creativity</button>
        <label for="button5"></label>
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

#btnz {
  z-index: 1;
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
  border-radius: 10px;
  padding: 5px 10px;
  margin: 8px;
  z-index: 1;
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
