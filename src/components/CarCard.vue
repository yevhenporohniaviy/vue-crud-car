<template>
    <v-container>
    <v-card>
        <v-form>
            <v-container>
                <v-row>
                    <v-col class="pb-0">
                        <p>Car title:</p>
                        <v-text-field
                            v-model="carObj.title"
                            clearable
                            dense
                            solo
                            label="Car title"/>
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
                <v-row>
                    <v-col class="py-0">
                        <v-btn
                            color="error"
                            class="my-3"
                            @click="deleteCar(carObj.id)">
                            Delete
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-card>
    </v-container>
</template>

<script setup>
import {defineProps, ref} from "vue";
import {carsListStore} from "@/stores/carsList";


    const props = defineProps(['car']);
    const carObj = ref(props.car);
    const store = carsListStore()
    const deleteCar = (id) => {
        store.deleteCar(id)
    }
</script>
