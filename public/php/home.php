<?php session_start();
if(empty($_SESSION['id'])):
    header('<Location:../html/login.html');
endif;
?>

<!doctype html>
<html lang="en" data-bs-theme="auto">
  <head><script src="../js/color-modes.js"></script>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="generator" content="Hugo 0.118.2">
    <title>PAGDALOY HOMEPAGE</title>
    <link rel="icon" href="../img/PAGPAG.png">
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Playfair&#43;Display:700,900&amp;display=swap" rel="stylesheet">
    <link href="../css/home.css" rel="stylesheet">
  
  </head>
  <body>
    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
      <symbol id="check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
      </symbol>
      <symbol id="circle-half" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
      </symbol>
      <symbol id="moon-stars-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
      </symbol>
      <symbol id="sun-fill" viewBox="0 0 16 16">
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
      </symbol>
    </svg>

    <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
              id="bd-theme"
              type="button"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              aria-label="Toggle theme (auto)">
        <svg class="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
        <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
            Light
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
            Dark
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg>
            Auto
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
      </ul>
    </div>

    
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="aperture" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/>
  </symbol>
  <symbol id="cart" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
  <symbol id="chevron-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
  </symbol>
</svg>

<div class="container">
  <header class="border-bottom lh-1 py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">
        <img class="mb-4" src="../img/PAGPAG.png" alt="" width="72" height="auto">
      </div>
      <div class="col-4 text-center">
        <a class="blog-header-logo text-body-emphasis text-decoration-none" >PAGDALOY</a>
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center" >
        <a href="logout.php" class="btn btn-sm btn-outline-secondary" type="button" id="logout">LOGOUT</a>
      </div>
    </div>
  </header>

  <div class="nav-scroller py-1 mb-3 border-bottom">
    <nav class="nav nav-underline justify-content-between">
      <a class="nav-item nav-link link-body-emphasis" href="../php/index.php">I-MAP</a>
      <a class="nav-item nav-link link-body-emphasis" href="../html/aboutUs.html">ABOUT US</a>
      <a class="nav-item nav-link link-body-emphasis" href="../html/help.html">HELP</a>
    </nav>
  </div>
</div>

<main class="container">
  <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis" style="background-color: #05161a;">
    <div class="col-lg-6 px-0">
      <h1 class="display-4 fst-italic">PAGDALOY</h1>
      <p class="lead my-3">DISCOVERING THE WAY TO
        PRESERVE</p>
      <p class="lead mb-0"><a href="#row g-5" class="text-body-emphasis fw-bold">LET'S START</a></p> 
    </div>
  </div>

  <div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative bg-body-secondary align-items-stretch" style="--bs-bg-opacity: .5;">
        <div class="col p-4 d-flex flex-column position-static flex-grow-1">
          <strong class="d-inline-block mb-2 text-primary-emphasis">PAGDALOY</strong>
          <h3 class="mb-0 municipality"><a class="municipality-link" href="https://www.agoncillo.gov.ph/" target="_blank" rel="noopener noreferrer">AGONCILLO</a></h3>
          <div class="mb-1 text-body-secondary">Batangas</div>
          <p class="card-text mb-auto d-flex flex-grow-1">The Municipality of Agoncillo has a land area of 19.29 square kilometers and a total of 21 barangays. It is situated on the 
            western shore of Taal Lake, offering scenic views of the famous volcanic lake. It was named after Don Felipe Agoncillo, a prominent Filipino diplomat and 
            revolutionary. The town's economy is driven by agriculture, fishing, and growing tourism.</p>
        </div>
        <div class="col-auto d-none d-lg-flex d-flex align-items-end justify-content-center">
          <img class="mb-4 me-2" style="border-radius:15px;" src="../img/AGONCILLIO.jpg" width="205" height="210">
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative bg-body-secondary align-items-stretch" style="--bs-bg-opacity: .5;">
        <div class="col p-4 d-flex flex-column position-static flex-grow-1">
          <strong class="d-inline-block mb-2 text-success-emphasis">PAGDALOY</strong>
          <h3 class="mb-0 municipality"><a class="municipality-link" href="https://www.alitagtag.gov.ph/" target="_blank" rel="noopener noreferrer">ALITAGTAG</a></h3>
          <div class="mb-1 text-body-secondary">Batangas</div>
          <p class="card-text mb-auto d-flex flex-grow-1">The Municipality of Alitagtag has a land area of 24.76 square kilometers and a total of 19 barangays. The town thrives on agriculture, 
            with rice, coffee, and fruit farming being major sources of livelihood. One of the town's most significant celebrations is the May Flower Festival, which 
            features colorful processions, floral offerings, and traditional Filipino religious customs.</p>
        </div>
        <div class="col-auto d-none d-lg-flex d-flex align-items-end justify-content-center">
          <img class="mb-4 me-2" style="border-radius:15px;" src="../img/ALITAGTAG.JPG" width="205" height="210">
        </div>
      </div>
    </div>
  </div>

  <div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative align-items-stretch" style="background-color: rgba(41, 77, 106, 0.5);">
        <div class="col p-4 d-flex flex-column position-static flex-grow-1">
          <strong class="d-inline-block mb-2 text-primary-emphasis">PAGDALOY</strong>
          <h3 class="mb-0 municipality"><a class="municipality-link" href="https://www.baletebatangas.gov.ph/" target="_blank" rel="noopener noreferrer">BALETE</a></h3>
          <div class="mb-1 text-body-secondary">Batangas</div>
          <p class="card-text mb-auto d-flex flex-grow-1">
            The Municipality of Balete has a land area of 25.00 kilometers and a total of 13 barangays. The town is renowned for its agricultural 
            activities, particularly farming and fishing, thanks to its proximity to Taal Lake. It is known for its delicious local delicacies, 
            such as Lomi and Bagoong Balayan. Locals also enjoy Puto(steamed rice cakes), and Suman (sticky rice wrapped in banana leaves).
          </p>
        </div>
        <div class="col-auto d-none d-lg-flex d-flex align-items-end justify-content-center">
          <img class="mb-4 me-2" style="border-radius:15px;" src="../img/BALETE.jpg" width="205" height="210">
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative align-items-stretch" style="background-color: rgba(41, 77, 106, 0.5);;">
        <div class="col p-4 d-flex flex-column position-static flex-grow-1">
          <strong class="d-inline-block mb-2 text-success-emphasis">PAGDALOY</strong>
          <h3 class="mb-0 municipality"><a class="municipality-link" href="https://www.philatlas.com/luzon/r04a/batangas/cuenca.html" target="_blank" rel="noopener noreferrer">CUENCA</a></h3>
          <div class="mb-1 text-body-secondary">Batangas</div>
          <p class="card-text mb-auto d-flex flex-grow-1">The Municipality of Cuenca has a land area of 58.18 square kilometers and a total of 21 barangays. It is located near the slopes of Mount Maculot, 
            a popular hiking destination that offers breathtaking views of Taal Volcano and the surrounding areas. Additionally, it is known for producing high-quality agricultural 
            products, particularly vegetables, which contribute to the local economy.</p>
        </div>
          <div class="col-auto d-none d-lg-flex d-flex align-items-end justify-content-center">
            <img class="mb-4 me-2" style="border-radius:15px;" src="../img/CUENCA.jpg" width="205" height="210">
          </div>
      </div>
    </div>
  </div>

  <div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative align-items-stretch" style="background-color: rgba(41, 77, 106, 0.5);;">
        <div class="col p-4 d-flex flex-column position-static flex-grow-1">
          <strong class="d-inline-block mb-2 text-primary-emphasis">PAGDALOY</strong>
          <h3 class="mb-0 municipality"><a class="municipality-link" href="https://www.laurelbatangas.gov.ph/" target="_blank" rel="noopener noreferrer">LAUREL</a></h3>
          <div class="mb-1 text-body-secondary">Batangas</div>
          <p class="card-text mb-auto d-flex flex-grow-1">The Municipality of Laurel has a land area of 71.29 square kilometers and a total of 21 barangays. It is nestled along the shores 
            of Taal Lake, offering stunning views of Taal Volcano. The town is also home to Ambon-Ambon Falls and Malagaslas Spring. Laurel is also an agricultural hub, producing high-quality 
            coffee, bananas, and root crops that support the local economy.</p>
        </div>
        <div class="col-auto d-none d-lg-flex align-items-end justify-content-center">
          <img class="mb-4 me-2" style="border-radius:15px;" src="../img/LAUREL.jpg" width="205" height="210">
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative align-items-stretch" style="background-color: rgba(41, 77, 106, 0.5);;">
        <div class="col p-4 d-flex flex-column position-static flex-grow-1">
          <strong class="d-inline-block mb-2 text-success-emphasis">PAGDALOY</strong>
          <h3 class="mb-0 municipality"><a class="municipality-link" href="https://www.philatlas.com/luzon/r04a/batangas/mataasnakahoy.html" target="_blank" rel="noopener noreferrer">MATAAS NA KAHOY</a></h3>
          <div class="mb-1 text-body-secondary">Batangas</div>
          <p class="card-text mb-auto d-flex flex-grow-1">The Municipality of Mataas na Kahoy has a land area of 19.66 kilometers and a total of 16 barangays. It is a serene town known for its elevated location, offering breathtaking 
            panoramic views of Taal Lake and Taal Volcano. The town also has a strong agricultural industry, producing high-quality coffee, cacao, bananas, and root crops, making it a vital contributor to Batangas’ local economy.</p>
        </div>
        <div class="col-auto d-none d-lg-flex align-items-end justify-content-center">
          <img class="mb-4 me-2" style="border-radius:15px;" src="../img/MALVAR.png" width="205" height="210">
        </div>
      </div>
    </div>
  </div>

  <div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative align-items-stretch" style="background-color: rgba(41, 77, 106, 0.5);;">
        <div class="col p-4 d-flex flex-column position-static flex-grow-1">
          <strong class="d-inline-block mb-2 text-primary-emphasis">PAGDALOY</strong>
          <h3 class="mb-0 municipality"><a class="municipality-link" href="https://www.philatlas.com/luzon/r04a/batangas/san-nicolas.html" target="_blank" rel="noopener noreferrer">SAN NICOLAS</a></h3>
          <div class="mb-1 text-body-secondary">Batangas</div>
          <p class="card-text mb-auto d-flex flex-grow-1">The Municipality of San Nicolas has a land area of 22.61 square kilometers and a total of 18 barangays. It is known as the "Gateway to Taal Volcano" 
            and serves as a jump-off point for tourists and researchers exploring the volcano. Agriculture and fishing sustain the local economy, with residents relying on tilapia farming 
            and crop production, especially coffee and root crops.</p>
        </div>
        <div class="col-auto d-none d-lg-flex align-items-end justify-content-center">
          <img class="mb-4 me-2" style="border-radius:15px;" src="../img/SANNICOLAS.jpg" width="205" height="210">
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative align-items-stretch" style="background-color:rgba(41, 77, 106, 0.5);;">
        <div class="col p-4 d-flex flex-column position-static flex-grow-1">
          <strong class="d-inline-block mb-2 text-success-emphasis">PAGDALOY</strong>
          <h3 class="mb-0 municipality"><a class="municipality-link" href="https://stateresitabatangas.gov.ph/" target="_blank" rel="noopener noreferrer">SANTA TERESITA</a></h3>
          <div class="mb-1 text-body-secondary">Batangas</div>
          <p class="card-text mb-auto d-flex flex-grow-1">The Municipality of Santa Teresita has a land area of 16.30 square kilometers and a total of 17 barangays. 
          Nestled near Taal Lake, it thrives on farming, particularly coffee, lanzones, and root crops, which significantly contribute to its local economy. The town 
          is deeply rooted in faith, with the St. Therese of the Child Jesus Parish serving as a cherished spiritual center for the community.</p>
        </div>
        <div class="col-auto d-none d-lg-flex align-items-end justify-content-center">
          <img class="mb-4 me-2" style="border-radius:15px;" src="../img/SANTATERESITA.png" width="205" height="210">
        </div>
      </div>
    </div>
  </div>

  <div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative align-items-stretch" style="background-color:rgba(41, 77, 106, 0.5);;">
        <div class="col p-4 d-flex flex-column position-static flex-grow-1">
          <strong class="d-inline-block mb-2 text-primary-emphasis">PAGDALOY</strong>
          <h3 class="mb-0 municipality"><a class="municipality-link" href="https://www.talisaybatangas.gov.ph/" target="_blank" rel="noopener noreferrer">TALISAY</a></h3>
          <div class="mb-1 text-body-secondary">Batangas</div>
          <p class="card-text mb-auto d-flex flex-grow-1">The Municipality of Talisay has a land area of 28.20 kilometers and a total of 21 barangays. It is known as the 
            "Gateway to Taal Volcano" as well. It offers breathtaking views and serves as a jump-off point for boat trips to Taal Volcano Island. The town also thrives on 
            fishing, agriculture, and tourism, with locals engaged in tilapia farming, coffee production, and resort businesses.</p>
        </div>
        <div class="col-auto d-none d-lg-flex align-items-end justify-content-center">
          <img class="mb-4 me-2" style="border-radius:15px;" src="../img/TALISAY.jpg" width="205" height="210">
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative align-items-stretch" style="background-color:rgba(41, 77, 106, 0.5);;">
        <div class="col p-4 d-flex flex-column position-static flex-grow-1">
          <strong class="d-inline-block mb-2 text-success-emphasis">PAGDALOY</strong>
          <h3 class="mb-0 municipality"><a class="municipality-link" href="https://tanauancity.gov.ph/" target="_blank" rel="noopener noreferrer">TANAUAN</a></h3>
          <div class="mb-1 text-body-secondary">Batangas</div>
          <p class="card-text mb-auto d-flex flex-grow-1">The City of Tanauan has a land area of 107.16 square kilometers and a total of 48 barangays. Strategically located 
            near Taal Lake, the city enjoys a booming economy driven by agriculture, commerce, and industry, with many industrial parks and businesses contributing to its 
            progress. Often called the “Cradle of Noble Heroes,” it is the birthplace of Apolinario Mabini and Jose P. Laurel. </p>
        </div>
        <div class="col-auto d-none d-lg-flex align-items-end justify-content-center">
          <img class="mb-4 me-2" style="border-radius:15px;" src="../img/TANAUAN.jpg" width="205" height="210">
        </div>
      </div>
    </div>
  </div>
  </div>

  <div class="row g-5" id="row g-5">
    <div class="col-md-8">
      <h3 class="pb-4 mb-4 fst-italic border-bottom">
        Browse for more information
      </h3>

      <article class="blog-post rounded" style="background-color: rgba(7, 46, 51, 0.5);">
        <h2 class="display-5 link-body-emphasis m-2">GEOGRAPHIC INFORMATION SYSTEM (GIS)</h2>
        <br>
        <p class="m-2">Geographic Information System (GIS) is a computer system that used as a tool for capturing, storing, checking, and displaying data related to the position on Earth's surface.</p>
        <p class="blog-post-meta m-2"><a href="https://education.nationalgeographic.org/resource/geographic-information-system-gis/" target="_blank">Read more</a></p>

        <hr>
        <p class=" m-2">This technology was utilized by the website along with Leaflet API.</p>
        <h2 class="m-2">LEAFLET API</h2>
        <blockquote class="blockquote">
          <p class="m-2">An open-source JavaScript library</p>
        </blockquote>
        <p class="m-2">Leaflet is a lightweight mapping library which offers more options compared to other mapping libraries. It is easy to use and can be downloaded, installed, and copied for free.</p>
        <h3 class="m-2">Tributaries Around Taal Lake</h3>
        <p class="m-2">The lake is located within a complex volcanic caldera, one of the great volcano-tectonic depressions of the world. It has an altitude of only 2.5 m and its surface measures 234.2 sq. km. There are 37 tributaries drain into the lake and the only outlet is Pansipit River which drains into Balayan Bay. </p>

        <dl>
          <dt class="m-2">Pig Farming in the Philippines</dt>
          <dd class="m-2">Pig farming also known as "hog farming" is the raising and rearing of domestic pigs as livestock. Pigs are mainly raised for food and skin. This kind of business in the Philippines is a profitable business for Filipinos in decades. </dd>
          <dd class="m-2">Meanwhile, it is also a famous business in the provinces of Batangas, it is important to monitor its environmental impacts especially in water quality.</dd>
        </dl>

        <dl class="m-2">
          <dt><i>References</i></dt>
          <dd>Geographic Information Systems. (2023). https://education.nationalgeographic.org/resource/geographic-information-systems/</dd>
          <dd>Jagdish. (2021, September 16). Pig farming in the Philippines, How to sta rt | Agri farming. Agri Farming. https://www.agrifarming.in/pig-farming-in-the-philippines-how-to-start</dd>
        </dl>
        
    </div>

    <div class="col-md-4">
      <div class="position-sticky" style="top: 2rem;">
        <div class="p-4 mb-3 rounded" style="background-color: rgba(5, 22, 26, 0.8);">
          <h4 class="fst-italic">TAAL LAKE</h4>
          <p class="mb-0">A lake in southwestern Luzon that occupies a volcanic crater with a maximum width of 24 km and less than 10 feet above sea level. It is the country's third largest lake and has erupted more than 34 times since 1572. There are 37 tributaries of thirteen municipalities and three cities along the lake. In addition, a part of Pansipit River serves as the Taal's Lake only outlet to Balayan Bay.</p>
        </div>
        <div>
          <h4 class="fst-italic">Featured Municipalities</h4>
<body>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 h-100 carousel-img" src="../img/AGONCILLIO.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block  w-100 h-100 carousel-img" src="../img/ALITAGTAG.JPG" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block  w-100 h-100 carousel-img" src="../img/BALETE.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block  w-100 h-100 carousel-img" src="../img/CUENCA.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block  w-100 h-100 carousel-img" src="../img/LAUREL.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 h-100 carousel-img" src="../img/MALVAR.png" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block  w-100 h-100 carousel-img" src="../img/SANNICOLAS.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block  w-100 h-100 carousel-img" src="../img/SANTATERESITA.png" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block  w-100 h-100 carousel-img" src="../img/TALISAY.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block  w-100 h-100 carousel-img" src="../img/TANAUAN.jpg" alt="Second slide">
    </div>
  </div>
</div>

<script>
  
  $('.carousel').carousel({
    interval: 3000 
  });
</script>

      </div>
    </div>
  </div>

</main>

  <footer class="py-5 text-center text-body-secondary bg-body-secondary">
    <p>PAGDALOY by <a href="https://batstateu.edu.ph/" target="_blank" rel="noopener noreferrer">BATANGAS STATE UNIVERSITY - TNEU</a></p>
    <p class="mb-0">
      <a href="#">Back to top</a>
    </p>
  </footer>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="../js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</html>
