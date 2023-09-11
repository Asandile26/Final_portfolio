<template>
    <footer>
        <div class="footer">
        <p><i class="bi bi-phone text-light"></i>0676555678</p>
          <p><i class="bi bi-envelope-fill"></i>asandilelangeni@gmail.com</p>
          <ul class="sf">
            <li><a href="https://mobile.twitter.com/la_nator21" target="_blank"> <i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/in/asandile-langeni-05b027201/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
             <li><a href="https://github.com/Asandile26" target="_blank"><i class="bi bi-github"></i></a></li>
            </ul>
           <p>Copyright &copy; 2023</p>  
        </div>
        </footer>
</template>
<script>
export default {
    name: 'footer'
}
</script>
<style scoped>
.footer{
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    flex-direction: column;
    text-align: center;
}
.footer p {
    max-block-size: 100px;
    line-height: 15px;
    font-size: 14px;
}
.sf {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 3rem 0;
}
.sf li{
    margin: 0 10px;
}
.sf a {
    text-decoration: none;
    color: white;
}
.sf a i{
    font-size: 1.1rem;
}


</style>
