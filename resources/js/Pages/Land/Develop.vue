<template>
    <Layout>
        <Head title="Develop">
            <meta name="viewport" content="Land Development" />
        </Head>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card mt-n4">
                        <div class="bg-primary-subtle">
                            <div class="card-body pb-0 px-4">
                                <div class="row mb-3">
                                    <div class="col-md">
                                        <div class="row align-items-center g-3">
                                            <div class="col-md-auto">
                                                <div class="avatar-md">
                                                    <div class="avatar-title bg-white rounded-circle">
                                                        <img src="/storage/assets/home-heart-line.svg" alt="" class="avatar-xs">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md">
                                                <div>
                                                    <h4 class="fw-bold">{{ land.name }}</h4>
                                                    <div class="hstack gap-3 flex-wrap">
                                                        <div><i class="ri-building-line align-bottom me-1"></i>Size: {{ land.size }} /sqm</div>
                                                        <div class="vr"></div>
                                                        <div>Groundbreaking Date : <span class="fw-medium">{{ formatCreatedAt(land.ground_breaking) }}</span></div>
                                                        <div class="vr"></div>
                                                        <div>Created Date : <span class="fw-medium">{{ formatCreatedAt(land.created_at) }}</span></div>
                                                        <div class="vr"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-auto">
                                        <div class="hstack gap-1 flex-wrap">
                                            <div class="dropdown">
                                                <button class="btn btn-icon btn-sm fs-22 text-primary dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ri-equalizer-line"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><Link class="dropdown-item" :href="'/land/'+land.slug+'/edit'"><i class="ri-pencil-fill text-muted me-2 align-bottom"></i>Edit</Link></li>
                                                    <li><Link class="dropdown-item" href="/land"><i class="ri-eye-fill text-muted me-2 align-bottom"></i>View List</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <ul class="nav nav-tabs-custom border-bottom-0" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active fw-semibold" data-bs-toggle="tab" href="#overview" role="tab">
                                            Overview
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <!-- end card body -->
                        </div>
                    </div>
                    <!-- end card -->
                </div>
                <!-- end col -->
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="tab-content text-muted">
                        <div class="tab-pane show active fade" id="overview" role="tabpanel">
                            <div class="row">
                                <div class="col-xl-9 col-lg-8">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="text-muted">
                                                <h6 class="mb-3 fw-semibold text-uppercase">Description</h6>
                                                <div class="row">
                                                    <div class="col-lg-10 col-sm-6">
                                                        <p v-html="land.description"></p>
                                                    </div>
                                                </div>

                                                <div class="pt-3 border-top border-top-dashed mt-4">
                                                    <div class="row gy-5 mb-5">
                                                        <div class="col-lg-2 col-sm-6">
                                                            <div>
                                                                <p class="mb-2 text-uppercase fw-medium">Size :</p>
                                                                <h5 class="fs-15 mb-0">{{ land.size }} /sqm</h5>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-3 col-sm-6">
                                                            <div>
                                                                <p class="mb-2 text-uppercase fw-medium">Groundbreaking Date :</p>
                                                                <h5 class="fs-15 mb-0">{{ formatCreatedAt(land.ground_breaking) }}</h5>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-sm-6">
                                                            <div>
                                                                <p class="mb-2 text-uppercase fw-medium">Address :</p>
                                                                <h5 class="fs-15 mb-0">{{ capitalizedString(land.address ? land.address : '') }} Brgy. {{ capitalizedString(land.barangay)}}, {{ capitalizedString(land.municipality)  }}, {{ capitalizedString(land.province) }}, {{ land.region }}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="pt-3 border-top border-top-dashed mt-4">
                                                    <h6 class="mb-3 fw-semibold text-uppercase">Resources</h6>
                                                    <div class="row g-3">
                                                        <div class="col-xxl-4 col-lg-6" v-for="attachment in land.attachments">
                                                            <div class="border rounded border-dashed p-2">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="flex-shrink-0 me-3">
                                                                        <div class="avatar-sm">
                                                                            <div class="avatar-title bg-light text-black rounded fs-24">
                                                                                <img v-if="isImage(attachment.file_name)" :src="'/storage/land/'+attachment.file_name" class="img-fluid d-block"/>
                                                                                <i v-else class="ri-attachment-line"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex-grow-1 overflow-hidden">
                                                                        <h5 class="fs-13 mb-1"><a href="#" class="text-body text-truncate d-block">{{ attachment.file_name }}</a></h5>
                                                                        <div>{{ formatSize(attachment.size) }}</div>
                                                                    </div>
                                                                    <div class="flex-shrink-0 ms-2">
                                                                        <a :href="'/storage/land/'+attachment.file_name" download class="btn btn-icon text-muted btn-sm fs-18">
                                                                            <i class="ri-download-2-line"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>  
                                                        <!-- end col -->
                                                    </div>
                                                    <!-- end row -->
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end card body -->
                                    </div>
                                    <!-- end card -->
                                </div>
                                <!-- ene col -->
                                <div class="col-xl-3 col-lg-4">
                                    <!-- end card -->

                                    <div class="card">
                                        <div class="card-header align-items-center d-flex border-bottom-dashed">
                                            <h4 class="card-title mb-0 flex-grow-1">Seller</h4>
                                        </div>

                                        <div class="card-body">
                                            <AlertMsg v-if="!land.seller" :type="'warning'" :msg="'No data found'"/>
                                            <div data-simplebar class="mx-n3 px-3" v-if="land.seller">
                                                <div class="vstack gap-3">
                                                    <div class="d-flex mb-4">
                                                        <div class="avatar-xs flex-shrink-0 me-3">
                                                            <div class="avatar-title bg-danger-subtle text-danger rounded-circle">
                                                                {{ getInitials(land.seller.fname, land.seller.lname) }}
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <h5 class="fs-15 mb-3">{{ land.seller.fname }} {{ land.seller.lname }}</h5>
                                                            <div class="ps-1 vstack gap-3 mb-3">
                                                                <a :href="'tel:'+land.seller.phone" class="text-muted"><i class="ri-phone-fill"></i> {{ land.seller.phone }}</a>
                                                            </div>
                                                            <div class="ps-1 vstack gap-3 mb-3">
                                                                <a :href="'mailto:'+land.seller.email" class="text-muted"><i class="ri-mail-fill"></i> {{ land.seller.email }}</a>
                                                            </div>
                                                            <div class="ps-1 vstack gap-3">
                                                                <a href="#" class="text-muted"><i class="ri-map-pin-fill"></i> {{ land.seller.address }}</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- end list -->
                                            </div>
                                        </div>
                                        <!-- end card body -->
                                    </div>
                                    <!-- end card -->
                                    <div class="card">
                                        <div class="card-header align-items-center d-flex border-bottom-dashed">
                                            <h4 class="card-title mb-0 flex-grow-1">Recent Owner</h4>
                                        </div>

                                        <div class="card-body">
                                            <AlertMsg v-if="!land.seller" :type="'warning'" :msg="'No data found'"/>
                                            <div data-simplebar class="mx-n3 px-3"  v-if="land.owner">
                                                <div class="vstack gap-3">
                                                    <div class="d-flex mb-4">
                                                        <div class="avatar-xs flex-shrink-0 me-3">
                                                            <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                                {{ getInitials(land.owner.fname, land.owner.lname) }}
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <h5 class="fs-15 mb-3">{{ land.owner.fname }} {{ land.owner.lname }}</h5>
                                                            <div class="ps-1 vstack gap-3 mb-3">
                                                                <a :href="'tel:'+land.owner.phone" class="text-muted"><i class="ri-phone-fill"></i> {{ land.owner.phone }}</a>
                                                            </div>
                                                            <div class="ps-1 vstack gap-3 mb-3">
                                                                <a :href="'mailto:'+land.owner.email" class="text-muted"><i class="ri-mail-fill"></i> {{ land.owner.email }}</a>
                                                            </div>
                                                            <div class="ps-1 vstack gap-3">
                                                                <a href="#" class="text-muted"><i class="ri-map-pin-fill"></i> {{ land.owner.address }}</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- end list -->
                                            </div>
                                        </div>
                                        <!-- end card body -->
                                    </div>
                                </div>
                                <!-- end col -->
                            </div>
                            <!-- end row -->
                        </div>
                    </div>
                </div>
            </div>
    </Layout>
</template>

<script setup>
    import { Link, Head, useForm, router } from "@inertiajs/vue3";
    import Layout from "@/Layouts/main.vue";
    import PageHeader from "@/Components/page-header.vue";
    import { ref, onMounted, computed, watch } from 'vue';
    import AlertMsg from '../../Components/AlertMsg.vue';
    import Swal from 'sweetalert2/dist/sweetalert2';
    import 'sweetalert2/dist/sweetalert2.min.css';
    import { Grid, h } from "gridjs";
    import "gridjs/dist/theme/mermaid.css";
    import Multiselect from '@vueform/multiselect';
    import '@vueform/multiselect/themes/default.css';
    import  debounce from "lodash/debounce";

    const showModal = ref(false);
    const showModalLot = ref(false);
    const showModalLotDetails = ref(false);

    let props = defineProps({
        land: Object,
        message: Object,
        phaseVal: Object,
        blockVal: Object,
        phaseFilter: Object,
        blockFilter: Object,
        phaseDetails: Object,
    })
    
    const phases = ref([null]);
    const blocks = ref([5]);
    const blocksLot = ref([5]);
    const initialBlockValue = 5; // Initial block value
    const selectedPhase = ref(null);
    const selectedBlock = ref(null);

    const selectedPhaseLot = ref(null);
    const selectedBlockLot = ref(null);

    let grid;
    let gridBlock;
    let gridPhase;

    const gridContainer = ref(null);
    const gridContainerBlock = ref(null);
    const gridContainerPhase = ref(null);
  
    const selectedRows = ref([]);

    let form = useForm({
        phase: [null],
        block: [initialBlockValue],
    })

    let formLot = useForm({
        phase:null,
        block:null,
        lot:initialBlockValue,
    })

    let formLotDetails = useForm({
        id:null,
        size:null,
        details: null,
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

    const getInitials = (fname, lname) =>{
        return fname.charAt(0) + lname.charAt(0);
    }

    const capitalizedString = (inputString) => {
        return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
    };

    const isImage = (fileName) => {
        const extension = fileName.split('.').pop().toLowerCase();
        return ['jpg', 'jpeg', 'png', 'gif', 'bmp'].includes(extension);
    }

    const formatSize = (size) =>{
        if (size >= 1024 * 1024) {
            // Convert bytes to megabytes
            const sizeInMB = size / (1024 * 1024);
            return sizeInMB.toFixed(2) + ' MB';
        } else if (size >= 1024) {
            // Convert bytes to kilobytes
            const sizeInKB = size / 1024;
            return sizeInKB.toFixed(2) + ' KB';
        } else {
            return size + ' bytes';
        }
    }


</script>