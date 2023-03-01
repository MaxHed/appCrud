<template>
    <v-card>
        <ListUsers/>
    </v-card>
</template>

<script>
// const createDbSql = content from createdb.sql file
import ListUsers from '../components/listUsers.vue'
export default {
    components: {
        ListUsers
    },
    created() {
    },

}
</script>

<style>

</style>