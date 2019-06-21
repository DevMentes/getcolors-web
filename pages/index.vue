<template>
  <div>
    <navbar />
    <section id="inicio" class="section">
      <home />
    </section>
    <section id="que-hacemos" class="section gray">
      <what-we-do />
    </section>
    <section id="nosotros" class="section gray-x2">
      <us />
    </section>
    <section id="contacto" class="section">
      <contact />
    </section>
    <footer class="footer gray-x2">
      <footer-section />
    </footer>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import WhatWeDo from '../components/WhatWeDo'
import Us from '../components/Us'
import Contact from '../components/Contact'
import FooterSection from '../components/FooterSection'

export default {
  components: {
    Navbar,
    Home,
    WhatWeDo,
    Us,
    Contact,
    FooterSection
  }
}
</script>

<style>
html {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
section {
  min-height: 100vh;
  padding: 80px 0;
}
.gray {
  background-color: #fafafa;
}
.footer {
  height: 30vh;
}
.gray-x2 {
  background-color: #e0e4ee;
}
.gray-x3 {
  background-color: #c0c4d2;
}
</style>
