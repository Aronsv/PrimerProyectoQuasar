<template>
    
    <q-table
        class="q-mt-md"
        title="Productos"
        no-data-label="Sin Productos para mostrar"
        :columns="columnas"
        :rows="productos"
    ></q-table>
</template>
<script>
    const columnas = [
        {
        name: 'producto',
        label: 'Nombre',
        align: 'left',
        field: 'producto',
        sortable: true
        },
        {
        name: 'description',
        label: 'Descripcion',
        align: 'left',
        field: 'description'
        },
        {
        name: 'selectsex',
        label: 'Sexo',
        align: 'left',
        field: 'selectsex'
        },
        {
        name: 'selectspecies',
        label: 'Especie',
        align: 'left',
        field: 'selectspecies'
        },
        {
        name: 'selectcase',
        label: 'Caso Especial',
        align: 'left',
        field: 'selectcase'
        },
        {
        name: 'adopt',
        label: 'Adoptar',
        align: 'left',
        field: 'adopt'
        }
    ]

    const rows = [
        {
            producto: 'producto 1',
            prioridad: 'Maxima'
        }
    ]

    export default{
        props: {
            productos: Array

        },
        setup(){
            return{
                columnas,
                rows
            }
        }
    }
</script>