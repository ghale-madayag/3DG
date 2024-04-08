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
                                <div class="hstack gap-2" v-if="$page.props.roles=='administrator'">
                                    <Link class="btn btn-success" :href="'/project/'+project.slug"><i class="ri-add-fill me-1 align-bottom"></i> Generate Lot</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-1">
                    <div class="col" v-for="property in properties.data">
                        <div class="card explore-box card-animate">
                            <div class="bookmark-icon position-absolute top-0 end-0 p-2">
                                <button type="button" class="btn btn-icon active" data-bs-toggle="button" aria-pressed="true"><i class="mdi mdi-cards-heart fs-16"></i></button>
                            </div>
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
    </Layout>
</template>

<script setup>
    import { ref, onMounted, watch } from 'vue';
    import { Link, Head, router } from "@inertiajs/vue3";
    import Layout from "@/Layouts/main.vue";
    import PageHeader from "@/Components/page-header.vue";
    import GridPagination from "@/Components/Pagination.vue";
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { FreeMode,Autoplay, Pagination, Navigation, Thumbs  } from 'swiper/modules';
    import "swiper/swiper-bundle.css";
    import  debounce from "lodash/debounce";
    import Multiselect from '@vueform/multiselect';
    import '@vueform/multiselect/themes/default.css';

    const thumbsSwiper = ref(null);
    const modalImage = ref(null);
    
    let props = defineProps({
        properties: Object,
        project: Object,
        phaseFilter: Object,
        blockFilter: Object,
    });

    const searchProject = ref(null);
    const searchBlock = ref(null);
    const searchPhase = ref(null);
    const debounceRunning = ref(null);

    const modules = [FreeMode, Thumbs, Autoplay, Pagination, Navigation];

    const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
    };

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