<template>
    <Layout>
        <Head title="Edit Project">
            <meta name="viewport" content="project" />
        </Head>
        <PageHeader title="Edit Project" pageTitle="Project" />
        <div class="row mb-3">
            <div class="col-lg-8">
                <AlertMsg v-if="message" :type="'success'" :msg="message"/>
                <div class="d-flex align-items-center flex-wrap gap-2">
                <div class="flex-shrink-0">
                    <div class="hstack text-nowrap gap-2">
                        <Link :href="'/project/create'" class="btn btn-success w-sm"><i class="ri-add-line align-bottom me-1"></i> Add New</Link>
                        <Link :href="'/project/'+project.slug" class="btn btn-soft-success w-sm"><i class="ri-eye-line"></i> View</Link>
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
                    <button type="button" class="btn btn-success btn-load" @click="publish">
                        <span class="d-flex align-items-center">
                            <span class="spinner-border flex-shrink-0" v-if="form.processing">
                                <span class="visually-hidden">Loading...</span>
                            </span>
                            <span class="flex-grow-1 ms-2">
                                Update
                            </span>
                        </span>
                    </button>
                    <!-- <button type="submit" class="btn btn-success w-sm" @click="publish">Update</button> -->
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
                            <label class="form-label">Total Units (Lots)</label>
                            <input v-model="form.total_units" type="number" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Phase and Blocks</h5>
                    </div>
                   <div class="card-body">
                        <!-- Primary Alert -->
                        <div class="alert alert-primary alert-dismissible alert-additional fade show" role="alert">
                            <div class="alert-body">
                                <div class="d-flex">
                                    <div class="flex-shrink-0 me-3">
                                        <i class="ri-notification-line fs-16 align-middle"></i>
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="alert-heading">Phase and Block Exist!</h5>
                                        <p class="mb-3">Please click the button below to generate new phase and block!</p>
                                        <Link :href="'/project/'+project.slug" class="btn btn-warning btn-border waves-effect waves-light">Generate</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
                    <!-- <div class="card-body">
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
                    </div> -->
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
    import Swal from 'sweetalert2/dist/sweetalert2';
    import 'sweetalert2/dist/sweetalert2.min.css';

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
        project: Object,
        land: Object,
        message: String,
    })

    let { name, 
        slug, 
        description, 
        attachments, 
        images, 
        land_development_id, 
        developer, 
        start_date,
        end_date,
        total_units,
    } = props.project;

    let form = useForm({
        name,
        slug, 
        description, 
        attachments, 
        images, 
        land_development_id, 
        developer, 
        start_date,
        end_date,
        total_units,
        oldattachments: [],
        oldimages: [],
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
                const size = attachments[i].size;

                // Create a mock File object
                const mockFile = { id: id, name: names };

                // Determine the file extension
                const fileExtension = names.split('.').pop().toLowerCase();

                if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png' || fileExtension === 'gif') {
                    // If the file is an image, set the image source
                    mockFile.size = size;
                    mockFile.dataURL = '/storage/project/attachements/' + encodeURIComponent(names);
                   
                } else {
                    // If the file is not an image, set a default file icon
                    mockFile.dataURL = '/storage/assets/bx-file.svg';
                    mockFile.size = size;
                }

                myDropzone.emit("addedfile", mockFile);
                myDropzone.emit("thumbnail", mockFile, mockFile.dataURL);
                myDropzone.emit("complete", mockFile);

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
                        form.oldimages.push(file.id);
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

            for (let i = 0; i < images.length; i++) {
                const id = images[i].id;
                const names = images[i].file_name;
                const size = images[i].size;

                // Create a mock File object
                const mockFile = { id: id, name: truncateFileName(names,15) };

                // Determine the file extension
                const fileExtension = names.split('.').pop().toLowerCase();

                if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png' || fileExtension === 'gif') {
                    // If the file is an image, set the image source
                    mockFile.size = size;
                    mockFile.dataURL = '/storage/project/images/' + encodeURIComponent(names);
                   
                } else {
                    // If the file is not an image, set a default file icon
                    mockFile.dataURL = '/storage/assets/bx-file.svg';
                    mockFile.size = size;
                }

                featuredDrop.emit("addedfile", mockFile);
                featuredDrop.emit("thumbnail", mockFile, mockFile.dataURL);
                featuredDrop.emit("complete", mockFile);

            }
        }
    })

    const swalBtn = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-primary mr-2',
            cancelButton: 'btn btn-link',
            container: 'modal-lesson',
        },
        buttonsStyling: false
    })

    const publish = () =>{
        form.post('/project/'+form.slug,{
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
        })
    }



    const truncateFileName = (fileName, maxLength) => {
      if (fileName.length > maxLength) {
        return fileName.substr(0, maxLength) + '...'; // Truncate and append '...'
      } else {
        return fileName;
      }
    }

</script>