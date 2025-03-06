<head>
<link href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>
<style>
html {
    background-image: linear-gradient(to right, rgba(229, 231, 235, 0.384), rgba(100, 133, 100, 0.363)), url("../img/home-cover.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.custom-popup{
    background: transparent;
}
</style>
</head>


<?php session_start();
if(empty($_SESSION['id'])):
    header('Location:../html/login.html');
endif;
?>
<!DOCTYPE html>
<html>
<body>
    <div style="width:150px;margin:auto;height:500px;margin-top:300px">

    <?php
     include('database.php');
     session_destroy();

     echo"<script type='text/javascript'>
            $(document).ready(function(){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Signed out',
                    showConfirmButton: false,
                    timer: 1000,
                    customClass: {
                        popup: 'custom-popup'
                    }
            }).then(function() {
               // Redirect to login page after popup closes
               document.location = '../html/login.html';
            });
            });
            </script>";
    ?>