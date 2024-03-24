<template>
    <Layout>
        <Head title="Land List">
            <meta name="viewport" content="your content" />
        </Head>
        <PageHeader title="Land List" pageTitle="Dashboard" />
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header border-bottom-dashed">

                        <div class="row g-4 align-items-center">
                            <div class="col-sm">
                                <div>
                                    <h5 class="card-title mb-0">Land List</h5>
                                </div>
                            </div>
                            <div class="col-sm-auto">
                                <div class="d-flex flex-wrap align-items-start gap-2">
                                    <button v-if="selectedRows.length > 0" class="btn btn-soft-danger" @click="deleteSelectedRows"><i class="ri-delete-bin-2-line"></i></button>
                                    <Link href="/land/create" class="btn btn-success add-btn"><i class="ri-add-line align-bottom me-1"></i> Add New</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body" ref="gridContainer"></div>
                </div>
               
            </div>
        </div>
    </Layout>
</template>

<script setup>
    import { Link, Head, useForm, router  } from "@inertiajs/vue3";
    import Layout from "@/Layouts/main.vue";
    import PageHeader from "@/Components/page-header.vue";
    import { ref, onMounted, computed } from 'vue';
    // import VueInputMask from 'vue-inputmask';
    import { Grid, h } from "gridjs";
    import "gridjs/dist/theme/mermaid.css";
    import Swal from 'sweetalert2/dist/sweetalert2';
    import 'sweetalert2/dist/sweetalert2.min.css';

    const gridContainer = ref(null);
    let grid;
    const selectedRows = ref([]);

    let props = defineProps({
        lands: Object
    })

    let form = useForm({
        id: null,
    })

    const editingMode = ref(false);
    
    const swalBtn = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-primary mr-2',
            cancelButton: 'btn btn-link',
            container: 'modal-lesson',
        },
        buttonsStyling: false
    })

    const submitHandler = () => {
        if (editingMode.value) {
            edit(); // Call edit method if in editing mode
        } else {
            publish(); // Call publish method if not in editing mode
        }
    };

    const formatData = land => {
        return land.map(land => [
            land.id,
            land.name,
            land.size +' '+'Sqm',
            land.address+', '+ capitalizedString(land.barangay) +', '+capitalizedString(land.municipality)+', '+capitalizedString(land.province)+', '+land.region,
            land.seller.fname + ' ' + land.seller.lname,
            land.owner.fname + ' ' + land.owner.lname,
            formatCreatedAt(land.created_at),
            land.slug
        ]);
    };


    onMounted(() => {

        const formattedData = formatData(props.lands)

        grid = new Grid({
            columns: [{
                id: 'checkboxCol',
                width: '40px',
                name: h('input', { type: 'checkbox', className: 'form-check-input', onChange: event => selectAllRows(event) }),
                align: 'center',
                formatter: (cell, row) => {
                    return h('input', {
                        type: 'checkbox',
                        className: 'form-check-input',
                        onClick: event => handleCheckboxClick(event, row)
                    });
                },
                sort: false // Disable sorting on this column
            },
                {name: 'Name'},
                {name: "Size"}, 
                {name: "Groundbreaking"}, 
                {name: 'Address'},
                {name: 'Seller'},
                {name: 'Owner'},
                {name: "Created Date"},
            {
                id: 'actionsColumn',
                name: 'Actions',
                align: 'center',
                width: '75px',
                // formatter: (cell, row) => {
                //     return  h('a', { href: 'javascript:void(0);', className: 'text-muted',  onClick: () => editRedirect(row) },[
                //         h('i', { className: 'ri-pencil-fill fs-16' }),
                //     ])
                // },
                formatter: (cell, row) => {
                    return h('ul', { className: 'list-inline hstack gap-2 mb-0' }, [
                        h('li', { className: 'list-inline-item', 'data-bs-toggle': 'tooltip', 'data-bs-trigger': 'hover', 'data-bs-placement': 'top', title: 'View' }, [
                        h('a', { href: '#', className: 'text-info d-inline-block', onClick:() => showURL(row) }, [
                            h('i', { className: 'ri-eye-fill fs-16' })
                        ])
                        ]),
                        h('li', { className: 'list-inline-item edit', 'data-bs-toggle': 'tooltip', 'data-bs-trigger': 'hover', 'data-bs-placement': 'top', title: 'Edit' }, [
                            h('a', { href: '#showModal', 'data-bs-toggle': 'modal', className: 'text-primary d-inline-block edit-item-btn', onClick: () => editRedirect(row) }, [
                                h('i', { className: 'ri-pencil-fill fs-16' })
                            ])
                        ])
                    ]);
                },
                sort: false    
            }
        ],
            sort: false,
            theme: 'mermaid',
            search: true,
            pagination: {
                limit: 10
            },
            data: function(){
                return new Promise(function (resolve){
                    setTimeout(function(){
                        resolve(formattedData);
                    },2000)
                })
            },
        }).render(gridContainer.value);
    })

    const formatCreatedAt = (dateString) => {
        const date = new Date(dateString);
        const options = {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        };

        // Check if the parsed date string includes time-related information
        const hasTime = /\d{2}:\d{2}/.test(dateString);

        if (hasTime) {
            options.hour = 'numeric';
            options.minute = 'numeric';
            options.hour12 = true;
        }

        return date.toLocaleDateString('en-US', options);
    };

    const capitalizedString = (inputString) => {
        return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
    };

    const editRedirect = (row) => {
        console.log(row);
        router.visit('/land/'+row.cells[7].data+'/edit')
    }

    const deleteSelectedRows = () => {
        swalBtn.fire({
            title: 'Are you sure?',
            text: "Are you Sure You want to Delete this data ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                form.id = selectedRows;
                form.delete('/land/delete',{
                    id: selectedRows.value,
                    onSuccess: () => {
                        swalBtn.fire(
                            'Deleted!',
                            'The data has been deleted.',
                            'success'
                        )
                        const formattedData = formatData(props.lands);
                        
                        grid.updateConfig({
                            data: function(){
                                return new Promise(function (resolve){
                                    setTimeout(function(){
                                        resolve(formattedData);
                                    },1000)
                                })
                            },
                        }).forceRender();

                        form.reset();
                        selectedRows.value = [];

                    }
                });
            }
        })
    }

    const handleCheckboxClick = (event, row) => {
        if (event.target.checked) {
            selectedRows.value.push(row.cells[0].data);
        } else {
            const index = selectedRows.value.indexOf(row.cells[0].data);
            if (index !== -1) {
                selectedRows.value.splice(index, 1);
            }
        }
    };

    const selectAllRows = event => {

        const isChecked = event.target.checked;
        selectedRows.value = isChecked ? props.lands.map(contact => contact.id) : [];

        // Update the state of all checkboxes to match the "Select All" checkbox
        const checkboxes = document.querySelectorAll('.form-check-input');
        checkboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
        });
    };

    const showURL = (row) => {
        router.visit('/land/'+row.cells[7].data+'/')
    }

</script>

<style>
.gridjs-input {
    padding: 10px 26px !important;
}

.gridjs-footer {
    border: 0 !important;
}
</style>