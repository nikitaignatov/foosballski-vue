<template>
    <v-chip label :class="labelClass">
        <v-avatar tile :class="iconClass">
            <v-icon>{{icon}}</v-icon>
        </v-avatar>
        <v-avatar tile :class="iconClass">
            <strong>{{goals}}</strong>
        </v-avatar>
        {{name}}
    </v-chip>
</template>
<script>
export default {
  props: ["icon", "team", "goals", "name"],
  data() {
    return {
      labelClass:
        this.team === "white" ? "white black--text" : "black white--text",
      iconClass:
        this.team === "white" ? "black white--text" : "white black--text"
    };
  }
};
</script>