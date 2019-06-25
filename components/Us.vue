<template>
  <div class="row full-height">
    <div class="col-sm-12 col-md-6 center-item">
      <div class="main-text center-item">
        <h1 class="title">{{ mainTitle }}</h1>
        <p>
          GetColors nació como una idea para reunir y formar desarrolladores
          mediante la difusión de buenas prácticas de desarrollo y trabajo en
          equipo.
        </p>
        <h1>¿Que hacemos actualmente?</h1>
        <p>
          Actualmente somos un grupo pequeño pero con gran potencial en el cual
          nos vemos involucrados en distintas disciplinas, como el diseño de
          productos, su desarrollo y el escalado progresivo de los mismos según
          la necesidad del negocio. Nos enfocamos en la generación y desarrollo
          de ideas que mejoren el mercado de alguna forma.
        </p>
        <h1>¿Cual es nuestra motivación?</h1>
        <p>
          Nos motivan las buenas ideas, por lo que seleccionamos con pinzas a
          nuestros clientes, no somos un grupo de mercenarios, por lo que solo
          tomamos proyectos que realmente generen interes al equipo. Con esto
          podemos estar 100% motivados para que salga bien, y poder ofrecer
          mejores soluciones.
        </p>
        <p>
          Las cosas salen mejor cuando aplicas todo el talento del equipo en
          algo que los mantiene motivados y que despierta su interes.
        </p>
      </div>
    </div>
    <div class="col-sm-12 col-md-6 center-item">
      <img
        class="main-image"
        src="~/assets/images/developer-programming.jpg"
        alt="Software development"
      />
      <a class="author-url" href="http://www.freepik.com"
        >Imagen diseñada por Freepik</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Us',
  data: function() {
    return {
      mainTitle: '¿Que es GetColors?'
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
