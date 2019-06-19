<template>
  <div>
    <navbar />
    <section id="inicio" class="section">
      <home />
    </section>
    <section id="que-hacemos" class="section gray">
      <what-we-do />
    </section>
    <section id="nosotros" class="section gray-black">
      <us />
    </section>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import WhatWeDo from '../components/WhatWeDo'
import Us from '../components/Us'

export default {
  components: {
    Navbar,
    Home,
    WhatWeDo,
    Us
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
  background-color: blue;
}
.gray-black {
  background-color: #e0e4ee;
}
</style>
