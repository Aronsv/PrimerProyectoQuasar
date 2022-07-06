<template>
    <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
            <div class="text-h6">{{name}}</div>
            <div class="text-subtitle2">Age: {{age}}</div>
            <div class="text-subtitle2">Descripcion: {{description}}</div>
        </q-card-section>
        
        <q-card-actions align="right">
            <q-btn flat>Apoptar</q-btn>
            <q-btn flat>Apoptar 2</q-btn>
        </q-card-actions>
    </q-card>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent ({
    name: 'CardPet',
    props:{
        name:{
            type: String,
            requerid: false,
        },
        age:{
            type: Number,
            requerid: false,
        },
        description:{
            type: String,
            requerid: false,
        }
    }
})
</script>