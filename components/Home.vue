<template>
  <section id="inicio" class="section">
    <div class="row full-height">
      <div class="col-sm-12 col-md-6 center-item">
        <div class="main-text center-item"></div>
      </div>
      <div class="col-sm-12 col-md-6 center-item">
        <img
          class="main-image"
          src="~/assets/images/web-development.jpg"
          alt="Software development"
        />
        <a class="author-url" href="http://www.freepik.com"
          >Imagen diseñada por Freepik</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return {
      mainTitle: 'Desarrollamos ideas novedosas que dan valor al mercado.',
      mainMessage:
        '¿Necesitas ayuda para el desarrollo de una aplicación? Cuéntanos lo que tienes en mente y podremos ayudarte.'
    }
  }
}
</script>

<style scoped>
.row {
  width: 100%;
}
h1 {
  font-size: 26px;
}
.full-height {
  height: 100%;
}
.center-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.main-image {
  width: 100%;
}
.main-text {
  height: 100%;
  width: 80%;
  text-align: center;
}
.btn {
  margin: 20px;
  border-radius: 15px;
}
.btn-primary {
  background-color: #6927ff;
  border: 1px solid #6927ff;
  box-shadow: #6927ff 1px 1px 5px 1px;
}
.author-url {
  text-decoration: none;
  display: flex;
  align-self: flex-end;
  margin-right: 100px;
  font-size: 12px;
  color: #6927ff;
}

.author-url:hover {
  color: #6927ff;
}
</style>
