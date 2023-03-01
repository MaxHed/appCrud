<template>
    <v-card  color="dark" rounded="lg" class="py-4">
        <v-card-title>
            <h1 v-if="user">Modifier l'utilisateur</h1>
            <h1 v-else>Ajouter un utilisateur</h1>
        </v-card-title>

        

        <v-card-text >

                <v-text-field
                    label="Nom d'utilisateur"
                    v-model="userObject.name.value"
                ></v-text-field>
                <v-text-field
                    label="Mot de passe"
                    v-model="userObject.password.value"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"

                ></v-text-field>
                <v-select
                    :items="['Formateur', 'Eleve']"
                    label="Role"
                    v-model="userObject.role.value"
                ></v-select>
        </v-card-text>



        
        <v-card-actions>
            <v-btn color="error"  width="50%" @click="deleteDialog = true">Supprimer</v-btn>
            <v-btn color="success" width="50%" @click="user ? saveUser(user) : addUser()">Enregistrer</v-btn>
        </v-card-actions>

        <v-dialog v-model="deleteDialog" width="auto">
            <v-card>
                <v-card-text class="w-50%">
                    <p class="text-center">
                        Vous êtes sur le point de supprimer l'utilisateur {{user.name}}. <br> 
                        Cette action est irréversible.
                    </p>
                </v-card-text>

                <v-card-actions class="d-flex w-100 justify-center
">
                    <v-btn color="error"  width="50%" @click="deleteUser(user)">Supprimer</v-btn>
                </v-card-actions>

            </v-card>

        </v-dialog>


    </v-card>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: false
        }


    },
    data() {
        return {
            // nameBeforeEdit: this.user ? this.user.username : null,
            // passwordBeforeEdit: this.user ? this.user.password : null,
            // roleBeforeEdit: this.user ? this.user.role : null,
            edit: false,
            deleteDialog: false,
            userObject:{
                name: {
                    name: 'Nom',
                    value: this.user ? this.user.username : null
                },
                password: {
                    name: 'Mot de passe',
                    value: this.user ? this.user.password : null
                },
                role: {
                    name: 'Role',
                    value: this.user ? this.user.role : null
                }
            },
            show1: false

        }
    },
    emits: ['refresh'],
    methods: {
        async saveUser(user) {
            user.name = this.nameBeforeEdit
            let res = await useFetch('/api/users/' + user.id, {
                method: 'PUT',
                body: {
                    username: this.userObject.name.value,
                    password: this.userObject.password.value,
                    role: this.userObject.role.value
                }

            })
            res
            this.$emit('refresh')
        },
        async deleteUser(user) {
            let res = await useFetch('/api/users/' + user.id, {
                method: 'DELETE'
            })
            res
            this.$emit('refresh')
        },
        async addUser() {
            console.log(this.userObject);
            let res = await useFetch('/api/users', {
                method: 'POST',
                body: {
                    username: this.userObject.name.value,
                    password: this.userObject.password.value,
                    role: this.userObject.role.value
                }
            })
            res
            this.$emit('refresh')
        }
    }
}
</script>

<style></style>