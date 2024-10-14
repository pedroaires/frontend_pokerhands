<template>
  <v-app id="inspire">
    <!-- Navigation Drawer (Sidebar) -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
          <v-list-item prepend-icon="mdi-home-city" @click="goTo('home')" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
          <v-list-item prepend-icon="mdi-cards" @click="goTo('hands')" title="Hands" value="hands"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App Bar (Navbar) -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>PokerHands</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-icon class="mr-2">mdi-bell</v-icon>

      <!-- Profile Dropdown Component -->
      <v-menu offset-y>
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" class="cursor-pointer">mdi-account-circle</v-icon>
        </template>

        <!-- Dropdown Menu -->
        <v-list>
          <v-list-item>
            <v-list-item-title>Your Profile</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
          <v-list-item @click="handleLogout">
            <v-list-item-title>Sign out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Main content with router-view -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// Data for the drawer (sidebar)
const router = useRouter()
const drawer = ref(false)

// Handle navigation
const goTo = (routeName) => {
  router.push({ name: routeName })
}

const toggleDrawer = () => {
  drawer.value = !drawer.value
}

const handleLogout = () => {
  // Clear token and redirect to login
  localStorage.removeItem('token')
  window.location.href = '/auth/login'
}
</script>

<style scoped>
.mr-2 {
  margin-right: 20px; /* Adjusts the space between the bell and profile icon */
}
.cursor-pointer {
  cursor: pointer;
}
</style>
