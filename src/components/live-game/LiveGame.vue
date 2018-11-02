<template>
  <v-card
    class="mx-auto"
    width="100%"
  >
    <v-card dark flat >
      <team-status></team-status>
      <score-panel></score-panel>
    </v-card>
    <v-card-text class="py-0" >
      <v-timeline 
        align-top>
        <v-timeline-item
          
          :color="event.Case == 'Goal'?'green':'grey'" class="pb-0"
          large
          v-for="{Item1:event,Item2:achievements} in game.events"
           v-if="event.Fields[0].team"
           :left="event.Fields[0].team.color.Case=='White'"
           :right="event.Fields[0].team.color.Case=='Black'"
        >
        
          <v-layout wrap pt-3 v-if="event.Fields[0].team.color.Case=='White'" >
            <v-flex>
              <h2>{{event.Case}}</h2>
              <div class="caption mb-2">
                
                <div v-if="event.Fields[0].speed">
                <!-- <v-chip>
                  <v-avatar class="grey white--text">{{Math.round(event.Fields[0].speed*3.6)}}</v-avatar>
                  km/h
                </v-chip> -->
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
            <v-flex xs3 justify-end text-xs-right>
              <v-tooltip top >                
                <strong slot="activator">{{event.Fields[0].gametime}}</strong>
                <span>{{event.Fields[0].timestamp}}</span>
              </v-tooltip>
            </v-flex>
          </v-layout>        
          <v-layout wrap pt-3 v-if="event.Fields[0].team.color.Case=='Black'" >
            <v-flex xs3>
              <v-tooltip top>                
                <strong slot="activator">{{event.Fields[0].gametime}}</strong>
                <span>{{event.Fields[0].timestamp}}</span>
              </v-tooltip>
            </v-flex>
            <v-flex>
              <h2>{{event.Case}}</h2>
              <div class="caption mb-2">
                
                <div v-if="event.Fields[0].speed">
                <!-- <v-chip>
                  <v-avatar class="grey white--text">{{Math.round(event.Fields[0].speed*3.6)}}</v-avatar>
                  km/h
                </v-chip> -->
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
import TeamStatus from "./TeamStatus.vue";
import ScorePanel from "./ScorePanel.vue";
export default {
  components: { TeamStatus,ScorePanel },
  computed: mapState(["game", "time", "players"])
};
</script>