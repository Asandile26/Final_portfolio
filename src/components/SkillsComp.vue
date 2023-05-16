<template lang="">
    <div class="skills d-flex">
        <div class="soft">
            <h3 id="tech">Soft Skills</h3>
            <ul>
                <li>Team Player</li>
                <li>A great communicator</li>
                <li>Analytic</li>
                <li>Customer service champ</li>
                <li>Inquisitive</li>
            </ul>

        </div>
        <h3 id="tech">Technical Skills</h3>
        <div class="Tech1">
            <i class="fa fa-html5" aria-hidden="true" style="font-size: 7em;"></i>
            <i class="bi bi-bootstrap-fill" style="font-size: 7em;"></i> 
            <i class="fa-brands fa-node-js" style="font-size: 7em;"></i>
            <i class="fa-brands fa-css3" style="font-size: 7em;"></i> 
        </div>
        <div class="Tech2">
            <i class="fa-brands fa-js" style="font-size: 7em;"></i>
            <i class="fa-brands fa-vuejs" style="font-size: 7em;"></i>
            <i class="fa fa-github" aria-hidden="true" style="font-size: 7em;"></i>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Skills'
}
</script>
<style scoped>
.skills {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.Tech1 {
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;
  align-content: center;
  /* margin-top: 60px; */

}

.Tech i {
  margin: 5px;
}
ul{
border: solid 4px
}
.Tech2 {
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;
  align-content: center;

}
#tech{
    margin-top: 50px;
    font-size: 50px;
    font-weight: 500;
    margin: 50px;
    padding: 30px
}
@media only screen and (min-width: 768px) {
  .Tech1, .Tech2 {
    gap: 5rem;
  }
  
  .Tech1 i, .Tech2 i {
    font-size: 8em;
  }
}

@media only screen and (min-width: 1200px) {
  .Tech1, .Tech2 {
    gap: 10rem;
  }
  
  .Tech1 i, .Tech2 i {
    font-size: 10em;
  }
}

</style>