<template>
  <div class="login">
    <div class="form-container">
      <h2>Login</h2>
      <form @submit.prevent="loginUser">
        <input v-model="nombre" type="text" placeholder="Nombre" required />
        <input v-model="documento" type="text" placeholder="Documento" required />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p class="register-link">¿No tienes cuenta? <router-link to="/register">Regístrate aquí</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      nombre: '',
      documento: ''
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post('http://127.0.0.1:8001/api/login', {
          nombre: this.nombre,
          documento: this.documento
        });
        
        if (response.data.success) {
          this.$router.push("/home");
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Credenciales incorrectas.",
            confirmButtonText: "Intentar de nuevo",
            confirmButtonColor: "#d33"
          });
        }
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un error al iniciar sesión.",
          confirmButtonText: "Intentar de nuevo",
          confirmButtonColor: "#d33"
        });
      }
    }
  }
};
</script>

<style>
:root {
  --blur-amount: 2px;
}

.login {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.login::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/images/cultivasena.png') no-repeat center center;
  background-size: cover;
  filter: blur(var(--blur-amount, 15px));
  z-index: -1;
}

.form-container {
  background: rgba(255, 255, 255, 0.2);
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  backdrop-filter: blur(10px);
}

input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
}

button {
  background-color: #38af3e;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 5px;
}

button:hover {
  background-color: #239713;
}

.register-link {
  margin-top: 15px;
  font-size: 14px;
  color: #000;
}

.register-link a {
  color: #239713;
  text-decoration: none;
  font-weight: bold;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
