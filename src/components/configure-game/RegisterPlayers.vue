<template>
  <v-container fluid grid-list-xl class="pa-0">
    <v-layout wrap row>
      <v-flex xs12 sm6 >
        
      <h2>White</h2>
        <v-autocomplete
          v-model="players.wd"
          :items="users"
          :item-text="print"
          :filter="customFilter"
          item-value="id"
          label="Defense"
          outline
          @change="assignPlayer({team:'black',position:'defense',id:$event})"
        ></v-autocomplete>
      </v-flex>

      <v-flex xs12 sm6>
        
      <h2>Black</h2>
        <v-autocomplete
          v-model="players.bd"
          :items="users"
          :item-text="print"
          :filter="customFilter"
          item-value="id"
          label="Defense"
          outline
          @change="assignPlayer({team:'black',position:'defense',id:$event})"
        ></v-autocomplete>
      </v-flex>

    </v-layout>
    
    <v-layout wrap row>
      <v-flex xs12 sm6 d-flex>
        <v-autocomplete
          v-model="players.wcf"
          :items="users"
          :item-text="print"
          :filter="customFilter"
          item-value="id"
          label="Center Forward"
          outline
          @change="assignPlayer({team:'white',position:'centerForward',id:$event})"
        ></v-autocomplete>
      </v-flex>

      <v-flex xs12 sm6 d-flex>
        <v-autocomplete
          v-model="players.bcf"
          :items="users"
          :item-text="print"
          :filter="customFilter"
          item-value="id"
          label="Center Forward"
          outline
          @change="assignPlayer({team:'black',position:'centerForward',id:$event})"
        ></v-autocomplete>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<<script>

    import { mapState, mapActions } from 'vuex';
    export default {
    computed: mapState(['users']),
    data(){return{
      players:{
        wd:null,bd:null,wcf:null,bcf:null
      }
      }
    },
    methods: {
      ...mapActions(['assignPlayer']),
      customFilter (item, queryText, itemText) {
        const textOne = item.first.toLowerCase()
        const textTwo = item.last.toLowerCase()
        const searchText = queryText.toLowerCase()

        return textOne.indexOf(searchText) > -1 ||
          textTwo.indexOf(searchText) > -1
      },
      print (item) {
        return `${item.first} ${item.last}`
      }
    }
  }
</script>