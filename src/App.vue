<!--<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->


<!--<template>
  <div>
  ~PAGINA CON ITEMS DE VUE~
      <h1>Lista de Items</h1>
      <input v-model="newItem" placeholder="Nuevo item" />
      <button @click="addItem">Agregar</button>
      <ul>
          <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
  </div>
</template>

<script>
import api from "./services/api";
import { ref, onMounted } from "vue";

export default {
    setup() {
        const items = ref([]);
        const newItem = ref("");

        const fetchItems = async () => {
            try {
                const response = await api.get("/items");
                items.value = response.data;
            } catch (error) {
                console.error("Error al obtener items:", error);
            }
        };

        const addItem = async () => {
            try {
                await api.post("/items", { name: newItem.value });
                newItem.value = "";
                fetchItems();
            } catch (error) {
                console.error("Error al agregar item:", error);
            }
        };

        onMounted(fetchItems);

        return { items, newItem, addItem };
    }
};
</script> -->

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
