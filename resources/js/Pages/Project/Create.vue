<template>
    <Layout>
        <Head title="Add Project">
            <meta name="viewport" content="project" />
        </Head>
        <PageHeader title="Add Project" pageTitle="Project" />
        <div class="row">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-body">
                        <div class="mb-3">
                            <label class="form-label" for="name">Project Name</label>
                            <input v-model="form.name" :class="{ 'is-invalid': form.errors.name }" type="text" class="form-control">
                            <div class="invalid-feedback">The project name is required</div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="description">Description</label>
                           <ckeditor :editor="editor" v-model="form.description" :config="editorConfig"></ckeditor>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="mb-3 mb-lg-0">
                                    <label for="size" class="form-label">Developer</label>
                                    <input v-model="form.developer" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="mb-3 mb-lg-0">
                                    <label for="start_date" class="form-label">Start Date</label>
                                    <flatPickr v-model="form.start_date " class="form-control" :config="flatpickrOptions"></flatPickr>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="mb-3 mb-lg-0">
                                    <label for="end_date" class="form-label">End Date</label>
                                    <flatPickr v-model="form.end_date " class="form-control" :config="flatpickrOptions"></flatPickr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                
                <div class="text-end mb-4">
                    <button type="submit" class="btn btn-success w-sm" @click="publish">Create</button>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Land Details</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label class="form-label">Land</label>
                            <Multiselect
                            class="form-select mb-3"
                            v-model="form.land_development_id"
                            placeholder="Select Land"
                            :options="land"
                            :searchable="true"
                            track-by="label"
                            />
                        </div>
                        <div class="form-group col-lg-4">
                            <label class="form-label">Total Units</label>
                            <input v-model="form.total_units" type="number" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Phase and Blocks</h5>
                    </div>
                    <div class="card-body">
                        <AlertMsg v-if="form.errors.error" :type="'danger'" :msg="form.errors.error"/>
                        <div v-for="(phase, index) in phases" :key="index" class="row gy-4">
                            <div class="col-lg-6">
                                <div>
                                    <label class="form-label">Phase Name</label>
                                    <input type="text" v-model="form.phase[index]" class="form-control" required>
                                </div>
                            </div>
                            <div class="col-sm-4 mb-3">
                                <div>
                                    <h5 class="fs-13 fw-medium text-muted">Blocks</h5>
                                    <div class="input-step light mt-1">
                                        <button type="button" class="minus" @click="decrementBlock(index)">–</button>
                                        <input type="number" :value="blocks[index]" min="0" max="100" readonly>
                                        <button type="button" class="plus" @click="incrementBlock(index)">+</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2 pt-4">
                                <div>
                                    <button type="button" class="btn btn-outline-ligth btn-icon waves-effect waves-light text-danger mt-1" v-show="index!==0" @click="index !== 0 && removePhase(index)" >
                                    <span class="icon-off"><i class="ri-delete-bin-line"></i> </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="colo-sm-6">
                            <button type="button" class="btn btn-outline-success waves-effect waves-light btn-sm" @click="addPhase" >
                                <span class="icon-off"><i class="ri-add-line"></i> Add</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Featured Image</h5>
                    </div>
                    <div class="card-body">
                        <div ref="featuredImg" class="dropzone custom-dropzone" style="justify-content: center;"></div>
                        <div class="preview-container" ref="featuredPreview"></div>
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
    import { ref, watch, onMounted } from 'vue';
    import flatPickr from "vue-flatpickr-component";
    import Dropzone from "dropzone";
    import Multiselect from '@vueform/multiselect';
    import '@vueform/multiselect/themes/default.css';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import AlertMsg from '../../Components/AlertMsg.vue';

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

    const blocks = ref([5]);
    const phases = ref([null]);
    const initialBlockValue = 5;

    const dropRef = ref(null);
    const featuredImg = ref(null);
    let dropPreview = ref();
    let featuredPreview = ref();

    let props = defineProps({
        land: Object,
    })

    let form = useForm({
        name: null,
        description: '',
        attachments:[],
        images:[],
        land_development_id: null,
        developer: null,
        start_date:null,
        end_date:null,
        total_units: null,
        phase: [null],
        block: [initialBlockValue],
    })

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

        if(featuredImg.value !== null){
            let featuredDrop = new Dropzone(featuredImg.value,{
                autoProcessQueue : false,
                previewTemplate: customPreview,
                uploadMultiple: false,
                url: 'http://localhost:3011/file/',
                method: 'POST',
                acceptedFiles: "image/jpeg,image/png,image/jpg",
                previewsContainer: featuredImg.value.parentElement.querySelector('.preview-container'),
                init: function () {
                    this.on("addedfile", function (file) {
                        form.images.push(file);
                    });

                    this.on("removedfile", function (file) {
                        form.images.splice(file, 1);
                    });

                }
            });

            if(featuredImg.value.querySelector('.dz-default')) {
                featuredImg.value.querySelector('.dz-default').innerHTML = `
                    <div style="display: flex; justify-content: center;">
                        <i class="display-4 text-muted ri-upload-cloud-2-fill"></i>
                    </div>
                    <small style="display: flex; justify-content: center;" class="form-text text-muted mb-2"><strong>Drop files here or click to upload.</strong></small>
                `
            }
        }
    })

    const publish = () =>{
        form.post('/project/store',{
            onStart: () => {},
            onSuccess: () => {

            }
        })
    }

    const incrementBlock = (index) => {
        blocks.value[index]++;
        form.block[index] = blocks.value[index];
    };

    // Function to decrement the block value
    const decrementBlock = (index) => {
        if (blocks.value[index] > 1) {
            blocks.value[index]--;
            form.block[index] = blocks.value[index];
        }
    };

    const addPhase = () => {
        phases.value.push(null); // Adding null to keep the first phase
        blocks.value.push(initialBlockValue); // Start new block at 5
        form.block.push(initialBlockValue);
        form.phase.push(null);
    };
    
    const removePhase = (index) => {
        phases.value.splice(index, 1);
        blocks.value.splice(index, 1);
        form.block.splice(index, 1);
        form.phase.splice(index, 1);
    };

</script>