<template>
    <Layout>
        <Head title="Property">
            <meta name="viewport" content="your content" />
        </Head>
        <PageHeader title="Property" pageTitle="Dashboard" />
        <div class="card">
            <div class="card-header border-0 rounded">
                <div class="row g-2">
                    <div class="col-xl-3">
                        <div class="search-box">
                            <input type="text" v-model="searchProject" class="form-control search" placeholder="Search..."> <i class="ri-search-line search-icon"></i>
                        </div>
                    </div>
                    <div class="col-xl-2" v-if="roles=='administrator'">
                        <div class="hstack gap-2">
                            <Link class="btn btn-success" href="/project/create"><i class="ri-add-fill me-1 align-bottom"></i> Add Project</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="debounceRunning" >
            <div class="col-lg-12">
                <div class="text-center mb-3">
                    <button type="button" class="btn btn-link text-success btn-lg">
                        <span class="d-flex align-items-center">
                            <span class="flex-grow-1 me-2">
                                Loading...
                            </span>
                            <span class="spinner-grow flex-shrink-0" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div class="row" v-if="!properties || !properties.length">
            <div class="col-lg-12">
                <div class="text-center">
                    <p class="fs-4 text-muted">No data found</p>
                </div>
            </div>
        </div>
        <div class="row row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
            <div class="col" v-for="property in properties">
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
                                        <swiper-slide v-if="!property.images || !property.images.length" class="swiper-slide">
                                            <img src='/storage/assets/placeholder.png' class="img-fluid d-block swiper-slide-image"/>
                                        </swiper-slide>
                                        <swiper-slide v-else class="swiper-slide" v-for="(slide, index) in property.images" :key="index">
                                            <img @click="openImage(slide.file_name)" :src="'/storage/project/images/'+slide.file_name" class="img-fluid d-block swiper-slide-image"/>
                                        </swiper-slide>
                                    </swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <!-- <p class="fw-medium mb-0 float-end"><i :class="{'ri-checkbox-circle-fill': property.totalLots > 0, 'ri-close-circle-fill': property.totalLots == 0, 'text-primary': property.totalLots > 0, 'text-danger': property.totalLots == 0}"></i> {{ property.totalLots }} </p> -->
                        <h5 class="mb-2 fs-16"><Link :href="'/property/'+property.slug" class="text-body">{{ property.name }}</Link></h5>
                        <!-- <p class="text-muted mb-0"><i class="ri-community-fill"></i> Total Units: {{ property.total_units }}</p> -->
                        <div class="mt-auto">
                            <div class="d-flex mb-2">
                                <div class="flex-grow-1">
                                    <div>Available</div>
                                </div>
                                <div class="flex-shrink-0">
                                    <div><i class="ri-list-check align-bottom me-1 text-muted"></i> {{ property.totalLots }}/{{ property.total_units }}</div>
                                </div>
                            </div>
                            <div class="progress progress-sm animated-progress">
                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100" :style="{ width: progressBarWidth(property.totalLots,property.total_units) }"></div><!-- /.progress-bar -->
                            </div><!-- /.progress -->
                        </div>
                    </div>
                    <div class="card-footer border-top border-top-dashed">
                        <Link :href="'/property/'+property.slug" class="card-link link-primary mt-3">View Property <i class="ri-arrow-right-s-line ms-1 align-middle lh-1"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="modalImage" class="modal">
            <div class="modal-dialog modal-dialog-centered modal-lg zoomIn">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" @click="closeModal"> </button>
                    </div>
                    <div class="modal-body">
                        <img :src="'/storage/project/images/'+modalImage" class="modal-content" />
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
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { FreeMode,Autoplay, Pagination, Navigation, Thumbs  } from 'swiper/modules';
    import "swiper/swiper-bundle.css";
    import  debounce from "lodash/debounce";

    let props = defineProps({
        properties: Object,
        roles: String,
    })

    const searchProject = ref(null);

    const modules = [FreeMode, Thumbs, Autoplay, Pagination, Navigation];

    const modalImage = ref(null);
    const debounceRunning = ref(null);

    const closeModal = () => {
        modalImage.value = null;
    };

    const openImage = (image) => {
        modalImage.value = image;
    };

    const progressBarWidth = (available, total_units) => {
        const percentage = (available / total_units) * 100;
        return `${percentage}%`;
    }

    watch([searchProject], debounce(function ([project]) {
        
        debounceRunning.value = true;
        const params = {};
        params.project = project;

        router.get('/property/', params, {
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
    min-height: 205px;
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
</style>
    
   