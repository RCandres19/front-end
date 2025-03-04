<template>
    <div class="register">
      <div class="form-container">
        <h2>Registro</h2>
        <p class="message">Llena los campos y únete a nuestra comunidad.</p>
        <form @submit.prevent="registerUser">
          <input v-model="nombre" type="text" placeholder="Nombre" required />
          <input v-model="tipo_Documento" type="text" placeholder="Tipo Documento" required />
          <input v-model="documento" type="text" placeholder="Documento" required />
          <input v-model="correo" type="email" placeholder="Correo electrónico" required />
          <button type="submit">Registrarme</button>
        </form>
        <p class="login-link">¿Ya tienes cuenta? <router-link to="/login">Inicia sesión aquí</router-link></p>
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
        tipo_Documento: '',
        documento: '',
        correo: ''
      };
    },
    methods: {
      async registerUser() {
        try {
          const response = await axios.post('http://127.0.0.1:8001/api/register', {
              nombre: this.nombre,
              tipo_Documento: this.tipo_Documento,
              documento: this.documento,
              correo: this.correo || null
          }, {
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              }
          });
          
          if (response.data.success) {
            Swal.fire({
              icon: "success",
              title: "¡Registro exitoso!",
              text: "Tu usuario ha sido registrado con éxito.",
              confirmButtonText: "OK",
              confirmButtonColor: "#2d8f4e"
            });
            this.$router.push("/login");
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "No se pudo completar el registro.",
              confirmButtonText: "Intentar de nuevo",
              confirmButtonColor: "#d33"
            });
          }
        } catch (error) {
          console.error('Error:', error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Hubo un error al registrar el usuario.",
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
  
  .register {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  .register::before {
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
  
  .login-link {
    margin-top: 15px;
    font-size: 14px;
    color: #000;
  }
  
  .login-link a {
    color: #239713;
    text-decoration: none;
    font-weight: bold;
  }
  
  .login-link a:hover {
    text-decoration: underline;
  }
  </style>
  