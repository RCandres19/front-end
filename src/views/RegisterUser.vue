<!--RegisterUser.vue: Contiene el formulario de registro de usuarios.-->

<script>

//Se importan las herramientas necesarias para el funcionamiento del componente
import { ref } from "vue"; //maneja los datos del formulario
import api from "@/services/api";   //Cliente axios para la API
import { useRouter } from "vue-router";  // Manejo de navegacion
import Swal from "sweetalert2";  //Alertas presentables y modernas


//Se define la función setup() en la que se crean las variables y funciones del componente
export default {
    setup() {
        const router = useRouter();  // Instancia de Vue Router para la navegación
        const name = ref("");   // Variable reactiva para el nombre
        const lastname = ref("");  // Variable reactiva para el apellido
        const email = ref("");   // Variable reactiva para el email
        const phone = ref("");    // Variable reactiva para el teléfono


        /*Esta función se ejecuta cuando el usuario envía el formulario.
        Envia los datos del usuario a la API mediante un POST, por lo tanto, si el registro es exitoso, muestra una alerta de exito con el Sweetalert2
        lo que redirige a la pagina de exito /success ó si hay un error, muestra una alerta de error
        */
        const registerUser = async () => {
            try {
                await api.post("/users", {
                    name: name.value,
                    lastname: lastname.value,
                    email: email.value,
                    phone: phone.value
                });

                Swal.fire({
                    icon: "success",
                    title: "¡Registro exitoso!",
                    text: "Tu usuario ha sido registrado con éxito. ",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#2d8f4e"
                });

                router.push("/success");
            } catch (error) {
                console.error("Error al registrar usuario:", error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Hubo un error al registrar el usuario. ",
                    confirmButtonText: "Intentar de nuevo",
                    confirmButtonColor: "#d33"
                });
            }
        };
        
        // Retornamos las variables y la funcion para que esten disponibles en el <template></template>
        return { name, lastname, email, phone, registerUser };
    }
};
</script>


<!-- Aqui definimos la estructura visual del formulario. -->
<template>
    <div class="container">  <!-- container envuelve el formulario con un diseño limpio -->
        <h1 class="title"> ¡Regístrate Ahora! </h1>
        <p class="message">Llena los campos y únete a nuestra comunidad. </p>

        <form @submit.prevent="registerUser" class="form">  <!-- el formulario usa @submit.prevent="registerUser" para evitar que la pagina se recargue y ejecutar la funcion de registro-->
            <input type="text" v-model="name" placeholder="Nombre" required class="input"> <!-- cada campo de entrada <input> esta vinculado con v-model a una variable reactiva-->
            <input type="text" v-model="lastname" placeholder="Apellido" required class="input">
            <input type="email" v-model="email" placeholder="Correo electrónico" required class="input">
            <input type="tel" v-model="phone" placeholder="Teléfono" required class="input">

            <button type="submit" class="btn register"> Registrarme</button> <!-- boton de envio, ejecuta registerUser() al dar clic-->
        </form>
    </div>
</template>




<style scoped>
/* los estilos dan un toque elegante y armonioso al formulario, se da un toque amigable para mejorar la UX*/
.container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background: #fffaf0;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);  /* se usa para dar efecto de elevacion */ 
    text-align: center;
}

.title {
    font-size: 26px;
    font-weight: bold;
    color: #8b6f57;
    margin-bottom: 10px;
}

.message {
    font-size: 18px;
    color: #555;
    margin-bottom: 20px;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.input {
    padding: 12px;
    font-size: 16px;
    border: 2px solid #157a1a;
    border-radius: 6px;
    outline: none;
    transition: 0.3s ease;
}

.input:focus {
    border-color: #70593e;
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

.register {
    background: #157a1a;
}

.register:hover {
    background: #70593e;
}
</style> 
