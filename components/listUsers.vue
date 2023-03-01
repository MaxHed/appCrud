<template>
    <v-table >
        <thead>
            <tr>
                <th>
                    ID
                </th>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Role
                </th>
                <th>
                    <div class="">
                        <addUser typeBtn="add" @refresh="refresh" />

                    </div>

                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.role }}</td>
                <td>
                    <div>
                        <editUser :user="user" typeBtn="edit" @refresh="refresh" />


                    </div>

                </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>

export default {
    data() {
        return {
            allowDelete: false,
            slider1: 0,
            edit: false,
            users: [],
            loading: true,
            totalItems: 0,
        }
    },
    emits: ['refresh'],
    methods: {
        async getUsers() {
            let res = await useFetch('/api/users')
            this.users = res.data
            return res
        },
        async refresh() {
            this.getUsers()
        },
        async loadItems() {
            this.loading = true
            let res = await this.getUsers()
            this.users = res.data
            // this.totalItems = res.data.length
            this.loading = false
        },
    },
    created() {
        // this.getUsers()
    },
    beforeMount() {
        console.log('beforeMount');
        this.loadItems()
    }

}
</script>

<style></style>