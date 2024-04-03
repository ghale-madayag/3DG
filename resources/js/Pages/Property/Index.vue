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
                            <input type="text" class="form-control search" placeholder="Search..."> <i class="ri-search-line search-icon"></i>
                        </div>
                    </div>
                    <div class="col-xl-2">
                        <div class="hstack gap-2">
                            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addSeller"><i class="ri-add-fill me-1 align-bottom"></i> Add Project</button>
                        </div>
                    </div>
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
                                        <swiper-slide  class="swiper-slide" v-for="(slide, index) in property.images" :key="index">
                                            <img @click="openImage(slide.file_name)" :src="'/storage/project/images/'+slide.file_name" class="img-fluid d-block swiper-slide-image"/>
                                        </swiper-slide>
                                    </swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="fw-medium mb-0 float-end"><i class="ri-checkbox-circle-fill text-primary"></i> {{ property.totalLots }} </p>
                        <h5 class="mb-1 fs-16"><Link :href="'/property/'+property.slug" class="text-body">{{ property.name }}</Link></h5>
                        <p class="text-muted mb-0"><i class="ri-community-fill"></i> Total Units: {{ property.total_units }}</p>
                    </div>
                    <div class="card-footer border-top border-top-dashed">
                        <Link :href="'/property/'+property.slug" class="card-link link-primary mt-3">Read More <i class="ri-arrow-right-s-line ms-1 align-middle lh-1"></i></Link>
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
        </div><!-- /.modal -->
    </Layout>
</template>
<script setup>
    import { ref, onMounted } from 'vue';
    import { Link, Head } from "@inertiajs/vue3";
    import Layout from "@/Layouts/main.vue";
    import PageHeader from "@/Components/page-header.vue";
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { FreeMode,Autoplay, Pagination, Navigation, Thumbs  } from 'swiper/modules';
    import "swiper/swiper-bundle.css";

    let props = defineProps({
        properties: Object,
    })

    const modules = [FreeMode, Thumbs, Autoplay, Pagination, Navigation];

    const modalImage = ref(null);

    const closeModal = () => {
        modalImage.value = null;
    };

    const openImage = (image) => {
        modalImage.value = image;
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
</style>
    
   