<template>
  <div>
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
  </div>
</template>
<<script>

    import { mapState, mapActions } from 'vuex';
    export default {
    computed: mapState(['users']),
    data () {
      return { 
          goals:10,
          minutes:5,
          gameType:'',
      }
    },
    methods: {
    }
  }
</script>