<template>
  <nav class="nav">
    <router-link to="/" class="nav__link">Home</router-link>
    <router-link to="/peoples" class="nav__link">Peoples</router-link>
    <router-link to="/favorites" class="nav__link">Favorites</router-link>
  </nav>
  <main class="main-content">
    <router-view />
  </main>
</template>

<style lang="scss">
#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222222;
  margin-top: 60px;
}

.main-content {
  margin-top: 50px;
}

.nav {
  display: flex;
  justify-content: center;

  &__link {
    color: #000;
    text-decoration: none;

    &:not(:last-of-type) {
      margin-right: 20px;
    }

    &.router-link-active {
      position: relative;
      color: #38b03e;

      &:before {
        position: absolute;
        left: 0;
        bottom: -1px;
        content: '';
        width: 100%;
        border-bottom: 1px solid #38b03e;
      }
    }
  }
}

.button {
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
  background-color: #58bb3e;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &_w-100 {
    width: 100%;
  }

  &:hover {
    background-color: #519b3b;
    transition: 0.3s ease-in-out;
  }

  &_red {
    background-color: #d94a4a;

    &:hover {
      background-color: #9b3b3b;
      transition: 0.3s ease-in-out;
    }
  }
}
</style>
