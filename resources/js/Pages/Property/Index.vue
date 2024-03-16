<template>
    <Layout>
        <Head title="Property">
            <meta name="viewport" content="your content" />
        </Head>
        <PageHeader title="Property" pageTitle="Dashboard" />
        
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title mb-0 flex-grow-1">List of Property</h4>
                    </div><!-- end card header -->
                    <div class="card-body">
                      <!-- <div ref="gridContainer"></div> -->
                    </div><!-- end card-body -->
                </div><!-- end card -->
            </div>
            <!-- end col -->
        </div>
    </Layout>
</template>
<script setup>
  import { ref, onMounted } from 'vue';
  import { Link, Head } from "@inertiajs/vue3";
  import Layout from "@/Layouts/main.vue";
  import PageHeader from "@/Components/page-header.vue";
  import { Grid } from "gridjs";
  import "gridjs/dist/theme/mermaid.css";

  

//   const gridContainer = ref(null);

//   onMounted(() => {
//     new Grid({
//         columns: ["Name", "Phone", "Email", "Address", "Other Details"],
//         sort: true,
//         pagination: {
//             limit: 5
//         },
//         data: [
//             ["Jonathan", "jonathan@example.com", "Senior Implementation Architect",
//                 "Hauck Inc", "Holy See"],
//             ["Harold", "harold@example.com", "Forward Creative Coordinator",
//                 "Metz Inc", "Iran"],
//             ["Shannon", "shannon@example.com", "Legacy Functionality Associate",
//                 "Zemlak Group", "South Georgia"],
//             ["Robert", "robert@example.com", "Product Accounts Technician",
//                 "Hoeger", "San Marino"],
//             ["Noel", "noel@example.com", "Customer Data Director",
//                 "Howell - Rippin", "Germany"],
//             ["Traci", "traci@example.com", "Corporate Identity Director",
//                 "Koelpin - Goldner", "Vanuatu"],
//             ["Kerry", "kerry@example.com", "Lead Applications Associate",
//                 "Feeney, Langworth and Tremblay", "Niger"],
//             ["Patsy", "patsy@example.com", "Dynamic Assurance Director",
//                 "Streich Group", "Niue"],
//             ["Cathy", "cathy@example.com", "Customer Data Director",
//                 "Ebert, Schamberger and Johnston", "Mexico"],
//             ["Tyrone", "tyrone@example.com", "Senior Response Liaison",
//                 "Raynor, Rolfson and Daugherty", "Qatar"],
//         ]
//     }).render(gridContainer.value);
//   });
</script>
    
   