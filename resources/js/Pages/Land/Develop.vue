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
                                        <a class="nav-link fw-semibold" data-bs-toggle="tab" href="#overview" role="tab">
                                            Overview
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active fw-semibold" data-bs-toggle="tab" href="#block" role="tab">
                                            Block & Lot
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link fw-semibold" data-bs-toggle="tab" href="#clients" role="tab">
                                            Clients
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
                        <div class="tab-pane fade" id="overview" role="tabpanel">
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
                                            <div data-simplebar class="mx-n3 px-3">
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
                                            <div data-simplebar class="mx-n3 px-3">
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
                        <div class="tab-pane fade show active" id="block" role="tabpanel">
                            <!-- <div class="row g-4 mb-3">
                                <div class="col-sm-auto">
                                    <div>
                                        <button class="btn btn-primary" @click="openModal"><i class="ri-add-line align-bottom me-1"></i> Add New</button>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="d-flex justify-content-sm-end gap-2">
                                        <div>
                                            <select class="form-select mb-3" aria-label="Default select example">
                                                <option selected>Phase</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <div class="row">
                                <div class="col-xl-3 col-lg-4">
                                    <div class="card">
                                        <div class="card-header">
                                            <div class="d-flex">
                                                <div class="flex-grow-1">
                                                    <h5 class="fs-16">Filter By:</h5>
                                                </div>
                                                <!-- <div class="flex-shrink-0">
                                                    
                                                </div> -->
                                            </div>

                                            <!-- <div class="filter-choices-input">
                                                <input class="form-control" data-choices data-choices-removeItem type="text" id="filter-choices-input" value="T-Shirts" />
                                            </div> -->
                                        </div>

                                        <div class="accordion accordion-flush filter-accordion">

                                            <div class="card-body border-bottom">
                                                <div>
                                                    <p class="text-muted text-uppercase fs-12 fw-medium mb-2">Phase</p>
                                                    <Multiselect
                                                        class="form-select mb-3"
                                                        v-model="selectedPhase"
                                                        placeholder="Select Phase"
                                                        :options="phaseFilter"
                                                        :searchable="true"
                                                        track-by="label"
                                                    />
                                                </div>
                                            </div>

                                            <div class="card-body border-bottom">
                                                <p class="text-muted text-uppercase fs-12 fw-medium mb-4">Blocks</p>
                                                <Multiselect
                                                    class="form-select mb-3"
                                                    v-model="selectedBlock"
                                                    placeholder="Select Block"
                                                    :options="blockFilter"
                                                    :searchable="true"
                                                    track-by="label"
                                                    :disabled="!selectedPhase"
                                                />
                                            </div>
                                            <!-- end accordion-item -->
                                        </div>

                                        
                                    </div>
                                <!-- end card -->
                                 </div>
                                 <div class="col-xl-9 col-lg-8">
                                    <div>
                                        <div class="card">
                                            <div class="card-header border-0">
                                                <div class="row g-4">
                                                    <div class="col-sm-auto">
                                                        <button class="btn btn-soft-primary w-100" @click="openModal"><i class="ri-add-line align-bottom"></i> Generate Phase & Blocks</button>
                                                    </div>
                                                    <div class="col-sm-auto">
                                                        <div>
                                                            <a class="btn btn-primary" @click="openModalLot"><i class="ri-add-line align-bottom me-1"></i> Generate Lot</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card-header">
                                                <div class="row align-items-center">
                                                    <div class="col">
                                                        <ul class="nav nav-tabs-custom card-header-tabs border-bottom-0" role="tablist">
                                                            <li class="nav-item">
                                                                <a class="nav-link active fw-semibold" data-bs-toggle="tab" href="#lot" role="tab">
                                                                    Lot <span class="badge bg-danger-subtle text-danger align-middle rounded-pill ms-1">{{ phaseDetails ? phaseDetails.length : 0 }}</span>
                                                                </a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link fw-semibold" data-bs-toggle="tab" href="#blockVal" role="tab">
                                                                    Block <span class="badge bg-danger-subtle text-danger align-middle rounded-pill ms-1">{{ blockVal ? blockVal.length : 0 }}</span>
                                                                </a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link fw-semibold" data-bs-toggle="tab" href="#phaseVal" role="tab">
                                                                    Phase <span class="badge bg-danger-subtle text-danger align-middle rounded-pill ms-1">{{ phaseVal ? phaseVal.length : 0 }}</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-auto">
                                                        <div id="selection-element">
                                                            <div class="my-n1 d-flex align-items-center text-muted">
                                                                Select <div id="select-content" class="text-body fw-semibold px-1"></div> Result <button type="button" class="btn btn-link link-danger p-0 ms-3" data-bs-toggle="modal" data-bs-target="#removeItemModal">Remove</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- end card header -->
                                            <div class="card-body">

                                                <div class="tab-content text-muted">
                                                    <!-- end tab pane -->

                                                    <div class="tab-pane active" id="lot" role="tabpanel">
                                                        <div class="table-card gridjs-border-none" ref="gridContainer"></div>
                                                    </div>
                                                    <!-- end tab pane -->

                                                    <div class="tab-pane" id="blockVal" role="tabpanel">
                                                        <div class="py-4 text-center">
                                                            <div class="table-card gridjs-border-none" ref="gridContainerBlock"></div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane" id="phaseVal" role="tabpanel">
                                                        <div class="py-4 text-center">
                                                            <div class="table-card gridjs-border-none" ref="gridContainerPhase"></div>
                                                        </div>
                                                    </div>
                                                    <!-- end tab pane -->
                                                </div>
                                                <!-- end tab content -->

                                            </div>
                                            <!-- end card body -->
                                        </div>
                                        <!-- end card -->
                                    </div>
                                </div>
                            </div>
                            <!--Modal-->
                            <!-- Grids in modals -->
                            <div class="modal fade" v-if="showModal" :class="{ 'show': showModal }" tabindex="-1" role="dialog">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Generate Phase and Block</h5>
                                            <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                                        </div>
                                        <form class="tablelist-form" autocomplete="off"  @submit.prevent="submitHandler">
                                            <div class="modal-body">
                                                <div>
                                                    <AlertMsg v-if="form.errors.error" :type="'danger'" :msg="form.errors.error"/>
                                                    <div v-for="(phase, index) in phases" :key="index" class="row gy-4">
                                                        <div class="col-sm-5">
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
                                                            <button type="button" class="btn btn-outline-danger btn-icon waves-effect waves-light" v-show="index!==0" @click="index !== 0 && removePhase(index)" >
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
                                            <div class="modal-footer">
                                                <div class="hstack gap-2 justify-content-end">
                                                    <button type="button" class="btn btn-light" @click="closeModal">Close</button>
                                                    <div v-if="form.processing" class="spinner-border text-success" role="status">
                                                        <span class="sr-only">Loading...</span>
                                                    </div>
                                                    <button type="submit" @click="submitForm" class="btn btn-success is-loading">Generate</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div class="modal fade" v-if="showModalLot" :class="{ 'show': showModalLot }" tabindex="-1" role="dialog">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Generate Lot</h5>
                                            <button type="button" class="btn-close" @click="closeModalLot" aria-label="Close"></button>
                                        </div>
                                        <form class="tablelist-form" autocomplete="off"  @submit.prevent="submitHandler">
                                            <div class="modal-body">
                                                <div>
                                                    <AlertMsg v-if="form.errors.error" :type="'danger'" :msg="form.errors.error"/>
                                                    <div class="row gy-4">
                                                        <div class="col-sm-4">
                                                            <div>
                                                                <label class="form-label">Phase</label>
                                                                <Multiselect
                                                                    class="form-select mb-3"
                                                                    v-model="selectedPhaseLot"
                                                                    placeholder="Select..."
                                                                    :options="phaseFilter"
                                                                    :searchable="true"
                                                                    track-by="label"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-4">
                                                            <div>
                                                                <label class="form-label">Block</label>
                                                                <Multiselect
                                                                    class="form-select mb-3"
                                                                    v-model="selectedBlockLot"
                                                                    placeholder="Select..."
                                                                    :options="blockFilter"
                                                                    :searchable="true"
                                                                    track-by="label"
                                                                    :disabled="!selectedPhaseLot"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-4 mb-3">
                                                            <div>
                                                                <h5 class="fs-13 fw-medium text-muted">Lot</h5>
                                                                <div class="input-step light mt-1">
                                                                    <button type="button" class="minus" @click="decrementBlockLot">–</button>
                                                                    <input type="number" :value="blocksLot" min="1" max="100" readonly>
                                                                    <button type="button" class="plus" @click="incrementBlockLot">+</button>
                                                                </div>
                                                            </div>
                                                        </div>
    
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <div class="hstack gap-2 justify-content-end">
                                                    <button type="button" class="btn btn-light" @click="closeModalLot">Close</button>
                                                    <div v-if="form.processing" class="spinner-border text-success" role="status">
                                                        <span class="sr-only">Loading...</span>
                                                    </div>
                                                    <button type="submit" @click="submitFormLot" class="btn btn-success is-loading">Generate</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!--end Modal-->
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

    // Function to increment the block value
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

    // Function to increment the block value
    const incrementBlockLot = () => {
        blocksLot.value++;
        formLot.lot = blocksLot.value;
    };

    // Function to decrement the block value
    const decrementBlockLot = () => {
        if (blocksLot.value > 1){
            blocksLot.value--;
            formLot.lot = blocksLot.value;
        } 
        
    };

    // Function to add a new phase
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

    const openModal = () => {
        showModal.value = true;
    };

    const closeModal = () => {
        showModal.value = false;
    };

    const openModalLot = () => {
        showModalLot.value = true;
    }

    const closeModalLot = () => {
        showModalLot.value = false;
    }

    const swalBtn = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-primary mr-2',
            cancelButton: 'btn btn-link',
            container: 'modal-lesson',
        },
        buttonsStyling: false
    })

    const submitForm = () => {
        form.post('/land/'+props.land.slug+'/phase',{
            onSuccess: () => { 
                showModal.value = false;
                props.message = null;
                blocks.value.push(initialBlockValue); // Start new block at 5
                form.block.push(initialBlockValue);
                form.phase = [];

                swalBtn.fire(
                    'Success!',
                    'The data has been saved.',
                    'success'
                )

                fetchDataAndUpdateGrid(props.phaseDetails)
                fetchDataAndUpdateGrid(props.blockVal)
                fetchDataAndUpdateGrid(props.phaseVal)
            },
        });
    };

    const submitFormLot = () => {
        formLot.post('/land/'+props.land.slug+'/lot',{
            onSuccess: () =>{
                showModalLot.value = false;
                selectedPhaseLot.value = null;
                selectedBlockLot.value = null;

                formLot.reset();
                blocksLot.value = initialBlockValue;

                swalBtn.fire(
                    'Success!',
                    'The data has been saved.',
                    'success'
                )

                fetchDataAndUpdateGrid(props.phaseDetails)
                fetchDataAndUpdateGrid(props.phaseDetails)
            }
        })
    }

    const fetchDataAndUpdateGrid = (details) => {

        const formattedData = formatLandData(details);
        
        grid.updateConfig({
            data: function(){
                return new Promise(function (resolve){
                    setTimeout(function(){
                        resolve(formattedData);
                    },2000)
                })
            }
        }).forceRender();
    }

    watch([selectedPhase, selectedBlock], debounce(function ([phaseValue, blockValue]) {
        
        const params = {};
        
        if (phaseValue) {
            params.phase = phaseValue;
        }else{
            selectedBlock.value = null;
        }
        
        if (blockValue) {
            params.block = blockValue;
        }
        
        router.get('/land/' + props.land.slug, params, {
                preserveState: true,
                preserveScroll: true,
                replace: true,
                onSuccess: () =>{
                    fetchDataAndUpdateGrid(props.phaseDetails)
                }
            });
    }, 500));

    watch([selectedPhaseLot, selectedBlockLot], debounce(function ([phaseValue, blockValue]) {
        
        const params = {};
        
        if (phaseValue) {
            params.phase = phaseValue;
            formLot.phase = phaseValue;
        }else{
            selectedBlockLot.value = null;
            formLot.phase = null;
            formLot.block = null;
        }
        
        if (blockValue) {
            params.block = blockValue;
            formLot.block = blockValue;
        }else{
            formLot.block = null;
        }
        
        router.get('/land/' + props.land.slug, params, {
                preserveState: true,
                preserveScroll: true,
                replace: true
            });
    }, 500));
    
    const formatLandData = lot => {
        return lot.map(lot => [
            lot.id,
            lot.name,
            lot.size,
            lot.details,
            lot.status,
            formatCreatedAt(lot.created_at),
            lot.blk_name,   
            lot.phase_name,
            
        ]);
    };

    const formatLandDataBlock = block => {
        return block.map(block => [
            block.block_number,
            formatCreatedAt(block.created_at),
            block.phase.phase_name,
            block.id,
        ]);
    };

    const formatLandDataPhase = phase => {
        return phase.map(phase => [
            phase.phase_name,
            formatCreatedAt(phase.created_at),
            phase.id,
           
        ]);
    };

    onMounted(() => {

        const formattedData = formatLandData(props.phaseDetails)
        const formattedDataBlock = formatLandDataBlock(props.blockVal)
        const formattedDataPhase = formatLandDataPhase(props.phaseVal)
        //Lot Grid
        grid = new Grid({
            columns: [
            {
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
            {
            id: 'nameColumn',
            name: 'Name',
            formatter: (cell, row) => {
                const blockValue = row.cells[6].data; // Access block column data directly from the row object
                const phaseValue = row.cells[7].data; 
                return h('span', {}, [
                    h('div', { className: 'd-flex align-items-center gap-3' }, [
                        h('div', { className: 'avatar-sm' }, [
                            h('div', { className: 'avatar-title rounded bg-success-subtle text-success fs-4' }, [
                                cell.replace(/^Lot\s*/, '')
                            ])
                        ]),
                        h('div', { className: 'flex-grow-1' }, [
                            h('h5', { className: 'fs-14 mb-1' }, [
                                h('a', { className: 'text-body' }, [
                                    cell
                                ])
                            ]),
                            h('p', { className: 'text-muted mb-0' }, [
                                h('span', { className: 'fw-medium' }, [
                                    phaseValue + ', ' +blockValue
                                ])
                            ])
                        ])
                    ])
                ]);
            }
        },
                {id:'sizeColumn',name: 'Size'},
                {id: 'detailsColumn',name: 'Details'},
                {
                    id: 'statusColumn',
                    name: 'Status',
                    align: 'center',
                    width: '75px',
                    formatter: (cell, row) => {
                        const statusText = cell;
                        return  h('span', { className: 'badge bg-success',  onClick: () => editModal(row) },[
                            statusText
                        ])
                    },
                    sort: false    
                }, 
                {id:'dateColumn',name: 'Date Created'},
                {id:'blockColumn',name: 'Block', hidden:true},
                {id: 'phaseColumn',name: 'Phase', hidden: true},
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

        //Block Grid

        gridBlock = new Grid({
            columns: [
                {
                    id: 'nameColumn',
                    name: 'Name',
                    formatter: (cell, row) => {
                        const phaseValue = row.cells[2].data; // Access block column data directly from the row object
                        return h('span', {}, [
                            h('div', { className: 'd-flex align-items-center gap-3' }, [
                                h('div', { className: 'avatar-sm' }, [
                                    h('div', { className: 'avatar-title rounded bg-success-subtle text-success fs-4' }, [
                                        cell
                                    ])
                                ]),
                                h('div', { className: 'flex-grow-1' }, [
                                    h('h5', { className: 'fs-14 mb-1' }, [
                                        h('a', { className: 'text-body' }, [
                                            'Block '+cell
                                        ])
                                    ]),
                                    h('p', { className: 'text-muted mb-0' }, [
                                        h('span', { className: 'fw-medium' }, [
                                            phaseValue
                                        ])
                                    ])
                                ]),
                               
                            ])
                        ]);
                    }
                },
                {name: 'Date Created'},
                {
                    name: 'Phase Nmae',
                    hidden: true,
                },
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
                        resolve(formattedDataBlock);
                    },2000)
                })
            },
        }).render(gridContainerBlock.value);

        //Phase Grid
        gridPhase = new Grid({
            columns: [
                {
                    id: 'nameColumn',
                    name: 'Name',
                    formatter: (cell, row) => {
                        const phaseValue = row.cells[2].data; // Access block column data directly from the row object
                        return h('span', {}, [
                            h('div', { className: 'd-flex align-items-center gap-3' }, [
                                h('div', { className: 'avatar-sm' }, [
                                    h('div', { className: 'avatar-title rounded bg-success-subtle text-success fs-4' }, [
                                        phaseValue
                                    ])
                                ]),
                                h('div', { className: 'flex-grow-1' }, [
                                    h('h5', { className: 'fs-14 mb-1' }, [
                                        h('a', { className: 'text-body' }, [
                                            cell
                                        ])
                                    ]),
                                ]),
                               
                            ])
                        ]);
                    }
                },
                {name: 'Date Created'},
                {
                    name: 'Phase Nmae',
                    hidden: true,
                },
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
                        resolve(formattedDataPhase);
                    },2000)
                })
            },
        }).render(gridContainerPhase.value);
    });

</script>

<style>
.modal{
    background-color: rgba(0, 0, 0, 0.5);
}

.multiselect.is-disabled {
    background-color: #eee!important; /* Set your desired gray background color */
    /* Add any other styling for disabled state */
}

.gridjs-input {
    padding: 10px 26px !important;
}

</style>