<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="/">GetColors</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a href="#" class="nav-link">Inicio</a>
          </li>
          <li class="nav-item">
            <a href="#que-hacemos" class="nav-link">¿Que hacemos?</a>
          </li>
          <li class="nav-item">
            <a href="#nosotros" class="nav-link">Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contacto">Contacto</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Desarrolladores</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
.nav-item:hover {
  color: #6927ff;
}
</style>
