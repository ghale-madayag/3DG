<template>
    <Layout>

        <Head title="Payments & Invoice">
            <meta name="viewport" content="your content" />
        </Head>
        <PageHeader title="List" pageTitle="Payments & Invoice" />
        <div class="row">
            <div class="col-xl-3 col-md-6">
                <!-- card -->
                <div class="card card-animate">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <p class="text-uppercase fw-medium text-muted mb-0">
                                    Overdue Invoices
                                </p>
                            </div>
                        </div>
                        <div class="d-flex align-items-end justify-content-between mt-4">
                            <div>
                                <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                    ₱<span class="counter-value">{{ formatNumber(overdue.total_amount) }}</span>
                                </h4>
                                <span class="badge bg-danger me-1">{{ overdue.count }}</span>
                                <span class="text-muted">Total Invoices</span>
                            </div>
                            <div class="avatar-sm flex-shrink-0">
                                <span class="avatar-title bg-danger-subtle rounded fs-3">
                                    <i class="ri-error-warning-line text-danger"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div>
            <!-- end col -->

            <div class="col-xl-3 col-md-6">
                <!-- card -->
                <div class="card card-animate">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <p class="text-uppercase fw-medium text-muted mb-0">
                                    Paid Invoices
                                </p>
                            </div>
                            <div class="flex-shrink-0">
                                <a href="javascript:void(0);" class="badge bg-success-subtle text-success badge-border">Current Month</a>
                            </div>
                        </div>
                        <div class="d-flex align-items-end justify-content-between mt-4">
                            <div>
                                <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                    ₱<span class="counter-value">{{ formatNumber(paid.total_amount) }}</span>
                                </h4>
                                <span class="badge bg-success me-1">{{ paid.count }}</span>
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
            <!-- end col -->

            <div class="col-xl-3 col-md-6">
                <!-- card -->
                <div class="card card-animate">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <p class="text-uppercase fw-medium text-muted mb-0">
                                    Unpaid Invoices
                                </p>
                            </div>
                            <div class="flex-shrink-0">
                                <a href="javascript:void(0);" class="badge bg-info-subtle text-info badge-border">Current Month</a>
                            </div>
                        </div>
                        <div class="d-flex align-items-end justify-content-between mt-4">
                            <div>
                                <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                    ₱<span class="counter-value">{{ formatNumber(unpaid.total_amount) }}</span>
                                </h4>
                                <span class="badge bg-info me-1">{{ unpaid.count }}</span>
                                <span class="text-muted">Unpaid by clients</span>
                            </div>
                            <div class="avatar-sm flex-shrink-0">
                                <span class="avatar-title bg-info-subtle rounded fs-3">
                                    <i class="ri-refund-2-line text-info"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div>
            <!-- end col -->

            <div class="col-xl-3 col-md-6">
                <!-- card -->
                <div class="card card-animate">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <p class="text-uppercase fw-medium text-muted mb-0">
                                    Reservation Invoices
                                </p>
                            </div>
                            <div class="flex-shrink-0">
                                <a href="javascript:void(0);" class="badge bg-warning-subtle text-warning badge-border">Current Month</a>
                            </div>
                        </div>
                        <div class="d-flex align-items-end justify-content-between mt-4">
                            <div>
                                <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                    ₱<span class="counter-value">{{ formatNumber(reservation.total_amount) }}</span>
                                </h4>
                                <span class="badge bg-warning me-1">{{ reservation.count }}</span>
                                <span class="text-muted">Reserved by clients</span>
                            </div>
                            <div class="avatar-sm flex-shrink-0">
                                <span class="avatar-title bg-warning-subtle rounded fs-3">
                                    <i class="ri-reserved-line text-warning"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div>
            <!-- end col -->
        </div>
        <!-- end row-->
        <div class="row">
            <div class="col-lg-12">
                <div class="card" id="invoiceList">
                    <div class="card-header border-0">
                        <div class="d-flex align-items-center">
                            <h5 class="card-title mb-0 flex-grow-1">
                                Invoices
                            </h5>
                            <div class="flex-shrink-0">
                                <div class="d-flex gap-2 flex-wrap">
                                    <button class="btn btn-primary" id="remove-actions" onClick="deleteMultiple()">
                                        <i class="ri-delete-bin-2-line"></i>
                                    </button>
                                    <Link href="/payments-invoice/create" class="btn btn-secondary"><i
                                        class="ri-add-line align-bottom me-1"></i>
                                    Create Transaction</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body bg-light-subtle border border-dashed border-start-0 border-end-0">
                        <AlertMsg v-if="msg" class="col-md-6" :type="'success'" :msg="message" />
                        <div class="row g-3">
                            <div class="col-xxl-3 col-sm-12">
                                <div class="search-box">
                                    <input type="text" v-model="searchProp" class="form-control search"
                                        placeholder="Search for invoice or client..." />
                                    <i class="ri-search-line search-icon"></i>
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-xxl-2 col-sm-4">
                                <div class="input-light">
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
                            <!--end col-->
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-card gridjs-border-none" ref="gridContainer" id="gridStyle"></div>
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
import { Grid, h } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { ref, onMounted, watchEffect, watch } from 'vue';
import debounce from "lodash/debounce";
import AlertMsg from '../../Components/AlertMsg.vue';

let grid;
const msg = ref(false);
const gridContainer = ref(null);

const searchProp = ref(null);
const selectStat = ref('all');

let props = defineProps({
    property: Object,
    message: String,
    overdue: Object,
    paid: Object,
    unpaid: Object,
    reservation: Object,
})

onMounted(() => {
    const formattedData = formatData(props.property);

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
                    }else {
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
                        status != 'Reserved' && status != 'Pending' && status != 'Overdue' ?
                            h('li', { className: 'list-inline-item', 'data-bs-toggle': 'tooltip', 'data-bs-trigger': 'hover', 'data-bs-placement': 'top', title: 'Download Invoice' }, [
                                h('a', { href: 'javascript:void(0);', className: 'view-item-btn', onClick: () => download(row) }, [
                                    h('i', { className: 'ri-download-2-line text-muted' })
                                ])
                            ]) : null,
                    ]);
                },
                sort: false
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

});

const formatData = property => {
    return property.map(property => [
        property.invoice_number,
        property.invoice_number,
        property.lot.lot_name,
        property.lot.lot_number,
        property.lot.block.block_number,
        property.lot.block.phase.phase_name,
        property.client.fname + " " + property.client.lname,
        '+' + property.client.phone,
        property.client.email,
        '₱' + " " + formatNumber(property.total_price),
        '₱' + " " + formatNumber(property.reservation_fee),
        property.status,
        property.status !== 'Reserved' && property.status !== 'Pending' ? (property.status === 'Overdue' ? formatCreatedAt(property.date_due) : formatDate(property.updated_at)) : formatCreatedAt(property.date_due),
    ]);
};

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

    router.get('/payments-invoice', params, {
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

const showURL = (row) => {
    router.visit('/payments-invoice/' + row.cells[0].data + '/')
}

const download = (row) => {
    // // Check if status is not 'Reserved'
    // Assuming row.url contains the URL of the file to be downloaded
    const fileUrl = '/storage/ledger/' + row.cells[1].data + '-3DG.pdf';

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = row.cells[1].data + '-3DG'; // You can set the filename here or extract it from the row data
    document.body.appendChild(link);

    // Trigger the click event on the anchor element
    link.click();

    // Clean up the temporary anchor element
    document.body.removeChild(link);
}

const payment = (row) =>{
    router.get('/my-ledger/'+row.cells[1].data)
}

const approved = (row) =>{
    router.get('/payments-invoice/'+row.cells[1].data+'/edit')
}

</script>

<style>
.multiselect.is-disabled {
    background-color: #eee !important;
    /* Set your desired gray background color */
    /* Add any other styling for disabled state */
}

.gridjs-input {
    padding: 10px 26px !important;
}
</style>
