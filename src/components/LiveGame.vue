<template>
  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-card dark flat width="500px">
      <v-card-title class="pa-2 red darken-3">
            <v-avatar class="white black--text">White</v-avatar>
        <h3 class="title font-weight-light text-xs-center grow"><strong>Kebab</strong> vs <strong>Bacon</strong></h3>
     
            <v-avatar class="black">Black</v-avatar>
      </v-card-title>
        <v-container fill-height color="grey lighten-3">
          <v-layout align-center>
            <strong class="display-4 font-weight-regular mr-4">{{game.status.Item1.Item2}}</strong>
            <v-layout column justify-end class="text-xs-center">
              <strong>{{time}}</strong>
            </v-layout>
            <strong class="display-4 font-weight-regular mr-4">{{game.status.Item2.Item2}}</strong>
          </v-layout>
        </v-container>
    </v-card>
    <v-card-text class="py-0" width="600">
      <v-timeline align-top dense>
        <v-timeline-item
          :color="event.Case == 'Goal'?'green':'grey'" class="pb-0"
          small
          v-for="event in game.events"
        >
          <v-layout wrap pt-3>
            <v-flex xs3>
              <v-tooltip top>
                
                <strong slot="activator">{{event.Fields[0].gametime}}</strong>
                <span>{{event.Fields[0].timestamp}}</span>
              </v-tooltip>
            </v-flex>
            <v-flex>
              <strong><span v-if="event.Fields[0].team">{{event.Fields[0].team.Case}}:</span> {{event.Case}}</strong>
              <div class="caption mb-2">
                <p>Speed: <strong>{{event.Fields[0].speed}}</strong><small>m/s</small>  <strong>{{event.Fields[0].speed*3.6}}</strong><small>km/h</small> </p>
              </div>
            </v-flex>
          </v-layout>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(['game','time']),
  data() {
    return {
      notifications: false,
      sound: true,
      widgets: false
    };
  }
};
</script>