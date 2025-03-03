<!--SuccessPage.vue: Muestra mensaje de éxito y botones de navegación.-->

<script> 
 
 //Este componente muestra un mensaje de éxito cuando un usuario se ha registrado correctamente. Además, proporciona 
 // dos botones para navegar a la página principal o al historial de usuarios.

import { useRouter } from "vue-router";   // Manejo de navegación entre páginas

export default {
    setup() {
        const router = useRouter();  // Instancia de Vue Router

        return {
            goHome: () => router.push("/"), // Redirige a la página principal
            goHistory: () => router.push("/history")  // Redirige al historial de usuarios
        };
    }
};
</script>


<!--Define la estructura visual del mensaje de éxito y los botones de navegación-->
<template>
    <div class="container">
        <h1 class="title"> ¡Registro Exitoso! </h1>
        <p class="message">Tu información ha sido guardada con éxito. </p> <!--texto de confirmacion para el usuario que ingrese-->

        <div class="button-group">  <!--Contiene los botones para navegar-->
            <button @click="goHome" class="btn home">🏠 Volver a la Página Principal</button>  <!--Redirige a la pagina principal-->
            <button @click="goHistory" class="btn history">📜 Ver Historial de Usuarios</button>  <!--Redirige al historial de usuario-->
        </div>
    </div>
</template>



<style scoped>
/* Los estilos mejoran la apariencia del mensaje de éxito y los botones. */
.container {
    max-width: 500px;
    margin: 50px auto;
    padding: 20px;
    background: #f0fff4;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.title {
    font-size: 26px;
    font-weight: bold;
    color: #2d8f4e;
    margin-bottom: 10px;
}

.message {
    font-size: 18px;
    color: #555;
    margin-bottom: 20px;
}

.button-group {  /* organiza los botones en una fila*/
    display: flex;
    justify-content: center;
    gap: 10px;
}

.btn {
    padding: 12px 18px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s ease;
}

.home {
    background: #378651;
}

.history {
    background: #7c6148;  
}

.home:hover {
    background: #1e6a38;   /* se agrega transiciones para que los botones cambien suavemente de color al pasar el mouse. */
}

.history:hover {
    background: #5f5146;  /* se agrega transiciones para que los botones cambien suavemente de color al pasar el mouse. */
}
</style>