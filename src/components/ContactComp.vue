<template lang="">
  <div class="Container0-fluid">
  <h1>CONTACT</h1>
  <div class="container1-fluid">
      <form class="form" action="https://formspree.io/f/mgebedqd" method="POST">
              <div class="mb-3 text-center">
              <input type="text" class="form-control" id="exampleInputName1" name="Name" aria-describedby="nameHelp" placeholder="Enter your name" required v-model="name">
              </div>
              <div class="mb-3 text-align-center">
              <input type="text" class="form-control" id="exampleInputSurname1" name="Surname" aria-describedby="emailHelp" placeholder="Enter your surname" required v-modal="surname">
              <div id="emailHelp" class="form-text"></div>
              </div>
              <div class="mb-3 text-align-center">
              <input type="email" class="form-control" id="exampleInputEmail1" name="Email" placeholder="Enter your email" required v-modal="Email">
              <div id="messagedHelp" class="form-text"></div>
              </div>
              <div class="mb-4">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              <label for="floatingTextarea">Comments</label>
              </div>
              <input type="submit" id="submit" placeholder="Submit" class="submit">

         
      </form>
  </div>
  </div>
</template>
<script>
export default {
  name: 'Contact',
  data() {
      return {
          name: '',
          surname: '',
          email: '',
          message: '',
      }
  },
  methods: {
      handleSubmit(e) {
          e.preventDefault()
          alert(`Name: ${this.name}, Surname: ${this.surname}, Email: ${this.email}, Message: ${this.message}`)
      }
  }
}
</script>
<style scoped>
/* input{
  width: 100%;
} */
.container1{
  width: 35rem;
}
form {
  justify-content: center;
  /* width: 35rem; */
  margin:auto;
  width: 100%;
  
}
.form{
  border-style: outset;
  padding: 4rem;
  margin:0, 30rem;
  border-radius: 5px;
  width: 45rem;
}
@media screen and (max-width: 580px) {
  .form{
      width: 28rem;
  }
}
@media screen and (max-width: 461px) {
  .form{
      width: 24rem;
  }
}
@media screen and (max-width: 480px) {
.form{
  width: 20rem}
};
@media screen and (max-width: 350px) {
  .form{
      width: 18rem}
  };
.submit{
  color: rgb(7, 47, 7);
}
.container0{
  height: 90vh;
}
</style>