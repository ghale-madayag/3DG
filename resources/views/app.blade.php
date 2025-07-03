<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>3DG Realty Development</title>
    <meta name="description"
        content="Create exceptional real estate developments that enrich communities and exceed expectations.">
    <meta name="keywords"
        content="">
    <meta name="author" content="Themesbrand">

    <!-- Social Media Meta Tags -->
    <meta property="og:title" content="3DG Realty Development">
    <meta property="og:description"
        content="Simplify web application development with Velzon, a feature-rich admin and dashboard template built with Inertia.js, Vue.js, and Laravel.">
    <meta property="og:image" content="URL to the template's logo or featured image">
    <meta property="og:url" content="URL to the template's webpage">
    <meta name="twitter:card" content="summary_large_image">

    <!-- App favicon -->
    <link rel="shortcut icon" href="{{ URL::asset('image/favicon.svg') }}">

    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
