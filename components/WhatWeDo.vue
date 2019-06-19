<template>
  <div class="full-height">
    <div class="container">
      <div class="row justify-content-center mb-5 pb-3">
        <div class="col-md-7 text-center heading-section">
          <h1>¿A que nos dedicamos?</h1>
          <p>
            Desarrollamos software de alta calidad que ayuden y den valor al
            mercado, enfocados en solucionar problemas de negocio apoyados en
            las tecnologías y tendencias actuales de desarrollo.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 d-flex align-self-stretch ftco-animate">
          <div class="media block-6 services d-flex align-items-center">
            <div
              class="icon d-flex align-items-center justify-content-center order-md-last"
            >
              <span class="flaticon-cloud"></span>
            </div>
            <div class="media-body pl-4 pl-md-0 pr-md-4 text-md-right">
              <h3 class="heading">Analizamos tu negocio</h3>
              <p class="mb-0">
                Nos reunimos contigo para que nos cuentes sobre tu negocio e
                ideas, los problemas o necesidades que tienes y que es lo que
                buscas, para luego ser analizado por nuestro equipo.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex align-self-stretch ftco-animate">
          <div class="media block-6 services d-flex align-items-center">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="flaticon-server"></span>
            </div>
            <div class="media-body pl-4">
              <h3 class="heading">Potenciamos tus ideas</h3>
              <p class="mb-0">
                Junto a ti, codo a codo potenciamos tu idea de negocio para que
                esta sea pulida en conjunto, mezclando tu visión de negocio con
                el punto de vista técnico del equipo.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex align-self-stretch ftco-animate">
          <div class="media block-6 services d-flex align-items-center">
            <div
              class="icon d-flex align-items-center justify-content-center order-md-last"
            >
              <span class="flaticon-customer-service"></span>
            </div>
            <div class="media-body pl-4 pl-md-0 pr-md-4 text-md-right">
              <h3 class="heading">Proponemos una solución</h3>
              <p>
                Nos encargamos de evaluar y analizar las mejores opciones para
                dar solución a tus necesidades, donde junto al equipo
                determinarás la más conveniente para tu negocio.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex align-self-stretch ftco-animate">
          <div class="media block-6 services d-flex align-items-center">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="flaticon-life-insurance"></span>
            </div>
            <div class="media-body pl-4">
              <h3 class="heading">Desarrollamos el producto</h3>
              <p>
                El equipo se encarga de desarrollar el producto manteniendo la
                comunicación contigo para que éste siempre se encuentre alineado
                con tu negocio, mostrando avances y obteniendo un feedback que
                ayudará a elaborar un producto de mayor calidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatWeDo'
}
</script>

<style scoped>
h1 {
  font-size: 26px;
}
.full-height {
  height: 100%;
}
.d-flex {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
}
.align-self-stretch {
  -ms-flex-item-align: stretch !important;
  -ms-grid-row-align: stretch !important;
  align-self: stretch !important;
}
.services {
  width: 100%;
  display: block;
  padding: 30px;
  background: #fff;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
}
.services.border {
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
}
.services .icon {
  line-height: 1.3;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background: #6927ff;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
}
.services .icon span {
  font-size: 44px;
  color: #fff;
}
.services .media-body {
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
  width: calc(100% - 80px);
}
.services .media-body h3 {
  font-size: 20px;
  font-weight: 700;
}
.services .media-body.media-body-2 {
  width: 100% !important;
}
.services:hover {
  background: #6927ff;
}
.services:hover .icon {
  background: #fff;
}
.services:hover .icon span {
  color: #6927ff;
}
.services:hover .media-body h3 {
  color: #fff;
}
.services:hover .media-body p {
  color: rgba(255, 255, 255, 0.8);
}
</style>
