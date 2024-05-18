<template>
    <Layout>

        <Head title="Genereate Ledger">
            <meta name="viewport" content="your content" />
        </Head>
        <PageHeader title="Genereate Ledger" pageTitle="Property & Invoice" />
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body checkout-tab">
                        <form action="#">
                            <div class="step-arrow-nav mt-n3 mx-n3 mb-3 d-print-none">
                                <ul class="nav nav-pills nav-justified custom-nav" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link fs-15 p-3 active" id="pills-payment-info-tab"
                                            data-bs-toggle="pill" data-bs-target="#payment-info-tab" type="button">
                                            <i
                                                class="ri-bank-card-line fs-16 p-2 bg-primary-subtle text-primary rounded-circle align-middle me-2"></i>
                                            Payment Info
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link fs-15 p-3" id="pills-review-info-tab"
                                            data-bs-toggle="pill" data-bs-target="#review-info-tab" type="button">
                                            <i
                                                class="ri-file-text-line fs-16 p-2 bg-primary-subtle text-primary rounded-circle align-middle me-2"></i>
                                            Review Information
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="payment-info-tab" role="tabpanel">
                                    <div>
                                        <h5 class="mb-1">Payment Selection</h5>
                                        <p class="text-muted mb-4">
                                            Please select and enter your billing information
                                        </p>
                                    </div>
                                    <div class="row g-4">
                                        <div class="col-lg-6 col-sm-6">
                                            <div data-bs-toggle="collapse" aria-expanded="true"
                                                @click="toggleCollapse(1)">
                                                <div class="form-check card-radio">
                                                    <input id="installment" name="paymentMethod" type="radio"
                                                        class="form-check-input" checked value="Installment" v-model="form.method"/>
                                                    <label class="form-check-label" for="installment">
                                                        <span class="fs-16 text-muted me-2"><i
                                                                class="ri-reserved-line align-bottom"></i></span>
                                                        <span class="fs-14 text-wrap">Installment</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-sm-6">
                                            <div data-bs-toggle="collapse" @click="toggleCollapse(2)">
                                                <div class="form-check card-radio">
                                                    <input id="fullpayment" name="paymentMethod" type="radio"
                                                        class="form-check-input" value="Fullpayment" v-model="form.method" />
                                                    <label class="form-check-label" for="fullpayment">
                                                        <span class="fs-16 text-muted me-2"><i
                                                                class="ri-bank-card-fill align-bottom"></i></span>
                                                        <span class="fs-14 text-wrap">Full Payment</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="collapse" :class="{ show: activeCollapse === 1 }">
                                        <div class="card p-4 border shadow-none mb-0 mt-4">
                                            <div class="row gy-3">
                                                <div class="col-md-4">
                                                    <label class="form-label">Property Price
                                                        (₱)</label>
                                                    <input type="text" v-model="formattedPrice"
                                                        class="form-control form-control-lg" placeholder="Enter Price"
                                                        disabled />
                                                </div>
                                                <div class="col-md-2">
                                                    <label class="form-label">Down payment (₱)</label>
                                                    <input type="text" class="form-control form-control-lg"
                                                        placeholder="0" v-model="inputValue"
                                                        :class="{ 'is-invalid': form.errors.downpayment }"
                                                        @input="formatInput" />
                                                    <div class="invalid-feedback">The downpayment is required</div>
                                                </div>
                                               
                                                <div class="col-md-2">
                                                    <label class="form-label">Discount(%)</label>
                                                    <div class="input-group">
                                                        <div class="input-group-text">
                                                            %
                                                        </div>
                                                        <input type="number" v-model="form.discount
                                                            " class="form-control form-control-lg"
                                                            placeholder="Enter Discount" @input="calculateResult" />
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <label class="form-label">Tax(%)</label>
                                                    <div class="input-group">
                                                        <div class="input-group-text">
                                                            %
                                                        </div>
                                                        <input type="number" v-model="form.tax"
                                                            class="form-control form-control-lg"
                                                            placeholder="Enter Tax Percentage"
                                                            @input="calculateResult" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-4">
                                                <div class="col-lg-3">
                                                    <div class="mb-3 mb-lg-0">
                                                        <label for="start_date" class="form-label">Start Date</label>
                                                        <flatPickr v-model="form.start_date " class="form-control form-control-lg" :config="flatpickrOptions"></flatPickr>
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <label class="form-label">Term (Months)</label>
                                                    <input type="text" v-model="form.terms"
                                                        class="form-control form-control-lg" placeholder="Enter Months"
                                                        :class="{ 'is-invalid': form.errors.terms }" v-mask="'###'" />
                                                    <div class="invalid-feedback">The terms is required</div>
                                                </div>
                                            </div>
                                            <div class="row mt-4">
                                                <div class="mt-0">
                                                    <h5 class="fs-14 mb-3">
                                                        Payment Plan
                                                    </h5>
                                                    <div class="row g-4">
                                                        <div class="col-lg-6">
                                                            <div class="form-check card-radio">
                                                                <input id="plan1" name="plan" v-model="form.plan
                                                                    " type="radio"
                                                                    class="form-check-input" value="Fixed"
                                                                    @change="calculateResult" />
                                                                <label class="form-check-label" for="plan1">
                                                                    <span
                                                                        class="fs-20 float-end mt-2 text-wrap d-block fw-semibold">Fixed
                                                                        Plan</span>
                                                                    <span class="fs-14 mb-1 text-wrap d-block">Fixed
                                                                        Payment</span>
                                                                    <span
                                                                        class="text-muted fw-normal text-wrap d-block">Fixed
                                                                        Monthly
                                                                        Amortization
                                                                        Plan</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-check card-radio">
                                                                <input id="plan2" name="plan" v-model="form.plan
                                                                    " type="radio"
                                                                    class="form-check-input" value="Graduated"
                                                                    @change="calculateResult" />
                                                                <label class="form-check-label" for="plan2">
                                                                    <span
                                                                        class="fs-20 float-end mt-2 text-wrap d-block fw-semibold">Graduated
                                                                        Plan</span>
                                                                    <span class="fs-14 mb-1 text-wrap d-block">Graduated
                                                                        Payment</span>
                                                                    <span
                                                                        class="text-muted fw-normal text-wrap d-block">Graduated
                                                                        Payment
                                                                        Plan</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-2 pt-4">
                                                    <button type="button" @click="calculateResult"
                                                        class="btn btn-success waves-effect waves-light">
                                                        <i class="ri-calculator-line align-bottom me-1"></i>
                                                        Calculate
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="row mt-2 border-top border-top-dashed" v-if="showSummary">
                                                <div class="col-md-6 mb-4">
                                                    <h5 class="mt-4 mb-3">
                                                        Summary:
                                                    </h5>
                                                    <div class="table-responsive">
                                                        <table
                                                            class="table table-borderless table-nowrap align-middle mb-0 ms-auto">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        Propety Price :
                                                                    </td>
                                                                    <td class="text-end">
                                                                        ₱ {{ formatNumber(form.price) }}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        Reservation Fee :
                                                                    </td>
                                                                    <td class="text-end">
                                                                        - ₱ {{ formatNumber(form.reservation_fee) }}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        Downpayment :
                                                                    </td>
                                                                    <td class="text-end">
                                                                        - ₱ {{ formatNumber(form.downpayment) }}
                                                                    </td>
                                                                </tr>
                                                                <tr v-if="
                                                                    form.discount !=
                                                                    0
                                                                ">
                                                                    <td>
                                                                        Discount ({{ form.discount }}%):
                                                                    </td>
                                                                    <td class="text-end">
                                                                        - ₱ {{ formatNumber(computedDiscount) }}
                                                                    </td>
                                                                </tr>
                                                                <tr v-if="
                                                                    form.interest !=
                                                                    0
                                                                ">
                                                                    <td>
                                                                        Interest Rate :
                                                                    </td>
                                                                    <td class="text-end">
                                                                        {{ form.interest }}%
                                                                    </td>
                                                                </tr>
                                                                <tr v-if="
                                                                    form.tax !=
                                                                    0
                                                                ">
                                                                    <td>
                                                                        Tax :
                                                                    </td>
                                                                    <td class="text-end">
                                                                        {{ form.tax }}%
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        Total Amount:
                                                                    </td>
                                                                    <td class="text-end">
                                                                        ₱ {{ formatNumber(totalRes) }}
                                                                    </td>
                                                                </tr>
                                                                <tr class="table-active" v-if="
                                                                    form.plan ==
                                                                    'Fixed'
                                                                ">
                                                                    <th class="fs-4">
                                                                        Monthly Amortization (PHP) :
                                                                    </th>
                                                                    <td class="text-end">
                                                                        <span class="fw-semibold fs-4" id="cart-total">
                                                                            ₱
                                                                            {{
                                                                                formatNumber(
                                                                                    montlyAmortization
                                                                                )
                                                                            }}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr class="table-active" v-else>
                                                                    <th class="fs-4">
                                                                        Started Amortization (PHP) :
                                                                    </th>
                                                                    <td class="text-end">
                                                                        <span class="fw-semibold fs-4" id="cart-total">
                                                                            ₱
                                                                            {{
                                                                                formatNumber(
                                                                                    started
                                                                                )
                                                                            }}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="table-responsive mt-4" v-if="showSummary">
                                                <table
                                                    class="table table-borderless text-center table-nowrap align-middle mb-0">
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
                                                        </tr>
                                                    </thead>
                                                    <tbody id="products-list" v-if="
                                                        ledgerData.length >
                                                        0
                                                    " v-for="(
                                                                            data, index
                                                                        ) in ledgerData" :key="index">
                                                        <tr>
                                                            <th scope="row">
                                                                {{ index + 1 }}
                                                            </th>
                                                            <td>
                                                                {{ data.dueDate }}
                                                            </td>
                                                            <td>
                                                                ₱ {{ formatNumber(data.begin) }}
                                                            </td>
                                                            <td>
                                                                ₱ {{ formatNumber(data.amortization) }}
                                                            </td>
                                                            <td class="text-end">
                                                                ₱ {{ formatNumber(data.end) }}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <!--end table-->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="collapse" :class="{ show: activeCollapse == 2}">
                                        <div class="card p-4 border shadow-none mb-0 mt-4">
                                            <div class="row gy-3">                   
                                                <div class="col-md-3">
                                                    <label class="form-label">Property Price
                                                        (₱)</label>
                                                    <input type="text" v-model="formattedPrice"
                                                        class="form-control form-control-lg" placeholder="Enter Price"
                                                        disabled />
                                                </div>
                                                <div class="col-md-2">
                                                    <label class="form-label">Discount(%)</label>
                                                    <div class="input-group">
                                                        <div class="input-group-text">
                                                            %
                                                        </div>
                                                        <input type="number" v-model="formFP.discount
                                                            " class="form-control form-control-lg"
                                                            placeholder="%" @input="calculateFP" />
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <label class="form-label">Tax(%)</label>
                                                    <div class="input-group">
                                                        <div class="input-group-text">
                                                            %
                                                        </div>
                                                        <input type="number" v-model="formFP.tax"
                                                            class="form-control form-control-lg"
                                                            placeholder="%"
                                                            @input="calculateFP" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-2 pt-2">
                                                    <button type="button" @click="calculateFP"
                                                        class="btn btn-success waves-effect waves-light">
                                                        <i class="ri-calculator-line align-bottom me-1"></i>
                                                        Calculate
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="row mt-2 border-top border-top-dashed" v-if="showSummaryFP">
                                                <div class="col-md-6 mb-4">
                                                    <h5 class="mt-4 mb-3">
                                                        Summary:
                                                    </h5>
                                                    <div class="table-responsive">
                                                        <table
                                                            class="table table-borderless table-nowrap align-middle mb-0 ms-auto">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        Propety Price :
                                                                    </td>
                                                                    <td class="text-end">
                                                                        ₱ {{ formatNumber(form.price) }}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        Reservation Fee :
                                                                    </td>
                                                                    <td class="text-end">
                                                                        - ₱ {{ formatNumber(form.reservation_fee) }}
                                                                    </td>
                                                                </tr>
                                                                <tr v-if="
                                                                    formFP.discount !=
                                                                    0
                                                                ">
                                                                    <td>
                                                                        Discount ({{ formFP.discount }}%):
                                                                    </td>
                                                                    <td class="text-end">
                                                                        - ₱ {{ formatNumber(computedDiscountFP) }}
                                                                    </td>
                                                                </tr>
                                                                <tr v-if="
                                                                    formFP.tax !=
                                                                    0
                                                                ">
                                                                    <td>
                                                                        Tax :
                                                                    </td>
                                                                    <td class="text-end">
                                                                        {{ formFP.tax }}%
                                                                    </td>
                                                                </tr>
                                                                <tr class="table-active">
                                                                    <th class="fs-4">
                                                                        Total Amount: (PHP) :
                                                                    </th>
                                                                    <td class="text-end">
                                                                        <span class="fw-semibold fs-4" id="cart-total">
                                                                            ₱ {{ formatNumber(totalResFP) }}
                                                                        </span>
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-start gap-3 mt-4">
                                        <button type="button"
                                            class="btn btn-outline-success btn-label right ms-auto nexttab"
                                            data-nexttab="pills-review-info-tab">
                                            <i class="ri-file-text-line label-icon align-middle fs-16 ms-2"></i>Continue
                                            to Review Info
                                        </button>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="review-info-tab" role="tabpanel">
                                    <div v-if="showSummary" class="card bg-body-tertiary p-4 shadow-none">
                                        <div class="row justify-content-center">
                                            <div class="col-xxl-9">
                                                <div class="card">
                                                    <div class="row" id="printable_area">
                                                        <div class="col-lg-12">
                                                            <div class="card-header border-bottom-dashed p-4">
                                                                <div class="d-flex">
                                                                    <div class="flex-grow-1">
                                                                        <img src="/image/logo-dark.png"
                                                                            class="card-logo" alt="logo dark"
                                                                            height="80">
                                                                        <div class="mt-sm-5 mt-4">
                                                                            <h6
                                                                                class="text-muted text-uppercase fw-semibold">
                                                                                Address</h6>
                                                                            <p class="text-muted mb-1"
                                                                                id="address-details">Tarlac, Philippines
                                                                            </p>
                                                                            <p class="text-muted mb-0" id="zip-code">
                                                                                <span>Zip-code:</span> 2300
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex-shrink-0 mt-sm-0 mt-3">
                                                                        <h6><span
                                                                                class="text-muted fw-normal">Email:</span><span
                                                                                id="email">
                                                                                info@3dgrealtydevelopment.com</span>
                                                                        </h6>
                                                                        <h6><span
                                                                                class="text-muted fw-normal">Website:</span>
                                                                            <a href="https://3dgrealtydevelopment.com/"
                                                                                class="link-primary" target="_blank"
                                                                                id="website">www.3dgrealtydevelopment.com</a>
                                                                        </h6>
                                                                        <h6 class="mb-0"><span
                                                                                class="text-muted fw-normal">Contact No:
                                                                            </span><span id="contact-no"> +(63) 994 387
                                                                                5908</span></h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!--end card-header-->
                                                        </div>
                                                        <!--end col-->
                                                        <div class="col-lg-12">
                                                            <div class="card-body p-4">
                                                                <div class="row g-3">
                                                                    <div class="col-lg-3 col-6">
                                                                        <p
                                                                            class="text-muted mb-2 text-uppercase fw-semibold">
                                                                            Invoice No</p>
                                                                        <h5 class="fs-14 mb-0">#<span id="invoice-no">{{
                                                                            property.invoice_number }}</span></h5>
                                                                    </div>
                                                                    <!--end col-->
                                                                    <div class="col-lg-3 col-6">
                                                                        <p
                                                                            class="text-muted mb-2 text-uppercase fw-semibold">
                                                                            Date</p>
                                                                        <h5 class="fs-14 mb-0"><span
                                                                                id="invoice-date">{{ formattedDate
                                                                                }}</span></h5>
                                                                    </div>
                                                                    <!--end col-->
                                                                    <div class="col-lg-3 col-6">
                                                                        <p
                                                                            class="text-muted mb-2 text-uppercase fw-semibold">
                                                                            Payment Plan</p>
                                                                        <h5 id="payment-status" class="fs-14 mb-0">
                                                                            {{ form.plan }}
                                                                        </h5>
                                                                    </div>
                                                                    <!--end col-->
                                                                    <div class="col-lg-3 col-6">
                                                                        <p
                                                                            class="text-muted mb-2 text-uppercase fw-semibold">
                                                                            Total Amount</p>
                                                                        <h5 class="fs-14 mb-0">₱ <span
                                                                                id="total-amount">{{
                                                                                    formatNumber(totalRes) }}</span></h5>
                                                                    </div>
                                                                    <!--end col-->
                                                                </div>
                                                                <!--end row-->
                                                            </div>
                                                            <!--end card-body-->
                                                        </div>
                                                        <!--end col-->
                                                        <div class="col-lg-12">
                                                            <div class="card-body p-4 border-top border-top-dashed">
                                                                <div class="row g-3">
                                                                    <div class="col-6">
                                                                        <h6
                                                                            class="text-muted text-uppercase fw-semibold mb-3">
                                                                            Client Information</h6>
                                                                        <p class="fw-medium mb-2" id="billing-name">{{
                                                                            property.client.fname }} {{
                                                                            property.client.lname }}</p>
                                                                        <p class="text-muted mb-1"
                                                                            id="billing-address-line-1">{{
                                                                            property.client.address }}</p>
                                                                        <p class="text-muted mb-1"><span>Phone:
                                                                                +</span><span id="billing-phone-no">{{
                                                                                    property.client.phone }}</span></p>
                                                                        <p class="text-muted mb-0"><span>Email:
                                                                            </span><span id="billing-tax-no">{{
                                                                                property.client.email }}</span> </p>
                                                                    </div>
                                                                    <!--end col-->
                                                                    <div class="col-6">
                                                                        <h6
                                                                            class="text-muted text-uppercase fw-semibold mb-3">
                                                                            Property Information</h6>
                                                                        <p class="fw-medium mb-2" id="shipping-name">Blk
                                                                            {{ property.lot.block.block_number }}, {{
                                                                            property.lot.lot_name }}, </p>
                                                                        <p class="text-muted mb-1"
                                                                            id="shipping-address-line-1">{{
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
                                                                    </div>
                                                                    <!--end col-->
                                                                </div>
                                                                <!--end row-->
                                                            </div>
                                                            <!--end card-body-->
                                                        </div>
                                                        <!--end col-->
                                                        <div class="col-lg-12">
                                                            <div class="card-body p-4">
                                                                <div class="table-responsive mt-4">
                                                                    <table
                                                                        class="table table-borderless text-center table-nowrap align-middle mb-0">
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
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody id="products-list" v-if="ledgerData.length >0" v-for="(data, index) in ledgerData" :key="index">
                                                                            <tr>
                                                                                <th scope="row">
                                                                                    {{ index + 1 }}
                                                                                </th>
                                                                                <td>
                                                                                    {{ data.dueDate }}
                                                                                </td>
                                                                                <td>
                                                                                    ₱ {{ formatNumber(data.begin) }}
                                                                                </td>
                                                                                <td>
                                                                                    ₱ {{ formatNumber(data.amortization
                                                                                                                                                            ) }}
                                                                                </td>
                                                                                <td class="text-end">
                                                                                    ₱ {{ formatNumber(data.end) }}
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <!--end table-->
                                                                </div>
                                                                <div class="border-top border-top-dashed mt-2">
                                                                    <div class="table-responsive">
                                                                        <table
                                                                            class="table table-borderless table-nowrap align-middle mb-0 ms-auto"
                                                                            style="width:250px">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>
                                                                                        Propety Price :
                                                                                    </td>
                                                                                    <td class="text-end">
                                                                                        ₱ {{ formatNumber(form.price)
                                                                                        }}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        Reservation Fee :
                                                                                    </td>
                                                                                    <td class="text-end">
                                                                                        - ₱ {{ formatNumber(
                                                                                        form.reservation_fee ) }}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        Downpayment :
                                                                                    </td>
                                                                                    <td class="text-end">
                                                                                        - ₱ {{ formatNumber(
                                                                                        form.downpayment ) }}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr v-if="
                                                                                    form.discount !=
                                                                                    0
                                                                                ">
                                                                                    <td>
                                                                                        Discount ({{ form.discount }}%):
                                                                                    </td>
                                                                                    <td class="text-end">
                                                                                        - ₱ {{ formatNumber(
                                                                                        computedDiscount ) }}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr v-if="
                                                                                    form.interest !=
                                                                                    0
                                                                                ">
                                                                                    <td>
                                                                                        Interest Rate :
                                                                                    </td>
                                                                                    <td class="text-end">
                                                                                        {{ form.interest }}%
                                                                                    </td>
                                                                                </tr>
                                                                                <tr v-if="
                                                                                    form.tax !=
                                                                                    0
                                                                                ">
                                                                                    <td>
                                                                                        Tax :
                                                                                    </td>
                                                                                    <td class="text-end">
                                                                                        {{ form.tax }}%
                                                                                    </td>
                                                                                </tr>
                                                                                <tr class="table-active">
                                                                                    <th class="fs-4">
                                                                                        Total Amount: (PHP) :
                                                                                    </th>
                                                                                    <td class="text-end">
                                                                                        <span class="fw-semibold fs-4" id="cart-total">
                                                                                            ₱ {{formatNumber(totalRes)}}
                                                                                        </span>
                                                                                    </td>
                                                                                </tr>                                                                               
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <!--end table-->
                                                                </div>                                                               
                                                                <div class="mt-4">
                                                                    <div class="alert alert-dark">
                                                                        <p class="mb-0"><span
                                                                                class="fw-semibold">NOTES:</span>
                                                                            <span id="note"> Please pay your downpayment from receipt of invoice.
                                                                                To be paid by cheque or
                                                                                credit card or direct payment.                                                          
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!--end card-body-->
                                                        </div>
                                                        <!--end col-->
                                                    </div>
                                                    <!--end row-->
                                                </div>
                                                <!--end card-->
                                            </div>
                                            <!--end col-->
                                        </div>
                                    </div>
                                    <div v-else-if="showSummaryFP" class="card bg-body-tertiary p-4 shadow-none">
                                        <div class="row justify-content-center">
                                            <div class="col-xxl-9">
                                                <div class="card">
                                                    <div class="row" id="printable_area">
                                                        <div class="col-lg-12">
                                                            <div class="card-header border-bottom-dashed p-4">
                                                                <div class="d-flex">
                                                                    <div class="flex-grow-1">
                                                                        <img src="/image/logo-dark.png"
                                                                            class="card-logo" alt="logo dark"
                                                                            height="80">
                                                                        <div class="mt-sm-5 mt-4">
                                                                            <h6
                                                                                class="text-muted text-uppercase fw-semibold">
                                                                                Address</h6>
                                                                            <p class="text-muted mb-1"
                                                                                id="address-details">Tarlac, Philippines
                                                                            </p>
                                                                            <p class="text-muted mb-0" id="zip-code">
                                                                                <span>Zip-code:</span> 2300
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex-shrink-0 mt-sm-0 mt-3">
                                                                        <h6><span
                                                                                class="text-muted fw-normal">Email:</span><span
                                                                                id="email">
                                                                                info@3dgrealtydevelopment.com</span>
                                                                        </h6>
                                                                        <h6><span
                                                                                class="text-muted fw-normal">Website:</span>
                                                                            <a href="https://3dgrealtydevelopment.com/"
                                                                                class="link-primary" target="_blank"
                                                                                id="website">www.3dgrealtydevelopment.com</a>
                                                                        </h6>
                                                                        <h6 class="mb-0"><span
                                                                                class="text-muted fw-normal">Contact No:
                                                                            </span><span id="contact-no"> +(63) 994 387
                                                                                5908</span></h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!--end card-header-->
                                                        </div>
                                                        <!--end col-->
                                                        <div class="col-lg-12">
                                                            <div class="card-body p-4">
                                                                <div class="row g-3">
                                                                    <div class="col-lg-3 col-6">
                                                                        <p
                                                                            class="text-muted mb-2 text-uppercase fw-semibold">
                                                                            Invoice No</p>
                                                                        <h5 class="fs-14 mb-0">#<span id="invoice-no">{{
                                                                            property.invoice_number }}</span></h5>
                                                                    </div>
                                                                    <!--end col-->
                                                                    <div class="col-lg-3 col-6">
                                                                        <p
                                                                            class="text-muted mb-2 text-uppercase fw-semibold">
                                                                            Date</p>
                                                                        <h5 class="fs-14 mb-0"><span
                                                                                id="invoice-date">{{ formattedDate
                                                                                }}</span></h5>
                                                                    </div>
                                                                    <!--end col-->
                                                                    <div class="col-lg-3 col-6">
                                                                        <p
                                                                            class="text-muted mb-2 text-uppercase fw-semibold">
                                                                            Payment Plan</p>
                                                                        <h5 id="payment-status" class="fs-14 mb-0">
                                                                            {{ form.plan }}
                                                                        </h5>
                                                                    </div>
                                                                    <!--end col-->
                                                                    <div class="col-lg-3 col-6">
                                                                        <p
                                                                            class="text-muted mb-2 text-uppercase fw-semibold">
                                                                            Total Amount</p>
                                                                        <h5 class="fs-14 mb-0">₱ <span
                                                                                id="total-amount">{{
                                                                                    formatNumber(totalRes) }}</span></h5>
                                                                    </div>
                                                                    <!--end col-->
                                                                </div>
                                                                <!--end row-->
                                                            </div>
                                                            <!--end card-body-->
                                                        </div>
                                                        <!--end col-->
                                                        <div class="col-lg-12">
                                                            <div class="card-body p-4 border-top border-top-dashed">
                                                                <div class="row g-3">
                                                                    <div class="col-6">
                                                                        <h6
                                                                            class="text-muted text-uppercase fw-semibold mb-3">
                                                                            Client Information</h6>
                                                                        <p class="fw-medium mb-2" id="billing-name">{{
                                                                            property.client.fname }} {{
                                                                            property.client.lname }}</p>
                                                                        <p class="text-muted mb-1"
                                                                            id="billing-address-line-1">{{
                                                                            property.client.address }}</p>
                                                                        <p class="text-muted mb-1"><span>Phone:
                                                                                +</span><span id="billing-phone-no">{{
                                                                                    property.client.phone }}</span></p>
                                                                        <p class="text-muted mb-0"><span>Email:
                                                                            </span><span id="billing-tax-no">{{
                                                                                property.client.email }}</span> </p>
                                                                    </div>
                                                                    <!--end col-->
                                                                    <div class="col-6">
                                                                        <h6
                                                                            class="text-muted text-uppercase fw-semibold mb-3">
                                                                            Property Information</h6>
                                                                        <p class="fw-medium mb-2" id="shipping-name">Blk
                                                                            {{ property.lot.block.block_number }}, {{
                                                                            property.lot.lot_name }}, </p>
                                                                        <p class="text-muted mb-1"
                                                                            id="shipping-address-line-1">{{
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
                                                                    </div>
                                                                    <!--end col-->
                                                                </div>
                                                                <!--end row-->
                                                            </div>
                                                            <!--end card-body-->
                                                        </div>
                                                        <!--end col-->
                                                        <div class="col-lg-12">
                                                            <div class="card-body p-4">
                                                                <div class="border-top border-top-dashed mt-2">
                                                                    <div class="table-responsive">
                                                                        <table
                                                                            class="table table-borderless table-nowrap align-middle mb-0 ms-auto"
                                                                            style="width:250px">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>
                                                                                        Propety Price :
                                                                                    </td>
                                                                                    <td class="text-end">
                                                                                        ₱ {{ formatNumber(formFP.price)
                                                                                        }}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        Reservation Fee :
                                                                                    </td>
                                                                                    <td class="text-end">
                                                                                        - ₱ {{ formatNumber(
                                                                                        formFP.reservation_fee ) }}
                                                                                    </td>
                                                                                </tr>                                                                          
                                                                                <tr v-if="
                                                                                    formFP.discount !=
                                                                                    0
                                                                                ">
                                                                                    <td>
                                                                                        Discount ({{ formFP.discount }}%):
                                                                                    </td>
                                                                                    <td class="text-end">
                                                                                        - ₱ {{ formatNumber(
                                                                                        computedDiscountFP ) }}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr v-if="
                                                                                    form.tax !=
                                                                                    0
                                                                                ">
                                                                                    <td>
                                                                                        Tax :
                                                                                    </td>
                                                                                    <td class="text-end">
                                                                                        {{ form.tax }}%
                                                                                    </td>
                                                                                </tr>
                                                                                <tr class="table-active">
                                                                                    <th class="fs-4">
                                                                                        Total Amount: (PHP) :
                                                                                    </th>
                                                                                    <td class="text-end">
                                                                                        <span class="fw-semibold fs-4" id="cart-total">
                                                                                            ₱ {{formatNumber(totalResFP)}}
                                                                                        </span>
                                                                                    </td>
                                                                                </tr>                                                                               
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <!--end table-->
                                                                </div>                                                               
                                                                <div class="mt-4">
                                                                    <div class="alert alert-dark">
                                                                        <p class="mb-0"><span
                                                                                class="fw-semibold">NOTES:</span>
                                                                            <span id="note"> Please pay your downpayment from receipt of invoice.
                                                                                To be paid by cheque or
                                                                                credit card or direct payment.                                                          
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!--end card-body-->
                                                        </div>
                                                        <!--end col-->
                                                    </div>
                                                    <!--end row-->
                                                </div>
                                                <!--end card-->
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <AlertMsg class="text-center" :type="'danger'"
                                            :msg="'Please complete the payment information!'" />
                                    </div>
                                    <div class="d-flex align-items-start gap-3 mt-4 d-print-none">
                                        <button type="button" class="btn btn-light btn-label previestab"
                                            data-previous="pills-payment-info-tab">
                                            <i class="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>Back to
                                            Payment Info
                                        </button>
                                        <div class="hstack gap-2 justify-content-end d-print-none ms-auto" v-if="showSummary || showSummaryFP">
                                            <a href="javascript:window.print()"
                                                class="btn btn-outline-success ms-auto waves-effect waves-light"><i
                                                    class="ri-printer-line align-bottom me-1"></i> Print</a>
                                            <!-- <button type="button" class="btn btn-primary btn-label right"
                                                @click="submit">
                                                <i class="ri-save-line label-icon align-middle fs-16 ms-2"></i>Submit
                                            </button> -->
                                            <button type="button" class="btn btn-success btn-load" @click="publish">
                                                <span class="d-flex align-items-center">
                                                    <span class="spinner-border flex-shrink-0" v-if="form.processing">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </span>
                                                    <span class="flex-grow-1 ms-2">
                                                        Save
                                                    </span>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
<script setup>
import {
    Link,
    Head,
    useForm,
    router
} from "@inertiajs/vue3";
import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import {
    ref,
    onMounted,
    watch,
    computed
} from "vue";
import debounce from "lodash/debounce";
import AlertMsg from '../../Components/AlertMsg.vue';
import {
    mask
} from 'vue-the-mask';
import flatPickr from "vue-flatpickr-component";
import html2pdf from "html2pdf.js";
import { email } from "@vuelidate/validators";

const activeCollapse = ref(1);
const computedDiscount = ref(0);
const computedDiscountFP = ref(0);
const totalRes = ref(0);
const totalResFP = ref(0);
const montlyAmortization = ref(0);
const showSummary = ref(false);
const showSummaryFP = ref(false);
const ledgerData = ref([]);
const started = ref();
const showLedger = ref(false);
const currentDate = new Date();
const inputValue = ref('');
const toggleCollapse = (index) => {
    activeCollapse.value = index;
};
let props = defineProps({
    property: Object,
});
let {
    region,
    province,
    municipality,
    barangay,
    address
} = props.property.lot.block.phase.project.land
const formatNumber = (number) => {
    
    const formattedNumber = Number(number).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return Number.isInteger(Number(number)) ?
        formattedNumber.replace(/\.\d+$/, "") :
        formattedNumber;
};
const formattedPrice = formatNumber(props.property.total_price);
let form = useForm({
    method: 'Installment',
    invoice_number: props.property.invoice_number,
    price: props.property.total_price,
    downpayment: 0,
    terms: 0,
    discount: 0,
    tax: 0,
    interest: 0,
    reservation_fee: props.property.reservation_fee,
    plan: "Fixed",
    pdf:null,
    total_amount: null,
    email: props.property.client.email,
    ledger: null,
    start_date: null,
});

let formFP = useForm({
    method: 'Fullpayment',
    discount: 0,
    tax: 0,
    interest:0,
    price: props.property.total_price,
    invoice_number: props.property.invoice_number,
    pdf: null,
    total_amount: null,
    reservation_fee: props.property.reservation_fee,
    plan: "Fixed",
    email: props.property.client.email,
})
const formatInput = () => {
    form.downpayment = inputValue.value.replace(/[^\d.]/g, '');
    inputValue.value = formatNumber(inputValue.value.replace(/[^\d.]/g, ''));
};
onMounted(() => {
    const choicesElements = document.querySelectorAll(
        '[data-plugin="choices"]'
    );
    if (choicesElements) {
        choicesElements.forEach((element) => {
            new Choices(element, {
                placeholderValue: "This is a placeholder set in the config",
                searchPlaceholderValue: "Search results here",
            });
        });
    }
    const checkoutTabs = document.querySelectorAll(".checkout-tab");
    if (checkoutTabs) {
        checkoutTabs.forEach((checkoutTab) => {
            const nextTabs = checkoutTab.querySelectorAll(".nexttab");
            if (nextTabs) {
                nextTabs.forEach((nextTab) => {
                    const tabButtons = checkoutTab.querySelectorAll(
                        'button[data-bs-toggle="pill"]'
                    );
                    if (tabButtons) {
                        tabButtons.forEach((tabButton) => {
                            tabButton.addEventListener(
                                "show.bs.tab",
                                (event) => {
                                    event.target.classList.add("done");
                                }
                            );
                        });
                        nextTab.addEventListener("click", () => {
                            const nextTabId =
                                nextTab.getAttribute("data-nexttab");
                            if (nextTabId) {
                                document.getElementById(nextTabId).click();
                            }
                        });
                    }
                });
            }
            const prevTabs = checkoutTab.querySelectorAll(".previestab");
            if (prevTabs) {
                prevTabs.forEach((prevTab) => {
                    prevTab.addEventListener("click", () => {
                        const previousTabId =
                            prevTab.getAttribute("data-previous");
                        if (previousTabId) {
                            const doneTabs = prevTab
                                .closest("form")
                                .querySelectorAll(".custom-nav .done");
                            const doneTabsLength = doneTabs.length;
                            if (doneTabsLength) {
                                for (
                                    let i = doneTabsLength - 1; i < doneTabsLength; i++
                                ) {
                                    if (doneTabs[i]) {
                                        doneTabs[i].classList.remove("done");
                                    }
                                }
                                document.getElementById(previousTabId).click();
                            }
                        }
                    });
                });
            }
            const tabButtons = checkoutTab.querySelectorAll(
                'button[data-bs-toggle="pill"]'
            );
            if (tabButtons) {
                tabButtons.forEach((tabButton, index) => {
                    tabButton.setAttribute("data-position", index);
                    tabButton.addEventListener("click", () => {
                        const doneTabs =
                            checkoutTab.querySelectorAll(".custom-nav .done");
                        if (doneTabs.length > 0) {
                            doneTabs.forEach((doneTab) => {
                                doneTab.classList.remove("done");
                            });
                        }
                        for (let i = 0; i <= index; i++) {
                            if (tabButtons[i].classList.contains("active")) {
                                tabButtons[i].classList.remove("done");
                            } else {
                                tabButtons[i].classList.add("done");
                            }
                        }
                    });
                });
            }
        });
    }
});
const calculateFP = () => {
    showSummary.value = false;
    showSummaryFP.value = true;
    const principal = formFP.price;
    const interest = formFP.interest;
    const tax = formFP.tax;
    const discount = formFP.discount;
    const reservation = formFP.reservation_fee;
    let adjustedPrincipal = principal;

    if (!isNaN(reservation) && reservation != 0) {
        adjustedPrincipal -= reservation;
    }
    if (!isNaN(tax) && tax != 0) {
        const taxRate = tax / 100;
        adjustedPrincipal += adjustedPrincipal * taxRate;
    }
    if (!isNaN(discount) && discount != 0) {
        const discountRate = discount / 100;
        computedDiscountFP.value = adjustedPrincipal * discountRate;
        adjustedPrincipal -= computedDiscountFP.value;
    } else {
        computedDiscountFP.value = 0;
    }

    totalResFP.value = adjustedPrincipal;

    console.log(totalResFP.value);


};
const calculateResult = () => {
    showSummaryFP.value = false;
    ledgerData.value = [];
    const principal = form.price;
    const interest = form.interest;
    const terms = form.terms;
    const tax = form.tax;
    const downpayment = form.downpayment;
    const discount = form.discount;
    const reservation = form.reservation_fee;
    let adjustedPrincipal = principal;
    
    if (!form.downpayment) {
        form.errors.downpayment = true;
        showSummary.value = false;
        return;
    } else if (!form.terms) {
        form.errors.terms = true;
        showSummary.value = false;
    } else {
        form.errors.downpayment = false;
        form.errors.terms = false;
        showSummary.value = true;
        if (!isNaN(reservation) && reservation != 0) {
            adjustedPrincipal -= reservation;
        }
        if (!isNaN(downpayment) && downpayment != 0) {
            adjustedPrincipal -= downpayment;
        }
        if (!isNaN(tax) && tax != 0) {
            const taxRate = tax / 100;
            adjustedPrincipal += adjustedPrincipal * taxRate;
        }
        if (!isNaN(discount) && discount != 0) {
            const discountRate = discount / 100;
            computedDiscount.value = adjustedPrincipal * discountRate;
            adjustedPrincipal -= computedDiscount.value;
        } else {
            computedDiscount.value = 0;
        }
        totalRes.value = adjustedPrincipal;
        if (form.plan === "Fixed") {
            if (interest === 0) {
                montlyAmortization.value = adjustedPrincipal / terms;
                let begin = adjustedPrincipal;
                for (let i = 0; i < terms; i++) {
                    const dueDate = new Date(form.start_date);
                    dueDate.setMonth((dueDate.getMonth() + 1) + i);
                    const formattedDueDate = dueDate.toISOString().slice(0, 10);
                    const end = begin - montlyAmortization.value;
                    const data = {
                        terms: i,
                        dueDate: formattedDueDate,
                        begin: begin,
                        amortization: montlyAmortization.value,
                        end: end,
                    };
                    ledgerData.value.push(data);
                    begin = end;
                }
            } else {
                const annualInterestRate = interest / 100;
                const monthlyInterestRate = annualInterestRate / 12;
                const monthlyPayment =
                    (adjustedPrincipal *
                        monthlyInterestRate *
                        Math.pow(1 + monthlyInterestRate, terms)) /
                    (Math.pow(1 + monthlyInterestRate, terms) - 1);
                montlyAmortization.value = monthlyPayment;
                totalRes.value = monthlyPayment * terms;
            }
        } else {
            if (interest === 0) {
                const payments = [];
                let sum = 0;
                let begin = adjustedPrincipal;
                for (let i = 1; i <= terms; i++) {
                    sum += i / terms;
                }
                const initialPayment = adjustedPrincipal / sum;
                started.value = initialPayment;
                for (let i = 0; i < terms; i++) {
                    const payment = initialPayment * (1 - i / terms);
                    const dueDate = new Date(currentDate);
                    dueDate.setMonth((currentDate.getMonth() + 1) + i);
                    const formattedDueDate = dueDate.toISOString().slice(0, 10);
                    const end = begin - payment.toFixed(2);
                    const data = {
                        terms: i,
                        dueDate: formattedDueDate,
                        begin: begin,
                        amortization: payment.toFixed(2),
                        end: end,
                    };
                    ledgerData.value.push(data);
                    begin = end;
                    //payments.push(payment.toFixed(2));
                }
            }
        }

        form.ledger = ledgerData.value;
    }
};

const getCurrentDate = () => {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    return `${day} ${month}, ${year}`;
};
const formattedDate = ref(getCurrentDate());
const capitalizedString = (inputString) => {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
};

const publish = () => {
    var element = document.getElementById('printable_area');
    
    var opt = {
        margin:  0.5,
        image: { type: "jpeg", quality: 2 },
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(element).set(opt).outputPdf('blob').then(function(pdf) {
        if(form.method=='Installment'){
            form.pdf = pdf;
            form.total_amount = totalRes;

            form.post("/payments-invoice/update", {
                onSuccess: () => {},
            });
        }else{
            formFP.pdf = pdf;
            formFP.total_amount = totalResFP;

            formFP.post("/payments-invoice/update", {
                onSuccess: () => {},
            });
        }
        
    });

};

const flatpickrOptions = {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
    };

</script>

