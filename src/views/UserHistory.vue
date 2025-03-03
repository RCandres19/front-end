<!--UserHistory.vue: Muestra la lista de usuarios registrados.-->

<script>

//Se importan las herramientas necesarias para obtener los datos de la API y manejar la navegación

import api from "@/services/api";  // Conexión con la API, permite hacer peticiones hhtp a la API
import { ref, onMounted } from "vue";  // Manejo de datos reactivos y ciclo de vida, por lo tanto el ref define variable reactivas como el users y onMounted ejecuta el codigo cuando el componente se monta en la pagina
import { useRouter } from "vue-router";  // Navegación entre páginas, se usa para navegar entres rutas

export default {
    setup() {
        const users = ref([]);  // Almacena la lista de usuarios
        const router = useRouter();     // Instancia de Vue Router

        const fetchUsers = async () => {
            try {
                const response = await api.get("/users"); // hace una peticion get a /users para obtener la lista de usuarios
                users.value = response.data;   // Guarda los usuarios en la variable reactiva
            } catch (error) {
                console.error("Error al obtener historial:", error);
            }
        };

        const goHome = () => {
            router.push("/"); // Redirige a la página principal
        };

        onMounted(fetchUsers); // Llama a la API cuando el componente se carga

        return { users, goHome };
    }
};
</script>

<template>
    <div class="container">
        <h1 class="title"> Historial de Usuarios </h1> <!--titulo principal-->
        <p class="subtitle">Aquí están las personas que han confiado en nosotros. </p> <!-- mensaje descriptivo-->
        
        <ul class="user-list">  <!--lista de usarios-->
            <li v-for="user in users" :key="user.id" class="user-item">  <!--v-for="user in users": Recorre la lista de usuarios, user.id: Se usa como clave única (:key="user.id"). -->
                <span class="user-name">{{ user.name }} {{ user.lastname }}</span>   <!--user.name y user.lastname: Muestra el nombre completo.-->
                <span class="user-info"> {{ user.email }} | 📞 {{ user.phone }}</span> <!--user.email y user.phone: Muestra el correo y el teléfono, con un emoji para destacar el teléfono.-->
            </li>
        </ul>

        <button @click="goHome" class="back-button">🏠 Volver a la Página Principal</button> <!--Botón @click="goHome": Permite volver a la página principal.-->
    </div>
</template>



<style scoped>
/* Estilos */
.container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background: #9bc99f;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.title {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 5px;
}

.subtitle {
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 20px;
}

.user-list {
    list-style: none;
    padding: 0;
}

.user-item {
    background: #ffecec;
    padding: 10px;
    margin: 8px 0;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.user-name {
    font-weight: bold;
    color: #6a6ea5;
}

.user-info {
    font-size: 14px;
    color: #444;
}

.back-button {
    margin-top: 20px;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background: #1661ec;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.back-button:hover {
    background: #1b9fc7e8;
}
</style>


<!--funcionalidad principal muestra un alista de usuarios obtenida de la api y permite volver a la pagina principal, por lo tanto,
se usa la librerias como el vue-router para la navegacion de la paginas y el axios para obtener los datos de los usuarios-->