<template>
  <header>
    <section class="logo">
      <img src="../assets/logo.png" alt="logo" />
      <h1>Popcorn Picks</h1>
    </section>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/movie">Movies</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6vh;

  padding: 10px;
  background-color: #f9c9b7;

  .logo {
    display: flex;
    align-items: center;

    img {
      width: auto;
      height: 50px;
      display: block;
    }

    h1 {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  nav {
    display: flex;
    gap: 1em;
  }
}
</style>
