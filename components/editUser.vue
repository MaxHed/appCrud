<template>
    <v-dialog v-model="show"  width="auto">
        <FormUser :form="typeBtn"  :user="typeBtn == 'edit'? user : null" @refresh="closeNav"/>
    </v-dialog>
    <div v-if="typeBtn == 'edit'">
        <v-btn color="primary" @click="show = !show" label>Editer</v-btn>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: false
        },
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