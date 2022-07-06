<template>
    <q-page padding>
        <ListCard :pets="mockPet"></ListCard>        
    </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue';
import ListCard from '../components/ListCard.vue';
    export default defineComponent({
        name: 'PetPage',
        components: { ListCard },
        setup(){
            const mockPet = {
                data: [
                    {name:'Perro1',
                    age:1},

                    {name:'Perro2',
                    age:2},

                    {name:'Perro3',
                    age:3},     
                ]
            }
            return{
                mockPet,
                expanded: ref(false),
                lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    
            }
        }
    });
    
</script>
