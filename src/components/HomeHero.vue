<template>
  <section class="hero-container">
    <img src="@/assets/images/hero-background.jpg" role="presentation" />
    <div class="app-container">
      <div class="hero">
        <h1 class="section-title">GAME VAULT</h1>
        <div class="hero-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aliquam suscipit ab sint
          perferendis quisquam odit eligendi dolorem laboriosam!
        </div>
        <RouterLink class="hero-action" to="/games">PLAY NOW</RouterLink>
      </div>
    </div>
  </section>
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
  width: clamp(300px, 80%, 600px);
}

.section-title {
  translate: -3px 0;
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
  margin-top: 2rem;
  width: max(150px, 40%);
  padding: 0.5em 1em;
  border-radius: var(--border-radius-lg);
  color: var(--black-1);
  background: var(--color-theme-gradient-x);

  --angle: 0.25turn;
  --end-color: var(--red);

  background: linear-gradient(var(--angle), var(--yellow), var(--end-color));
  transform-origin: left;
  transition:
    --angle 500ms,
    --end-color 1s,
    scale 200ms;
}

.hero-action:hover {
  scale: 1.05;
  --angle: 0.5turn;
  --end-color: var(--yellow);
}

@property --angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0.25turn;
}

@property --end-color {
  syntax: '<color>';
  inherits: false;
  initial-value: red;
}
</style>
