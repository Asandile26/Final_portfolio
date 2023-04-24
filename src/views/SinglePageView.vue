<template lang="">
    <div>
        <section><HelloWorld/>
            <AboutComp id="about"/>
            <ResumeComp id="resume"/>
            <SkillsComp id="skills"/>
            <ProjectsComp id="projects"/>
            <TestimonialsComp id="testimonials"/>
            <ContactComp id="contact"/>
        </section>
    </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue';
import AboutComp from '@/components/AboutComp.vue';
import ResumeComp from '@/components/ResumeComp.vue';
import SkillsComp from '@/components/SkillsComp.vue';
import ProjectsComp from '@/components/ProjectsComp.vue';
import TestimonialsComp from '@/components/TestimonialsComp.vue';
import ContactComp from '@/components/ContactComp.vue';
export default {
    name: 'singlepage',
        components: {AboutComp, HelloWorld, ResumeComp, SkillsComp, ProjectsComp, TestimonialsComp, ContactComp},
}
</script>
<style lang="">
    
</style>