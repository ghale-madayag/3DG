<template>
    <div class="row g-0 text-center text-sm-start align-items-center mb-4">
            <div class="col-sm-6">
                <div>
                    <p class="mb-sm-0 text-muted">Showing <span class="fw-semibold">{{ from }}</span> to <span class="fw-semibold">{{ to }}</span> of <span class="fw-semibold text-decoration-underline">{{ total }}</span> entries</p>
                </div>
            </div>
            <!-- end col -->
            <div class="col-sm-6">
                <ul class="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                    <template v-for="link in links">
                        <li class="page-item" :class="link.url ? '' : 'disabled'">
                            <Component :is="link.url ? 'Link' : 'span'" :class="link.active ? 'text-white bg-primary' : ''" class="page-link" :href="link.url" preserve-scroll preserve-state>
                                <span v-html="link.label"></span>
                            </Component>
                        </li>
                    </template>
                </ul>
            </div><!-- end col -->
        </div>
</template>

<script setup>
    let props = defineProps({
        links: Object,
        from: Number,
        to: Number,
        total: Number
    })

</script>
