<template>
    <Layout>
        <Head title="Create Property & Invoice">
            <meta name="viewport" content="your content" />
        </Head>
        <PageHeader title="Create Reservation" pageTitle="Property & Invoice" />
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body checkout-tab">
                        <form action="#">
                            <div class="step-arrow-nav mt-n3 mx-n3 mb-3  d-print-none">
                                <ul
                                    class="nav nav-pills nav-justified custom-nav"
                                    role="tablist"
                                >
                                    <li class="nav-item" role="presentation">
                                        <button
                                            class="nav-link fs-15 p-3 active"
                                            id="pills-property-info-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#property-info-tab"
                                            type="button"
                                        >
                                            <i
                                                class="ri-home-heart-line fs-16 p-2 bg-primary-subtle text-primary rounded-circle align-middle me-2"
                                            ></i>
                                            Property Info
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button
                                            class="nav-link fs-15 p-3"
                                            id="pills-client-info-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#client-info-tab"
                                            type="button"
                                        >
                                            <i
                                                class="ri-user-line fs-16 p-2 bg-primary-subtle text-primary rounded-circle align-middle me-2"
                                            ></i>
                                            Client Info
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button
                                            class="nav-link fs-15 p-3"
                                            id="pills-commission-info-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#commission-info-tab"
                                            type="button"
                                        >
                                            <i
                                                class="ri-user-2-line fs-16 p-2 bg-primary-subtle text-primary rounded-circle align-middle me-2"
                                            ></i>
                                            Commission Info
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button
                                            class="nav-link fs-15 p-3"
                                            id="pills-payment-info-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#payment-info-tab"
                                            type="button"
                                        >
                                            <i
                                                class="ri-bank-card-line fs-16 p-2 bg-primary-subtle text-primary rounded-circle align-middle me-2"
                                            ></i>
                                            Payment Info
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button
                                            class="nav-link fs-15 p-3"
                                            id="pills-review-info-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#review-info-tab"
                                            type="button"
                                        >
                                            <i
                                                class="ri-file-text-line fs-16 p-2 bg-primary-subtle text-primary rounded-circle align-middle me-2"
                                            ></i>
                                            Review Information
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div
                                    class="tab-pane fade show active"
                                    id="property-info-tab"
                                >
                                    <div></div>
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <div>
                                                <h5 class="mb-1">
                                                    Property Information
                                                </h5>
                                                <p class="text-muted mb-4">
                                                    Please fill all information
                                                    below
                                                </p>
                                            </div>
                                            <div>
                                                <div class="row mb-3">
                                                    <div class="col-lg-4">
                                                        <div
                                                            class="mb-3 mb-lg-0"
                                                        >
                                                            <label
                                                                for="size"
                                                                class="form-label"
                                                                >Project</label
                                                            >
                                                            <Multiselect
                                                                class="form-select"
                                                                v-model="
                                                                    searchProject
                                                                "
                                                                placeholder="Select Project"
                                                                :options="
                                                                    projectFilter
                                                                "
                                                                :searchable="
                                                                    true
                                                                "
                                                                track-by="label"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div
                                                            class="mb-3 mb-lg-0"
                                                        >
                                                            <label
                                                                for="size"
                                                                class="form-label"
                                                                >Phase</label
                                                            >
                                                            <Multiselect
                                                                class="form-select"
                                                                v-model="
                                                                    searchPhase
                                                                "
                                                                placeholder="Select Phase"
                                                                :options="
                                                                    phaseFilter
                                                                "
                                                                :searchable="
                                                                    true
                                                                "
                                                                track-by="label"
                                                                :disabled="
                                                                    !searchProject
                                                                "
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div
                                                            class="mb-3 mb-lg-0"
                                                        >
                                                            <label
                                                                for="size"
                                                                class="form-label"
                                                                >Block</label
                                                            >
                                                            <Multiselect
                                                                class="form-select"
                                                                v-model="
                                                                    searchBlock
                                                                "
                                                                placeholder="Select Block"
                                                                :options="
                                                                    blockFilter
                                                                "
                                                                :searchable="
                                                                    true
                                                                "
                                                                track-by="label"
                                                                :disabled="
                                                                    !searchPhase
                                                                "
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mb-5">
                                                    <div class="col-lg-4">
                                                        <div
                                                            class="mb-3 mb-lg-0"
                                                        >
                                                            <label
                                                                for="size"
                                                                class="form-label"
                                                                >Lot</label
                                                            >
                                                            <Multiselect
                                                                class="form-select"
                                                                v-model="
                                                                    searchProperty
                                                                "
                                                                placeholder="Select Lot"
                                                                :options="
                                                                    lotFilter
                                                                "
                                                                :searchable="
                                                                    true
                                                                "
                                                                track-by="label"
                                                                :disabled="
                                                                    !searchBlock
                                                                "
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="col-lg-4"
                                                        v-if="
                                                            property &&
                                                            property.type ==
                                                                'Lot'
                                                        "
                                                    >
                                                        <label
                                                            class="form-label"
                                                            >Price Per sq m
                                                            (₱)</label
                                                        >
                                                        <input
                                                            type="text"
                                                            v-model="inputSqm"
                                                            @input="formatInputPriceSqm"
                                                            class="form-control"
                                                            :disabled="!searchProperty"
                                                        />
                                                    </div>
                                                    <div
                                                        class="col-lg-4"
                                                        v-else
                                                    >
                                                        <label
                                                            class="form-label"
                                                            >Property Price
                                                            (₱)</label
                                                        >
                                                        <input
                                                            type="text"
                                                            v-model="inputPrice"
                                                            @input="formatInputPrice"
                                                            class="form-control"
                                                            :disabled="!searchProperty"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4" v-if="property">
                                            <div
                                                class="card border card-bg-success-subtle border-opacity-25"
                                            >
                                                <div class="card-header">
                                                    <h5>Property Summary</h5>
                                                </div>
                                                <div class="card-body">
                                                    <dl class="row mb-0">
                                                        <dt class="col-sm-3">
                                                            Name:
                                                        </dt>
                                                        <dd class="col-sm-9">
                                                            {{
                                                                property.lot_name
                                                            }}
                                                        </dd>

                                                        <dt class="col-sm-3">
                                                            Block:
                                                        </dt>
                                                        <dd class="col-sm-9">
                                                            {{
                                                                property
                                                                    ? property
                                                                          .block
                                                                          .block_number
                                                                    : ""
                                                            }}
                                                        </dd>

                                                        <dt class="col-sm-3">
                                                            Size:
                                                        </dt>
                                                        <dd class="col-sm-9">
                                                            {{
                                                                property.size
                                                            }}
                                                            sq m
                                                        </dd>

                                                        <dt class="col-sm-3">
                                                            Phase:
                                                        </dt>
                                                        <dd class="col-sm-9">
                                                            {{
                                                                property
                                                                    ? property
                                                                          .block
                                                                          .phase
                                                                          .phase_name
                                                                    : ""
                                                            }}
                                                        </dd>

                                                        <dt class="col-sm-3">
                                                            Type:
                                                        </dt>
                                                        <dd class="col-sm-9">
                                                            {{ property.type }}
                                                        </dd>

                                                        <dt class="col-sm-3">
                                                            Category:
                                                        </dt>
                                                        <dd class="col-sm-9">
                                                            {{
                                                                property.category
                                                            }}
                                                        </dd>
                                                    </dl>
                                                </div>
                                                <div class="card-footer">
                                                    <dl class="row mb-0">
                                                        <dt class="col-sm-4">
                                                            <h5>
                                                                Total Price:
                                                            </h5>
                                                        </dt>
                                                        <dd class="col-sm-8">
                                                            <h5>
                                                                ₱
                                                                {{
                                                                    formatNumber(
                                                                        form.total_price
                                                                    )
                                                                }}
                                                            </h5>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-start gap-3 mt-2 align-self-end"
                                    >
                                        <button
                                            type="button"
                                            class="btn btn-secondary btn-label right nexttab"
                                            data-nexttab="pills-client-info-tab"
                                        >
                                            <i
                                                class="ri-user-line label-icon align-middle fs-16 ms-2"
                                            ></i
                                            >Proceed to Client Info
                                        </button>
                                    </div>
                                </div>
                                <div
                                    class="tab-pane fade"
                                    id="client-info-tab"
                                    role="tabpanel"
                                >
                                    <div>
                                        <h5 class="mb-1">Client Information</h5>
                                        <p class="text-muted mb-4">
                                            Please fill all information below
                                        </p>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <div class="mb-3 mb-lg-0">
                                                <label
                                                    for="size"
                                                    class="form-label"
                                                    >Client</label
                                                >
                                                <Multiselect
                                                    class="form-select"
                                                    v-model="form.client_id"
                                                    placeholder="Select Client"
                                                    :options="userDetails"
                                                    :searchable="true"
                                                    track-by="label"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-start gap-3 mt-4"
                                    >
                                        <button
                                            type="button"
                                            class="btn btn-light btn-label previestab"
                                            data-previous="pills-property-info-tab"
                                        >
                                            <i
                                                class="ri-arrow-left-line label-icon align-middle fs-16 me-2"
                                            ></i
                                            >Back to Property Info
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-secondary btn-label right ms-auto nexttab"
                                            data-nexttab="pills-commission-info-tab"
                                        >
                                            <i
                                                class="ri-user-2-line label-icon align-middle fs-16 ms-2"
                                            ></i
                                            >Continue to Commission Info
                                        </button>
                                    </div>
                                </div>
                                <div
                                    class="tab-pane fade"
                                    id="commission-info-tab"
                                    role="tabpanel"
                                >
                                    <div>
                                        <h5 class="mb-1">
                                            Commission Information
                                        </h5>
                                        <p class="text-muted mb-4">
                                            Please fill all information below
                                        </p>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-lg-4">
                                            <label class="form-label"
                                                >Broker</label
                                            >
                                            <Multiselect
                                                class="form-select"
                                                v-model="form.broker_id"
                                                placeholder="Select Brocker"
                                                :options="userDetails"
                                                :searchable="true"
                                                track-by="label"
                                            />
                                        </div>
                                        <div class="col-lg-2">
                                            <label class="form-label"
                                                >Commission</label
                                            >
                                            <input
                                                type="text"
                                                v-model="form.broker_com"
                                                placeholder="%"
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-lg-4">
                                            <label class="form-label"
                                                >Agent</label
                                            >
                                            <Multiselect
                                                class="form-select"
                                                v-model="form.agent_id"
                                                placeholder="Select Agent"
                                                :options="userDetails"
                                                :searchable="true"
                                                track-by="label"
                                            />
                                        </div>
                                        <div class="col-lg-2">
                                            <label class="form-label"
                                                >Commission</label
                                            >
                                            <input
                                                type="text"
                                                v-model="form.agent_com"
                                                placeholder="%"
                                                class="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="row mb-3"
                                        v-for="(agent, index) in subAgent"
                                        :key="index"
                                    >
                                        <div class="col-lg-4">
                                            <label class="form-label"
                                                >Sub-Agent</label
                                            >
                                            <Multiselect
                                                class="form-select"
                                                v-model="
                                                    form.sub_agent_id[index]
                                                "
                                                placeholder="Select Sub-Agent"
                                                :options="userDetails"
                                                :searchable="true"
                                                track-by="label"
                                            />
                                        </div>
                                        <div class="col-lg-2">
                                            <label class="form-label"
                                                >Commission</label
                                            >
                                            <input
                                                type="text"
                                                v-model="
                                                    form.sub_agent_com[index]
                                                "
                                                placeholder="%"
                                                class="form-control"
                                            />
                                        </div>
                                        <div class="col-lg-2">
                                            <button
                                                type="button"
                                                class="btn btn-outline-ligth btn-icon waves-effect waves-light text-danger mt-4 fs-4"
                                                v-show="index !== 0"
                                                @click="
                                                    index !== 0 &&
                                                        removePhase(index)
                                                "
                                            >
                                                <span class="icon-off"
                                                    ><i
                                                        class="ri-delete-bin-line"
                                                    ></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="colo-sm-6">
                                            <button
                                                type="button"
                                                class="btn btn-outline-success waves-effect waves-light btn-sm"
                                                @click="addSubAgent"
                                            >
                                                <span class="icon-off"
                                                    ><i class="ri-add-line"></i>
                                                    Add</span
                                                >
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-start gap-3 mt-4"
                                    >
                                        <button
                                            type="button"
                                            class="btn btn-light btn-label previestab"
                                            data-previous="pills-client-info-tab"
                                        >
                                            <i
                                                class="ri-arrow-left-line label-icon align-middle fs-16 me-2"
                                            ></i
                                            >Back to Client Info
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-secondary btn-label right ms-auto nexttab"
                                            data-nexttab="pills-payment-info-tab"
                                        >
                                            <i
                                                class="ri-bank-card-line label-icon align-middle fs-16 ms-2"
                                            ></i
                                            >Continue to Payment Info
                                        </button>
                                    </div>
                                </div>
                                <div
                                    class="tab-pane fade"
                                    id="payment-info-tab"
                                    role="tabpanel"
                                >
                                    <div>
                                        <h5 class="mb-1">Payment Selection</h5>
                                        <p class="text-muted mb-4">
                                            Please select and enter your billing
                                            information
                                        </p>
                                    </div>
                                    <div class="row g-4">
                                        <div class="col-lg-4 col-sm-6">
                                            <div
                                                data-bs-toggle="collapse"
                                                aria-expanded="true"
                                                @click="toggleCollapse(1)"
                                            >
                                                <div
                                                    class="form-check card-radio"
                                                >
                                                    <input
                                                        id="reserve"
                                                        name="paymentMethod"
                                                        type="radio"
                                                        class="form-check-input"
                                                        checked
                                                    />
                                                    <label
                                                        class="form-check-label"
                                                        for="reserve"
                                                    >
                                                        <span
                                                            class="fs-16 text-muted me-2"
                                                            ><i
                                                                class="ri-reserved-line align-bottom"
                                                            ></i
                                                        ></span>
                                                        <span
                                                            class="fs-14 text-wrap"
                                                            >Reserve</span
                                                        >
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <div class="col-lg-4 col-sm-6">
                                            <div data-bs-toggle="collapse" @click="toggleCollapse(2)">
                                                <div class="form-check card-radio">
                                                    <input id="installment" name="paymentMethod" type="radio" class="form-check-input">
                                                    <label class="form-check-label" for="installment">
                                                        <span class="fs-16 text-muted me-2"><i class="ri-bank-card-fill align-bottom"></i></span>
                                                        <span class="fs-14 text-wrap">Installment</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-sm-6" @click="toggleCollapse(3)">
                                            <div data-bs-toggle="collapse">
                                                <div class="form-check card-radio">
                                                    <input id="fullpayment" name="paymentMethod" type="radio" class="form-check-input">
                                                    <label class="form-check-label" for="fullpayment">
                                                        <span class="fs-16 text-muted me-2"><i class="ri-cash-line align-bottom"></i></span>
                                                        <span class="fs-14 text-wrap">Full Payment</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                    <div
                                        class="collapse"
                                        :class="{ show: activeCollapse === 1 }"
                                    >
                                        <div
                                            class="card p-4 border shadow-none mb-0 mt-4"
                                        >
                                            <div class="row gy-3">
                                                <div class="col-md-4">
                                                    <label class="form-label"
                                                        >Resevation Fee</label
                                                    >
                                                    <input
                                                        type="text"
                                                        v-model="inputReserve"
                                                        class="form-control form-control-lg"
                                                        placeholder="Enter amount"
                                                        @input="formatInputReserve"
                                                    />
                                                </div>
                                            </div>
                                            <div class="mt-4">
                                                <h5 class="fs-14 mb-3">
                                                    Payment Method
                                                </h5>

                                                <div class="row g-4">
                                                    <div class="col-lg-6">
                                                        <div
                                                            class="form-check card-radio"
                                                        >
                                                            <input
                                                                id="paymentMethod01"
                                                                name="shippingMethod"
                                                                v-model="
                                                                    form.pay_method
                                                                "
                                                                value="Cash"
                                                                type="radio"
                                                                class="form-check-input"
                                                                checked
                                                            />
                                                            <label
                                                                class="form-check-label"
                                                                for="paymentMethod01"
                                                            >
                                                                <span
                                                                    class="fs-20 float-end mt-2 text-wrap d-block fw-semibold"
                                                                    >₱
                                                                    {{
                                                                        formatNumber(
                                                                            form.reservation_fee
                                                                        )
                                                                    }}</span
                                                                >
                                                                <span
                                                                    class="fs-14 mb-1 text-wrap d-block"
                                                                    >Cash</span
                                                                >
                                                                <span
                                                                    class="text-muted fw-normal text-wrap d-block"
                                                                    >Amount to
                                                                    pay</span
                                                                >
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div
                                                            class="form-check card-radio"
                                                        >
                                                            <input
                                                                id="paymentMethod02"
                                                                name="shippingMethod"
                                                                v-model="
                                                                    form.pay_method
                                                                "
                                                                value="Bank Transfer"
                                                                type="radio"
                                                                class="form-check-input"
                                                            />
                                                            <label
                                                                class="form-check-label"
                                                                for="paymentMethod02"
                                                            >
                                                                <span
                                                                    class="fs-20 float-end mt-2 text-wrap d-block fw-semibold"
                                                                    >₱
                                                                    {{
                                                                        formatNumber(
                                                                            form.reservation_fee
                                                                        )
                                                                    }}</span
                                                                >
                                                                <span
                                                                    class="fs-14 mb-1 text-wrap d-block"
                                                                    >Bank
                                                                    Transfer</span
                                                                >
                                                                <span
                                                                    class="text-muted fw-normal text-wrap d-block"
                                                                    >Amount to
                                                                    pay</span
                                                                >
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="collapse" :class="{'show' : activeCollapse === 2}">
                                        <div class="card p-4 border shadow-none mb-0 mt-4">
                                            <div class="row gy-3">
                                                <div class="col-md-2">
                                                    <label class="form-label">Property Price (₱)</label>
                                                    <input type="text" v-model="form.price" class="form-control form-control-lg" placeholder="Enter Price" @input="calculateResult" disabled>
                                                </div>
                                                <div class="col-md-2">
                                                    <label class="form-label">Down payment (₱)</label>
                                                    <input type="number" v-model="form.downpayment" class="form-control form-control-lg" placeholder="Enter Amount" @input="calculateResult">
                                                </div>
                                                <div class="col-md-2">
                                                    <label class="form-label">Term (Months)</label>
                                                    <input type="number" v-model="form.months" class="form-control form-control-lg" placeholder="Enter Months" @input="calculateResult">
                                                </div>
                                                <div class="col-md-2">
                                                    <label class="form-label">Discount(%)</label>
                                                    <div class="input-group">
                                                        <div class="input-group-text">%</div>
                                                        <input type="number" v-model="form.discount" class="form-control form-control-lg" placeholder="Enter Discount" @input="calculateResult">
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <label class="form-label">Tax(%)</label>
                                                    <div class="input-group">
                                                        <div class="input-group-text">%</div>
                                                        <input type="number" v-model="form.tax" class="form-control form-control-lg" placeholder="Enter Tax Percentage" @input="calculateResult">
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <label class="form-label">Interest rate(%)</label>
                                                    <div class="input-group">
                                                        <div class="input-group-text">%</div>
                                                        <input type="number" v-model="form.interest" class="form-control form-control-lg" placeholder="Enter Tax Percentage" @input="calculateResult">
                                                    </div>
                                                </div>
                                                <div class="col-md-2 pt-2">
                                                    <button type="button" @click="calculateResultButton" class="btn btn-secondary btn-lg"><i class="ri-calculator-line align-bottom me-1"></i> Calculate</button>
                                                </div>
                                            </div>

                                            <div class="row mt-4" v-if="showSummary">
                                                <h5 class="mb-3">Summary:</h5>
                                                <div class="table-responsive">
                                                    <table class="table table-borderless mb-4" >
                                                        <tbody>
                                                            <tr>
                                                                <td>Sub Total :</td>
                                                                <td class="text-end">₱ {{ formatNumber(unmaskNumber(form.price)) }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Downpayment : </td>
                                                                <td class="text-end">- ₱ {{ formatNumber(form.downpayment) }}</td>
                                                            </tr>
                                                            <tr v-if="form.discount != 0">
                                                                <td>Discount ({{ form.discount }}%): </td>
                                                                <td class="text-end">- ₱ {{ formatNumber(computedDiscount) }}</td>
                                                            </tr>
                                                            <tr v-if="form.interest != 0">
                                                                <td>Interest Rate : </td>
                                                                <td class="text-end"> {{ form.interest }}%</td>
                                                            </tr>
                                                            <tr v-if="form.tax !=0">
                                                                <td>Tax : </td>
                                                                <td class="text-end">{{ form.tax }}%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Total Amount: </td>
                                                                <td class="text-end">₱ {{ formatNumber(totalRes) }}</td>
                                                            </tr>
                                                            <tr class="table-active">
                                                                <th class="fs-4">Monthly Amortization (PHP) :</th>
                                                                <td class="text-end">
                                                                    <span class="fw-semibold fs-4" id="cart-total">
                                                                        ₱ {{ formatNumber(montlyAmortization) }}
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                           
                                            <div class="mt-4">
                                                <h5 class="fs-14 mb-3">Payment Method</h5>

                                                <div class="row g-4">
                                                    <div class="col-lg-6">
                                                        <div class="form-check card-radio">
                                                            <input id="paymentMethod03" name="shippingMethod" type="radio" class="form-check-input" checked>
                                                            <label class="form-check-label" for="paymentMethod03">
                                                                <span class="fs-20 float-end mt-2 text-wrap d-block fw-semibold">₱ {{ formatNumber(form.downpayment)  }}</span>
                                                                <span class="fs-14 mb-1 text-wrap d-block">Cash</span>
                                                                <span class="text-muted fw-normal text-wrap d-block">Amount to pay</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="form-check card-radio">
                                                            <input id="paymentMethod04" name="shippingMethod" type="radio" class="form-check-input">
                                                            <label class="form-check-label" for="paymentMethod04">
                                                                <span class="fs-20 float-end mt-2 text-wrap d-block fw-semibold">₱ {{ formatNumber(form.downpayment)  }}</span>
                                                                <span class="fs-14 mb-1 text-wrap d-block">Bank Transfer</span>
                                                                <span class="text-muted fw-normal text-wrap d-block">Amount to pay</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="collapse" :class="{'show' : activeCollapse === 3}">
                                        <div class="card p-4 border shadow-none mb-0 mt-4">
                                            <div class="row gy-3">
                                                <div class="col-md-4">
                                                    <label class="form-label">Property Price</label>
                                                    <input type="number" v-model="form.price" class="form-control form-control-lg" placeholder="Enter Price">
                                                </div>
                                            </div>
                                            <div class="mt-4">
                                                <h5 class="fs-14 mb-3">Payment Method</h5>

                                                <div class="row g-4">
                                                    <div class="col-lg-6">
                                                        <div class="form-check card-radio">
                                                            <input id="paymentMethod03" name="shippingMethod" type="radio" class="form-check-input" checked>
                                                            <label class="form-check-label" for="paymentMethod03">
                                                                <span class="fs-20 float-end mt-2 text-wrap d-block fw-semibold">₱ {{ formatNumber(form.price)  }}</span>
                                                                <span class="fs-14 mb-1 text-wrap d-block">Cash</span>
                                                                <span class="text-muted fw-normal text-wrap d-block">Amount to pay</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="form-check card-radio">
                                                            <input id="paymentMethod04" name="shippingMethod" type="radio" class="form-check-input">
                                                            <label class="form-check-label" for="paymentMethod04">
                                                                <span class="fs-20 float-end mt-2 text-wrap d-block fw-semibold">₱ {{ formatNumber(form.price) }}</span>
                                                                <span class="fs-14 mb-1 text-wrap d-block">Bank Transfer</span>
                                                                <span class="text-muted fw-normal text-wrap d-block">Amount to pay</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                                    <div
                                        class="d-flex align-items-start gap-3 mt-4"
                                    >
                                        <button
                                            type="button"
                                            class="btn btn-light btn-label previestab"
                                            data-previous="pills-commission-info-tab"
                                        >
                                            <i
                                                class="ri-arrow-left-line label-icon align-middle fs-16 me-2"
                                            ></i
                                            >Back to Commission Info
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-secondary btn-label right ms-auto nexttab"
                                            data-nexttab="pills-review-info-tab"
                                        >
                                            <i
                                                class="ri-file-text-line label-icon align-middle fs-16 ms-2"
                                            ></i
                                            >Continue to Review Info
                                        </button>
                                    </div>
                                </div>
                                <div
                                    class="tab-pane fade"
                                    id="review-info-tab"
                                    role="tabpanel"
                                >
                                    <div
                                        class="card p-4 border shadow-none"
                                        v-if="property"
                                    >
                                        <div class="card-header border-bottom-dashed mb-4 d-print-none">
                                            <h5 class="mb-1">
                                                Review Information
                                            </h5>
                                            <p class="text-muted">
                                                Please review all information
                                                below
                                            </p>
                                            <AlertMsg v-if="errors.error" class="col-md-6" :type="'danger'" :msg="errors.error" />
                                        </div>
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
                                        <div
                                            class="card-header border-bottom-dashed mb-4"
                                        >
                                            <h5 class="mb-4">
                                                Property Information
                                            </h5>
                                            <dl class="row mb-0">
                                                <dt class="col-sm-2">Name:</dt>
                                                <dd class="col-sm-10">
                                                    {{ property.lot_name }}
                                                </dd>

                                                <dt class="col-sm-2">Block:</dt>
                                                <dd class="col-sm-10">
                                                    {{
                                                        property
                                                            ? property.block
                                                                  .block_number
                                                            : ""
                                                    }}
                                                </dd>

                                                <dt class="col-sm-2">Size:</dt>
                                                <dd class="col-sm-10">
                                                    {{ property.size }} sq m
                                                </dd>

                                                <dt class="col-sm-2">Phase:</dt>
                                                <dd class="col-sm-10">
                                                    {{
                                                        property
                                                            ? property.block
                                                                  .phase
                                                                  .phase_name
                                                            : ""
                                                    }}
                                                </dd>

                                                <dt class="col-sm-2">Type:</dt>
                                                <dd class="col-sm-10">
                                                    {{ property.type }}
                                                </dd>

                                                <dt class="col-sm-2">
                                                    Category:
                                                </dt>
                                                <dd class="col-sm-10">
                                                    {{ property.category }}
                                                </dd>

                                                <dt
                                                    class="col-sm-2"
                                                    v-if="
                                                        form.per_sqm_price > 0
                                                    "
                                                >
                                                    Price Per sq m:
                                                </dt>
                                                <dd
                                                    class="col-sm-10"
                                                    v-if="
                                                        form.per_sqm_price > 0
                                                    "
                                                >
                                                    ₱
                                                    {{
                                                        formatNumber(
                                                            form.per_sqm_price
                                                        )
                                                    }}
                                                </dd>

                                                <dt class="col-sm-2">
                                                    <h5>Total Price:</h5>
                                                </dt>
                                                <dd class="col-sm-10">
                                                    <h5>
                                                        ₱
                                                        {{
                                                            formatNumber(
                                                                form.total_price
                                                            )
                                                        }}
                                                    </h5>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div
                                            class="card-header border-bottom-dashed mb-4"
                                        >
                                            <h5 class="mb-4">
                                                Client Information
                                            </h5>
                                            <dl class="row mb-0">
                                                <dt class="col-sm-2">
                                                    Client Name:
                                                </dt>
                                                <dd class="col-sm-10">
                                                    {{
                                                        getLabelForValue(
                                                            form.client_id,
                                                            userDetails
                                                        )
                                                    }}
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="card-header border-bottom-dashed mb-4 d-print-none">
                                            <h5 class="mb-4">
                                                Commission Information
                                            </h5>
                                            <dl class="row mb-0">
                                                <dt class="col-sm-2">
                                                    Broker Name:
                                                </dt>
                                                <dd class="col-sm-10">
                                                    <dl class="row mb-0">
                                                        <dt
                                                            class="col-sm-3 fw-normal"
                                                        >
                                                            {{
                                                                getLabelForValue(
                                                                    form.broker_id,
                                                                    userDetails
                                                                )
                                                            }}
                                                        </dt>
                                                        <dd class="col-sm-8">
                                                            {{
                                                                form.broker_com
                                                            }}%
                                                        </dd>
                                                    </dl>
                                                </dd>

                                                <dt class="col-sm-2">
                                                    Agent Name:
                                                </dt>
                                                <dd class="col-sm-10">
                                                    <dl class="row mb-0">
                                                        <dt
                                                            class="col-sm-3 fw-normal"
                                                        >
                                                            {{
                                                                getLabelForValue(
                                                                    form.agent_id,
                                                                    userDetails
                                                                )
                                                            }}
                                                        </dt>
                                                        <dd class="col-sm-8">
                                                            {{
                                                                form.agent_com
                                                            }}%
                                                        </dd>
                                                    </dl>
                                                </dd>

                                                <dt class="col-sm-2 mb-3">
                                                    Sub-Agent Name:
                                                </dt>
                                                <div
                                                    v-for="(
                                                        sub, index
                                                    ) in subAgent"
                                                >
                                                    <dd class="col-sm-10">
                                                        <dl class="row mb-0">
                                                            <dt
                                                                class="col-sm-4 blockquote-footer fs-6 text-dark fw-normal"
                                                            >
                                                                {{
                                                                    getLabelForValue(
                                                                        form
                                                                            .sub_agent_id[
                                                                            index
                                                                        ],
                                                                        userDetails
                                                                    )
                                                                }}
                                                            </dt>
                                                            <dd
                                                                class="col-sm-8"
                                                            >
                                                                {{
                                                                    form
                                                                        .sub_agent_com[
                                                                        index
                                                                    ]
                                                                }}%
                                                            </dd>
                                                        </dl>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                        <div
                                            class="card-header border-bottom-dashed"
                                        >
                                            <h5 class="mb-4">
                                                Payment Information
                                            </h5>
                                            <!-- <dl class="row mb-0">
                                                <dt class="col-sm-2">Payment Method:</dt>
                                                <dd class="col-sm-10">{{ form.payMethod }}</dd>

                                                <dt class="col-sm-2"><h5>Resevation Fee:</h5></dt>
                                                <dd class="col-sm-10"><h5>₱ {{ formatNumber(form.reservationFee) }}</h5></dd>
                                            </dl> -->
                                            <table
                                                class="table table-borderless table-nowrap align-middle mb-0"
                                                style="width: 360px"
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td>Payment Method</td>
                                                        <td class="text-end">
                                                            {{
                                                                form.pay_method
                                                            }}
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        class="border-top border-top-dashed fs-15"
                                                    >
                                                        <th
                                                            scope="row"
                                                            class="fs-4"
                                                        >
                                                            Reservation Fee:
                                                        </th>
                                                        <th
                                                            class="text-end fs-4"
                                                        >
                                                            ₱
                                                            {{
                                                                formatNumber(
                                                                    form.reservation_fee
                                                                )
                                                            }}
                                                        </th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="mt-4">
                                            <div class="alert alert-dark">
                                                <p class="mb-0">
                                                    <span class="fw-semibold"
                                                        >NOTES:</span
                                                    >
                                                    <span id="note"
                                                        >This is only a
                                                        reservation fee, and
                                                        the downpayment must be
                                                        paid in full within 10
                                                        days of receiving the
                                                        invoice. Payment can be
                                                        made by cash or bank
                                                        transfer. If payment is
                                                        not received within this
                                                        timeframe, the
                                                        reservation will be
                                                        forfeited.
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-start gap-3 mt-4  d-print-none"
                                    >
                                        <button
                                            type="button"
                                            class="btn btn-light btn-label previestab"
                                            data-previous="pills-payment-info-tab"
                                        >
                                            <i
                                                class="ri-arrow-left-line label-icon align-middle fs-16 me-2"
                                            ></i
                                            >Back to Payment Info
                                        </button>
                                        <div class="hstack gap-2 justify-content-end d-print-none ms-auto">
                                            <a href="javascript:window.print()"
                                                class="btn btn-outline-success ms-auto waves-effect waves-light"><i
                                                    class="ri-printer-line align-bottom me-1"></i> Print</a>
                                            <!-- <button type="button" class="btn btn-primary btn-label right"
                                                @click="submit">
                                                <i class="ri-save-line label-icon align-middle fs-16 ms-2"></i>Submit
                                            </button> -->
                                            <button type="button" class="btn btn-success btn-load" @click="createInvoice">
                                                <span class="d-flex align-items-center">
                                                    <span class="spinner-border flex-shrink-0" v-if="form.processing">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </span>
                                                    <span class="flex-grow-1 ms-2">
                                                        Create Reservation
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
import { Link, Head, useForm, router } from "@inertiajs/vue3";
import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import { ref, onMounted, watch, computed } from "vue";
import debounce from "lodash/debounce";
import AlertMsg from '../../Components/AlertMsg.vue';

const searchProject = ref(null);
const searchPhase = ref(null);
const searchBlock = ref(null);
const searchProperty = ref(null);
const activeCollapse = ref(1);
const computedDiscount = ref(0);
const computedTax = ref(0);
const totalRes = ref(0);
const computedInterest = ref(0);
const montlyAmortization = ref(0);
const showSummary = ref(false);
const subAgent = ref([null]);
const inputPrice = ref('');
const inputReserve = ref('');
const inputSqm = ref('');

let props = defineProps({
    projectFilter: Object,
    phaseFilter: Object,
    blockFilter: Object,
    lotFilter: Object,
    userDetails: Object,
    property: Object,
    errors:Object,
});

const toggleCollapse = (index) => {
    activeCollapse.value = index;
    // if (activeCollapse.value === index) {
    //     activeCollapse.value = 0;
    // } else {
    //     activeCollapse.value = index;
    // }
};

let form = useForm({
    price: 0,
    per_sqm_price: 0,
    lot_id: null,
    total_price: 0,
    client_id: null,
    broker_id: null,
    broker_com: null,
    agent_id: null,
    agent_com: null,
    sub_agent_id: [null],
    sub_agent_com: [null],
    pay_method: "Cash",
    reservation_fee: null,
});

const calculateResultButton = () => {
    showSummary.value = true;
};

const formatInput = (event) => {
    let input = event.target.value;

    input = input.replace(/\D/g, "");
    input = input.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (form.per_sqm_price > 0) {
        form.total_price = form.per_sqm_price * props.property.size;
        //form.sqm = input;
    } else {
        form.total_price = form.price;
        //form.price = input;
    }

};

const formatInputPrice = () => {
    form.price = inputPrice.value.replace(/[^\d.]/g, '');
    inputPrice.value = formatNumber(inputPrice.value.replace(/[^\d.]/g, ''));

    if (form.per_sqm_price > 0) {
        form.total_price = form.per_sqm_price * props.property.size;
        //form.sqm = input;
    } else {
        form.total_price = form.price;
        //form.price = input;
    }
}

const formatInputPriceSqm = () => {
    form.per_sqm_price = inputSqm.value.replace(/[^\d.]/g, '');
    inputSqm.value = formatNumber(inputSqm.value.replace(/[^\d.]/g, ''));

    if (form.per_sqm_price > 0) {
        form.total_price = form.per_sqm_price * props.property.size;
        //form.sqm = input;
    } else {
        form.total_price = form.price;
        //form.price = input;
    }
}

const formatInputReserve = () => {
    form.reservation_fee = inputReserve.value.replace(/[^\d.]/g, '');
    inputReserve.value = formatNumber(inputReserve.value.replace(/[^\d.]/g, ''));
}

const unmaskNumber = (maskedValue) => {
    return maskedValue.replace(/\D/g, "");
};
const calculateResult = () => {
    let principal = unmaskNumber(form.price);
    const interest = form.interest;
    const months = form.months;
    const tax = form.tax;
    const downPayment = form.downpayment;
    const discount = form.discount;

    let adjustedPrincipal = principal;

    // Apply tax if available
    if (!isNaN(tax) && tax != 0) {
        const taxRate = tax / 100;
        adjustedPrincipal += principal * taxRate;
    } else {
        //form.tax = 0;
    }

    // Apply down payment if available
    if (!isNaN(downPayment) && downPayment != 0) {
        adjustedPrincipal -= downPayment;
    } else {
        //form.downpayment = 0;
    }

    // Apply discount if available
    if (!isNaN(discount) && discount != 0) {
        const discountRate = discount / 100;
        computedDiscount.value = adjustedPrincipal * discountRate;
        adjustedPrincipal -= adjustedPrincipal * discountRate;
    } else {
        computedDiscount.value = 0;
        //form.discount = 0;
    }

    totalRes.value = adjustedPrincipal;

    if (interest === 0) {
        montlyAmortization.value = adjustedPrincipal / months;
    } else {
        // Calculate annual interest rate and monthly interest rate
        const annualInterestRate = interest / 100;
        const monthlyInterestRate = annualInterestRate / 12;

        const monthlyPayment =
            (adjustedPrincipal *
                monthlyInterestRate *
                Math.pow(1 + monthlyInterestRate, months)) /
            (Math.pow(1 + monthlyInterestRate, months) - 1);

        montlyAmortization.value = monthlyPayment;
    }
};

watch(
    [searchProject, searchPhase, searchBlock, searchProperty],
    debounce(function ([project, phaseValue, blockValue, property]) {
        const params = {};

        if (project) {
            params.project = project;
        }

        if (phaseValue) {
            params.phase = phaseValue;
        }

        if (blockValue) {
            params.block = blockValue;
        }

        if (property) {
            params.lot = property;
            form.price = 0;
            form.per_sqm_price = 0;
            form.total_price = 0;
            form.lot_id = property;
            inputPrice.value = '';
        }

        router.get("/payments-invoice/create", params, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
            onSuccess: () => {
                //debounceRunning.value = false;
            },
        });
    }, 500)
);

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
                                    let i = doneTabsLength - 1;
                                    i < doneTabsLength;
                                    i++
                                ) {
                                    if (doneTabs[i]) {
                                        doneTabs[i].classList.remove("done");
                                    }
                                }
                                console.log(previousTabId);
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

const formatNumber = (number) => {
    const formattedNumber = Number(number).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return Number.isInteger(Number(number))
        ? formattedNumber.replace(/\.\d+$/, "")
        : formattedNumber;
};

const addSubAgent = () => {
    subAgent.value.push(null);
};

const removePhase = (index) => {
    subAgent.value.splice(index, 1);
    form.sub_agent_id.splice(index, 1);
};

const getLabelForValue = (value, options) => {
    if (value !== null) {
        const selectedOption = options.find((option) => option.value === value);
        return selectedOption ? selectedOption.label : null;
    } else {
        return null;
    }
};

const createInvoice = () => {
    form.post("/payments-invoice/store", {
        onSuccess: () => {},
    });
};
</script>

<style>
.multiselect.is-disabled {
    background-color: #eee !important;
}
</style>
