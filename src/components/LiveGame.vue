<template>
  <v-card
    class="mx-auto"
    width="100%"
  >
    <v-card dark flat >
      <v-card-title class="pa-2 red darken-3">
            <v-avatar class="white black--text">{{game.status.Item2.Item1.Case}}</v-avatar>
        <h3 class="title font-weight-light text-xs-center grow">
                <v-chip label class="white black--text">
                  <v-avatar tile class="black white--text">
                    <v-icon>accessibility_new</v-icon>
                  </v-avatar>
                  ---
                </v-chip>
                
                <v-chip label class="white black--text">
                  <v-avatar tile class="black white--text">
                    <v-icon>directions_run</v-icon>
                  </v-avatar>
                  ---
                </v-chip>
                
                 vs 
                 
                <v-chip label class="black white--text">
                  <v-avatar tile class="white black--text">
                    <v-icon>accessibility_new</v-icon>
                  </v-avatar>
                  ---
                </v-chip>
                
                <v-chip label class="black white--text">
                  <v-avatar tile class="white black--text">
                    <v-icon>directions_run</v-icon>
                  </v-avatar>
                  ---
                </v-chip>
                
        </h3>
            <v-avatar class="black">{{game.status.Item1.Item1.Case}}</v-avatar>
      </v-card-title>
        <v-container fill-height color="grey darken-1">
          <v-layout align-center>
            <strong class="display-4 font-weight-regular mr-4">{{game.status.Item2.Item2}}</strong>
            <v-layout column justify-end class="text-xs-center">
              <h1>{{time}}</h1>
            </v-layout>
            <strong class="display-4 font-weight-regular mr-4">{{game.status.Item1.Item2}}</strong>
          </v-layout>
        </v-container>
    </v-card>
    <v-card-text class="py-0" >
      <v-timeline align-top>
        <v-timeline-item
          
          :color="event.Case == 'Goal'?'green':'grey'" class="pb-0"
          small
          v-for="{Item1:event,Item2:achievements} in game.events"
           v-if="event.Fields[0].team"
           :left="event.Fields[0].team.Case=='White'"
           :right="event.Fields[0].team.Case=='Black'"
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
                
                <div v-if="event.Fields[0].speed">
                <v-chip>
                  <v-avatar class="grey white--text">{{Math.round(event.Fields[0].speed*3.6)}}</v-avatar>
                  km/h
                </v-chip>
                <br/>
                <div v-for="achievement in achievements" :key="achievement">
                <v-chip  class="yellow black--text">
                  <v-avatar class="yellow darken-3 white--text">A</v-avatar>
                  {{achievement}}
                </v-chip>
                </div>
                </div>
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
  computed: mapState(["game", "time"]),
  data() {
    return {
      notifications: false,
      sound: true,
      widgets: false
    };
  }
};
</script>