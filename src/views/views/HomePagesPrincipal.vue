<template>
    <div class="home">
      <button @click="$router.push('/login')" class="login-button"> Iniciar sesión </button>
    </div>
  </template>
  
  <script>
  export default { name: 'HomePagesPrincipal' };
  </script>
  
  <style>
  .home {
    background: url('@/assets/images/cultivasena.png') no-repeat center center;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: start;
    padding: 20px;
  }
  .login-button {
    padding: 12px 24px;
    background-color: #2e862b;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }
  .login-button:hover {
    background-color: #407236;
  }
  </style>