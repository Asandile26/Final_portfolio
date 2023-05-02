<template>
  <div class="container-fluid">
    <h1>CONTACT</h1>
    <div class="container">
      <form class="form" action="https://formspree.io/f/mgebedqd" method="POST" @submit.prevent="handleSubmit">
        <div class="mb-3 text-center">
          <input type="text" class="form-control" name="Name" placeholder="Enter your name" required v-model="name">
        </div>
        <div class="mb-3 text-align-center">
          <input type="text" class="form-control" name="Surname" placeholder="Enter your surname" required v-model="surname">
        </div>
        <div class="mb-3 text-align-center">
          <input type="email" class="form-control" name="Email" placeholder="Enter your email" required v-model="email">
        </div>
        <div class="mb-4">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label for="floatingTextarea">Comments</label>
        </div>
        <input type="submit" value="Submit" class="submit">
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
      email: ''
    }
  },
  methods: {
    handleSubmit() {
      alert(`Name: ${this.name}, Surname: ${this.surname}, Email: ${this.email}`)
    }
  }
}
</script>

<style scoped>
.container {
  width: 45rem;
  margin: auto;
}
.form {
  border-style: outset;
  padding: 4rem;
  width: 100%;
}
@media screen and (max-width: 580px) {
  .form {
    width: 28rem;
  }
}
@media screen and (max-width: 461px) {
  .form {
    width: 24rem;
  }
}
@media screen and (max-width: 480px) {
  .form {
    width: 20rem;
  }
}
@media screen and (max-width: 350px) {
  .form {
    width: 18rem;
  }
}
.submit {
  color: rgb(7, 47, 7);
}
</style>```
