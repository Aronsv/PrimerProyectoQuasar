<template>
    <q-page padding>
        <h4>Agregar Mascota</h4> 
        <div class="row q-pa-md">
        <q-form 
            class="col-6"
            @submit.prevent="procesarFormulario"
            @reset="reset"
            ref="form"
            >
                <div>
                    <q-input
                        label="Producto"
                        v-model="producto"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Por favor escribe algo']"
                    ></q-input>
                    <q-input
                        label="Descripcion"
                        v-model="description"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Por favor escribe algo']"
                    ></q-input>
                    <q-select
                        label="Sexo"   
                        v-model="selectsex"   
                        :options="opcionsex"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Por favor escribe algo']"
                    ></q-select>
                    <q-select
                        label="Especie"   
                        v-model="selectspecies"   
                        :options="opcionspecies"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Por favor escribe algo']"
                    ></q-select>
                        <q-select
                        label="Casos Especiales"   
                        v-model="selectcase"   
                        :options="opcioncase"
                    ></q-select>
                    <q-toggle
                        label="Adoptar"
                        v-model="adopt"
                    />
                </div> 
            
            <div class="col-6">
                <q-btn 
                    label="Submit"
                    color="primary"
                    type="submit"
                ></q-btn>
                
                <q-btn
                    label="Reset"
                    color="primary"
                    outline
                    class="q-ml-sm"
                    type="reset"
                ></q-btn>
            </div>            
        </q-form>
        
        <TableDatos
        class= "col-6"
        :productos="productos"/>
    </div>
    </q-page>
</template>
<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import PintarDatos from 'src/components/PintarDatos.vue'
import TableDatos from '../components/TableDatos.vue'
    export default{
        components: { TableDatos },
        setup() {
            const $q = useQuasar()
            const form = ref(null)
            const producto = ref(null)
            const description = ref(null)
            const selectsex = ref(null)
            const selectspecies = ref(null)
            const selectcase = ref(null)
            const adopt = ref(false)
            const opcionsex = ['Masculuno','Femenino']
            const opcionspecies = ['Gato','Perro','Conejo']
            const opcioncase = ['Pata lastimada','Lomo con sarna','Sin un ojo']

            const productos = ref([])

            const procesarFormulario = () => {
                console.log('me diste clic')
                if(adopt.value === false){
                    $q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'Falta'
                    })
                }else {
                    $q.notify({
                        color: 'green-4',
                        textColor: 'white',
                        icon: 'cloud_done',
                        message: 'Con exito'
                    })

                    form.value.resetValidation()
                    //alert('falto')

                    //Procesar datos
                    productos.value = [...productos.value, {
                        producto: producto.value,
                        description: description.value,
                        selectsex: selectsex.value,
                        selectspecies: selectspecies.value,
                        selectcase: selectcase.value,
                        adopt: adopt.value
                    }]

                    reset()
                }

            }

            const reset = () => {
                producto.value = null
                description.value=null
                selectsex.value=null
                selectspecies.value=null
                selectcase.value=null
                adopt.value=false

            }

            return{
                producto,
                form,
                description,
                selectsex,
                opcionsex,
                selectspecies,
                opcionspecies,
                selectcase,
                opcioncase,
                procesarFormulario,
                adopt,
                reset,
                productos
            }
        },
    }
</script>