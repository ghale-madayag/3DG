<template>
    <Layout>
        <Head title="My Property">
            <meta name="viewport" content="your content" />
        </Head>
        <PageHeader title="My Property" pageTitle="Property" />
        <div class="card">
            <div class="card-header border-0 rounded">
                <div class="row g-2">
                    <div class="col-xl-3">
                        <div class="search-box">
                            <input type="text" v-model="searchProject" class="form-control search" placeholder="Search..."> <i class="ri-search-line search-icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mb-3">
            <h5 class="text-muted">No data found</h5>
        </div>
        <div class="row row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-1">
            <div class="col" v-for="property in property.data">
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
                                        <swiper-slide v-if="!property.lot.lot_images || !property.lot.lot_images.length" class="swiper-slide">
                                            <img src='/storage/assets/placeholder.png' class="img-fluid d-block swiper-slide-image"/>
                                        </swiper-slide>
                                        <swiper-slide v-else class="swiper-slide" v-for="(slide, index) in property.lot.lot_images" :key="index">
                                            <img @click="openImage(slide.file_name,'img')" :src="'/storage/project/lot/'+slide.file_name" class="img-fluid d-block swiper-slide-image"/>
                                        </swiper-slide>
                                    </swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="fw-medium mb-0 float-end"><span class="badge badge-label" :class="statusClass(property.status)"><i class="mdi mdi-circle-medium"></i> {{ property.status }}</span></p>
                        <h5 class="mb-1 fs-16"><a class="text-body">{{ property.lot.lot_name ? property.lot.lot_name : 'Lot ' +property.lot.lot_number }}</a></h5>
                        <p class="text-muted mb-3" v-if="property.lot.size">Size: {{ property.lot.size }} sq m</p>
                        <dl class="row mt-4">
                            <dt class="col-sm-5">Due Date:</dt>
                            <dd class="col-sm-7" v-if="property.ledger?.ledger_trans">{{ property.ledger.ledger_trans.formatted_due_date }}</dd>
                            <dd class="col-sm-7" v-else>{{ property.due_date_plus_10_days }}</dd>

                            <dt class="col-sm-5" v-html="property.ledger ? 'Total Amount:' : 'Property Price:'"></dt>
                            <dd class="col-sm-7" v-html="property.ledger ? '₱ '+formatNumber(property.ledger.total_amount): '₱ '+formatNumber(property.total_price)"></dd>
                        </dl>
                        <!-- <div class="mt-auto" v-if="property.status !='Reserved'">
                            <div class="d-flex mb-2">
                                <div class="flex-grow-1">
                                    <div>Paid</div>
                                </div>
                                <div class="flex-shrink-0">
                                    <div><i class="ri-list-check align-bottom me-1 text-muted"></i> 18/42</div>
                                </div>
                            </div>
                            <div class="progress progress-sm animated-progress">
                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100" style="width: 34%;"></div>
                            </div>
                        </div> -->
                    </div>
                    <div class="card-footer border-top border-top-dashed" v-if="property.status !='Reserved'">
                        <a :href="'/storage/ledger/'+property.ledger?.pdf" class="text-body float-start" download><i class="ri-download-2-line align-bottom me-1 text-muted"></i> Download Invoice</a>
                        <Link :href="'/my-ledger/'+property.invoice_number" class="link-success float-end">View Ledger <i class="ri-arrow-right-s-line align-middle ms-1 lh-1"></i></Link>
                    </div>
                    <div class="card-footer border-top border-top-dashed" v-else>                        
                        <p class="text-body mb-0"><i class="ri-time-line"></i> {{ property.due_in }}</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
<script setup>
 import { ref, computed,onMounted, watch } from 'vue';
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

let props = defineProps({
    property: Object,
})

const statusClass = (status) => {
  // Define class mappings based on status
  if(status == 'Reserved'){
    return 'bg-warning';
  }else if(status=='Installment'){
    return 'bg-info';
  }else if(status == 'Fullpayment'){
    return 'bg-success'
  }
};

const formatNumber = (number) => {
    const formattedNumber = Number(number).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return Number.isInteger(Number(number)) ?
        formattedNumber.replace(/\.\d+$/, "") :
        formattedNumber;
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