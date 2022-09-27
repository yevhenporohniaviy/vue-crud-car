import { defineStore } from 'pinia'

export const carsListStore = defineStore({
  id: 'carsList',
  state: () => ({
    list: [],
    nextId: 0
  }),
  getters: {
    getCarsByType: (state) => (type) => state.list.filter(item => item.type === type)
  },
  actions: {
    addCar(payload) {
      this.list.push({id: this.nextId++, ...payload})
    },
    deleteCar(id) {
      this.list.splice(this.list.findIndex((i) => i.id === id), 1);
    }
  },
  persist: true
})
