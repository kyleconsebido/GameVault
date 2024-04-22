<!-- <script setup>
import { useRoute, useRouter } from 'vue-router'
import useGame from '../stores/useGame'

const route = useRoute()
const router = useRouter()

const state = useGame(route.params.id)

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
  <main>
    <button @click="clickBack">Back</button>
    <div v-if="state.loading">Loading</div>
    <div v-else-if="state.error">{{ state.error }}</div>
    <div v-else>
      <div><img :src="state?.data?.thumbnail" /></div>
      <div>
        <img
          v-for="screenshot of state?.data?.screenshots"
          :key="screenshot.id"
          :src="screenshot.image"
          width="300"
        />
      </div>
      <div>Title: {{ state?.data?.title }}</div>
      <div>Short Desc: {{ state?.data?.short_description }}</div>
      <div>Desc: {{ state?.data?.description }}</div>
      <a :href="state?.data?.game_url" target="_blank">URL: {{ state?.data?.game_url }}</a>
      <div>Genre: {{ state?.data?.genre }}</div>
      <div>Platform: {{ state?.data?.platform }}</div>
      <div>Publisher: {{ state?.data?.publisher }}</div>
      <div>Developer: {{ state?.data?.developer }}</div>
      <div>Release Date: {{ state?.data?.release_date }}</div> -->

<!--<div>
        Minimum System Requirements
        <div>OS: {{ state?.data?.minimum_system_requirements?.os }}</div>
        <div>Processor: {{ state?.data?.minimum_system_requirements?.processor }}</div>
        <div>Memory: {{ state?.data?.minimum_system_requirements?.memory }}</div>
        <div>Graphics: {{ state?.data?.minimum_system_requirements?.graphics }}</div>
        <div>Storage {{ state?.data?.minimum_system_requirements?.storage }}</div>
      </div>-->

<script setup>
import { useRoute, useRouter } from 'vue-router'
import useGame from '../stores/useGame'

const route = useRoute()
const router = useRouter()

const state = useGame(route.params.id)

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
<!--<template>
  <main class="main-container">
    <button @click="clickBack">Back</button>
    <div v-if="state.loading">Loading</div>
    <div v-else-if="state.error">{{ state.error }}</div>
    <div v-else class="content-container">
      <div><img :src="state?.data?.thumbnail" /></div>
      <div>
        <img
          v-for="screenshot of state?.data?.screenshots"
          :key="screenshot.id"
          :src="screenshot.image"
          width="300"
        />
      </div>

      <div class="info-container">
        <h1>{{ state.data.title }}</h1>
        <p>{{ state.data.short_description }}</p>
        <p>{{ state?.data?.description }}</p>
        <div class="details">
          <p>Genre: {{ state.data.genre }}</p>
          <p>Platform: {{ state.data.platform }}</p>
          <p>Publisher: {{ state.data.publisher }}</p>
          <p>Developer: {{ state.data.developer }}</p>
          <p>Release Date: {{ state.data.release_date }}</p>
        </div>
        <a :href="state.data.game_url" target="_blank" class="download-link">Download Now</a>
      </div>
    </div>
    <div class="system-requirements">
      <h2>System Requirements</h2>
      <div class="requirements-grid">
        <div class="requirement-card">
          <h3>Minimum</h3>
          <ul>
            <li>
              <span>OS:</span>
              {{ state?.data?.minimum_system_requirements?.os }}
            </li>
            <li>
              <span>Processor:</span>
              {{ state?.data?.minimum_system_requirements?.processor }}
            </li>
            <li>
              <span>Memory:</span>
              {{ state?.data?.minimum_system_requirements?.memory }}
            </li>
            <li>
              <span>Graphics:</span>
              {{ state?.data?.minimum_system_requirements?.graphics }}
            </li>
            <li>
              <span>Storage:</span>
              {{ state?.data?.minimum_system_requirements?.storage }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the start (left side) */
  justify-content: center;
  min-height: 100vh;
  padding: 3rem;
}

.content-container {
  max-width: 96rem; /* 5xl */
  width: 100%;
  padding: 1rem;
}

.info-container {
  margin-top: 2rem;
}

.info-container h1 {
  font-size: 2rem; /* 3xl */
  font-weight: bold;
  color: #1a202c; /* Dark gray */
}

.info-container p {
  color: #4a5568; /* Gray */
  margin-top: 0.5rem;
}

.details {
  margin-top: 1rem;
}

.details p {
  color: #4a5568; /* Gray */
  margin-bottom: 0.5rem;
}

.download-link {
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  color: #4299e1; /* Blue */
  text-decoration: none;
}

.download-link:hover {
  color: #2b6cb0; /* Darker blue */
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
  background-color: #f7fafc;
  border-radius: 0.5rem;
  padding: 1rem;
  color: black;
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
</style> -->

<template>
  <div class="main-container">
    <div class="content-container">
      <div class="grid-container">
        <div class="image-grid">
          <img alt="Game Cover" class="game-cover" height="225" src="" width="400" />
          <img alt="Game Screenshot 1" class="game-screenshot" height="225" src="" width="400" />
          <img alt="Game Screenshot 2" class="game-screenshot" height="225" src="" width="400" />
        </div>
        <div class="info-container">
          <img alt="Game Cover" class="game-cover-small" height="84" src="" width="150" />
          <h1>Cyberpunk 2077</h1>
          <p>
            Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis
            obsessed with power, glamour and body modification. You play as V, a mercenary outlaw
            going after a one-of-a-kind implant that is the key to immortality.
          </p>
          <div class="details">
            <p>Genre: Action, Adventure, RPG</p>
            <p>Platform: PC, PlayStation 4, Xbox One</p>
            <p>Publisher: CD Projekt Red</p>
            <p>Developer: CD Projekt Red</p>
            <p>Release Date: December 10, 2020</p>
          </div>
          <a href="#" class="download-link">Download Now</a>
        </div>
        <div class="system-requirements">
          <h2>System Requirements</h2>
          <ul>
            <li>Intel Core i5-3570K or AMD FX-8310</li>
            <li>8GB RAM</li>
            <li>NVIDIA GeForce GTX 780 3GB or AMD Radeon RX 470 4GB</li>
            <li>70GB of storage space</li>
            <li>Windows 7 or 10</li>
          </ul>
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
  max-width: 96rem; /* 5xl */
  width: 100%;
  padding: 1rem;
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
  font-size: 2rem; /* 3xl */
  font-weight: bold;
  color: #1a202c; /* Dark gray */
}

.info-container p {
  color: #4a5568; /* Gray */
  margin-top: 0.5rem;
}

.details {
  margin-top: 1rem;
}

.details p {
  color: #4a5568; /* Gray */
  margin-bottom: 0.5rem;
}

.download-link {
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  color: #4299e1; /* Blue */
  text-decoration: none;
}

.download-link:hover {
  color: #2b6cb0; /* Darker blue */
}

.system-requirements {
  padding: 1rem;
  margin-top: 3rem;
  max-width: 48rem;
  width: 100%;
}

.system-requirements h2 {
  font-size: 1.25rem;
  font-weight: bold;
}

.system-requirements ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  color: #4a5568; /* Gray */
  margin-top: 0.5rem;
}
</style>
