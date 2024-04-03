<template>
    <Layout>
        <Head title="Project">
            <meta name="viewport" content="your content" />
        </Head>
        <div class="row">
                <div class="col-lg-12">
                    <div class="card mt-n4">
                        <div class="bg-primary-subtle">
                            <div class="card-body pb-0 px-4">
                                <div class="row mb-3">
                                    <div class="col-md">
                                        <div class="row align-items-center g-3">
                                            <div class="col-md-auto">
                                                <div class="avatar-md">
                                                    <div class="avatar-title bg-white rounded-circle">
                                                        <img src="/storage/assets/home-heart-line.svg" alt="" class="avatar-xs">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md">
                                                <div>
                                                    <h4 class="fw-bold">{{ project.name }}</h4>
                                                    <div class="hstack gap-3 flex-wrap">
                                                        <div><i class="ri-building-line align-bottom me-1"></i>Total Units: {{ project.total_units }}</div>
                                                        <div class="vr"></div>
                                                        <div>Start Date : <span class="fw-medium">{{ formatCreatedAt(project.start_date) }}</span></div>
                                                        <div class="vr"></div>
                                                        <div>Created Date : <span class="fw-medium">{{ formatCreatedAt(project.created_at) }}</span></div>
                                                        <div class="vr"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-auto">
                                        <div class="hstack gap-1 flex-wrap">
                                            <div class="dropdown">
                                                <button class="btn btn-icon btn-sm fs-22 text-primary dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ri-equalizer-line"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><Link class="dropdown-item" :href="'/project/'+project.slug+'/edit'"><i class="ri-pencil-fill text-muted me-2 align-bottom"></i>Edit</Link></li>
                                                    <li><Link class="dropdown-item" href="/project"><i class="ri-eye-fill text-muted me-2 align-bottom"></i>View List</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <ul class="nav nav-tabs-custom border-bottom-0" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link fw-semibold" data-bs-toggle="tab" href="#overview" role="tab">
                                            Overview
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link fw-semibold active" data-bs-toggle="tab" href="#block" role="tab">
                                            Block & Lot
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link fw-semibold" data-bs-toggle="tab" href="#clients" role="tab">
                                            Clients
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <!-- end card body -->
                        </div>
                    </div>
                    <!-- end card -->
                </div>
                <!-- end col -->
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="tab-content text-muted">
                    <div class="tab-pane fade" id="overview" role="tabpanel">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row gx-lg-5">
                                                <div class="col-xl-4 col-md-8 mx-auto">
                                                    <div class="product-img-slider sticky-side-div">
                                                        <div class="swiper product-thumbnail-slider p-2 rounded bg-light">
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
                                                                        <img @click="openImage(slide.file_name)" :src="'/storage/project/images/'+slide.file_name" class="img-fluid d-block swiper-slide-image"/>
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
                                                <div class="col-xl-8">
                                                    <div class="mt-xl-0 mt-5">
                                                        <div class="text-muted">
                                                            <h6 class="mb-3 fw-semibold text-uppercase">Description:</h6>
                                                            <div class="row">
                                                                <div class="col-lg-10 col-sm-6">
                                                                    <p v-html="project.description"></p>
                                                                </div>
                                                            </div>

                                                            <div class="pt-3 border-top border-top-dashed mt-4">
                                                                <div class="row gy-5 mb-5">
                                                                    <div class="col-lg-2 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">Total Units :</p>
                                                                            <h5 class="fs-15 mb-0">{{ project.total_units }}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">Groundbreaking Date :</p>
                                                                            <h5 class="fs-15 mb-0">{{ formatCreatedAt(project.start_date) }}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-6 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">Address :</p>
                                                                            <h5 class="fs-15 mb-0">{{ capitalizedString(project.land.address ? project.land.address : '') }} Brgy. {{ capitalizedString(project.land.barangay)}}, {{ capitalizedString(project.land.municipality)  }}, {{ capitalizedString(project.land.province) }}, {{ project.land.region }}</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="pt-3 border-top border-top-dashed mt-4">
                                                                <h6 class="mb-3 fw-semibold text-uppercase">Resources</h6>
                                                                <div class="row g-3">
                                                                    <div class="col-xxl-4 col-lg-6" v-for="attachment in project.attachments">
                                                                        <div class="border rounded border-dashed p-2">
                                                                            <div class="d-flex align-items-center">
                                                                                <div class="flex-shrink-0 me-3">
                                                                                    <div class="avatar-sm">
                                                                                        <div class="avatar-title bg-light text-black rounded fs-24">
                                                                                            <img v-if="isImage(attachment.file_name)" :src="'/storage/project/attachements/'+attachment.file_name" class="img-fluid d-block"/>
                                                                                            <i v-else class="ri-attachment-line"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="flex-grow-1 overflow-hidden">
                                                                                    <h5 class="fs-13 mb-1"><a href="#" class="text-body text-truncate d-block">{{ attachment.file_name }}</a></h5>
                                                                                    <div>{{ formatSize(attachment.size) }}</div>
                                                                                </div>
                                                                                <div class="flex-shrink-0 ms-2">
                                                                                    <a :href="'/storage/project/attachements/'+attachment.file_name" download class="btn btn-icon text-muted btn-sm fs-18">
                                                                                        <i class="ri-download-2-line"></i>
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
                                            </div>
                                        </div>
                                        <!-- end card body -->
                                    </div>
                                    <!-- end card -->
                                </div>
                                <!-- ene col -->
                            </div>
                            <!-- end row -->
                    </div>
                    <div class="tab-pane fade show active" id="block" role="tabpanel">
                            <!-- <div class="row g-4 mb-3">
                                <div class="col-sm-auto">
                                    <div>
                                        <button class="btn btn-primary" @click="openModal"><i class="ri-add-line align-bottom me-1"></i> Add New</button>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="d-flex justify-content-sm-end gap-2">
                                        <div>
                                            <select class="form-select mb-3" aria-label="Default select example">
                                                <option selected>Phase</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <div class="row">
                                <div class="col-xl-3 col-lg-4">
                                    <div class="card">
                                        <div class="card-header">
                                            <div class="d-flex">
                                                <div class="flex-grow-1">
                                                    <h5 class="fs-16">Filter By:</h5>
                                                </div>
                                                <!-- <div class="flex-shrink-0">
                                                    
                                                </div> -->
                                            </div>

                                            <!-- <div class="filter-choices-input">
                                                <input class="form-control" data-choices data-choices-removeItem type="text" id="filter-choices-input" value="T-Shirts" />
                                            </div> -->
                                        </div>
                                        <div class="accordion accordion-flush filter-accordion">

                                            <div class="card-body border-bottom">
                                                <div>
                                                    <p class="text-muted text-uppercase fs-12 fw-medium mb-2">Phase</p>
                                                    <Multiselect
                                                        class="form-select mb-3"
                                                        v-model="selectedPhase"
                                                        placeholder="Select Phase"
                                                        :options="phaseFilter"
                                                        :searchable="true"
                                                        track-by="label"
                                                    />
                                                </div>
                                            </div>

                                            <div class="card-body border-bottom">
                                                <p class="text-muted text-uppercase fs-12 fw-medium mb-4">Blocks</p>
                                                <Multiselect
                                                    class="form-select mb-3"
                                                    v-model="selectedBlock"
                                                    placeholder="Select Block"
                                                    :options="blockFilter"
                                                    :searchable="true"
                                                    track-by="label"
                                                    :disabled="!selectedPhase"
                                                />
                                            </div>
                                            <!-- end accordion-item -->
                                        </div>
                                    </div>
                                <!-- end card -->
                                 </div>
                                 <div class="col-xl-9 col-lg-8">
                                    <div>
                                        <div class="card">
                                            <div class="card-header border-0">
                                                <div class="row g-4">
                                                    <div class="col-sm-auto">
                                                        <button class="btn btn-soft-primary w-100" @click="openModal"><i class="ri-add-line align-bottom"></i> Generate Phase & Blocks</button>
                                                    </div>
                                                    <div class="col-sm-auto">
                                                        <div>
                                                            <a class="btn btn-primary" @click="openModalLot"><i class="ri-add-line align-bottom me-1"></i> Generate Lot</a>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-auto">
                                                        <div>
                                                            <button v-if="selectedRows?.length > 0" class="btn btn-soft-danger" @click="deleteSelectedLot"><i class="ri-delete-bin-2-line"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card-header">
                                                <div class="row align-items-center">
                                                    <div class="col">
                                                        <ul class="nav nav-tabs-custom card-header-tabs border-bottom-0" role="tablist">
                                                            <li class="nav-item">
                                                                <a class="nav-link active fw-semibold" data-bs-toggle="tab" href="#lot" role="tab" @click="tabs('lot')">
                                                                    Lot <span class="badge bg-danger-subtle text-danger align-middle rounded-pill ms-1">{{ phaseDetails ? phaseDetails.length : 0 }}</span>
                                                                </a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link fw-semibold" data-bs-toggle="tab" href="#blockVal" role="tab" @click="tabs('block')">
                                                                    Block <span class="badge bg-danger-subtle text-danger align-middle rounded-pill ms-1">{{ blockVal ? blockVal.length : 0 }}</span>
                                                                </a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link fw-semibold" data-bs-toggle="tab" href="#phaseVal" role="tab" @click="tabs('phase')">
                                                                    Phase <span class="badge bg-danger-subtle text-danger align-middle rounded-pill ms-1">{{ project.phase ? project.phase.length : 0 }}</span>
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
                                            <!-- end card header -->
                                            <div class="card-body">

                                                <div class="tab-content text-muted">
                                                    <!-- end tab pane -->

                                                    <div class="tab-pane active" id="lot" role="tabpanel">
                                                        <div class="table-card gridjs-border-none" ref="gridContainer"></div>
                                                    </div>
                                                    <!-- end tab pane -->

                                                    <div class="tab-pane" id="blockVal" role="tabpanel">
                                                        <div class="py-4 text-center">
                                                            <div class="table-card gridjs-border-none" ref="gridContainerBlock"></div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane" id="phaseVal" role="tabpanel">
                                                        <div class="py-4 text-center">
                                                            <div class="table-card gridjs-border-none" ref="gridContainerPhase"></div>
                                                        </div>
                                                    </div>
                                                    <!-- end tab pane -->
                                                </div>
                                                <!-- end tab content -->

                                            </div>
                                            <!-- end card body -->
                                        </div>
                                        <!-- end card -->
                                    </div>
                                </div>
                            </div>
                            <!--Modal-->
                            <!-- Grids in modals -->
                            <div class="modal fade" v-if="showModal" :class="{ 'show': showModal }" tabindex="-1" role="dialog">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Generate Phase and Block</h5>
                                            <button type="button" class="btn-close" @click="closeModalPB" aria-label="Close"></button>
                                        </div>
                                        <form class="tablelist-form" autocomplete="off"  @submit.prevent="submitHandler">
                                            <div class="modal-body">
                                                <div>
                                                    <AlertMsg v-if="form.errors.error" :type="'danger'" :msg="form.errors.error"/>
                                                    <div v-for="(phase, index) in phases" :key="index" class="row gy-4">
                                                        <div class="col-sm-5">
                                                        <div>
                                                            <label class="form-label">Phase Name</label>
                                                            <input type="text" v-model="form.phase[index]" class="form-control" required>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4 mb-3">
                                                        <div>
                                                            <h5 class="fs-13 fw-medium text-muted">Blocks</h5>
                                                            <div class="input-step light mt-1">
                                                                <button type="button" class="minus" @click="decrementBlock(index)">–</button>
                                                                <input type="number" :value="blocks[index]" min="0" max="100" readonly>
                                                                <button type="button" class="plus" @click="incrementBlock(index)">+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-2 pt-4">
                                                        <div>
                                                            <button type="button" class="btn btn-outline-danger btn-icon waves-effect waves-light" v-show="index!==0" @click="index !== 0 && removePhase(index)" >
                                                            <span class="icon-off"><i class="ri-delete-bin-line"></i> </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div class="colo-sm-6">
                                                        <button type="button" class="btn btn-outline-success waves-effect waves-light btn-sm" @click="addPhase" >
                                                            <span class="icon-off"><i class="ri-add-line"></i> Add</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <div class="hstack gap-2 justify-content-end">
                                                    <button type="button" class="btn btn-light" @click="closeModalPB">Close</button>
                                                    <button type="submit" class="btn btn-success btn-load" @click="submitForm">
                                                        <span class="d-flex align-items-center">
                                                            <span class="spinner-border flex-shrink-0" v-if="form.processing">
                                                                <span class="visually-hidden">Loading...</span>
                                                            </span>
                                                            <span class="flex-grow-1 ms-2">
                                                                Generate
                                                            </span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div class="modal fade" v-if="showModalLot" :class="{ 'show': showModalLot }" tabindex="-1" role="dialog">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Generate Lot</h5>
                                            <button type="button" class="btn-close" @click="closeModalLot" aria-label="Close"></button>
                                        </div>
                                        <form class="tablelist-form" autocomplete="off"  @submit.prevent="submitHandler">
                                            <div class="modal-body">
                                                <div>
                                                    <AlertMsg v-if="formLot.errors.error" :type="'danger'" :msg="formLot.errors.error"/>
                                                    <div class="row gy-4">
                                                        <div class="col-sm-4">
                                                            <div>
                                                                <label class="form-label">Phase</label>
                                                                <Multiselect
                                                                    class="form-select mb-3"
                                                                    v-model="selectedPhaseLot"
                                                                    placeholder="Select..."
                                                                    :options="phaseFilter"
                                                                    :searchable="true"
                                                                    track-by="label"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-4">
                                                            <div>
                                                                <label class="form-label">Block</label>
                                                                <Multiselect
                                                                    class="form-select mb-3"
                                                                    v-model="selectedBlockLot"
                                                                    placeholder="Select..."
                                                                    :options="blockFilter"
                                                                    :searchable="true"
                                                                    track-by="label"
                                                                    :disabled="!selectedPhaseLot"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-4 mb-3">
                                                            <div>
                                                                <h5 class="fs-13 fw-medium text-muted">Lot</h5>
                                                                <div class="input-step light mt-1">
                                                                    <button type="button" class="minus" @click="decrementBlockLot">–</button>
                                                                    <input type="number" :value="blocksLot" min="1" max="100" readonly>
                                                                    <button type="button" class="plus" @click="incrementBlockLot">+</button>
                                                                </div>
                                                            </div>
                                                        </div>
    
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <div class="hstack gap-2 justify-content-end">
                                                    <button type="button" class="btn btn-light" @click="closeModalLot">Close</button>
                                                    <button type="submit" class="btn btn-success btn-load" @click="submitFormLot">
                                                        <span class="d-flex align-items-center">
                                                            <span class="spinner-border flex-shrink-0" v-if="formLot.processing">
                                                                <span class="visually-hidden">Loading...</span>
                                                            </span>
                                                            <span class="flex-grow-1 ms-2">
                                                                Generate
                                                            </span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div class="modal fade" id="showModalLotDetails" data-bs-backdrop="static" style="display: none;">
                                <div class="modal-dialog modal-dialog-centered modal-xl">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">{{ modalTitle }} Details</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="handleModalShown"></button>
                                        </div>
                                        <form class="tablelist-form" autocomplete="off"  @submit.prevent="submitHandler">
                                            <div class="modal-body">
                                                <div>
                                                    <div class="row gy-2">
                                                        <div class="col-lg-6">
                                                            <label class="form-label">Name (Optional)</label>
                                                            <input type="text" class="form-control" :class="{'is-invalid': formLotDetails.errors.lot_name }" v-model="formLotDetails.lot_name" id="size">
                                                            <div class="invalid-feedback">{{ formLotDetails.errors.lot_name }}</div>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <div class="form-group">
                                                                <label for="size" class="form-label">Size (sq m)</label>
                                                                <input type="number" class="form-control" :class="{'is-invalid': formLotDetails.errors.size }" v-model="formLotDetails.size" id="size">
                                                                <div class="invalid-feedback">{{ formLotDetails.errors.size }}</div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <div class="form-group">
                                                                <label class="form-label">Category</label>
                                                                <select class="form-select mb-3" v-model="formLotDetails.category" :class="{'is-invalid': formLotDetails.errors.category }">
                                                                    <option value="Inner Lot">Inner Lot</option>
                                                                    <option value="Corner Lot">Corner Lot</option>
                                                                </select>
                                                                <div class="invalid-feedback">{{ formLotDetails.errors.category }}</div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 mb-3">
                                                            <div class="form-group">
                                                                <label for="details" class="form-label">Description</label>
                                                                <ckeditor :editor="editor" v-model="formLotDetails.description" :config="editorConfig"></ckeditor>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 mb-3">
                                                            <div class="form-group">
                                                                <label class="form-label">Featured Images</label>
                                                                <div ref="featuredImg" class="dropzone custom-dropzone" style="justify-content: center;max-height: 120px!important; min-height: 120px!important;"></div>
                                                                <div class="preview-container" ref="featuredPreview"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <div class="hstack gap-2 justify-content-end">
                                                    <button type="button" class="btn btn-light" data-bs-dismiss="modal" @click="handleModalShown">Close</button>
                                                    <button type="submit" class="btn btn-success btn-load" @click="submitFormLotDetails">
                                                        <span class="d-flex align-items-center">
                                                            <span class="spinner-border flex-shrink-0" v-if="formLotDetails.processing">
                                                                <span class="visually-hidden">Loading...</span>
                                                            </span>
                                                            <span class="flex-grow-1 ms-2">
                                                                Update
                                                            </span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!--end Modal-->
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
    import { Link, Head, useForm, router  } from "@inertiajs/vue3";
    import Layout from "@/Layouts/main.vue";
    import { ref, onMounted, watchEffect, watch } from 'vue';
    import { Swiper, SwiperSlide } from "swiper/vue";
    import {  FreeMode,Autoplay, Pagination, Navigation, Thumbs  } from 'swiper/modules';
    import "swiper/swiper-bundle.css";
    import Multiselect from '@vueform/multiselect';
    import '@vueform/multiselect/themes/default.css';
    import  debounce from "lodash/debounce";
    import { Grid, h } from "gridjs";
    import "gridjs/dist/theme/mermaid.css";
    import AlertMsg from '../../Components/AlertMsg.vue';
    import Swal from 'sweetalert2/dist/sweetalert2';
    import 'sweetalert2/dist/sweetalert2.min.css';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import Dropzone from "dropzone";

    const thumbsSwiper = ref(null);
    const modalImage = ref(null);

    const selectedPhase = ref(null);
    const selectedBlock = ref(null);

    let grid;
    let gridBlock;
    let gridPhase;

    const gridContainer = ref(null);
    const gridContainerBlock = ref(null);
    const gridContainerPhase = ref(null);

    const showModal = ref(false);
    const showModalLot = ref(false);
    const showModalLotDetails = ref(false);

    const phases = ref([null]);
    const blocks = ref([5]);
    const blocksLot = ref([5]);
    const initialBlockValue = 5; // Initial block value

    const selectedPhaseLot = ref(null);
    const selectedBlockLot = ref(null);

    const selectedRows = ref([]);
    const selectedTab = ref();

    const modalTitle = ref(null);

    const featuredImg = ref(null);
    let featuredPreview = ref(null);

    let featuredDrop;

    let props = defineProps({
        project:Object,
        phaseFilter: Object,
        blockFilter: Object,
        phaseDetails: Object,
        blockVal: Object,
    })

    let form = useForm({
        phase: [null],
        block: [initialBlockValue],
    })

    let formLot = useForm({
        phase:null,
        block:null,
        lot:initialBlockValue,
    })

    let formLotDetails = useForm({
        id:null,
        lot_name: null,
        size:null,
        category: null,
        description: '',
        images:[],
        old_images:[],
    })

    let formDelLot = useForm({
        id: null,
    })

    const editor = ClassicEditor;
    const editorConfig = {
            toolbar: {
                items: [
                    'bold',
                    'italic',
                    'numberedList',
                    'bulletedList',
                    'indent',
                    'outdent', 
                    'link',
                    'undo',
                    'redo'
                ]
            }
    }
    
    // Function to increment the block value
    const incrementBlock = (index) => {
        blocks.value[index]++;
        form.block[index] = blocks.value[index];
    };

    // Function to decrement the block value
    const decrementBlock = (index) => {
        if (blocks.value[index] > 1) {
            blocks.value[index]--;
            form.block[index] = blocks.value[index];
        }
    };

    // Function to add a new phase
    const addPhase = () => {
        phases.value.push(null); // Adding null to keep the first phase
        blocks.value.push(initialBlockValue); // Start new block at 5
        form.block.push(initialBlockValue);
        form.phase.push(null);
    };
    const removePhase = (index) => {
        phases.value.splice(index, 1);
        blocks.value.splice(index, 1);
        form.block.splice(index, 1);
        form.phase.splice(index, 1);
    };

    const incrementBlockLot = () => {
        blocksLot.value++;
        formLot.lot = blocksLot.value;
    };

    const decrementBlockLot = () => {
        if (blocksLot.value > 1){
            blocksLot.value--;
            formLot.lot = blocksLot.value;
        } 
    };

    const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
    };

    const pagination = {
        el: '.swiper-pagination'
    };

    const navigation = {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    };

    const handleModalShown = () => {
        let url = '/project/'+props.project.slug;
        router.visit(url, { preserveScroll: true })
    };

    const openImage = (image) => {
        modalImage.value = image;
    };

    const closeModal = () => {
        modalImage.value = null;
    };

    const modules = [FreeMode, Thumbs, Autoplay, Pagination, Navigation];

    const formatCreatedAt = (dateString) => {
        const date = new Date(dateString);
        const options = {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        };

        // Check if the parsed date string includes time-related information
        const hasTime = /\d{2}:\d{2}/.test(dateString);

        if (hasTime) {
            options.hour = 'numeric';
            options.minute = 'numeric';
            options.hour12 = true;
        }

        return date.toLocaleDateString('en-US', options);
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

    const capitalizedString = (inputString) => {
        return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
    };

    const swalBtn = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-primary mr-2',
            cancelButton: 'btn btn-link',
            container: 'modal-lesson',
        },
        buttonsStyling: false
    })

    const customPreview = `
        <ul class="list-unstyled mb-0" id="dropzone-preview">
            <li class="mt-2" id="dropzone-preview-list">
                <!-- This is used as the file preview template -->
                <div class="border rounded">
                    <div class="d-flex p-2">
                        <div class="flex-shrink-0 me-3">
                            <div class="avatar-sm rounded">
                                <img src="#" alt="Project-Image" data-dz-thumbnail class="img-fluid rounded d-block" />
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <div class="pt-1">
                                <h5 class="fs-14 mb-1" data-dz-name>&nbsp;</h5>
                                <p class="fs-13 text-muted mb-0" data-dz-size></p>
                                <strong class="error text-danger" data-dz-errormessage></strong>
                            </div>
                        </div>
                        <div class="flex-shrink-0 ms-3">
                            <button data-dz-remove class="btn btn-sm btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        `

    onMounted(() => {
        const formattedDataPhase = formatProjectDataPhase(props.project.phase)
        const formattedDataBlock = formatProjectDataBlock(props.blockVal)
        const formattedData = formatProjectData(props.phaseDetails);

        grid = new Grid({
            columns: [
            {
                id: 'checkboxCol',
                width: '40px',
                name: h('input', { type: 'checkbox', className: 'form-check-input', onChange: event => selectRows(event,'lot') }),
                align: 'center',
                formatter: (cell, row) => {
                    return h('input', {
                        type: 'checkbox',
                        className: 'form-check-input',
                        onClick: event => handleLot(event, row, 'lot')
                    });
                },
                sort: false 
            },
            {name:'Lot Number', hidden: true},
            {
                id: 'nameColumn',
                name: 'Name',
                formatter: (cell, row) => {
                    const blockValue = row.cells[7].data; 
                    const phaseValue = row.cells[8].data; 
                    const lot = row.cells[1].data;
                    return h('span', {}, [
                        h('div', { className: 'd-flex align-items-center gap-3' }, [
                            h('div', { className: 'avatar-sm' }, [
                                h('div', { className: 'avatar-title rounded bg-success-subtle text-success fs-4' }, [
                                    lot
                                ])
                            ]),
                            h('div', { className: 'flex-grow-1' }, [
                                h('h5', { className: 'fs-14 mb-1' }, [
                                    h('a', { className: 'text-body' }, [
                                        cell
                                    ])
                                ]),
                                h('p', { className: 'text-muted mb-0' }, [
                                    h('span', { className: 'fw-medium' }, [
                                        phaseValue + ', ' +blockValue
                                    ])
                                ])
                            ])
                        ])
                    ]);
                }
            },
                
                {id:'sizeColumn',name: 'Size (sq m)',},
                {id: 'detailsColumn',name: 'Category', },
                {
                    id: 'statusColumn',
                    name: 'Status',
                    align: 'center',
                    width: '75px',
                    formatter: (cell, row) => {
                        const statusText = cell;
                        return  h('span', { className: 'badge bg-success',  onClick: () => editModal(row) },[
                            statusText
                        ])
                    },
                    sort: false    
                }, 
                {id:'dateColumn',name: 'Date Created'},
                {id:'blockColumn',name: 'Block', hidden:true},
                {id: 'phaseColumn',name: 'Phase', hidden: true},
                {name: 'Description', hidden: true},
                {name:'Images', hidden:true},
                {
                    id: 'actionsColumn',
                    name: 'Actions',
                    align: 'center',
                    width: '75px',
                    formatter: (cell, row) => {
                        return  h('a', { 'data-bs-target': '#showModalLotDetails', 'data-bs-toggle': 'modal', href: 'javascript:void(0);', className: 'text-muted',  onClick: () => editModalLotDetails(row) },[
                            h('i', { className: 'ri-pencil-fill fs-16' }),
                        ])
                    },
                    sort: false    
                }  
            ],
            sort: false,
            theme: 'mermaid',
            search: true,
            pagination: {
                limit: 10
            },
            data: function(){
                return new Promise(function (resolve){
                    setTimeout(function(){
                        resolve(formattedData);
                    },1000)
                })
            },
        }).render(gridContainer.value);

        gridBlock = new Grid({
            columns: [
                {
                    id: 'checkboxCol',
                    width: '40px',
                    name: h('input', { type: 'checkbox', className: 'form-check-input', onChange: event => selectRows(event,'block') }),
                    align: 'center',
                    formatter: (cell, row) => {
                        return h('input', {
                            type: 'checkbox',
                            className: 'form-check-input',
                            onClick: event => handleLot(event, row, 'block')
                        });
                    },
                    sort: false 
                },
                {
                    id: 'nameColumn',
                    name: 'Name',
                    formatter: (cell, row) => {
                        const phaseValue = row.cells[3].data; // Access block column data directly from the row object
                        return h('span', {}, [
                            h('div', { className: 'd-flex align-items-center gap-3' }, [
                                h('div', { className: 'avatar-sm' }, [
                                    h('div', { className: 'avatar-title rounded bg-success-subtle text-success fs-4' }, [
                                        cell
                                    ])
                                ]),
                                h('div', { className: 'flex-grow-1' }, [
                                    h('h5', { className: 'fs-14 mb-1' }, [
                                        h('a', { className: 'text-body' }, [
                                            'Block '+cell
                                        ])
                                    ]),
                                    h('p', { className: 'text-muted mb-0' }, [
                                        h('span', { className: 'fw-medium' }, [
                                            phaseValue
                                        ])
                                    ])
                                ]),
                               
                            ])
                        ]);
                    }
                },
                {name: 'Date Created'},
                {
                    name: 'Phase Nmae',
                    hidden: true,
                }
            ],
            sort: false,
            theme: 'mermaid',
            search: true,
            pagination: {
                limit: 10
            },
            data: function(){
                return new Promise(function (resolve){
                    setTimeout(function(){
                        resolve(formattedDataBlock);
                    },2000)
                })
            },
        }).render(gridContainerBlock.value);

        gridPhase = new Grid({
            columns: [
                {
                    id: 'checkboxCol',
                    width: '40px',
                    name: h('input', { type: 'checkbox', className: 'form-check-input', onChange: event => selectRows(event,'phase') }),
                    align: 'center',
                    formatter: (cell, row) => {
                        return h('input', {
                            type: 'checkbox',
                            className: 'form-check-input',
                            onClick: event => handleLot(event, row, 'phase')
                        });
                    },
                    sort: false 
                },
                {
                    id: 'nameColumn',
                    name: 'Name'
                },
                {name: 'Date Created'},
                {
                    name: 'Phase Nmae',
                    hidden: true,
                }
            ],
            sort: false,
            theme: 'mermaid',
            search: true,
            pagination: {
                limit: 10
            },
            data: function(){
                return new Promise(function (resolve){
                    setTimeout(function(){
                        resolve(formattedDataPhase);
                    },2000)
                })
            },
        }).render(gridContainerPhase.value);

        if(featuredImg.value !== null){
            featuredDrop = new Dropzone(featuredImg.value,{
                autoProcessQueue : false,
                previewTemplate: customPreview,
                uploadMultiple: true,
                url: 'http://localhost:3011/file/',
                method: 'POST',
                acceptedFiles: "image/jpeg,image/png,image/jpg",
                previewsContainer: featuredImg.value.parentElement.querySelector('.preview-container'),
                init: function () {
                    this.on("addedfile", function (file) {
                        formLotDetails.images.push(file);
                    });

                    this.on("removedfile", function (file) {
                        formLotDetails.images.splice(file, 1);
                        formLotDetails.old_images.push(file);
                    });

                }
            });

            if(featuredImg.value.querySelector('.dz-default')) {
                featuredImg.value.querySelector('.dz-default').innerHTML = `
                    <div style="display: flex; justify-content: center;">
                        <i class="display-4 text-muted ri-upload-cloud-2-fill"></i>
                    </div>
                    <small style="display: flex; justify-content: center;" class="form-text text-muted mb-2 fs-5"><strong>Drop files here or click to upload.</strong></small>
                `
            }
        }

    })

    const formatProjectDataPhase = phase => {
        return phase.map(phase => [
            phase.id,
            phase.phase_name,
            formatCreatedAt(phase.created_at),
           
        ]);
    };

    const formatProjectDataBlock = block => {
        return block.map(block => [
            block.id,
            block.block_number,
            formatCreatedAt(block.created_at),
            block.phase.phase_name,
        ]);
    };

    const formatProjectData = lot => {
        return lot.map(lot => [
            lot.id,
            lot.lot_number,
            lot.lot_name,
            lot.size,
            lot.category,
            lot.status,
            formatCreatedAt(lot.created_at),
            lot.blk_name,   
            lot.phase_name,
            lot.description,
            lot.images,
        ]);
    };

    const submitFormLot = () => {

        formLot.post('/project/'+props.project.slug+'/lot',{
            onSuccess: (page) =>{
                showModalLot.value = false;
                selectedPhaseLot.value = null;
                selectedBlockLot.value = null;

                formLot.reset();
                blocksLot.value = initialBlockValue;

                swalBtn.fire(
                    'Success!',
                    'The data has been saved.',
                    'success'
                )

                fetchDataAndUpdateGrid('lot',formatProjectData(props.phaseDetails));
            },
        })
    }

    watch([selectedPhase, selectedBlock], debounce(function ([phaseValue, blockValue]) {
        
        const params = {};
        
        if (phaseValue) {
            params.phase = phaseValue;
        }else{
            selectedBlock.value = null;
        }
        
        if (blockValue) {
            params.block = blockValue;
        }
        
        router.get('/project/' + props.project.slug, params, {
                preserveState: true,
                preserveScroll: true,
                replace: true,
                onSuccess: () =>{
                    fetchDataAndUpdateGrid('lot',formatProjectData(props.phaseDetails));
                }
            });
    }, 500));

    watch([selectedPhaseLot, selectedBlockLot], debounce(function ([phaseValue, blockValue]) {
        
        const params = {};
        
        if (phaseValue) {
            params.phase = phaseValue;
            formLot.phase = phaseValue;
        }else{
            selectedBlockLot.value = null;
            formLot.phase = null;
            formLot.block = null;
        }
        
        if (blockValue) {
            params.block = blockValue;
            formLot.block = blockValue;
        }else{
            formLot.block = null;
        }
        
        router.get('/project/' + props.project.slug, params, {
            preserveState: true,
            preserveScroll: true,
            replace: true
        });
    }, 500));

    const openModal = () => {
        showModal.value = true;
        form.phase = [];
        form.block = [];
        blocks.value.push(initialBlockValue); // Start new block at 5
        form.block.push(initialBlockValue);
        form.errors.error = null;
        phases = [];
    };

    const openModalLot = () => {
        form.errors.error = null;
        showModalLot.value = true;
    }

    const closeModalLot = () => {
        showModalLot.value = false;
    }

    const closeModalPB = () =>{
        showModal.value = false;
    }

    const tabs = (tab) =>{
        if(tab == 'lot'){
            fetchDataAndUpdateGrid('lot', formatProjectData(props.phaseDetails))
        }else if(tab =='block'){
            fetchDataAndUpdateGrid('block',formatProjectDataBlock(props.blockVal))
        }else{
            fetchDataAndUpdateGrid('phase',formatProjectDataPhase(props.project.phase));
        }

        selectedTab.value = tab;
        selectedRows.value = [];
    }

    const fetchDataAndUpdateGrid = (tab, details) => {

        const formattedData = details;
        let gridLoader = gridPhase;

        if(tab == 'lot'){
            gridLoader = grid;
        }else if(tab =='block'){
            gridLoader = gridBlock;
        }else{
            gridLoader = gridPhase;
        }

        gridLoader.updateConfig({
            data: function(){
                return new Promise(function (resolve){
                    setTimeout(function(){
                        resolve(formattedData);
                    },1000)
                })
            }
        }).forceRender();
    }

    const editModalLotDetails = (row) =>{


        formLotDetails.id = row.cells[0].data;
        formLotDetails.lot_name = row.cells[2].data;
        formLotDetails.description = row.cells[9].data ? row.cells[9].data : '';
        formLotDetails.size = row.cells[3].data;
        formLotDetails.category = row.cells[4].data;
        formLotDetails.images = row.cells[10].data;

        for (let i = 0; i < formLotDetails.images.length; i++) {

            const id = formLotDetails.images[i].id;
            const names = formLotDetails.images[i].file_name;
            const size = formLotDetails.images[i].size;

            const mockFile = { id: id, name: names, size: size };

            mockFile.dataURL = '/storage/project/lot/' + encodeURIComponent(names);

            featuredDrop.options.addedfile.call(featuredDrop, mockFile);
            featuredDrop.emit("thumbnail", mockFile, mockFile.dataURL);
            featuredDrop.emit("complete", mockFile);
            
        }

        modalTitle.value = row.cells[2].data+', '+row.cells[7].data+', '+row.cells[8].data;

    }

    const submitFormLotDetails = () => {
        formLotDetails.post('/project/lot/'+formLotDetails.id+'/update',{
            onSuccess: () =>{
                const closeButton = document.querySelector('#showModalLotDetails .btn-close');
                
                if (closeButton) {
                    closeButton.click();
                }
                
                formLotDetails.reset();
                fetchDataAndUpdateGrid('lot',formatProjectData(props.phaseDetails))

                swalBtn.fire(
                    'Success!',
                    'The data has been updated.',
                    'success'
                )

            },
            preserveScroll: true,
        })
    }

    const handleLot = (event, row, tab) => {
        selectedTab.value = tab;

        if (event.target.checked) {
            selectedRows.value.push(row.cells[0].data);
        } else {
            const index = selectedRows.value.indexOf(row.cells[0].data);
            if (index !== -1) {
                selectedRows.value.splice(index, 1);
            }
        }
    };

    const selectRows = (event,tab) => {
        selectedTab.value = tab;
        const isChecked = event.target.checked;

        if(tab == 'lot'){
            selectedRows.value = isChecked ? props.phaseDetails.map(lot => lot.id) : [];
        }else if(tab == 'block'){
            selectedRows.value = isChecked ? props.blockVal.map(lot => lot.id) : [];
        }else{
            selectedRows.value = isChecked ? props.project.phase.map(lot => lot.id) : [];
        }

        const checkboxes = document.querySelectorAll('.form-check-input');
        checkboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
        });
    };

    const deleteSelectedLot = () => {
        swalBtn.fire({
            title: 'Are you sure?',
            text: "Are you Sure You want to Delete this data ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                formDelLot.id = selectedRows;
                let url;
                
                if(selectedTab.value == 'lot'){
                    url = '/lot/delete';
                }else if(selectedTab.value == 'block'){
                    url = '/block/delete';
                }else{
                    url = '/phase/delete';
                }

                formDelLot.delete(url,{
                    id: selectedRows.value,
                    onSuccess: () => {
                       
                        if(selectedTab.value == 'lot'){
                            fetchDataAndUpdateGrid('lot',formatProjectData(props.phaseDetails))
                        }else if(selectedTab.value == 'block'){
                            fetchDataAndUpdateGrid('block',formatProjectDataBlock(props.blockVal))
                        }else{
                            fetchDataAndUpdateGrid('phase',formatProjectDataPhase(props.project.phase))
                        }
                        
                        formDelLot.reset();
                        selectedRows.value = [];
                    }
                });
            }
        })
       
    }

    const closeModalLotDetails = () => {
        showModalLotDetails.value = false;
    }

    const submitForm = () => {
        form.post('/project/'+props.project.slug+'/phase',{
            onSuccess: () => { 
                showModal.value = false;
                props.message = null;
                blocks.value.push(initialBlockValue); // Start new block at 5
                form.block.push(initialBlockValue);
                form.phase = [];

                swalBtn.fire(
                    'Success!',
                    'The data has been saved.',
                    'success'
                )

                if(selectedTab.value =='lot'){
                    fetchDataAndUpdateGrid('lot', formatProjectData(props.phaseDetails))
                }else if(selectedTab.value =='block'){
                    fetchDataAndUpdateGrid('block',formatProjectDataBlock(props.blockVal));
                }else{
                    fetchDataAndUpdateGrid('phase',formatProjectDataPhase(props.project.phase));
                }
                
            },
        });
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
.multiselect.is-disabled {
    background-color: #eee!important; /* Set your desired gray background color */
    /* Add any other styling for disabled state */
}

.gridjs-input {
    padding: 10px 26px !important;
}

</style>