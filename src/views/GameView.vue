<script setup>
import { useRoute, useRouter } from 'vue-router'
import useGame from '../stores/useGame'

const route = useRoute()
const router = useRouter()

const { data, loading, error } = useGame(route.params.id)

const clickBack = () => {
  const isValidRoute = router.options.routes.some(
    (route) => route.path === router.options.history.state.back
  )

  if (isValidRoute) {
    router.back()
  } else {
    router.push('/games')
  }
}
</script>

<template>
  <div class="main-container">
    <div class="content-container">
      <button class="back-button" @click="clickBack">Return</button>
      <div class="grid-container">
        <div v-if="loading">Loading</div>
        <div v-else-if="error">{{ state.error }}</div>
        <div v-else>
          <div class="image-grid">
            <img
              alt="Game Cover"
              class="game-cover"
              :src="data?.thumbnail"
              height="225"
              width="400"
            />
            <img
              v-for="screenshot of data?.screenshots"
              :key="screenshot.id"
              class="game-screenshot"
              :src="screenshot.image"
              height="225"
              width="400"
            />
          </div>
        </div>
        <div class="info-container">
          <img
            alt="Game Cover"
            class="game-cover"
            :src="data?.thumbnail"
            height="150"
            width="300"
          />
          <h1>{{ data?.title }}</h1>
          <p>{{ data?.short_description }}</p>
          <div class="details">
            <p>Genre: {{ data?.genre }}</p>
            <p>Platform: {{ data?.platform }}</p>
            <p>Publisher: {{ data?.publisher }}</p>
            <p>Developer: {{ data?.developer }}</p>
            <p>Release Date: {{ data?.release_date }}</p>
          </div>
          <a :href="data?.game_url" target="_blank" class="download-link">Download Now</a>
        </div>
        <div class="description">
          <!-- <p>Game Description:</p> -->
          <p>{{ data?.description }}</p>
        </div>
        <div class="system-requirements">
          <h2>System Requirements</h2>
          <div class="requirements-grid">
            <div class="requirement-card">
              <h3>Minimum</h3>
              <ul>
                <li><span>OS:</span> {{ data?.minimum_system_requirements?.os }}</li>
                <li>
                  <span>Processor:</span>
                  {{ data?.minimum_system_requirements?.processor }}
                </li>
                <li><span>Memory:</span> {{ data?.minimum_system_requirements?.memory }}</li>
                <li><span>Graphics:</span> {{ data?.minimum_system_requirements?.graphics }}</li>
                <li><span>Storage:</span> {{ data?.minimum_system_requirements?.storage }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 3rem;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 96rem;
  width: 100%;
  padding: 1rem;
}
.back-button {
  padding: 10px 15px;
  background: #4a5568;
  border: none;
  cursor: pointer;
  margin-bottom: 1rem;
  color: #faf9f6;
  font-weight: bold;
  transition:
    background 0.3s ease,
    color 0.3s ease;
  border-radius: 5px;
}

.back-button:hover {
  background: #2d3640;
  color: #faf9f6;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.game-cover,
.game-screenshot,
.game-cover-small {
  object-fit: cover;
  border-radius: 0.5rem;
}

.info-container {
  margin-top: 2rem;
}

.info-container h1 {
  font-size: 2rem;
  font-weight: bold;
  color: #faf9f6;
}

.info-container p {
  color: var(--color-text-dark);
  margin-top: 0.5rem;
}

.details {
  margin-top: 1rem;
}

.details p {
  color: var(--color-text-dark);
  margin-bottom: 0.5rem;
}

.download-link {
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  color: #4299e1;
  text-decoration: none;
}

.download-link:hover {
  color: #2b6cb0;
}
.description {
  color: var(--color-text-dark);
  margin-top: 1rem;
  font-size: 1.125rem;
  text-align: justify;
}

.system-requirements {
  padding: 1rem;
  margin-top: 3rem;
  max-width: 48rem;
  width: 100%;
}

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
}

.requirement-card {
  /* background-color: #faf9f6; */
  border-radius: 0.5rem;
  padding: 1rem;
  color: var(--color-text-dark);
}

.requirement-card h3 {
  font-size: 1.25rem;
  font-weight: bold;
}

.requirement-card ul {
  margin-top: 0.5rem;
}

.requirement-card ul li {
  margin-bottom: 0.5rem;
}

.requirement-card ul li span {
  font-weight: 500;
}

/* Responsive styles */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }

  .image-grid {
    grid-template-columns: 1fr;
  }

  .info-container h1 {
    font-size: 1.5rem;
  }

  .system-requirements {
    max-width: 80%;
  }
  .description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .info-container h1 {
    font-size: 1.25rem;
  }
  .description {
    font-size: 0.875rem;
  }
}
</style>
