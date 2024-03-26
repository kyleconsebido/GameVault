<template>
  <main>
    <section class="hero-container">
      <img src="@/assets/images/hero-background.jpg" role="presentation" />
      <div class="app-container">
        <div class="hero">
          <h1 class="hero-title">GAME VAULT</h1>
          <div class="hero-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aliquam suscipit ab sint
            perferendis quisquam odit eligendi dolorem laboriosam!
          </div>
          <RouterLink class="hero-action" to="/games">PLAY NOW</RouterLink>
        </div>
      </div>
    </section>
    <section class="app-container" style="height: 100vh">
      <h1>Over 300+ Games</h1>
    </section>
  </main>
</template>

<style scoped>
.hero-container {
  width: 100%;
  min-height: min(100svh, 1080px);
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-top: -80px;
}

.hero-container::before {
  content: '';
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: min(100svh, 1080px);
  background: linear-gradient(color-mix(in srgb, var(--black-2) 60%, transparent), var(--black-2));
  backdrop-filter: blur(3px);
}

.hero-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: min(100svh, 1080px);
  object-fit: cover;
  object-position: top;
  user-select: none;
}

.hero {
  position: relative;
  z-index: 1;
  width: max(300px, 50%);
}

.hero-title {
  font-family: 'Lexend Mega';
  font-size: 4rem;
}

.hero-text {
  color: var(--color-text-dark);
}

.hero-action {
  display: block;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-decoration: none;
  text-align: center;
  color: var(--black-1);
  background: var(--color-theme-gradient-x);
  margin-top: 1em;
  width: max(150px, 40%);
  padding: 0.5em 1em;
  border-radius: var(--border-radius-lg);
}
</style>
