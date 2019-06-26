<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class="container">
      <b-navbar-brand class="brand" href="#inicio">GetColors</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"
        ><fa icon="bars" class="burger"
      /></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="nav-link" href="#inicio">Inicio</b-nav-item>
          <b-nav-item class="nav-link" href="#que-hacemos"
            >¿Que hacemos?</b-nav-item
          >
          <b-nav-item class="nav-link" href="#nosotros">Nosotros</b-nav-item>
          <b-nav-item class="nav-link" href="#contacto">Contacto</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  background: white !important;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 3;
  height: 10vh;
  width: 100%;
}
.brand {
  color: black;
}
.burger {
  color: black;
}
.burger:hover {
  color: #6927ff;
}
.brand:hover {
  color: black;
}
.nav-item:hover {
  color: #6927ff;
}
.navbar-nav {
  background-color: white;
}
.nav-link {
  color: black !important;
  margin-left: 10px;
}
.nav-link:hover {
  color: #6927ff !important;
}
</style>
