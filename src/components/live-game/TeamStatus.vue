<template>
    <v-card-title class="pa-2 red darken-3">
        <v-avatar class="white black--text">{{game.status.Item2.Item1.color.Case}}</v-avatar>
        <h3 class="title font-weight-light text-xs-center grow">
            <PlayerStatus 
                team="white" 
                icon="accessibility_new" 
                :goals="players[0].goals.length" 
                :name="players[0].player.firstName">
            </PlayerStatus>                
            <v-icon @click="swap('white')">swap_horiz</v-icon>
            <PlayerStatus 
                team="white" 
                icon="directions_run" 
                :goals="players[1].goals.length" 
                :name="players[1].player.firstName">
            </PlayerStatus>                
            
                vs 

            <PlayerStatus 
                team="black" 
                icon="accessibility_new" 
                :goals="players[2].goals.length" 
                :name="players[2].player.firstName">
            </PlayerStatus>                
            <v-icon @click="swap('black')">swap_horiz</v-icon>
            <PlayerStatus 
                team="black" 
                icon="directions_run" 
                :goals="players[3].goals.length" 
                :name="players[3].player.firstName">
            </PlayerStatus> 
                
        </h3>
        <v-avatar class="black">{{game.status.Item1.Item1.color.Case}}</v-avatar>
    </v-card-title>
</template>

<script>
import { mapState, mapActions } from "vuex";
import PlayerStatus from "./PlayerStatus.vue";
export default {
  components: { PlayerStatus },
  computed: mapState(["game", "time", "players"]),
  methods: {
    ...mapActions(["swap"])
  }
};
</script>