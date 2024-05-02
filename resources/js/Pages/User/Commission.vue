<template>
    <Layout>
        <Head title="My Commission">
            <meta name="viewport" content="your content" />
        </Head>
        <PageHeader title="My Dashboard" pageTitle="Agent" />
        <div class="row">
            <div class="col-xxl-3">
                <div class="card">
                    <div class="card-body p-4">
                        <div>
                            <div class="flex-shrink-0 avatar-md mx-auto">
                                <!-- Current Profile Photo -->
                                <div v-show="!photoPreview">
                                    <img :src="user.profile_photo_url" :alt="user.name" class="rounded-circle" width="90">
                                </div>

                                <!-- New Profile Photo Preview -->
                                <div v-show="photoPreview">
                                    <span class="d-block rounded-circle w-25" :style="'background-image: url(\'' + photoPreview + '\');'" />
                                </div>
                            </div>
                            <div class="mt-5 text-center">
                                <h5 class="mb-1">{{ user.name }}</h5>
                                <p class="text-muted">{{ formattedCreatedAt(user.created_at) }}</p>
                            </div>
                            <div class="table-responsive">
                                <table class="table mb-0 table-borderless">
                                    <tbody>
                                        <tr>
                                            <th><span class="fw-medium">Email:</span></th>
                                            <td>{{ user.email }}</td>
                                        </tr>

                                        <tr>
                                            <th><span class="fw-medium">Contact No:</span></th>
                                            <td>+{{ user.phone }}</td>
                                        </tr>
                                        <tr>
                                            <th><span class="fw-medium">Address</span></th>
                                            <td>{{ user.address }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-9">
                <div class="card">
                    <div class="card-header border-0 align-items-center d-flex">
                        <h4 class="card-title mb-0 flex-grow-1">Revenue</h4>
                    </div><!-- end card header -->

                    <div class="card-header p-0 border-0 bg-light-subtle">
                        <div class="row g-0 text-center">
                            <div class="col-6 col-sm-3">
                                <div class="p-3 border border-dashed border-start-0 border-end-0">
                                    <h5 class="mb-1 text-success">₱ <span class="counter-value">{{ formatNumber(first_period) }}</span></h5>
                                    <p class="text-muted mb-0">First Period (21st-5th)</p>
                                </div>
                            </div>
                            <div class="col-6 col-sm-3">
                                <div class="p-3 border border-dashed border-start-0 border-end-0">
                                    <h5 class="mb-1 text-success">₱ <span class="counter-value">{{ formatNumber(second_period) }}</span></h5>
                                    <p class="text-muted mb-0">Second Period (6th-20th)</p>
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-6 col-sm-3">
                                <div class="p-3 border border-dashed border-start-0">
                                    <h5 class="mb-1">₱ <span class="counter-value">{{ formatNumber(entire_month) }}</span></h5>
                                    <p class="text-muted mb-0">Commission This Month</p>
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-6 col-sm-3">
                                <div class="p-3 border border-dashed border-start-0">
                                    <h5 class="mb-1">₱ <span class="counter-value"> {{  formatNumber(total) }}</span></h5>
                                    <p class="text-muted mb-0">Total Revenue</p>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                    </div><!-- end card header -->

                    <div class="card-body p-0 pb-2">
                        <div>
                            <apexchart height="360" type="line" :options="options" :series="series"></apexchart>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
                <!--tab-->
                <div class="card">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <ul class="nav nav-tabs-custom card-header-tabs border-bottom-0" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active fw-semibold" data-bs-toggle="tab" href="#property" role="tab">
                                            Client Transaction 
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link fw-semibold" data-bs-toggle="tab" href="#history" role="tab">
                                            Transaction History
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
                    <div class="card-body">
                        <div class="tab-content text-muted">
                            <div class="tab-pane active" id="property" role="tabpanel">
                                <div class="row mb-4">
                                    <div class="col-sm-auto">
                                        <div>
                                            <Link href="/property" class="btn btn-outline-primary">
                                                <i class="ri-eye-line align-bottom me-1"></i> Browse Property
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div class="d-flex justify-content-sm-end">
                                            <div class="search-box ms-2">
                                                <input v-model="searchProp" type="text" class="form-control" placeholder="Search Invoice..">
                                                <i class="ri-search-line search-icon"></i>
                                            </div>
                                            <div class="input-light ms-2">
                                                <select class="form-select" v-model="selectStat">
                                                    <option value="all" selected>
                                                        All
                                                    </option>
                                                    <option value="Pending">Pending</option>
                                                    <option value="Reserved">Reserved</option>
                                                    <option value="Installment">Installment</option>
                                                    <option value="Fullpayment">Fullpayment</option>
                                                    <option value="Overdue">Overdue</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--grid-->
                                <div class="table-card gridjs-border-none" ref="gridContainer" id="gridStyle"></div>
                            </div>
                            <div class="tab-pane" id="history" role="tabpanel">
                                <div class="table-card gridjs-border-none" ref="gridHistory"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end of tab-->
              
               
            </div>
        </div>
    </Layout>
</template>
<script setup>
import { ref, onMounted, watchEffect, watch } from 'vue';
import debounce from "lodash/debounce";
import { Link, Head, useForm, router } from "@inertiajs/vue3";
import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";
import { Grid, h } from "gridjs";
import VueApexCharts from "vue3-apexcharts";
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance();
const currentPageUrl = instance.appContext.app.config.globalProperties.$page.url;

let grid;
let gridHis;
const msg = ref(false);
const gridContainer = ref(null);
const gridHistory = ref(null);

const photoPreview = ref(null);
const selectStat = ref('all');
const searchProp = ref(null);

const props = defineProps({
    auth: Object,
    property: Object,
    first_period: Number,
    second_period: Number,
    entire_month: Number,
    total: Number,
    graphData: Array,
    user: Object,
    commissionData: Object,
});

const options = ref({
    chart: {
        id: 'vuechart'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yaxis: {
        labels: {
        formatter: function(value) {
            return '₱ ' + value; // Add peso sign before the value
        }
        }
    },
    zoom: {
        enabled: false
        },
    fill: {
            type:'solid',
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
    name: 'Commission',
    type: 'column',
    data: props.graphData
  }]
);

onMounted(() => {
    const formattedData = formatData(props.property);
    const formattedDataHistory = formatDataHis(props.commissionData);

    if (props.message !== null) {
        msg.value = true;

        setTimeout(() => {
            msg.value = false;
        }, 10000);
    }


    grid = new Grid({
        columns: [
            {
                id: 'checkboxCol',
                width: '40px',
                name: h('input', { type: 'checkbox', className: 'form-check-input', onChange: event => selectRows(event, 'lot') }),
                align: 'center',
                formatter: (cell, row) => {
                    return h('input', {
                        type: 'checkbox',
                        className: 'form-check-input',
                        onClick: event => handleLot(event, row, 'lot')
                    });
                },
                sort: false,
                hidden: true,
            },
            { name: 'Invoice No.' },
            { name: 'Property' },
            { name: 'Lot No.', hidden: true },
            { name: 'BLK', hidden: true },
            { name: 'PHASE', hidden: true },
            { name: 'Client' },
            { name: 'Phone' },
            { name: 'Email' },
            { name: 'Price' },
            { name: 'Reservation', hidden:true },
            {
                id: 'statusColumn',
                name: 'Status',
                align: 'center',
                width: '100px',
                formatter: (cell, row) => {
                    const statusText = cell;
                    let badge;

                    if (cell == 'Reserved') {
                        badge = 'bg-secondary';
                    } else if (cell == 'Installment') {
                        badge = 'bg-info';
                    } else if (cell == 'Fullpayment'){
                        badge = 'bg-success';
                    }else{
                        badge = 'bg-danger';
                    }

                    return h('span', { className: 'badge ' + badge, onClick: () => editModal(row) }, [
                        statusText
                    ])
                },
                sort: false
            },
            { name: 'Due Date' },
            {
                id: 'actionsColumn',
                name: 'Actions',
                align: 'center',
                width: '100px',
                formatter: (cell, row) => {
                    const status = row.cells[11].data;
                    return h('ul', { className: 'list-inline hstack gap-2 mb-0' }, [
                        status == 'Pending' ?
                            h('li', { className: 'list-inline-item', 'data-bs-toggle': 'tooltip', 'data-bs-trigger': 'hover', 'data-bs-placement': 'top', title: 'Approved' }, [
                                h('a', { href: 'javascript:void(0);', className: 'text-muted d-inline-block fs-16', onClick: () =>  approved(row) }, [
                                    h('i', { className: 'ri-pencil-fill fs-16' })
                                ])
                            ]) : null,
                        status == 'Installment' ?
                            h('li', { className: 'list-inline-item', 'data-bs-toggle': 'tooltip', 'data-bs-trigger': 'hover', 'data-bs-placement': 'top', title: 'Payment' }, [
                                h('a', { href: 'javascript:void(0);', className: 'text-success d-inline-block fs-16', onClick: () =>  payment(row) }, [
                                    h('i', { className: 'ri-arrow-right-circle-fill fs-16' })
                                ])
                            ]) : null,
                        status == 'Reserved' ?
                            h('li', { className: 'list-inline-item', 'data-bs-toggle': 'tooltip', 'data-bs-trigger': 'hover', 'data-bs-placement': 'top', title: 'Generate Ledger' }, [
                                h('a', { href: 'javascript:void(0);', className: 'text-muted d-inline-block', onClick: () => showURL(row) }, [
                                    h('i', { className: 'ri-file-list-3-line fs-16' })
                                ])
                            ]) : null,
                        status != 'Reserved' && status != 'Pending' ?
                            h('li', { className: 'list-inline-item', 'data-bs-toggle': 'tooltip', 'data-bs-trigger': 'hover', 'data-bs-placement': 'top', title: 'Download Invoice' }, [
                                h('a', { href: 'javascript:void(0);', className: 'view-item-btn', onClick: () => download(row) }, [
                                    h('i', { className: 'ri-download-2-line text-muted' })
                                ])
                            ]) : null,
                    ]);
                },
                sort: false,
                hidden: true,
            }
        ],
        soft: false,
        theme: 'mermaid',
        search: false,
        pagination: {
            limit: 10
        },
        data: function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve(formattedData);
                }, 1000)
            })
        },
    }).render(gridContainer.value);

    gridHis = new Grid({
        columns: [
            { name: 'Invoice No.' },
            { name: 'Total Commission'},
            { name: 'Percentage'},
            { name: 'Status'},
            { name: 'Transaction Date', sort: true,},
        ],
        soft: true,
        theme: 'mermaid',
        search: false,
        pagination: {
            limit: 10
        },
        data: function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve(formattedDataHistory);
                }, 1000)
            })
        },
    }).render(gridHistory.value);

});

const formattedCreatedAt = (createdAt) => {
    const createdAtDate = new Date(createdAt);
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    const month = monthNames[createdAtDate.getMonth()];
    const day = createdAtDate.getDate();
    const year = createdAtDate.getFullYear();
    return `Since ${month} ${day}, ${year}`;
};

const formatData = property => {
    return property.map(property => [
        property.invoice_number,
        property.invoice_number,
        property.lot.lot_name,
        property.lot.lot_number,
        property.lot.block.block_number,
        property.lot.block.phase.phase_name,
        property.client.fname + " " + property.client.lname, '+' + property.client.phone,
        property.client.email,
        '₱' + " " + formatNumber(property.total_price),
        '₱' + " " + formatNumber(property.reservation_fee),
        property.status,
        property.status!='Reserved' && property.status != 'Pending' ? formatDate(property.updated_at) : formatCreatedAt(property.date_due) ,

    ]);
};

const formatDataHis = property => {
    return property.map(property => [
        property.invoice,
        '₱' + " " + formatNumber(property.total),
        property.commission,
        property.tag,
        property.date,
    ]);
}

const formatCreatedAt = (dateString) => {
    const date = new Date(dateString);
    const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };

    return date.toLocaleDateString('en-US', options);
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const dayOfMonth = date.getDate();
    return `${dayOfMonth}th of the Month`;
}

watch([searchProp, selectStat], debounce(function ([searchVal, selectVal]) {
    const params = {};

    if (searchVal) {
        params.search = searchVal;
    }

    if (selectVal) {
        params.status = selectVal;
    }

    router.get(currentPageUrl, params, {
        preserveState: true,
        preserveScroll: true,
        replace: true,
        onSuccess: () => {
            fetchDataAndUpdateGrid(formatData(props.property));
        }
    })
}, 500));

const fetchDataAndUpdateGrid = (details) => {

    const formattedData = details;

    grid.updateConfig({
        data: function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve(formattedData);
                }, 1000)
            })
        }
    }).forceRender();
}

const formatNumber = (number) => {
    const formattedNumber = Number(number).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return Number.isInteger(Number(number))
        ? formattedNumber.replace(/\.\d+$/, "")
        : formattedNumber;
};

</script>