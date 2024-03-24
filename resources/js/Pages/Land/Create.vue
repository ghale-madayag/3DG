<template>
    <Layout>
        <Head title="Add Land">
            <meta name="viewport" content="your content" />
        </Head>
        <PageHeader title="Add Land" pageTitle="Dashboard" />
        
        <div class="row">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-body">
                        <div class="mb-3">
                            <label class="form-label" for="name">Land Name</label>
                            <input v-model="form.name" :class="{ 'is-invalid': form.errors.name }" type="text" class="form-control">
                            <div class="invalid-feedback">The land name is required</div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="description">Description</label>
                           <!-- <textarea v-model="form.description" class="form-control" id="description" rows="5">
                           </textarea> -->
                           <ckeditor :editor="editor" v-model="form.description" :config="editorConfig"></ckeditor>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="mb-3 mb-lg-0">
                                    <label for="size" class="form-label">Size / Sqm</label>
                                    <input v-model="form.size" type="text" class="form-control" id="size">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="mb-3 mb-lg-0">
                                    <label for="groundbreaking" class="form-label">Groundbreaking Date</label>
                                    <flatPickr v-model="form.ground_breaking " class="form-control" :config="flatpickrOptions"></flatPickr>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->

                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Attached files</h5>
                    </div>
                    <div class="card-body">
                        <div>
                            <p class="text-muted">Add Attached files here.</p>
                            <div ref="dropRef" id="drop" class="dropzone custom-dropzone" style="justify-content: center;"></div>
                            <div class="preview-container" ref="dropPreview"></div>
                        </div>
                    </div>
                </div>
                <!-- end card -->
                <div class="text-end mb-4">
                    <button type="submit" class="btn btn-success w-sm" @click="publish">Create</button>
                </div>
            </div>
            <!-- end col -->
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Location Details</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label class="form-label">Region</label>
                            <Multiselect
                            class="form-select mb-3"
                            v-model="selectedRegion"
                            placeholder="Select Region"
                            :options="regions"
                            :searchable="true"
                            track-by="label"
                            />
                        </div>
                        <div class="form-group">
                            <label class="form-label">Province</label>
                            <Multiselect
                            class="form-select mb-3"
                            v-model="selectedProvince"
                            placeholder="Select Province"
                            :searchable="true"
                            track-by="label"
                            :options="selectedRegion ? selectedProvinceList : []"
                            />
                        </div>
                        <div class="form-group">
                            <label class="form-label">Municipality</label>
                            <Multiselect
                            class="form-select mb-3"
                            v-model="selectedMunicipality"
                            placeholder="Select Municipality"
                            :searchable="true"
                            track-by="label"
                            :options="selectedProvince ? selectedMunList : []"
                            />
                        </div>
                        <div class="form-group">
                            <label class="form-label">Barangay</label>
                            <Multiselect
                            class="form-select mb-3"
                            v-model="selectedBarangay"
                            placeholder="Select Barangay"
                            :searchable="true"
                            track-by="label"
                            :options="selectedMunicipality ? selectedBarList : []"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="address" class="form-label">Blk/Lot/Street/House No.</label>
                            <textarea v-model="form.address" class="form-control" id="address" rows="5">
                           </textarea>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Seller & Owner Details</h5>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label for="seller" class="form-label">Seller</label>
                            <!-- <input v-model="form.seller" type="text" class="form-control" id="seller"> -->
                            <Multiselect
                                    mode="single"
                                    v-model="form.seller_id"
                                    placeholder="Select Seller"
                                    :close-on-select="true"
                                    :searchable="true"
                                    :options="contacts"
                                    :class="{ 'is-invalid': form.errors.seller_id }"
                                />
                            <div class="invalid-feedback">The seller is required</div>
                        </div>
                        <div class="mb-3">
                            <label for="owner" class="form-label">Owner</label>
                            <Multiselect
                                    mode="single"
                                    v-model="form.owner_id"
                                    placeholder="Select Owner"
                                    :close-on-select="true"
                                    :searchable="true"
                                    :options="contacts"
                                    :class="{ 'is-invalid': form.errors.owner_id }"
                                />
                            <div class="invalid-feedback">The owner is required</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end col -->
        </div>
    </Layout>
</template>

<script setup>
    import { Link, Head, useForm } from "@inertiajs/vue3";
    import Layout from "@/Layouts/main.vue";
    import PageHeader from "@/Components/page-header.vue";
    import { ref, watch, onMounted } from 'vue';
    import flatPickr from "vue-flatpickr-component";
    import Dropzone from "dropzone";
    import Multiselect from '@vueform/multiselect';
    import '@vueform/multiselect/themes/default.css';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    const editor = ClassicEditor;
    const editorConfig = {
            toolbar: {
                items: [
                    'bold',
                    'italic',
                    'numberedList',
                    'bulletedList',
                    'indent',
                    'outdent', 
                    'link',
                    'undo',
                    'redo'
                ]
            }
    }

    const regions = ref(null);
    const selectedRegion = ref(null);
    const selectedProvince = ref(null);
    const selectedMunicipality = ref(null);
    const selectedBarangay = ref(null);
    const selectedProvinceList = ref(null); 
    const selectedMunList = ref(null);
    const selectedBarList = ref(null);

    const dropRef = ref(null);
    let dropPreview = ref();

    let props = defineProps({
        contacts: Object,
    })

    let form = useForm({
        name: null,
        description: null,
        size: null,
        ground_breaking: null,
        attachments: [],
        region: null,
        province: null,
        municipality: null,
        barangay: null,
        address: null,
        seller_id: null,
        owner_id: null
    })

    onMounted(async () => {
        try {
            const response = await fetch('/storage/address.json');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const originalRegions = await response.json();

            // Reconstruct the JSON data to match the expected format for Multiselect
            const reconstructedRegions = Object.keys(originalRegions).map(key => ({
                value: originalRegions[key].region_name,
                label: originalRegions[key].region_name,
                province_list: originalRegions[key].province_list // Include the province_list
            }));

            regions.value = reconstructedRegions;

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });

    watch(selectedRegion, (newValue, oldValue) => {
        if (newValue !== null && regions.value !== null) {
            resetRegionValues();
            const selectedRegionData = regions.value.find(region => region.value === newValue);
            form.region = newValue;

            if (selectedRegionData) {
                if (typeof selectedRegionData.province_list === 'object') {
                    const reconstructedData = Object.keys(selectedRegionData.province_list).map(key => ({
                        value: key,
                        label: key,
                        municipality_list: selectedRegionData.province_list[key]
                    }));
                    selectedProvinceList.value = reconstructedData;
                    
                } 
            }
        }
    });

    // Watch for changes in selectedProvince
    watch(selectedProvince, (newValue, oldValue) => {
        if (newValue !== null) {
            resetProvValues();
            const selectedProvinceData = selectedProvinceList.value.find(municipality => municipality.value === newValue);
            form.province = newValue;

            if (selectedProvinceData) {
                if (typeof selectedProvinceData.municipality_list === 'object') {
                    const reconstructedData = Object.keys(selectedProvinceData.municipality_list.municipality_list).map(key => ({
                        value: key,
                        label: key,
                        barangay_list: selectedProvinceData.municipality_list.municipality_list[key].barangay_list
                    }));
                    selectedMunList.value = reconstructedData;
                } 
            }
            
        }
    });

    watch(selectedMunicipality, (newValue, oldValue) =>{
        if (newValue !== null) {
            resetMullValues();
            const selectedMunData = selectedMunList.value.find(barangay => barangay.value === newValue);
            form.municipality = newValue;

            if(selectedMunData){
                const barangayValues = Object.values(selectedMunData.barangay_list);
                if (typeof selectedMunData.barangay_list === 'object'){
                    const reconstructedData = selectedMunData.barangay_list.map(barangay => ({
                        value: barangay,
                        label: barangay,
                    }));

                    selectedBarList.value = reconstructedData;
                }
            }
        }
    })

    watch(selectedBarangay, (newValue, oldValue) =>{
        if (newValue !== null) {
            form.barangay = newValue;
        }
    })

    const resetRegionValues = () => {
        selectedProvince.value = null;
        selectedMunicipality.value = null;
        selectedBarangay.value = null;
    };

    const resetProvValues = () => {
        selectedMunicipality.value = null;
        selectedBarangay.value = null;
    }

    const resetMullValues = () => {
        selectedBarangay.value = null;
    }


    const flatpickrOptions = {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
    };

    const customPreview = `
    <ul class="list-unstyled mb-0" id="dropzone-preview">
        <li class="mt-2" id="dropzone-preview-list">
            <!-- This is used as the file preview template -->
            <div class="border rounded">
                <div class="d-flex p-2">
                    <div class="flex-shrink-0 me-3">
                        <div class="avatar-sm rounded">
                            <img src="#" alt="Project-Image" data-dz-thumbnail class="img-fluid rounded d-block" />
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <div class="pt-1">
                            <h5 class="fs-14 mb-1" data-dz-name>&nbsp;</h5>
                            <p class="fs-13 text-muted mb-0" data-dz-size></p>
                            <strong class="error text-danger" data-dz-errormessage></strong>
                        </div>
                    </div>
                    <div class="flex-shrink-0 ms-3">
                        <button data-dz-remove class="btn btn-sm btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    `
    onMounted(() => {

        if(dropRef.value !== null) {
            let myDropzone = new Dropzone(dropRef.value, {
                autoProcessQueue : false,
                previewTemplate: customPreview,
                uploadMultiple: true,
                url: 'http://localhost:3011/file/',
                method: 'POST',
                acceptedFiles: "image/jpeg,image/png,image/jpg,.pdf,.docs,.docx",
                previewsContainer: dropRef.value.parentElement.querySelector('.preview-container'),
                init: function () {
                    this.on("addedfile", function (file) {
                        form.attachments.push(file);
                        if (file.type && file.type.startsWith && !file.type.startsWith('image')) {
                            // Find all image elements within the custom preview template and update their src attributes
                            let imgTags = dropRef.value.parentElement.querySelectorAll('[data-dz-thumbnail]');
                            imgTags.forEach(function(imgTag) {
                                imgTag.src = '/storage/assets/bx-file.svg';
                            });
                        }
                    });

                    this.on("removedfile", function (file) {
                        form.attachments.splice(file, 1);
                    });

                }
            })

            if(dropRef.value.querySelector('.dz-default')) {
                dropRef.value.querySelector('.dz-default').innerHTML = `
                    <div style="display: flex; justify-content: center;">
                        <i class="display-4 text-muted ri-upload-cloud-2-fill"></i>
                    </div>
                    <small style="display: flex; justify-content: center;" class="form-text text-muted mb-2"><strong>Drop files here or click to upload.</strong></small>
                `
            }

        }
    })

    const publish = () =>{
        form.post('/land/create',{
            onStart: () => {},
            onSuccess: () => {

            }
        })
    }

           
</script>
