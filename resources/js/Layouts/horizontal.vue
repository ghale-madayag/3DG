<script>
import { Link } from '@inertiajs/vue3';
import NavBar from "@/Components/nav-bar.vue";
import RightBar from "@/Components/right-bar.vue";
import Footer from "@/Components/footer.vue";

export default {
  mounted() {
    this.initActiveMenu();
  },
  methods: {
    initActiveMenu(ele) {
      setTimeout(() => {
        var currentPath = window.location.pathname;
        if (document.querySelector("#navbar-nav")) {
          let a = document.querySelector("#navbar-nav").querySelector('[href="' + currentPath + '"]');

          if (a) {
            a.classList.add("active");
            let parentCollapseDiv = a.closest(".collapse.menu-dropdown");
            if (parentCollapseDiv) {
              parentCollapseDiv.classList.add("show");
              parentCollapseDiv.parentElement.children[0].classList.add("active");
              parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
              if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
                  parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
              }
            }
          }
        }
      }, 1000);
    },
  },
  components: {
    NavBar,
    RightBar,
    Footer,
    Link
  },
};
</script>

<template>
  <div>
    <div id="layout-wrapper">
      <NavBar />
      <!-- ========== App Menu ========== -->
      <div class="app-menu navbar-menu">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <!-- Dark Logo-->
          <Link href="/" class="logo logo-dark">
          <span class="logo-sm">
            <img src="@assets/images/logo-sm.svg" alt="" height="22" />
          </span>
          <span class="logo-lg">
            <img src="@assets/images/logo-dark.webp" alt="" height="120">
          </span>
          </Link>
          <!-- Light Logo-->
          <Link href="/" class="logo logo-light">
          <span class="logo-sm">
            <img src="@assets/images/logo-sm.svg" alt="" height="22" />
          </span>
          <span class="logo-lg">
            <img src="@assets/images/logo-dark.webp" alt="" height="120">
          </span>
          </Link>
          <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover">
            <i class="ri-record-circle-line"></i>
          </button>
        </div>
        <div id="scrollbar">
          <BContainer fluid>
            <ul class="navbar-nav h-100" id="navbar-nav">
              <li class="menu-title">
          <span data-key="t-menu"> {{ $t("t-menu") }}</span>
        </li>
        <li class="nav-item">
          <Link class="nav-link menu-link" href="/" role="button"
            aria-expanded="false" aria-controls="sidebarDashboards">
            <i class="ri-dashboard-2-line"></i>
            <span data-key="t-dashboards"> {{ $t("t-dashboards") }}</span>
          </Link>
          <!-- <div class="collapse menu-dropdown" id="sidebarDashboards">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <Link href="/" class="nav-link" data-key="t-ecommerce">
                {{ $t("t-ecommerce") }}
                </Link>
              </li>
            </ul>
          </div> -->
        </li>
        <li class="nav-item">
          <a class="nav-link menu-link" href="#sidebarLandDev" data-bs-toggle="collapse" role="button" aria-expanded="false"
            aria-controls="sidebarLandDev">
            <i class="ri-landscape-line"></i>
            <span data-key="t-land">{{ $t("t-land") }}</span>
          </a>
          <div class="collapse menu-dropdown" id="sidebarLandDev">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <Link href="/land/create" class="nav-link">Add
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/property" class="nav-link">
                  List
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-link" href="#sidebarProperty" data-bs-toggle="collapse" role="button" aria-expanded="false"
            aria-controls="sidebarProperty">
            <i class="ri-home-heart-line"></i>
            <span data-key="t-property">{{ $t("t-property") }}</span>
          </a>
          <div class="collapse menu-dropdown" id="sidebarProperty">
            <ul class="nav nav-sm flex-column">
              <li class="nav-item">
                <Link href="" class="nav-link">Add
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/property" class="nav-link">
                  List
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <Link class="nav-link menu-link" href="/contact" role="button"
            aria-expanded="false" aria-controls="sidebarDashboards">
            <i class="ri-dashboard-2-line"></i>
            <span data-key="t-contact"> {{ $t("t-contact") }}</span>
          </Link>
        </li>
            </ul>
          </BContainer>
          <!-- Sidebar -->
        </div>
        <!-- Left Sidebar End -->
        <!-- Vertical Overlay-->
        <div class="vertical-overlay"></div>
      </div>
      <!-- ============================================================== -->
      <!-- Start Page Content here -->
      <!-- ============================================================== -->

      <div class="main-content">
        <div class="page-content">
          <!-- Start Content-->
          <BContainer fluid>
            <slot />
          </BContainer>
        </div>
        <Footer />
      </div>
      <RightBar />
    </div>
  </div>
</template>