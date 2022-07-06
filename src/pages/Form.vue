<template>
    <q-page padding>
        <h4>Agregar Productos</h4>  

        <pre>{{producto}} -- {{seleccion}} -- {{terminos}}</pre>
        <q-form 
            class="row q-col-gutter-md"
            @submit.prevent="procesarFormulario"
            @reset="reset"
            ref="form"
            >
                <div class="col-12 col-sm-6">
                    <q-input
                        label="Producto"
                        v-model="producto"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Por favor escribe algo']"
                    ></q-input>
                </div> 
                <div class="col-12 col-sm-6">
                    <q-select
                        label="Prioridad"   
                        v-model="seleccion"   
                        :options="opciones"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Por favor escribe algo']"
                    ></q-select>
                </div>   
              
            <div class="col-12">
                <q-toggle
                    label="Aceptar Terminos"
                    v-model="terminos"
                />
            </div>
            <div class="col-12">
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

        <pintar-datos :productos="productos"/>

    </q-page>
</template>
<script>
import {ref} from 'vue'
import { useQuasar } from 'quasar'
import PintarDatos from 'src/components/PintarDatos.vue'
    export default{
        components: { PintarDatos },
        setup() {
            const $q = useQuasar()
            const form = ref(null)
            const producto = ref(null)
            const seleccion = ref(null)
            const terminos = ref(false)
            const opciones = ['maxima','moderada','minima']

            const productos = ref([])

            const procesarFormulario = () => {
                console.log('me diste clic')
                if(terminos.value === false){
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
                        prioridad: seleccion.value
                    }]

                    reset()
                }

            }

            const reset = () => {
                producto.value = null
                seleccion.value=null
                terminos.value=false

            }

            return{
                producto,
                form,
                seleccion,
                opciones,
                procesarFormulario,
                terminos,
                reset,
                productos
            }
        },
    }
</script>