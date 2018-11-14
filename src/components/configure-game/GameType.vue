<template>

  <v-stepper v-model="e6"  style="width:100%">
      
    <v-stepper-header>
    <v-stepper-step :complete="e6 > 1" step="1" editable>
      Match Length Configuration
      <small>select the type of game</small>
    </v-stepper-step>

      <v-divider></v-divider>

    <v-stepper-step :complete="e6 > 2" step="2">Register Players</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Start the Game</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
        <v-stepper-content step="1">
                <v-radio-group v-model="gameType">
                <v-radio value="TimeLimited">
                    <div slot="label">Time Limited (<small class="grey--text">Game will stop after specified amount of time</small>)</div>
                </v-radio>
                <v-radio value="GameTimeLimited">
                    <div slot="label">Game Time Limited (<small class="grey--text">Game will stop after specified amount of game time</small>)</div>
                </v-radio>
                
                <v-radio value="GoalLimitedTotal">
                    <div slot="label">Goal Limited (<small class="grey--text">Game will stop after specified total number of goals will be reached</small>)</div>
                </v-radio>
                <v-radio value="GoalLimitedTeam">
                    <div slot="label">Goal Limited pr Team (<small class="grey--text">Game will stop when one of the teams has scored specified number of goals</small>)</div>
                </v-radio>
                </v-radio-group>
                
                <v-flex  v-if="gameType==='GameTimeLimited' || gameType==='TimeLimited'">
                    <v-subheader>Game duration in minutes</v-subheader>
                    <v-slider
                    v-model="minutes"
                    thumb-label="always"
                    style="width:100%"
                    min="1" max="10"
                    ></v-slider>
                </v-flex>
                
                <v-flex  v-if="gameType==='GoalLimitedTotal' || gameType==='GoalLimitedTeam'">
                    <v-subheader>Number of goals</v-subheader>
                    <v-slider
                    v-model="goals"
                    thumb-label="always"
                    style="width:100%"
                    min="1" max="32"
                    ></v-slider>
                </v-flex>
            <v-btn color="primary" @click="e6 = 2" :disabled="gameType==''">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
        </v-stepper-content>


        <v-stepper-content step="3">
          <h1 class="mb-5">Throw in the ball to start the game</h1>
        </v-stepper-content>

        <v-stepper-content step="2">
            
  
  <v-container fluid grid-list-xl>
    <v-layout wrap row>
      <v-flex xs12 sm6 >
        
      <h2>White</h2>
        <v-select
          v-model="selectedFruits"
          :items="players"
          label="Defense"
          outline
        >
          <v-list-tile slot="prepend-item" ripple>              
            <v-list-tile-title><v-btn color="primary" @click="1">Create Player</v-btn></v-list-tile-title>
          </v-list-tile>
          <v-divider
            slot="prepend-item"
            class="mt-2"
          ></v-divider>
        </v-select>
      </v-flex>

      <v-flex xs12 sm6>
        
      <h2>Black</h2>
        <v-select
          v-model="selectedFruits"
          :items="players"
          label="Defense"
          outline
        >
          <v-list-tile slot="prepend-item" ripple>              
            <v-list-tile-title><v-btn color="primary" @click="1">Create Player</v-btn></v-list-tile-title>
          </v-list-tile>
          <v-divider
            slot="prepend-item"
            class="mt-2"
          ></v-divider>
        </v-select>
      </v-flex>

    </v-layout>
    
    <v-layout wrap row>
      <v-flex xs12 sm6 d-flex>
        <v-select
          v-model="selectedFruits"
          :items="players"
          label="Center Forward"
          outline
        >
          <v-list-tile slot="prepend-item" ripple>              
            <v-list-tile-title><v-btn color="primary" @click="1">Create Player</v-btn></v-list-tile-title>
          </v-list-tile>
          <v-divider
            slot="prepend-item"
            class="mt-2"
          ></v-divider>
        </v-select>
      </v-flex>

      <v-flex xs12 sm6 d-flex>
        <v-select
          v-model="selectedFruits"
          :items="players"
          label="Center Forward"
          outline
        >
          <v-list-tile slot="prepend-item" ripple>              
            <v-list-tile-title><v-btn color="primary" @click="1">Create Player</v-btn></v-list-tile-title>
          </v-list-tile>
          <v-divider
            slot="prepend-item"
            class="mt-2"
          ></v-divider>
        </v-select>
      </v-flex>
    </v-layout>
  </v-container>
        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
    
    </v-stepper-items>
  </v-stepper></template>
<<script>
    export default {
    data () {
      return { 
          goals:10,
          minutes:5,
          gameType:'',
          players:[],
        e6: 1
      }
    }
  }
</script>