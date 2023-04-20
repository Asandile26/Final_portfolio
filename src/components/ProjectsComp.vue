<template>
    <div>
        <h1>PROJECTS</h1>
        <div class="projects">
            <div class="card" style="width: 18rem;" v-for="pro in Projects" :key="pro">
          <img :src="pro.image" class="card-img-top" alt="photo" style="height: 25vh">
          <div class="card-body">
            <h5 class="card-title">{{pro.title}}</h5>
            <a v-bind:href=pro.githubLink target="_blank_"><button class="btn btn-primary btn1" type="button">Github</button></a>
            <a v-bind:href=pro.netlifyLink target="_blank_"><button class="btn btn-primary btn2" type="button">Netlify</button></a>
          </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Projects',
data() {
        return {
            Projects:[
                {
                id:0,
                image: 'https://i.postimg.cc/8crNQjRf/portfolio.png',
                title: 'Portfolio (HTML & CSS)',
                githubLink: 'https://github.com/Asandile26/portfolio2.git',
                netlifyLink: 'https://portfolioasandilelangeni.netlify.app'
                },
                {
                id:1,
                title: 'E-Commerce',
                image: 'https://i.postimg.cc/tTD0JLkg/Ecommerce.png',
                githubLink: 'https://github.com/Asandile26/Ecommerce.git',
                netlifyLink: 'https://asandilelangeniecommerce.netlify.app'
                },
                {
                id:2,
                title: 'E-Commerce (Javascript)',
                image: 'https://i.postimg.cc/VkXv0Hb0/JS-Ecommerce.png',
                githubLink: 'https://github.com/Asandile26/Project-E-commerce.git',
                netlifyLink: 'https://asandilelangeni-ecommerce.netlify.app'
                },
                {
                id:3,
                title: 'CSS MediaQuery',
                image: 'https://i.postimg.cc/Dyt794zy/css-media2.png',
                githubLink: 'https://github.com/Asandile26/ccs-media-querries.git',
                netlifyLink: 'https://css-media-queryasandilelangeni.netlify.app'
                },
                {
                id:4,
                title: 'Calculator',
                image: 'https://i.postimg.cc/TP9PCL0R/calculator.png',
                githubLink: 'https://github.com/Asandile26/calculator.git',
                netlifyLink: 'https://asandilelangenicalculator.netlify.app'
                },
                {
                id:5,
                title: 'Revision',
                image: 'https://i.postimg.cc/tJ0rXDQg/Screenshot-2022-11-05-095815.png',
                githubLink: 'https://github.com/Asandile26/Revision.git',
                netlifyLink: 'https://scouzerrevison.netlify.app'
                }
            ]
        }
    }
}
</script>
<style scoped>
.projects{
    display: flex;
    flex-wrap: wrap;
    gap: 10rem;
    justify-content: center;
    align-content: center;
} 
.btn1, btn2{
    margin: 0 10px;
}
/* template{
    height: 120vh;
}  */
</style>