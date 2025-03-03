<template>
  <div class="dashboard">
    <h1 class="welcome">💖 Bienvenido, {{ $route.params.id }} 💖</h1>
    <p>🌿 Disfruta del aroma del café y el dulzor de la mora en esta finca encantadora.</p>
    <p>☕ Aquí encontrarás un rincón de paz donde cada grano cuenta una historia.</p>
    <p>💡 Inspírate con la belleza de la naturaleza y el esfuerzo de quienes la cultivan.</p>
    <p>🌎 El mundo se conecta a través del sabor, la tradición y el amor por la tierra.</p>
  </div>
</template>

<style>
.dashboard {
  padding: 80px;
}
.welcome {
  position: absolute;
  top: 80px;
  left: 80px;
  color: #ff69b4;
  font-weight: bold;
}
</style>