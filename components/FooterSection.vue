<template>
  <div class="row full-height center-item">
    <nav class="navbar">
      <a class="link" href="#inicio">Inicio</a>
      <a class="link" href="#que-hacemos">¿Que hacemos?</a>
      <a class="link" href="#nosotros">Nosotros</a>
      <a class="link" href="#contacto">Contacto</a>
    </nav>
    <p>¿Eres desarrollador? Entra aquí</p>
    <p class="contact-info">
      Web diseñada, contruida y mantenida por el equipo principal de GetColors
      con todo el amor del mundo.
    </p>
  </div>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
.full-height {
  height: 100%;
}
.center-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.link {
  color: #47494e;
  text-decoration: none;
  margin: 10px;
}
.contact-info {
  color: #7f828b;
}
.logo {
  color: white;
  font-size: 25px;
}
.author {
  color: white;
  font-size: 14px;
}
</style>
