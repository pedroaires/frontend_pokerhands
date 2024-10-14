<template>
    <v-app>
      <v-main>
        <v-container>
          <v-data-table
            :headers="headers"
            :items="hands"
            class="elevation-1"
          >
            <!-- Correct slot syntax -->
            <template v-slot:[`item.player_hand`] = "{ item }">
              <span>{{ item.player_hand.join(' ') }}</span>
            </template>
  
            <template v-slot:[`item.board`] = "{ item }">
              <span>{{ item.board.join(' ') }}</span>
            </template>
  
            <template v-slot:[`item.money_won`] = "{ item }">
              <span :class="item.money_won >= 0 ? 'text-success' : 'text-error'">
                {{ item.money_won >= 0 ? '+' : '' }}{{ item.money_won }}$
              </span>
            </template>
          </v-data-table>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Define the table headers
        headers: [
          { text: 'Player Hand', value: 'player_hand' },
          { text: 'Board', value: 'board' },
          { text: 'Money Won', value: 'money_won' },
          { text: 'Stakes', value: 'stakes' },
          { text: 'EV Diff', value: 'ev_diff' },
          { text: 'Date', value: 'date' }
        ],
        // Sample hand data (this would come from your backend)
        hands: [
          {
            player_hand: ['K', '2'],
            board: ['5', 'K', 'J', '5', '8'],
            money_won: 1.36,
            stakes: 'NL0.25/0.5',
            ev_diff: 0,
            date: '3 months ago'
          },
          {
            player_hand: ['K', 'A'],
            board: ['K', 'J', '5', '8', 'A'],
            money_won: 1.95,
            stakes: 'NL0.25/0.5',
            ev_diff: 0,
            date: '3 months ago'
          }
        ]
      };
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
  