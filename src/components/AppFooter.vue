<template>
  <footer>
    <div class="app-container">
      <span class="footer-item">
        <a target="_blank" href="https://github.com/kyleconsebido/ITELEC4C-GameVault">
          <img src="/github-mark-white.svg" class="logo" />
        </a>
        <span>
          Copyright © 2024 &nbsp;-
          <a
            target="_blank"
            href="https://github.com/kyleconsebido/ITELEC4C-GameVault/blob/master/LICENSE"
          >
            MIT License
          </a>
        </span>
      </span>
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
  padding-top: 150px;
  padding-bottom: 2rem;
  color: var(--color-text-dark);
}

a {
  margin: none;
  text-decoration: none;
  color: var(--color-text-dark);
}

a:hover {
  text-decoration: underline;
}

.app-container {
  display: flex;
}

.logo {
  width: 1.5em;
  height: 1.5em;
}

a,
.footer-item {
  display: inline-flex;
  align-items: center;
  gap: 1em;
}

.free-to-game {
  margin-left: auto;
}

.free-to-game .logo {
  width: 2em;
  height: 2em;
}
</style>
