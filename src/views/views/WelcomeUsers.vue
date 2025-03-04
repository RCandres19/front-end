<template>
    <div class="welcome-container">
      <h1>Bienvenido, {{ username }}!</h1>
      <p>Nos alegra tenerte aquí. Esperamos que disfrutes de nuestros servicios.</p>
      <p>En nuestra plataforma, encontrarás múltiples herramientas para mejorar tu experiencia.</p>
      <p>No dudes en explorar cada rincón y descubrir todo lo que tenemos para ofrecerte.</p>
      <p>Si necesitas ayuda, nuestro equipo está siempre disponible para ti.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ["username"], // Recibe el nombre del usuario como prop
  };
  </script>
  
  <style scoped>
  .welcome-container {
    text-align: center;
    padding: 20px;
  }
  h1 {
    color: #4CAF50;
  }
  </style>
  