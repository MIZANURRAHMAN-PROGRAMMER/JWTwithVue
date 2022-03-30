<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>{{ config('app.name', 'Laravel') }}</title>
  <!-- Fonts -->
  <link rel="dns-prefetch" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

  <!-- admin dashboard link -->
   <!-- vendor css -->
   <link href="{{ asset('admin/lib/font-awesome/css/font-awesome.css') }}" rel="stylesheet">
   <link href="{{ asset('admin/lib/Ionicons/css/ionicons.css') }}" rel="stylesheet">
    <!--  CSS -->
    <link rel="stylesheet" href="{{ asset('admin/css/starlight.css') }}">
    <link href="{{ asset('admin/lib/perfect-scrollbar/css/perfect-scrollbar.css') }}" rel="stylesheet">


  <!-- Styles -->
  {{-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> --}}
</head>
<body>
  <div id="app">
    <App />
  </div>
  <!-- Scripts -->
  <script src="{{ asset('js/app.js') }}" defer></script>

  <!--dashboard js -->

  <script src="{{ asset('admin/lib/jquery/jquery.js')}}"></script>
  <script src="{{ asset('admin/lib/popper.js/popper.js')}}"></script>
  <script src="{{ asset('admin/lib/bootstrap/bootstrap.js')}}"></script>
  <script src="{{ asset('admin/lib/perfect-scrollbar/js/perfect-scrollbar.jquery.js')}}"></script>

  <script src="{{ asset('admin/js/starlight.js')}}"></script>
</body>
</html>
