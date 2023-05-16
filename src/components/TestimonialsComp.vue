<template>
    <div>
        <h1>TESTIMONIALS</h1>
        <div class="testy">

          <div class="card" style="width: 18rem;" v-for="item in Testimonials" :key="item">
    <img :src="item.Image" class="card-img-top" alt="photo">
    <div class="card-body">
      <h5 class="card-title">{{item.name}}</h5>
      <p>{{item.text}}</p>
    </div>
  </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Testimonials',
    data() {
      return{
          Testimonials: [
             {id: 0,
              name: 'Athenkosi Freddie',
              text: 'Asandile is a super nice person who is open & wise. He is always open to helping others and He is not afraid to express himself. He is a visionary and futurist, He is always open to learning about the people around annd also an amzing conversationalist. I am glad to know him as a person',
              Image: 'https://i.postimg.cc/J0FDZYxN/DSC-3589.jpg'
             },
             {id: 1,
              name: 'Umayr Nordien',
              text: 'I know I can count on Asandile to work with me on both large and small projects. He is loyal to his ethical conduct and, based on my professional experience, does not deviate from these values. He is easy-going, and caring, with a strong mentality and always ready to help others',
              Image: 'https://i.postimg.cc/ZnWQqX26/DSC-3538.jpg'
             },
             {id: 2,
              name: 'Reece Simon',
              text: 'For the short time I know Asandile he has been significantly amliorative towards assisting me. Definately is going to be successful going forward',
              Image: 'https://i.postimg.cc/x85wkK1S/DSC-3508.jpg'
             },
             {id: 3,
              name: 'Joel Mukanya',
              text: 'Asandile is a very creative and well-behaved student. He does enjoy working with his classmates and works well on his project. He has gained knowledge of web development, including Bootstrap 5. I will be very delighted to see him get hired.',
              Image: 'https://i.postimg.cc/7ZFPwC2t/Joel-Profile.jpg'
             },
             {id: 4,
              name: 'Meezan Davids',
              text: 'Asandile seems like a very nice guy to be in the presence. He is very good at sport and has a lot of takes on a lot of topics. Asandile looks like a respectable guy and will always be at help when in the need.',
              Image: 'https://i.postimg.cc/HWJ8xCCP/DSC-3581.jpg'
             },
             {id: 5,
              name: 'Gift Mahlangu',
              text: 'Asandile is a smart and reliable person, who is always on time in class and gives 100% effort to his work and projects. He is a great team player and is always available to assist his peers, and also works well on his own. He would be a great asset to any company.',
              Image: 'https://i.postimg.cc/L4CCZvjD/About-Gift.jpg'
             }
          ]
  }
    }
  
}
</script>
<style scoped>
.testy{
  display: flex;
  flex-wrap: wrap;
  gap: 7rem;
  justify-content: center;
  align-content: center;
}
.card-img-top {
  height: 12rem;
  object-fit: cover;
  object-position: top;
  background-position: center;
}
h1{
  margin: 50px;
  padding: 30px
}
</style>