<template>
    <Layout>

        <Head :title="roles != 'administrator' && roles != 'superadmin' ? 'My Ledger' : 'Ledger'">
            <meta name="viewport" content="your content" />
        </Head>
        <PageHeader :title="roles != 'administrator' && roles != 'superadmin' ? 'My Ledger' : 'Ledger'" :pageTitle="roles != 'administrator' && roles != 'superadmin' ? 'My Property' : 'Payments & Invoice'" :url="roles != 'administrator' && roles != 'superadmin' ? '/my-property/' : '/payments-invoice/' " />
        <div class="row">
            <div class="col-xl-4">
                <div class="sticky-side-div d-print-none">
                    <div class="card">
                        <div class="card-header border-bottom-dashed">
                            <h5 class="card-title mb-0">Payment Details</h5>
                        </div>
                        <div class="p-3 bg-success-subtle" v-if="next_due?.paid_amount > 0">
                            <div class="float-end ms-2">
                                <h6 class="text-success mb-0"><span class="text-body">₱ {{ formatNumber(next_due.paid_amount) }}</span></h6>
                            </div>
                            <h6 class="mb-0 text-success text-uppercase">Balance from the last payment:</h6>
                        </div>
                        <div class="card-header bg-light-subtle border-bottom-dashed" v-if="roles == 'administrator' || roles == 'superadmin' && next_due != null">
                            <AlertMsg v-if="msg" class="col-md-12" :type="'success'" :msg="message" />
                            <AlertMsg v-if="form.errors.amount" class="col-md-12" :type="'danger'" :msg="form.errors.amount" />
                            <div class="hstack gap-3 px-3 mx-n3">
                                <div class="input-group">
                                    <label class="input-group-text fs-18">Amount</label>
                                    <input type="text" v-model="inputAmount" class="form-control form-control-lg" :class="{ 'is-invalid': errors.amount }" placeholder="0" @input="formatInputAmount">
                                    <!-- <div class="invalid-feedback">The land name is required</div> -->
                                </div>
                                <!-- <button type="button" class="btn btn-primary w-xs btn-lg">Pay</button> -->
                                <button type="button" class="btn btn-success btn-load w-xs btn-lg" @click="paid()" :disabled="form.processing ? 'disabled' : false">
                                    <span class="d-flex align-items-center">
                                        <span class="spinner-border flex-shrink-0" v-if="form.processing">
                                            <span class="visually-hidden">Loading...</span>
                                        </span>
                                        <span class="flex-grow-1 ms-2">
                                            Pay
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </div>                    
                        <div class="card-body pt-2">                                                       
                            <div class="table-responsive">
                                <table class="table table-borderless mb-0">
                                    <tbody>
                                        <tr v-if="property.per_sqm_price > 0">
                                            <td>
                                                <p class="text-muted mb-2 text-uppercase fw-semibold">
                                                    Price Per SQ M:
                                                </p>
                                            </td>
                                            <td class="text-end">₱ {{ formatNumber(property.per_sqm_price) }} x {{ property.lot.size }} sq m</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="text-muted mb-2 text-uppercase fw-semibold">
                                                    Property Price:
                                                </p>
                                            </td>
                                            <td class="text-end">₱ {{ formatNumber(property.total_price) }}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="text-muted mb-2 text-uppercase fw-semibold">
                                                   Terms:
                                                </p>
                                            </td>
                                            <td class="text-end">{{ property.ledger.terms }} months</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="text-muted mb-2 text-uppercase fw-semibold">
                                                    Reservation Fee:
                                                </p>
                                            </td>
                                            <td class="text-end">- ₱ {{ formatNumber(property.reservation_fee) }}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="text-muted mb-2 text-uppercase fw-semibold">
                                                    Downpayment:
                                                </p>
                                            </td>
                                            <td class="text-end">- ₱ {{ formatNumber(property.ledger.downpayment) }}</td>
                                        </tr>
                                        <tr v-if="property.ledger.interest > 0">
                                            <td>
                                                <p class="text-muted mb-2 text-uppercase fw-semibold">
                                                    Discount:
                                                </p>
                                            </td>
                                            <td class="text-end">{{ formatNumber(property.ledger.discount) }} %</td>
                                        </tr>
                                        <tr v-if="property.ledger.tax > 0">
                                            <td>
                                                <p class="text-muted mb-2 text-uppercase fw-semibold">
                                                    Tax:
                                                </p>
                                            </td>
                                            <td class="text-end">{{ formatNumber(property.ledger.tax) }} %</td>
                                        </tr>
                                        <tr v-if="property.ledger.interest > 0">
                                            <td>
                                                <p class="text-muted mb-2 text-uppercase fw-semibold">
                                                    Interest:
                                                </p>
                                            </td>
                                            <td class="text-end">{{ formatNumber(property.ledger.interest ) }} %</td>
                                        </tr>
                                        <tr class="table-active">
                                            <th>
                                                <p class="text-muted mb-2 text-uppercase fw-semibold">
                                                    Total Amount to Pay:
                                                </p>
                                            </th>
                                            <td class="text-end">
                                                <span class="fw-semibold">
                                                    ₱ {{ formatNumber(property.ledger.total_amount) }}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- end table-responsive -->
                        </div>
                    </div>
                </div>
                <!-- end stickey -->

            </div>
            <div class="col-xl-8">
                <div class="card">
                    <div class="card-header">
                        <div class="hstack gap-2 justify-content-end d-print-none ms-auto">
                            <a href="javascript:window.print()"
                                class="btn btn-outline-success ms-auto waves-effect waves-light"><i
                                    class="ri-printer-line align-bottom me-1"></i> Print</a>                                    
                            <!-- <a href="javascript:window.print()" class="btn btn-success waves-effect waves-light">
                                <i class="ri-download-2-line align-bottom me-1"></i> Download
                            </a> -->
                        </div>
                    </div>
                    <div class="row" id="printable_area">
                            <div class="col-lg-12">
                                <div class="p-4 bg-light">
                                    <div class="float-end">
                                        <h6 class="text-muted">Date : {{ currentDate }}</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="card-body p-4">
                                    <div class="row g-3">
                                        <div class="col-lg-3 col-6">
                                            <p class="text-muted mb-2 text-uppercase fw-semibold">
                                                Invoice No</p>
                                            <h5 class="fs-14 mb-0">#<span id="invoice-no">{{
                                                property.invoice_number }}</span></h5>
                                        </div>
                                        <div class="col-lg-3 col-6" v-if="next_due !=null">
                                            <p class="text-muted mb-2 text-uppercase fw-semibold">
                                                Due Date</p>
                                            <h5 class="fs-14 mb-0"><span id="invoice-date">{{
                                                    property.ledger.ledger_trans.formatted_due_date }}</span></h5>
                                        </div>
                                        <div class="col-lg-3 col-6">
                                            <p class="text-muted mb-2 text-uppercase fw-semibold">
                                                Payment Plan</p>
                                            <h5 id="payment-status" class="fs-14 mb-0">
                                                {{ property.ledger.plan }}
                                            </h5>
                                        </div>
                                        <div class="col-lg-3 col-6">
                                            <p class="text-muted mb-2 text-uppercase fw-semibold">
                                                Total Amount To Pay</p>
                                            <h5 class="fs-14 mb-0">₱ <span id="total-amount">{{
                                                    formatNumber(property.ledger.total_amount)}}</span></h5>
                                        </div>
                                        <div class="col-lg-3 col-6" v-if="next_due == null">
                                            <p class="text-muted mb-2 text-uppercase fw-semibold">
                                                Payment Status</p>
                                            <h5 class="fs-14 mb-0">
                                                <span class="badge bg-success">Fully Paid</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="card-body p-4 border-top border-top-dashed">
                                    <div class="row g-3">
                                        <div class="col-6">
                                            <h6 class="text-muted text-uppercase fw-semibold mb-3">
                                                Property Information</h6>
                                            <p class="fw-medium mb-2" id="shipping-name">Blk
                                                {{ property.lot.block.block_number }}, {{
                                                    property.lot.lot_name }}, </p>
                                            <p class="text-muted mb-1" id="shipping-address-line-1">{{
                                                property.lot.block.phase.project.name }}, {{
                                                    capitalizedString(barangay ? barangay : '')
                                                }}, {{ capitalizedString(municipality ?
                                                    municipality : '') }}, {{
                                                    capitalizedString(province
                                                        ? province : '') }}
                                            </p>
                                            <p class="text-muted mb-1"><span>Category:
                                                </span><span id="shipping-phone-no">{{
                                                    property.lot.category }}</span></p>
                                            <p class="text-muted mb-1">
                                                <span>
                                                    Type:
                                                </span>
                                                <span id="shipping-phone-no">{{
                                                    property.lot.type }}
                                                </span>
                                            </p>
                                            <p class="text-muted mb-1">
                                                <span>
                                                    Size:
                                                </span>
                                                <span id="shipping-phone-no">{{
                                                    property.lot.size }} sq m
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12" v-if="next_due !=null">
                                <div class="row p-4">
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="p-2 border border-success border-dashed rounded text-center">
                                            <div>
                                                <p class="text-success fw-medium mb-1">Next Due</p>
                                                <h5 class="fs-16 text-success mb-0">
                                                    {{ formatDueDate(next_due.due_date) }}</h5>
                                            </div>
                                        
                                        </div>
                                    </div>
                                    <!-- end col -->
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="p-2 border border-dashed rounded text-center">
                                            <div>
                                                <p class="text-muted fw-medium mb-1">Amount to Pay</p>
                                                <h5 class="fs-16 mb-0">₱ {{formatNumber(next_due.monthly_payment)}}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end col -->
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="p-2 border border-dashed rounded text-center">
                                            <div>
                                                <p class="text-muted fw-medium mb-1">Total Paid</p>
                                                <h5 class="fs-16 mb-0">₱ {{ formatNumber(total_paid) }}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="p-2 border border-dashed rounded text-center">
                                            <div>
                                                <p class="text-muted fw-medium mb-1">Remaining Balance</p>
                                                <h5 class="fs-16 mb-0">₱ {{formatNumber(property.ledger.total_amount - total_paid)}}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end col -->
                                </div>
                            </div>
                        <div class="col-lg-12" v-if="property.ledger.ledger_trans_list.length">
                            <div class="card-body p-4">
                                <div class="table-responsive mt-4">
                                    <table class="table table-borderless text-center table-nowrap align-middle mb-0">
                                        <thead>
                                            <tr class="table-active">
                                                <th scope="col">
                                                    Terms
                                                </th>
                                                <th scope="col">
                                                    Due Date
                                                </th>
                                                <th scope="col">
                                                    Beginning Balance
                                                </th>
                                                <th scope="col">
                                                    Monthly Payment
                                                </th>
                                                <th scope="col" class="text-end">
                                                    Ending Balance
                                                </th>
                                                <th scope="col" class="text-end">
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody id="products-list"
                                            v-for="(data, index) in property.ledger.ledger_trans_list" :key="index">
                                            <tr>
                                                <th scope="row">
                                                    {{ data.terms }}
                                                </th>
                                                <td>
                                                    {{ data.due_date }}
                                                </td>
                                                <td>
                                                    ₱ {{ formatNumber(data ? data.begin_balance : 0) }}
                                                </td>
                                                <td>
                                                    ₱ {{ formatNumber(data.monthly_payment) }}
                                                </td>
                                                <td class="text-end">
                                                    ₱ {{ formatNumber(data.end_balance) }}
                                                </td>
                                                <td class="text-end">
                                                    <span class="badge text-uppercase" :class="{'bg-warning-subtle text-warning': data.payment_status === 'Unpaid', 'bg-success-subtle text-success': data.payment_status == 'Paid'}">{{ data.payment_status }}</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
import { Link, Head, router, useForm } from "@inertiajs/vue3";
import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";
import { ref, onMounted } from "vue";
import AlertMsg from '../../Components/AlertMsg.vue';

const inputAmount = ref('');
const total_paid = ref(0);
const msg = ref(false);

let props = defineProps({
    property: Object,
    next_due: Object,
    roles: String,
    message: String,
    errors: Object,
});

let {
    region,
    province,
    municipality,
    barangay,
    address
} = props.property.lot.block.phase.project.land

let form = useForm({
    invoice_number: props.property.invoice_number,
    amount: 0,
})

const formatInputAmount = () => {
    form.amount = inputAmount.value.replace(/[^\d.]/g, '');
    inputAmount.value = formatNumber(inputAmount.value.replace(/[^\d.]/g, ''));
}

const formatNumber = (number) => {

    const formattedNumber = Number(number).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return Number.isInteger(Number(number)) ?
        formattedNumber.replace(/\.\d+$/, "") :
        formattedNumber;
};

const capitalizedString = (inputString) => {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
};

const statusClass = (status) => {
    // Define class mappings based on status
    if (status == 'Reserved') {
        return 'bg-warning';
    } else if (status == 'Installment') {
        return 'bg-info';
    } else if (status == 'Fullpayment') {
        return 'bg-success'
    }
};

const formatDueDate = (dueDate) => {
    // Convert dueDate to a JavaScript Date object
    const date = new Date(dueDate);
    
    // Format the date using built-in JavaScript methods
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    
    // Construct the formatted string
    return `${day} ${month}, ${year}`;
}

const currentDate = new Date().toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

const paid = () =>{
    
    form.post("/my-ledger/"+props.next_due.property_ledger_id+"/update", {
        preserveScroll: true,
        onSuccess: () => {
            inputAmount.value = 0;
            form.amount = 0;
            total_paid.value = (props.property.ledger.total_amount - props.next_due.begin_balance) + + props.next_due.paid_amount;
            
            //msg.value = true;
            if (props.message !== null) {
                msg.value = true;

                setTimeout(() => {
                    msg.value = false;
                }, 60000);
            }
        },
        onError: (data) =>{
           
            if (data.error !== null) {
                msg.value = false;
                form.errors.amount = data.error;

                setTimeout(() => {
                    msg.value = false;
                    form.errors.amount = false;
                }, 10000);
            }
        }
    });
}

onMounted(() => {
    total_paid.value = (props.property.ledger.total_amount - (props.next_due ? props.next_due.begin_balance : 0)) + + (props.next_due ? props.next_due.paid_amount : 0);
})

</script>