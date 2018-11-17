<template>
  <v-stepper v-model="e6"  style="width:100%">
    <v-stepper-header>
      <v-stepper-step :complete="e6 > 1" step="1" editable>
        Match Length
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e6 > 2" step="2" editable>
        Register Players
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3">Start the Game</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <GameType />
        <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">        
        <RegisterPlayers />
        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-layout>          
          <v-btn color="success" @click.native="start">Start Game</v-btn>
        </v-layout>
      </v-stepper-content>
    
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import GameType from '../components/configure-game/GameType.vue';
import RegisterPlayers from '../components/configure-game/RegisterPlayers.vue';

export default {
    components: {
        GameType,
        RegisterPlayers
    },
    data() {
        return {
            e6: 1
        };
    }
};
</script>
