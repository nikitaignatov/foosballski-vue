<template>
  <v-container fluid fill-height color="grey darken-1">
    <v-layout align-center>
      <strong class="display-4 font-weight-regular mr-4">{{game.status.Item2.Item2}}</strong>
      <v-layout column justify-end class="text-xs-center">
        <h1>{{time}}</h1>
      </v-layout>
      <strong class="display-4 font-weight-regular mr-4">{{game.status.Item1.Item2}}</strong>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["game", "time"]),
};
</script>