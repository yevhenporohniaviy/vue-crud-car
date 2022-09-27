<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <h1 class="mx-4">Cars List</h1>
            </div>
            <v-spacer />
        </v-app-bar>

        <v-main>
            <v-container>
                <v-btn
                    color="primary"
                    class="my-5"
                    @click="showModal = !showModal"
                >
                    Add new car
                </v-btn>
                <el-collapse v-model="activeNames">
                    <el-collapse-item :title="`${item.title} (${item.value.length})`" :name="item.title" v-for="(item,i) in carOptions" :key="i">
                        <div v-for="car in item.value" :key="car.id" class="d-flex flex-column">
                            <car-card :car="car"/>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </v-container>

            <v-dialog
                v-model="showModal"
                width="700">
                <new-car-modal @close="showModal = !showModal "></new-car-modal>
            </v-dialog>
        </v-main>
    </v-app>
</template>

<script setup>
import {carsListStore} from "@/stores/carsList";
import {computed, ref} from "vue";
import NewCarModal from "@/components/NewCarModal";
import CarCard from "@/components/CarCard";

const store = carsListStore()
const showModal = ref(false)
const activeNames = ref('Van')
const carOptions = computed(() => {
    return [
        {title: 'Track', value: store.getCarsByType('Track')},
        {title: 'Van', value: store.getCarsByType('Van')}
    ]
})

</script>