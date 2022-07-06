<template>
    <div>
        <h1>Mascota</h1>
        <div v-for="(unidad, index) in pets.data" :key="index">
            <CardPet :name="unidad.name" :age="unidad.age" 
            :description="unidad.description"/>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import CardPet from '../components/CardPet.vue';
export default defineComponent ({
name:'ListCard',
components:{CardPet},
props:{
    pets:{
        type:Array,
        required: false,
    }
}
});
</script>