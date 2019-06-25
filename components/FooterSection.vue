<template>
  <footer>
    <div class="row full-height center-item">
      <nav class="navbar">
        <a class="link" href="#inicio">Inicio</a>
        <a class="link" href="#que-hacemos">¿Que hacemos?</a>
        <a class="link" href="#nosotros">Nosotros</a>
        <a class="link" href="#contacto">Contacto</a>
      </nav>
      <div class="text-box">
        <p class="developer-link">¿Eres desarrollador? Entra aquí</p>
        <p class="contact-info">
          Web diseñada, contruida y mantenida por el equipo principal de
          GetColors con todo el amor del mundo.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
footer {
  height: 30vh;
  box-sizing: border-box;
}
.row {
  width: 100%;
}
.full-height {
  height: 100%;
}
.center-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.link {
  color: #47494e;
  text-decoration: none;
  margin: 10px;
}
.developer-link {
}
.contact-info {
  color: #7f828b;
}
.text-box {
  width: 100%;
  padding: 10px;
}
</style>
