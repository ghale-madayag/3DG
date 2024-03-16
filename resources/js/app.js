import './bootstrap';
import '../scss/config/corporate/app.scss';
import '@vueform/slider/themes/default.css';
import '../scss/mermaid.min.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import BootstrapVueNext from 'bootstrap-vue-next';
import vClickOutside from "click-outside-vue3";
import VueApexCharts from "vue3-apexcharts";
import VueFeather from 'vue-feather';
import VueTheMask from 'vue-the-mask';
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import AOS from 'aos';
import 'aos/dist/aos.css';

import store from "./state/store";
import i18n from './i18n'

AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});

createInertiaApp({
    title: title => title ? `${title} | 3DG Realty Development` : '3DG Realty Development',
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(store)
            .use(i18n)
            .use(ZiggyVue)
            .use(BootstrapVueNext)
            .use(VueApexCharts)
            .use(VueTheMask)
            .use(vClickOutside)
            .use(CKEditor)
            .component(VueFeather.type, VueFeather)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
