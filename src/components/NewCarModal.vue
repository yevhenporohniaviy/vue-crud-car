<template>
    <v-card
        elevation="2"
        class="my-5 add-card">
        <v-container>
            <v-row>
                <v-col class="pb-0">
                    <p>Car type:</p>
                    <v-autocomplete
                        v-model="carObj.type"
                        :items="carOptionsNames"
                        dense
                        solo
                        label="Car type"
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="py-0">
                    <p>Car title:</p>
                    <v-text-field
                        v-model="carObj.title"
                        clearable
                        dense
                        solo
                        label="Car title"
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="py-0">
                    <p>Car description:</p>
                    <v-text-field
                        v-model="carObj.description"
                        clearable
                        dense
                        solo
                        label="Car description"
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="py-0">
                    <p>Risk response:</p>
                    <v-text-field
                        v-model="carObj.response"
                        clearable
                        dense
                        solo
                        label="Risk response"
                    />
                </v-col>
            </v-row>
        </v-container>


        <v-card-actions class="d-flex flex-row-reverse">
            <v-btn
                color="primary"
                class="ml-3"
                @click="handlerAddCar">
                Save
            </v-btn>
            <v-btn
                @click="handlerClose">
                Cancel
            </v-btn>
        </v-card-actions>
    </v-card>
</template>


<script setup>
    import {ref, defineEmits} from "vue";
    import {carsListStore} from "@/stores/carsList";


    const store = carsListStore()
    const emit = defineEmits(['close'])
    const carOptionsNames = ref(['Van', 'Track'])

    const carObj = ref({
        title: '',
        description: '',
        response: '',
        type: ''
    })
    const handlerAddCar = () => {
        if(!carObj.value.title || !carObj.value.type) {
            return
        }
        store.addCar(carObj.value)
        emit('close', false)
    }
    const handlerClose = () => {
        emit('close', false)
    }
</script>

<style scoped>

</style>