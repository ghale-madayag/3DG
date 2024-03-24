<template>
    <Layout>
        <Head title="User List">
            <meta name="viewport" content="your content" />
        </Head>
        <PageHeader title="User" pageTitle="Dashboard" />
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header border-bottom-dashed">

                        <div class="row g-4 align-items-center">
                            <div class="col-sm">
                                <div>
                                    <h5 class="card-title mb-0">User List</h5>
                                </div>
                            </div>
                            <div class="col-sm-auto">
                                <div class="d-flex flex-wrap align-items-start gap-2">
                                    <button v-if="selectedRows?.length > 0" class="btn btn-soft-danger" @click="deleteSelectedRows"><i class="ri-delete-bin-2-line"></i></button>
                                    <button type="button" class="btn btn-success add-btn" @click="openModal"><i class="ri-add-line align-bottom me-1"></i> Add New</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body" ref="gridContainer"></div>
                </div>
               
            </div>
        </div>
        <div class="modal fade" v-if="showModal" :class="{ 'show': showModal }" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-light p-3">
                        <h5 class="modal-title"></h5>
                        <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>
                    </div>
                    <form class="tablelist-form" autocomplete="off"  @submit.prevent="submitHandler">
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="fname" class="form-label">First Name</label>
                                <input v-model="form.fname" id="fname" type="text" class="form-control" :class="{ 'is-invalid': form.errors.name }" placeholder="Enter First Name" required />
                                <div class="invalid-feedback">Please enter first name.</div>
                            </div>
                            <div class="mb-3">
                                <label for="lname" class="form-label">Last Name</label>
                                <input v-model="form.lname" id="lname" type="text" class="form-control" :class="{ 'is-invalid': form.errors.lname }" placeholder="Enter Last Name" required />
                                <div class="invalid-feedback">{{ form.errors.lname }}</div>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input v-model="form.email" id="email" type="email" class="form-control" :class="{ 'is-invalid': form.errors.email }" placeholder="Enter email" />
                                <div class="invalid-feedback">{{ form.errors.email  }}</div>
                            </div>

                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone</label>
                                <!-- <input v-model="form.phone" v-mask="'(##)-###-###-####'" :class="{ 'is-invalid': form.errors.phone }" id="phone" type="text" class="form-control" placeholder="(63)-###-###-####" required /> -->
                                <phone-input :defaultCountry="'PH'"  @phone="phoneVal = $event"/>
                                <div class="invalid-feedback">{{ form.errors.phone  }}</div>
                            </div>
                            <div class="mb-3">
                                <label for="address" class="form-label">Address</label>
                                <textarea class="form-control" v-model="form.address" :class="{ 'is-invalid': form.errors.address }" id="address" rows="2"></textarea>
                                <div class="invalid-feedback">{{ form.errors.address  }}</div>
                            </div>
                            <div class="mb-3">
                                <label for="other_details" class="form-label">Other Details</label>
                                <textarea class="form-control" v-model="form.other_details" :class="{ 'is-invalid': form.errors.other_details }" id="other_details" rows="3"></textarea>
                                <div class="invalid-feedback">{{ form.errors.other_details  }}</div>
                            </div>
                            <div>
                                <label for="role">Select Role</label>
                                <select class="form-select mb-3" v-model="form.roles" aria-label="Default select example">
                                    <option selected>Select Role</option>
                                    <option value="contact">Contact Person</option>
                                    <option value="client">Client</option>
                                    <option value="agent">Agent</option>
                                    <option value="staff">Staff</option>
                                    <option value="administrator">Administrator</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="hstack gap-2 justify-content-end">
                                <button type="button" class="btn btn-light" @click="closeModal">Close</button>
                                <div v-if="form.processing" class="spinner-border text-success" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                                <button type="submit" class="btn btn-success is-loading">{{ submitButtonText }}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup lang="ts">
    import { Link, Head, useForm } from "@inertiajs/vue3";
    import Layout from "@/Layouts/main.vue";
    import PageHeader from "@/Components/page-header.vue";
    import { ref, onMounted, computed } from 'vue';
    import { Grid, h } from "gridjs";
    import "gridjs/dist/theme/mermaid.css";
    import Swal from 'sweetalert2/dist/sweetalert2';
    import 'sweetalert2/dist/sweetalert2.min.css';
    
    const phoneVal = ref();

    const gridContainer = ref(null);
    let grid;
    const selectedRows = ref([]);

    let props = defineProps({
        contacts: Object,
    })

    const editingMode = ref(false);

    const submitHandler = () => {
        if (editingMode.value) {
            edit(); // Call edit method if in editing mode
        } else {
            publish(); // Call publish method if not in editing mode
        }
    };

    let form = useForm({
        id: null,
        name:null,
        fname: null,
        lname:null,
        email:null,
        phone: null,
        address:null,
        other_details:null,
        roles: null,
    });

    let formDel = useForm({
        id: null,
    })

    const isPhoneInvalid = ref(false);

    const showModal = ref(false);

    const swalBtn = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-primary mr-2',
            cancelButton: 'btn btn-link',
            container: 'modal-lesson',
        },
        buttonsStyling: false
    })

    const editModal = (row) =>{
        editingMode.value = true;
        showModal.value = true;

        console.log(row)

        form.id = row.cells[0].data;
        form.fname = row.cells[1].data;
        form.lname = row.cells[2].data;
        form.phone = row.cells[4].data;
        form.email = row.cells[5].data;
        form.address = row.cells[6].data;
        form.other_details = row.cells[7].data;
        form.roles = row.cells[9].data;
    }

    const closeModal = () => {
        showModal.value = false;
    };
    
    const formatContactData = contacts => {
        return contacts.map(contact => [
            contact.id,
            contact.fname,
            contact.lname,
            contact.fname + ' ' + contact.lname,
            contact.phone,
            contact.email,
            contact.address,
            contact.other_details,
            formatCreatedAt(contact.created_at),
            contact.roles[0].name,
        ]);
    };

    


    onMounted(() => {

        const formattedData = formatContactData(props.contacts)
        console.log(formattedData);
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
            },{
                id: 'fnameColumn',
                name: 'fname',
                hidden: true,
            } ,{
                id: 'lnameColumn',
                name: 'lname',
                hidden: true
            },
            {
                id: 'nameColumn', // Unique ID for the Name column
                name: "Name"
            }, {
                id: 'phoneColumn', // Unique ID for the Phone column
                name: "Phone"
            }, {
                id: 'emailColumn', // Unique ID for the Email column
                name: "Email"
            }, {
                id: 'addressColumn', // Unique ID for the Address column
                name: "Address"
            },{
                id: 'other_details',
                name: 'other_details',
                hidden: true,
            },
            {
                id: 'createColumn', // Unique ID for the Address column
                name: "Created Date"
            },
            {name:'Role'},
            {
                id: 'actionsColumn',
                name: 'Actions',
                align: 'center',
                width: '75px',
                formatter: (cell, row) => {
                    return  h('a', { href: 'javascript:void(0);', className: 'text-muted',  onClick: () => editModal(row) },[
                        h('i', { className: 'ri-pencil-fill fs-16' }),
                    ])
                },
                sort: false    
        }],
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
    });

    const openModal = () => {
        showModal.value = true;
        editingMode.value = false;
    };

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
        selectedRows.value = isChecked ? props.contacts.map(contact => contact.id) : [];

        // Update the state of all checkboxes to match the "Select All" checkbox
        const checkboxes = document.querySelectorAll('.form-check-input');
        checkboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
        });
    };

    const publish = () =>{
        form.phone = phoneVal.value;
        form.name = form.fname+' '+form.lname;

        form.post('/user/store',{
            onStart: () => {},
            onSuccess: () => {
                const formattedData = formatContactData(props.contacts);
                
                showModal.value = false;
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
            },
        });
    }

    const edit = () =>{
        form.post('/contact/'+form.id,{
            onStart: () => {},
            onSuccess: () => {
                const formattedData = formatContactData(props.contacts);
                
                showModal.value = false;
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
            },
        });
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
                formDel.id = selectedRows;
                console.log(formDel.id)
                formDel.delete('/contact/delete',{
                    id: selectedRows.value,
                    onSuccess: () => {
                        const formattedData = formatContactData(props.contacts);
                        
                        grid.updateConfig({
                            data: function(){
                                return new Promise(function (resolve){
                                    setTimeout(function(){
                                        resolve(formattedData);
                                    },1000)
                                })
                            },
                        }).forceRender();

                        formDel.reset();
                        selectedRows.value = [];
                    }
                });
            }
        })
       
    }


    const submitButtonText = computed(() => {
        return editingMode.value ? 'Edit Contact' : 'Add Contact';
    });

    function formatCreatedAt(dateString) {
        const date = new Date(dateString);
        const options = { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric',
            hour12: true
        };
        return date.toLocaleDateString('en-US', options);
    }

</script>

<style>
.modal{
    background-color: rgba(0, 0, 0, 0.5);
}

.gridjs-input {
    padding: 10px 26px !important;
}

.gridjs-footer {
    border: 0 !important;
}

.bg-white.baseinput-core.border.w-full.border-gray.rounded-lg.py-3.px-4.flex.flex-shrink.flex-nowrap.items-center.space-x-2 {
    padding: 10px !important;
}
</style>
