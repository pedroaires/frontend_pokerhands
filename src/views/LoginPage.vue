<template>
  <v-app>
    <div class="login-page">
      <v-img
        class="mx-auto my-6"
        max-width="228"
        src="@/assets/logo.png"
      ></v-img>

      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field
          v-model="username"
          density="compact"
          placeholder="Username"
          prepend-inner-icon="mdi-account"
          variant="outlined"
          :rules="[rules.required]"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password

          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            v-if="false"
          >
            Forgot login password?
          </a>
        </div>

        <v-text-field
          v-model="password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
          :rules="[rules.required]"
        ></v-text-field>

        <v-card class="mb-12" color="surface-variant" variant="tonal">
          <v-card-text class="text-medium-emphasis text-caption">
            Warning: After 3 consecutive failed login attempts, your account
            will be temporarily locked for three hours.
          </v-card-text>
        </v-card>

        <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
          @click="handleLogin"
        >
          Log In
        </v-btn>

        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="/register"
            rel="noopener noreferrer"
          >
            Sign up now
            <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import AuthService from '@/services/auth.service.js';

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',  // Changed from email to username
      password: '',
      visible: false,
      rules: {
        required: (value) => !!value || 'Required.',
      },
    };
  },
  methods: {
    async handleLogin() {
      try {
        const user = { username: this.username, password: this.password }; // Using username instead of email
        const response = await AuthService.login(user);
        if (response.token) {
          this.$router.push('/home');
        }
      } catch (error) {
        console.error('Login failed:', error);
        alert('Invalid login credentials');
      }
    },
  },
};
</script>

