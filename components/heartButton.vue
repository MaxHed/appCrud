<template>
  <div>


    <v-icon @click="showDialog = true">mdi-heart</v-icon>
            
       

        <v-dialog v-model="showDialog" width="auto">
            <v-card>
                <v-card-text class="w-50%">
                    <p class="text-center">
                        Bonjour Eric, je ne sais pas pourquoi tu as cliqué sur le coeur, mais je te remercie pour cet exercice. <br>
                    </p>
                </v-card-text>

                <v-card-actions class="d-flex w-100 justify-center">
                </v-card-actions>

            </v-card>

        </v-dialog>

  </div>
</template>

<script>
export default {

    data() {
        return {
            showDialog: false
        }
    },
    emits: ['refresh'],
    methods: {
        closeNav() {
            this.show = false
            this.refresh()
        },
        refresh() {
            this.$emit('refresh')
        }
        

    },
}
</script>

<style>

</style>