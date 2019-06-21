<template>
  <div class="row full-height">
    <div class="col-sm-12 center-item">
      <div class="main-text center-item">
        <div class="form">
          <h1 class="title">¿Necesitas nuestra ayuda?</h1>
          <p>
            Contactanos mediante este formulario, te responderemos rápidamente.
          </p>
          <form>
            <input
              type="text"
              class="form-control custom-input"
              placeholder="Nombre"
            />
            <input
              type="text"
              class="form-control custom-input"
              placeholder="Teléfono"
            />
            <input
              type="text"
              class="form-control custom-input"
              placeholder="Asunto"
            />
            <textarea
              class="form-control custom-input"
              placeholder="Cuentanos que necesitas..."
              rows="5"
            />
            <button class="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
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
.main-text {
  height: 100%;
  width: 80%;
  text-align: center;
}
.form {
  margin-top: 4%;
  width: 40%;
  height: auto;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 40px;
  box-shadow: #6927ff 1px 1px 5px 1px;
}
.custom-input {
  border-radius: 10px;
  margin: 10px;
}
.btn {
  margin: 20px;
  border-radius: 15px;
}
.btn-primary {
  background-color: #6927ff;
  border: 1px solid #6927ff;
  box-shadow: #6927ff 1px 1px 2px 1px;
}
</style>
