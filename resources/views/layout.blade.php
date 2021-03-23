<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Fianca Group</title>
    <link rel="stylesheet" href="{{ asset('/dist/css/cursor.css')}}">
            <link rel="stylesheet" href="{{ asset('/plugins/fontawesome-free/css/all.min.css')}}">
            <link rel="stylesheet" href="{{ asset('/plugins/overlayScrollbars/css/OverlayScrollbars.min.css')}}">   
            <link rel="stylesheet" href="{{ asset('/plugins/daterangepicker/daterangepicker.css')}}">
            <link rel="stylesheet" href="{{ asset('/plugins/datepicker/datepicker3.css') }}">
            <link rel="stylesheet" href="{{ asset('/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css')}}">
            <link rel="stylesheet" href="{{ asset('/plugins/select2/css/select2.min.css')}}">
            <link rel="stylesheet" href="{{ asset('/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css')}}">
            <link rel="stylesheet" href="{{ asset('/dist/adminlte.css')}}">
            <link rel="stylesheet" href="{{ asset('/dist/themes/default/style.min.css') }}"/>
            <link rel="stylesheet" href="{{ asset('/plugins/timepicker/bootstrap-timepicker.min.css')}}">
            <link rel="stylesheet" href="{{ asset('/dist/css/jquery.datetimepicker.css')}}">
            <link rel="stylesheet" href="{{ asset('/dist/css/buttons.dataTables.min.css') }}">
            <link rel="stylesheet" href="{{ asset('/dist/css/jquery.dataTables.min.css') }}">
            <link rel="stylesheet" href="{{ asset('/dist/css/responsive.dataTables.min.css') }}">
            <link rel="stylesheet" href="{{ asset('/plugins/datatables-bs4/css/dataTables.bootstrap4.css') }}">
            <link rel="stylesheet" type="text/css" href="{{ asset('/dist/css/jquery.dataTables.css')}}">
            <link rel="stylesheet" type="text/css" href="{{ asset('/dist/css/select.dataTables.min.css')}}">
            <link href="{{ asset('/plugins/fonts.css')}}">
            <link href="{{ asset('/plugins/ionicons.css')}}">
</head>

<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">

<nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
      </li>

    </ul>

    <!-- SEARCH FORM -->
    

    <!-- Right navbar links -->

  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index.html" class="brand-link">
      <img src="dist/img/FaincaGroup1.png" alt="Fianca Group Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight">FAINCA GROUP</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          
               <li class="nav-item has-treeview">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-file-invoice-dollar"></i></i>
                  
                  <p>
                    Facturación
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="pages/mailbox/mailbox.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Pendientes</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="pages/mailbox/mailbox.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Anuladas</p>
                    </a>
                  </li>                  <li class="nav-item">
                    <a href="pages/mailbox/mailbox.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Pagadas</p>
                    </a>
                  </li>
                </ul>
              </li>


              <li class="nav-item has-treeview">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-box-open"></i>
                  
                  <p>
                    Inventario
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="pages/mailbox/mailbox.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Balluff</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="pages/mailbox/mailbox.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Pilz</p>
                    </a>
                  </li>                  <li class="nav-item">
                    <a href="pages/mailbox/mailbox.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Kuka</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item has-treeview">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-user-clock"></i></i>
                  
                  <p>
                    Personal
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="pages/mailbox/mailbox.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Control de Asistencia</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="pages/mailbox/mailbox.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Horas</p>
                    </a>
                </ul>
              </li>

        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Inicio</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Inicio</a></li>
              <li class="breadcrumb-item active"></li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
    <section class="content">
    @yield('content')
    </section>




    <script src="{{ asset('/plugins/jQuery/jquery.min.js') }}"></script>
    <script src="{{ asset('/plugins/jquery-2.2.3.js') }}"></script>
    <script src="{{ asset('/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js') }}"></script>
    <script src="{{ asset('/dist/adminlte.js') }}"></script>
    <script src="{{ asset('/plugins/bootstrap4-duallistbox/jquery.bootstrap-duallistbox.min.js') }}"></script>
    <script src="{{ asset('/plugins/moment/moment.min.js') }}"></script>
    <script src="{{ asset('/plugins/inputmask/min/jquery.inputmask.bundle.min.js') }}"></script>
    <script src="{{ asset('/plugins/daterangepicker/daterangepicker.js') }}"></script>
    <script src="{{ asset('/plugins/datepicker/bootstrap-datepicker.js') }}"></script>
    <script src="{{ asset('/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js') }}"></script>
    <script src="{{ asset('/plugins/select2/js/select2.full.min.js') }}"></script>
    <script src="{{asset('/plugins/sweetalert2.js')}}"></script>
    <script src="{{ asset('/dist/js/cursor.js') }}"></script>
    <script src="{{ asset('/dist/js/ajax.js') }}"></script>
    <script src="{{ asset('dist/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('dist/js/dataTables.responsive.min.js') }}"></script>
    <script src="{{ asset('dist/js/dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('dist/js/dataTables.select.min.js') }}"></script>
    <script src="{{ asset('dist/js/jszip.min.js') }}"></script>
    <script src="{{ asset('dist/js/pdfmake.min.js') }}"></script>
    <script src="{{ asset('dist/js/vfs_fonts.js') }}"></script>

    <script src="{{ asset('dist/js/jquery.datetimepicker.full.js') }}"></script>
    <script src="{{ asset('dist/js/jquery.numeric.js') }}"></script>
    <script src="{{asset('/plugins/toastr/toastr.min.js')}}"></script>

    @yield('script')
</body>
</html>