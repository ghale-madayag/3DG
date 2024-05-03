<template>
    <Layout>
        <Head :title="project.name">
            <meta name="viewport" content="your content" />
        </Head>
        <PageHeader :title="project.name" pageTitle="Property" :url="'/property/'"/>
        <div class="row">
            <div class="col-xxl-3">
                <div class="card">
                    <div class="card explore-boxcar">
                        <div class="product-img-slider sticky-side-div p-2">
                                <div class="swiper product-thumbnail-slider bg-light">
                                    <div class="swiper-wrapper">
                                        <swiper
                                            :spaceBetween="10"
                                            :navigation="true"
                                            :autoplay="{ delay: 2500, disableOnInteraction: false }"
                                            :thumbs="{ swiper: thumbsSwiper }"
                                            :modules="modules"
                                            class="navigation-swiper rounded"
                                        >
                                            <swiper-slide  class="swiper-slide" v-for="(slide, index) in project.images" :key="index">
                                                <img @click="openImage(slide.file_name,'img')" :src="'/storage/project/images/'+slide.file_name" class="img-fluid d-block swiper-slide-image"/>
                                            </swiper-slide>
                                        </swiper>
                                    </div>
                                </div>
                                <div class="swiper product-nav-slider mt-2">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <swiper
                                            @swiper="setThumbsSwiper"
                                            :spaceBetween="10"
                                            :slidesPerView="4"
                                            :freeMode="true"
                                            :watchSlidesProgress="true"
                                            :modules="modules"
                                            class="mySwiper"
                                        >
                                            <swiper-slide class="nav-slide-item" v-for="(slide, index) in project.images" :key="index">
                                                <img :src="'/storage/project/images/'+slide.file_name" class="img-fluid d-block swiper-slide-thumbs"/>
                                            </swiper-slide>
                                        </swiper>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="card-body pt-0 p-4">
                        <div>
                            <h6 class="text-muted text-uppercase fw-semibold mb-4">Details</h6>
                            <dl class="row mb-0">
                                <dt class="col-sm-6">Name</dt>
                                <dd class="col-sm-6">{{ project.name }}</dd>

                                <dt class="col-sm-6">Location:</dt>
                                <dd class="col-sm-6">{{  project.land.address ? project.land.address : ' '}} 
                                    {{ capitalizedString(project.land.barangay) }}, 
                                    {{ capitalizedString(project.land.municipality) }},
                                    {{ capitalizedString(project.land.province) }},
                                    {{ capitalizedString(project.land.region) }}
                                </dd>

                                <dt class="col-sm-6">Available Units:</dt>
                                <dd class="col-sm-6">{{ project.available }}</dd>

                                <dt class="col-sm-6">Total Units:</dt>
                                <dd class="col-sm-6">{{ project.total_units }}</dd>
                            </dl>
                        </div>
                    </div>
                    <div class="card-body border-top border-top-dashed p-4">
                        <div>
                            <h6 class="text-muted text-uppercase fw-semibold mb-4">Description</h6>
                            <div v-html="project.description"></div>
                        </div>
                    </div>
                    <div class="card-body border-top border-top-dashed p-4">
                        <div>
                            <h6 class="text-muted text-uppercase fw-semibold mb-4">Resources</h6>
                            <div class="vstack gap-2">
                                <div class="border rounded border-dashed p-2" v-for="attachment in project.attachments">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0 me-3">
                                            <div class="avatar-sm">
                                                <div class="avatar-title bg-light text-black rounded fs-24">
                                                    <img v-if="isImage(attachment.file_name)" :src="'/storage/project/attachements/'+attachment.file_name"  class="img-fluid d-block"/>
                                                    <i v-else class="ri-attachment-line"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <h5 class="fs-13 mb-1"><a href="#" class="text-body text-truncate d-block">{{ attachment.file_name }}</a></h5>
                                            <div>{{ formatSize(attachment.size) }}</div>
                                        </div>
                                        <div class="flex-shrink-0 ms-2">
                                            <div class="d-flex gap-1">
                                                <a :href="'/storage/project/attachements/'+attachment.file_name" download class="btn btn-icon text-muted btn-sm fs-18">
                                                    <i class="ri-download-2-line"></i>
                                                </a>
                                                <a v-if="isImage(attachment.file_name)" @click="openImage(attachment.file_name,'att')" class="btn btn-icon text-muted btn-sm fs-18">
                                                    <i class="ri-eye-line"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-9">
                <div class="card">
                    <div class="card-header border-0 rounded">
                        <div class="row g-2">
                            <div class="col-xl-3">
                                <div class="search-box">
                                    <input type="text" v-model="searchProject" class="form-control search" placeholder="Search..."> <i class="ri-search-line search-icon"></i>
                                </div>
                            </div>
                            <div class="col-xxl-3">
                                <div>
                                    <Multiselect
                                        class="form-select"
                                        v-model="searchPhase"
                                        placeholder="Select Phase"
                                        :options="phaseFilter"
                                        :searchable="true"
                                        track-by="label"
                                    />
                                </div>
                            </div>
                            <div class="col-xxl-3">
                                <div>
                                    <Multiselect
                                        class="form-select"
                                        v-model="searchBlock"
                                        placeholder="Select Block"
                                        :options="blockFilter"
                                        :searchable="true"
                                        track-by="label"
                                        :disabled="!searchPhase"
                                    />
                                </div>
                            </div>
                            <div class="col-xl-2">
                                <div class="hstack gap-2" v-if="$page.props.roles=='administrator' || $page.props.roles=='superadmin'">
                                    <Link class="btn btn-success" :href="'/project/'+project.slug"><i class="ri-add-fill me-1 align-bottom"></i> Generate Lot</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-1">
                    <div class="col" v-for="property in properties.data">
                        <div class="card explore-box card-animate">
                            <div class="explore-place-bid-img">
                                <div class="product-img-slider sticky-side-div">
                                    <div class="swiper product-thumbnail-slider bg-light">
                                        <div class="swiper-wrapper">
                                            <swiper
                                                :spaceBetween="10"
                                                :navigation="true"
                                                :modules="modules"
                                                class="navigation-swiper rounded"
                                            >
                                                <swiper-slide v-if="!property.lot_images || !property.lot_images.length" class="swiper-slide">
                                                    <img src='/storage/assets/placeholder.png' class="img-fluid d-block swiper-slide-image"/>
                                                </swiper-slide>
                                                <swiper-slide v-else class="swiper-slide" v-for="(slide, index) in property.lot_images" :key="index">
                                                    <img @click="openImage(slide.file_name,'img')" :src="'/storage/project/lot/'+slide.file_name" class="img-fluid d-block swiper-slide-image"/>
                                                </swiper-slide>
                                            </swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="fw-medium mb-0 float-end"><span class="badge badge-label bg-success"><i class="mdi mdi-circle-medium"></i> Available</span></p>
                                <h5 class="mb-1 fs-16"><a class="text-body">{{ property.lot_name ? property.lot_name : 'Lot ' +property.lot_number }}</a></h5>
                                <p class="text-muted mb-3" v-if="property.size">Size: {{ property.size }} sq m</p>
                                <div class="card-text mb-0" v-html="property.description"></div>
                            </div>
                            <div class="card-footer border-top border-top-dashed">
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1 fs-14">
                                        <i class="ri-tent-fill text-warning align-bottom me-1" v-if="property.block.block_number"></i><span class="fw-medium">{{ property.block.phase.phase_name }}</span>
                                    </div>
                                    <div class="flex-grow-1 fs-14">
                                        <i class="ri-home-office-fill text-warning align-bottom me-1" v-if="property.block.block_number"></i><span class="fw-medium">Blk: {{ property.block.block_number }}</span>
                                    </div>
                                    <div class="flex-grow-1 fs-14">
                                        <i class="ri-building-3-fill text-warning align-bottom me-1" v-if="property.category"></i><span class="fw-medium">{{ property.category }}</span>
                                    </div>
                                </div>
                                <button class="mt-4 btn btn-soft-primary w-100" @click="openModal(property)" v-if="roles !='client'">Reserve</button>
                            </div>
                        </div>
                    </div>
                
                </div>
                <GridPagination :links="properties.links" :from="properties.from" :to="properties.to" :total="properties.total"/>
            </div>
        </div>
        <div v-if="modalImage" class="modal">
            <div class="modal-dialog modal-dialog-centered modal-lg zoomIn">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" @click="closeModal"> </button>
                    </div>
                    <div class="modal-body">
                        <img :src="modalImage" class="modal-content" />
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div>
        <!-- Reserved in modals -->
        <div class="modal fade" v-if="showModal" :class="{ 'show': showModal }" tabindex="-1" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="reserveModalLabel">Reserve Property</h5>
                        <button type="button" class="btn-close" @click="closeModalReserved" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="javascript:void(0);">
                           <div class="card bg-success-subtle">
                                <div class="card-body">
                                    <h5 class="mb-1 fs-20">
                                        <a class="text-success-emphasis">{{ lot_name }}</a>
                                    </h5>
                                    <p class="text-success mb-3 fs-18">Size: {{ size }} sq m</p>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1 fs-14">
                                            <i class="ri-tent-fill text-success align-bottom me-1"></i>
                                            <span class="fw-medium text-success">{{ phase }}</span>
                                        </div>
                                        <div class="flex-grow-1 fs-14">
                                            <i class="ri-home-office-fill text-success align-bottom me-1"></i>
                                            <span class="fw-medium text-success">Blk: {{ blk }}</span>
                                        </div>
                                        <div class="flex-grow-1 fs-14">
                                            <i class="ri-building-3-fill text-success align-bottom me-1"></i>
                                            <span class="fw-medium text-success">{{ cat }}</span>
                                        </div>
                                        <div class="flex-grow-1 fs-14">
                                            <i class="ri-home-3-fill text-success align-bottom me-1"></i>
                                            <span class="fw-medium text-success">{{ type }}</span>
                                        </div>
                                    </div>
                                </div>
                           </div>
                            <div class="row g-3 mt-4 border-top ">
                                <div class="col-xxl-12">
                                    <div>
                                        <label for="client_name" class="form-label text-muted">Client Name:</label>
                                        <Multiselect
                                            id="client_name"
                                            class="form-select"
                                            v-model="form.client_id"
                                            placeholder="Select Client"
                                            :options="clients"
                                            :searchable="true"
                                            track-by="label"
                                            :class="{ 'is-invalid': form.errors.error }"
                                        />
                                        <div class="invalid-feedback">Please enter client.</div>

                                    </div>
                                </div><!--end col-->
                                <div class="col-xxl-12">
                                    <div class="row mb-3" v-for="(agent, index) in subAgent" :key="index">
                                        <div class="col-xxl-8">
                                            <label class="form-label text-muted">Sub-Agent ({{ index + 1 }})</label>
                                            <Multiselect
                                                class="form-select"
                                                v-model="form.sub_agent_id[index]"
                                                placeholder="Select Sub-Agent"
                                                :options="getAvailableAgents(index)"
                                                :searchable="true"
                                                track-by="label"
                                            />
                                        </div>
                                        <div class="col-xxl-4">
                                            <button
                                                type="button"
                                                class="btn btn-outline-ligth btn-icon waves-effect waves-light text-danger mt-4 fs-4"
                                                v-show="index !== 0"
                                                @click="index !== 0 && removeSubAgent(index)">
                                                <span class="icon-off">
                                                    <i class="ri-delete-bin-line"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="colo-sm-6">
                                        <button
                                            type="button"
                                            class="btn btn-outline-success waves-effect waves-light btn-sm"
                                            @click="addSubAgent">
                                            <span class="icon-off">
                                                <i class="ri-add-line"></i>
                                                Add
                                            </span>
                                        </button>
                                    </div>
                                </div><!--end col-->
                                <div class="col-xxl-12">
                                    <div class="alert alert-info border-2 bg-body-secondary" role="alert">
                                        <strong>Note:</strong> Please register the client first by 
                                        <Link href="/user" class="alert-link">
                                            clicking here
                                        </Link>
                                        to ensure smooth processing.
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="hstack gap-2 justify-content-end">
                                        <button type="button" class="btn btn-light" @click="closeModalReserved">Close</button>
                                        <button type="submit" class="btn btn-primary" @click="createReservation">Submit</button>
                                    </div>
                                </div><!--end col-->
                            </div><!--end row-->
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
    import { ref, onMounted, watch } from 'vue';
    import { Link, Head, router, useForm } from "@inertiajs/vue3";
    import Layout from "@/Layouts/main.vue";
    import PageHeader from "@/Components/page-header.vue";
    import GridPagination from "@/Components/Pagination.vue";
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { FreeMode,Autoplay, Pagination, Navigation, Thumbs  } from 'swiper/modules';
    import "swiper/swiper-bundle.css";
    import  debounce from "lodash/debounce";
    import Multiselect from '@vueform/multiselect';
    import '@vueform/multiselect/themes/default.css';
    import Swal from 'sweetalert2/dist/sweetalert2';
    import 'sweetalert2/dist/sweetalert2.min.css';

    const thumbsSwiper = ref(null);
    const modalImage = ref(null);
    const showModal = ref(false);
    const subAgent = ref([null]);

    const lot_name = ref();
    const size = ref();
    const phase = ref();
    const blk = ref();
    const cat = ref();
    const type = ref();
    
    let props = defineProps({
        properties: Object,
        project: Object,
        phaseFilter: Object,
        blockFilter: Object,
        clients: Object,
        agents: Object,
        auth: Object,
        message: String,
        roles: String,
    });

    let form = useForm({
        client_id:'',
        sub_agent_id:[],
        lot_id:'',
        per_sqm_price:0,
        total_price:0,
        broker_id:2,
        broker_com: 0,
        agent_id: props.auth.user.id,
        agent_com:0,
        pay_method:'Cash',
        reservation_fee:5000,
        status:'Pending',

    })

    const swalBtn = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-primary mr-2',
            cancelButton: 'btn btn-link',
            container: 'modal-lesson',
        },
        buttonsStyling: false
    })

    const searchProject = ref(null);
    const searchBlock = ref(null);
    const searchPhase = ref(null);
    const debounceRunning = ref(null);

    const modules = [FreeMode, Thumbs, Autoplay, Pagination, Navigation];

    const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
    };

    const addSubAgent = () => {
        subAgent.value.push(null);
    };

    const removeSubAgent = (index) => {
        subAgent.value.splice(index, 1);
        form.sub_agent_id.splice(index, 1);
    };

    let getAvailableAgents = (index) => {
        const selectedAgents = form.sub_agent_id.filter((id, i) => i !== index && id);
        return props.agents.filter(agent => !selectedAgents.includes(agent.value));
    }

    const openImage = (image, cat) => {

        console.log(image);

        let attImg;

        if(cat == 'img'){
            attImg = '/storage/project/lot/'+image;
        }else{
            attImg = '/storage/project/attachements/'+image;
        }

        modalImage.value = attImg;
    };

    const closeModal = () => {
        modalImage.value = null;
    };

    const openModal = (property) => {
        showModal.value = true;
        lot_name.value = property.lot_name;
        size.value = property.size;
        phase.value = property.block.phase.phase_name ;
        blk.value = property.block.block_number;
        cat.value = property.category;
        type.value = property.type;
        form.lot_id = property.id;
    };

    const closeModalReserved = () => {
        showModal.value = false;
        form.reset();
    };
    

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

    watch([searchProject, searchBlock, searchPhase], debounce(function ([property, blockValue, phaseValue]) {
        
        debounceRunning.value = true;
        const params = {};

        if(property){
            params.property = property;
        }

        if (phaseValue) {
            params.phase = phaseValue;
        }else{
            searchBlock.value = null;
        }

        if (blockValue) {
            params.block = blockValue;
        }

        router.get('/property/'+props.project.slug, params, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
            onSuccess: () =>{
                debounceRunning.value = false;
            }
        });

    }, 500));

    const addTag = (newTag) => {
        const tag = {
            name: newTag,
            code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
        }
        this.options.push(tag)
        this.value.push(tag)
    }

    const createReservation = () => {
        form.post("/payments-invoice/store", {
            onSuccess: () => {
                showModal.value = false;
                form.reset();

                swalBtn.fire(
                    'Success!',
                    props.message,
                    'success'
                )

            },
        });
    };


</script>

<style>
    .swiper-slide-image {
        max-height: 300px; /* Adjust the value as needed */
        width: auto; /* Ensure image width adjusts proportionally */
    }

    .swiper-slide-thumbs{
        max-height: 60px; /* Adjust the value as needed */
        width: auto; /* Ensure image width adjusts proportionally */
    }

    .swiper-button-next::after, .swiper-button-prev::after {
        color: #ffffff !important;
    }

    .modal{
        background-color: rgba(0, 0, 0, 0.5);
    }
    .multiselect.is-disabled {
        background-color: #eee!important; /* Set your desired gray background color */
        /* Add any other styling for disabled state */
    }
</style>