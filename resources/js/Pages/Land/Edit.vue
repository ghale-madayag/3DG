<template>
    <Layout>
        <Head title="Edit Land">
            <meta name="viewport" content="your content" />
        </Head>
        <PageHeader title="Edit Land" pageTitle="Dashboard" />
        <div class="row mb-3">
            <div class="col-lg-8">
                <AlertMsg v-if="message" :type="'success'" :msg="message"/>
                <div class="d-flex align-items-center flex-wrap gap-2">
                    <div class="flex-shrink-0">
                        <div class="hstack text-nowrap gap-2">
                            <button class="btn btn-soft-danger" id="remove-actions" onclick="deleteMultiple()"><i class="ri-delete-bin-2-line"></i></button>
                            <Link :href="'/land/create'" class="btn btn-success w-sm"><i class="ri-add-line align-bottom me-1"></i> Add New</Link>
                            <Link :href="'/land/'+land.slug" class="btn btn-soft-success w-sm"><i class="ri-eye-line"></i> View</Link>
                        </div>
                    </div>
            </div>
            </div>
        </div>
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
                            <ckeditor :editor="editor" v-model="form.description" :config="editorConfig"></ckeditor>
                           <!-- <textarea v-model="form.description" class="form-control" id="description" rows="5">
                           </textarea> -->
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
                    <button type="submit" class="btn btn-success w-sm" @click="publish">Update</button>
                </div>
            </div>
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
        </div>
    </Layout>
</template>

<script setup>
    import { Link, Head, useForm } from "@inertiajs/vue3";
    import Layout from "@/Layouts/main.vue";
    import PageHeader from "@/Components/page-header.vue";
    import AlertMsg from '../../Components/AlertMsg.vue';
    import { ref, watch, onMounted } from 'vue';
    import flatPickr from "vue-flatpickr-component";
    import Dropzone from "dropzone";
    import Multiselect from '@vueform/multiselect';
    import '@vueform/multiselect/themes/default.css';
    import Swal from 'sweetalert2/dist/sweetalert2';
    import 'sweetalert2/dist/sweetalert2.min.css';
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


    const dropRef = ref(null);
    let dropPreview = ref();
    let msg = ref(null);

    let props = defineProps({
        land: Object,
        contacts: Object,
        message: String,
    })

    const swalBtn = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-primary mr-2',
            cancelButton: 'btn btn-link',
            container: 'modal-lesson',
        },
        buttonsStyling: false
    })

    //let mockFile = [];
    let names = null;
    let id = null;

    let { name, slug, description, size, ground_breaking, attachments, region, province, municipality, barangay, address, seller_id, owner_id } = props.land;

    let form = useForm({
        name,
        slug,
        description,
        size,
        ground_breaking,
        attachments,
        region,
        province,
        municipality,
        barangay,
        address,
        seller_id,
        owner_id,
        oldattachments: [],
    })

    const regions = ref();
    const selectedRegion = ref(form.region);
    const selectedProvince = ref(form.province);
    const selectedMunicipality = ref(form.municipality);
    const selectedBarangay = ref(form.barangay);
    const selectedProvinceList = ref(null); 
    const selectedMunList = ref(null);
    const selectedBarList = ref(null);

    const fetchData = async () => {
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

            // Set selected values for edit page
            const selectedRegionData = regions.value.find(region => region.value === selectedRegion.value);
            if (selectedRegionData && form.region !== null) {
                selectedRegion.value = form.region;
                if (form.province !== null) {
                    selectedProvince.value = form.province;
                    if (form.municipality !== null) {
                        selectedMunicipality.value = form.municipality;
                        if (form.barangay !== null) {
                            selectedBarangay.value = form.barangay;
                        }
                    }
                }
            }

            // After fetching data, call the function containing the watch logic
            handleSelectedRegionChange();

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSelectedRegionChange = () => {
        if (selectedRegion.value !== null && regions.value !== null) {
            const selectedRegionData = regions.value.find(region => region.value === selectedRegion.value);
            form.region = selectedRegion.value;

            if (selectedRegionData) {
                if (typeof selectedRegionData.province_list === 'object') {
                    const reconstructedData = Object.keys(selectedRegionData.province_list).map(key => ({
                        value: key,
                        label: key,
                        municipality_list: selectedRegionData.province_list[key]
                    }));
                    selectedProvinceList.value = reconstructedData;
                    // Call the next function to handle province change
                    handleSelectedProvinceChange();
                } 
            }
        }
    };

    const handleSelectedProvinceChange = () => {
        // Add logic here to handle province change
        if (selectedProvince.value !== null) {
            const selectedProvinceData = selectedProvinceList.value.find(municipality => municipality.value === selectedProvince.value);
            form.province = selectedProvince.value;

            if (selectedProvinceData) {
                if (typeof selectedProvinceData.municipality_list === 'object') {
                    const reconstructedData = Object.keys(selectedProvinceData.municipality_list.municipality_list).map(key => ({
                        value: key,
                        label: key,
                        barangay_list: selectedProvinceData.municipality_list.municipality_list[key].barangay_list
                    }));
                    selectedMunList.value = reconstructedData;
                    
                    handleSelectedMulChange();
                } 
            }
        }
    };

    const handleSelectedMulChange = () => {
        if(selectedMunicipality.value !==null){
            const selectedMunData = selectedMunList.value.find(barangay => barangay.value === selectedMunicipality.value);
            form.municipality = selectedMunicipality.value;

            if(selectedMunData){
                const barangayValues = Object.values(selectedMunData.barangay_list);
                if (typeof selectedMunData.barangay_list === 'object'){
                    const reconstructedData = selectedMunData.barangay_list.map(barangay => ({
                        value: barangay,
                        label: barangay,
                    }));

                    selectedBarList.value = reconstructedData;

                    handleSelectedBarChange();
                }
            }
        }
    }

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

    const handleSelectedBarChange = () => {
        if(selectedBarangay.value != null){
            form.barangay = selectedBarangay.value;
        }
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
                createImageThumbnails: true,
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
                        form.oldattachments.push(file.name);
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

            for (let i = 0; i < attachments.length; i++) {
                const id = attachments[i].id;
                const names = attachments[i].file_name;

                // Create a mock File object
                const mockFile = { id: id, name: names };

                // Determine the file extension
                const fileExtension = names.split('.').pop().toLowerCase();

                if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png' || fileExtension === 'gif') {
                    // If the file is an image, set the image source
                    mockFile.size = '1100';
                    mockFile.dataURL = '/storage/land/' + encodeURIComponent(names);
                   
                } else {
                    // If the file is not an image, set a default file icon
                    mockFile.dataURL = '/storage/assets/bx-file.svg';
                    mockFile.size = '1100';
                }

                myDropzone.emit("addedfile", mockFile);
                myDropzone.emit("thumbnail", mockFile, mockFile.dataURL);
                myDropzone.emit("complete", mockFile);

                // Add the file to Dropzone
               //myDropzone.options.addedfile.call(myDropzone, mockFile);
            }

        }
    })

    onMounted(fetchData);

    const publish = () => {
        console.log(form.slug)
        form.post('/land/'+form.slug,{
            onStart: () => {},
            onSuccess: () => {
                swalBtn.fire(
                    'Updated!',
                    'The data has been update.',
                    'success'
                )
                
                form.reset();
            },
            preserveScroll: true,
        });
    }
</script>