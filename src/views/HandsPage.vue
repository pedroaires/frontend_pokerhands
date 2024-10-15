<template>
  <v-app>
    <v-main>
      <v-container>
        <v-data-table
          :headers="headers"
          :items="hands"
          class="elevation-1"
        >
          <!-- Correct slot syntax for player hand -->
          <template v-slot:[`item.heroCards`] = "{ item }">
            <span v-if="item.heroCards">{{ item.heroCards.join(' ') }}</span>
            <span v-else>No Cards</span>
          </template>

          <!-- Correct slot syntax for board -->
          <template v-slot:[`item.boards`] = "{ item }">
            <span v-if="item.boards && item.boards.length > 0">{{ item.boards[0].join(' ') }}</span>
            <span v-else>No Board</span>
          </template>

          <!-- Correct slot syntax for money won -->
          <template v-slot:[`item.balance`] = "{ item }">
            <span :class="item.balance >= 0 ? 'text-success' : 'text-error'">
              {{ item.balance >= 0 ? '+' : '' }}{{ item.balance }}$
            </span>
          </template>

          <!-- Correct slot syntax for date -->
          <template v-slot:[`item.startDateTime`] = "{ item }">
            <span>{{ formatDate(item.startDateTime) }}</span>
          </template>
        </v-data-table>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HandsService from '@/services/hands.service'; // Import the HandsService

export default {
  data() {
    return {
      hands: [], // The data from the backend will be loaded here
      headers: [
        { text: 'Player Hand', value: 'heroCards' },
        { text: 'Board', value: 'boards' },
        { text: 'Money Won', value: 'balance' },
        { text: 'Date', value: 'startDateTime' }
      ]
    };
  },
  async created() {
    try {
      const userId = 'USER_ID'; // Replace with actual user ID
      const response = await HandsService.getHandsByUser(userId);
      this.hands = response.data.hands; // Assuming the backend returns an array of hands under 'hands'
    } catch (error) {
      console.error('Error fetching hands data:', error);
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
};
</script>

<style scoped>
.text-success {
  color: green;
}
.text-error {
  color: red;
}
</style>
