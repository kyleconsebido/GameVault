<template>
  <footer>
    <div class="app-container">
      <span class="footer-item">Copyright © 2024</span>
      <span class="footer-item free-to-game">
        <span>Powered by FreeToGame</span>
        <a target="_blank" href="https://www.freetogame.com/">
          <img
            class="logo"
            alt="FreeToGame logo"
            src="https://www.freetogame.com/assets/images/logo-footer.png"
          />
        </a>
      </span>
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin-top: auto;
  padding-top: 4rem;
  padding-bottom: 2rem;
  color: var(--color-text-dark);
}

.app-container {
  display: flex;
}

.logo {
  width: 2rem;
  height: 2rem;
}

a,
.footer-item {
  display: flex;
  align-items: center;
  gap: 1em;
}

.free-to-game {
  margin-left: auto;
}
</style>
