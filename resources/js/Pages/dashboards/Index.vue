<template>
    <Layout>

        <Head title="Dashboard">
            <meta name="viewport" content="your content" />
        </Head>
        <div class="row">
            <div class="col">
                <div class="h-100">
                    <div class="row mb-3 pb-1">
                        <div class="col-12">
                            <div class="d-flex align-items-lg-center flex-lg-row flex-column">
                                <div class="flex-grow-1">
                                    <h4 class="fs-16 mb-1">{{ greeting }}, {{ auth.user.name }}</h4>
                                    <p class="text-muted mb-0">Here's what's happening with your system today.</p>
                                </div>
                            </div><!-- end card header -->
                        </div>
                        <!--end col-->
                    </div>
                    <div class="row">
                        <div class="col-xl-3 col-md-6">
                            <!-- card -->
                            <div class="card card-animate">
                                <div class="card-body bg-success">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <p class="text-uppercase fw-medium text-light mb-0">
                                                Total Revenue
                                            </p>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <a href="javascript:void(0);"
                                                class="badge bg-success-subtle text-success badge-border">Current
                                                Month</a>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-end justify-content-between mt-4">
                                        <div>
                                            <h4 class="fs-22 fw-semibold ff-secondary mb-4 text-light">
                                                ₱<span class="counter-value">{{ formatNumber(paid.total_amount)
                                                    }}</span>
                                            </h4>
                                            <span class="badge bg-light-subtle me-1 text-primary">0</span>
                                            <span class="text-light">Paid by clients</span>
                                        </div>
                                        <div class="avatar-sm flex-shrink-0">
                                            <span class="avatar-title bg-light-subtle rounded fs-3">
                                                <i class="ri-money-dollar-circle-line text-primary"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <!-- end card body -->
                            </div>
                            <!-- end card -->
                        </div>
                        <div class="col-xl-3 col-md-6">
                            <!-- card -->
                            <div class="card card-animate">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <p class="text-uppercase fw-medium text-muted mb-0">
                                                Expected Revenue
                                            </p>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <a href="javascript:void(0);"
                                                class="badge bg-primary-subtle text-primary badge-border">Current
                                                Month</a>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-end justify-content-between mt-4">
                                        <div>
                                            <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                                ₱<span class="counter-value">{{ formatNumber(unpaid.total_amount)
                                                    }}</span>
                                            </h4>
                                            <span class="badge bg-primary me-1">0</span>
                                            <span class="text-muted">Paid by clients</span>
                                        </div>
                                        <div class="avatar-sm flex-shrink-0">
                                            <span class="avatar-title bg-primary-subtle rounded fs-3">
                                                <i class="ri-money-dollar-circle-line text-primary"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <!-- end card body -->
                            </div>
                            <!-- end card -->
                        </div>
                        <div class="col-xl-3 col-md-6">
                            <!-- card -->
                            <div class="card card-animate">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1 overflow-hidden">
                                            <p class="text-uppercase fw-medium text-muted text-truncate mb-0">Total Sold
                                                Property</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-end justify-content-between mt-4">
                                        <div>
                                            <h4 class="fs-20 fw-semibold ff-secondary mb-4"><span
                                                    class="counter-value">{{ sold }}</span></h4>
                                            <Link href="/property" class="text-decoration-underline text-dark">View all
                                            Property</Link>
                                        </div>
                                        <div class="avatar-sm flex-shrink-0">
                                            <span class="avatar-title bg-dark-subtle rounded fs-3">
                                                <i class="ri-home-heart-line text-muted"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div><!-- end card body -->
                            </div><!-- end card -->
                        </div><!-- end col -->
                        <div class="col-xl-3 col-md-6">
                            <!-- card -->
                            <div class="card card-animate">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1 overflow-hidden">
                                            <p class="text-uppercase fw-medium text-muted text-truncate mb-0">Remaining
                                                Property</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-end justify-content-between mt-4">
                                        <div>
                                            <h4 class="fs-20 fw-semibold ff-secondary mb-4"><span
                                                    class="counter-value">{{ available }}</span></h4>
                                            <Link href="/property" class="text-decoration-underline text-dark">View all
                                            Property</Link>
                                        </div>
                                        <div class="avatar-sm flex-shrink-0">
                                            <span class="avatar-title bg-dark-subtle rounded fs-3">
                                                <i class="ri-landscape-line text-muted"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div><!-- end card body -->
                            </div><!-- end card -->
                        </div><!-- end col -->
                    </div> <!-- end row-->
                    <div class="row">
                        <div class="col-xxl-8">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title mb-0">Monthly Gross Profit</h4>
                                </div>
                                <div class="card-body p-0 pb-2">
                                    <div>
                                        <apexchart height="400" type="line" :options="options" :series="series"></apexchart>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4">
                            <div class="card">
                                <div class="card-header d-flex align-items-center">
                                    <h6 class="card-title mb-0 flex-grow-1">Transaction History</h6>
                                    <a class="text-muted" href="javascript:void(0);">
                                        See All <i class="ri-arrow-right-line align-bottom"></i>
                                    </a>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive table-card">
                                        <div data-simplebar="init" style="max-height: 400px;" class="simplebar-scrollable-y"><div class="simplebar-wrapper" style="margin: 0px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: auto; overflow: hidden scroll;"><div class="simplebar-content" style="padding: 0px;">
                                            <ul class="list-group list-group-flush" v-for="(audit, index) in audits">
                                                <li class="list-group-item list-group-item-action">
                                                    <div class="d-flex align-items-center">                                        
                                                        <img v-if="!audit.user.profile_photo_path" class="rounded-circle header-profile-user" :src="audit.user.profile_photo_url" :alt="audit.user.name">
                                                        
                                                        <div class="ms-3 flex-grow-1">
                                                            <a href="#!" class="stretched-link">
                                                                <h6 class="fs-14 mb-1">{{ audit.user.name }}</h6>
                                                            </a>
                                                            <p class="mb-0 text-muted text-capitalize">{{ audit.event }} {{ formatType(audit.auditable_type) }}</p>
                                                        </div>
                                                        <div>
                                                            <h6>{{ formatCreatedAt(audit.created_at) }}</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div></div></div></div><div class="simplebar-placeholder" style="width: 1101px; height: 455px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar" style="height: 269px; transform: translate3d(0px, 0px, 0px); display: block;"></div></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
import { ref, onMounted, computed } from 'vue';
import VueApexCharts from "vue3-apexcharts";

let props = defineProps({
    auth: Object,
    land: Number,
    user: Number,
    paid: Object,
    unpaid: Object,
    sold: Number,
    available: Number,
    graphData: Array,
    audits: Object,
})

const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
        return 'Good morning!';
    } else if (hour >= 12 && hour < 18) {
        return 'Good afternoon!';
    } else {
        return 'Good evening!';
    }
};

const greeting = computed(() => getGreeting());

const formatNumber = (number) => {
    const formattedNumber = Number(number).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return Number.isInteger(Number(number))
        ? formattedNumber.replace(/\.\d+$/, "")
        : formattedNumber;
};

const formatCreatedAt = (dateString) => {
        const date = new Date(dateString);
        const options = { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric',
            hour12: true
        };
        return date.toLocaleDateString('en-US', options);
    }

const formatType = (type) => {
    console.log(type);
    const val = type.replace('App\\Models\\', '');
    let newVal = '';
    if(val=='LandDevelopment'){
        newVal = 'Land';
    }else{
        newVal = val;
    }

    return newVal;
}

const options = ref({
    chart: {
        id: 'vuechart'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yaxis: {
        labels: {
            formatter: function (value) {
                return '₱ ' + value; // Add peso sign before the value
            }
        }
    },
    zoom: {
        enabled: false
    },
    fill: {
        type: 'solid',
        opacity: [0.35, 1],
    },
    toolbar: {
        show: false
    }
});

const series = ref([
    //     {
    //     name: 'Commission',
    //     type: 'line',
    //     data: props.graphData
    //   },
    {
        name: 'Paid Invoices',
        type: 'column',
        data: props.graphData
    }]
);
</script>