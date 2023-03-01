<template>
    <v-dialog  v-model="show" width="auto">
        <FormUser :form="typeBtn" @refresh="closeNav"/>
    </v-dialog>
   
    <v-btn color="primary" @click="show = !show" v-if="typeBtn == 'add'">Ajouter</v-btn>
</template>

<script>
export default {
    props: {
        typeBtn: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            show: null
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

<style></style>