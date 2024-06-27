<template>
  <div class="container-fluid" id="contact">
    <h1>CONTACT</h1>
    <div class="container">
      <form
        class="form"
        action="https://formspree.io/f/mqkvbjqk"
        method="POST"
        @submit.prevent="handleSubmit"
      >
        <div class="contact">
          <div class="mb-3 text-center" id="inputBox">
            <input
              type="text"
              class="form-control"
              name="Name"
              placeholder="Enter your name"
              required
              v-model="name"
            />
          </div>
          <div class="mb-3 text-align-center" id="inputBox">
            <input
              type="text"
              class="form-control"
              name="Surname"
              placeholder="Enter your surname"
              required
              v-model="surname"
            />
          </div>
          <div class="mb-3 text-align-center" id="inputBox">
            <input
              type="email"
              class="form-control"
              name="Email"
              placeholder="Enter your email"
              required
              v-model="email"
            />
          </div>
          <div class="mb-4" id="inputBox">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              v-model="comments"
            >
></textarea
            >
            <label for="floatingTextarea">Comments</label>
          </div>
          <button type="submit" class="btn btn-primary" id="con">submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script scope>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      comments: "",
    };
  },
  methods: {
    async handleSubmit() {
      const formData = {
        Name: this.name,
        Surname: this.surname,
        Email: this.email,
        Comments: this.comments,
      };

      try {
        const response = await axios.post(
          "https://formspree.io/f/mqkvbjqk",
          formData
        );
        console.log("Form submitted successfully:", response.data);
      } catch (error) {
        console.error("Form submission failed:", error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  background: #0c0c0c;
  width: 45rem;
  margin: auto;
  z-index: 2;
  overflow-x: hidden;
}
.form {
  border-style: outset;
  padding: 4rem;
  width: 100%;
  z-index: 2;
  background: #0c0c0c;
}
#icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
#inputBox input {
  z-index: 1;
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

h1 {
  margin: 50px;
  padding: 30px;
}
</style>
