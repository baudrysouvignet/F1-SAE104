<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta name="author" content="Souvignet Baudry">
  <meta name="description" content="Bienvenue sur le site dédié a la formule 1.">
  <meta name="keywords"
    content="F1, formule1, voiture, course, motogp, ferrari, red-bull, Hamilton, Mercedes, FIA, FFSA">

  <link rel="icon" type="image/x-icon" href="src/asset/LogoResponsive.ico">

  <link rel="stylesheet" href="src/css/global.css">
  <link rel="stylesheet" href="src/css/header.css">
  <link rel="stylesheet" href="src/css/index.css">

  <title>BaudryPassion</title>

  <link rel="stylesheet" href="https://use.typekit.net/tqh7gvy.css">
</head>

<body>
  <header>
    <a class="a_img" href="index.html">
      <picture>
        <source media="(max-width: 600px)" srcset="src/asset/LogoResponsive.webp 80w" sizes="35px" />
        <!-- changement d'image responsive -->
        <img src="src/asset/Logo.webp" alt="Logo de la marque baudryPassion " />
      </picture>
    </a>

    <h1>La FORMULE 1 en 2022</h1>

    <div id="burgercontent" onclick="burgerclick()">
      <div class="burger open" id="burger"></div>
    </div>

    <nav class="close" id="navheader">
      <a href="index.html">Accueil</a>
      <a href="">Leclerc, le futur?</a>
      <a href="">F1 et scandale</a>
      <a href="vote.html">Voter</a>
    </nav>
  </header>
<main class="gifcontent">

  <?php if ($_POST [ 'vote' ]=="Max Verstapend") {
    echo '<img class="gif" src="src/gif/gifmax.gif" alt="gif de maxverstappen">';
  } elseif ($_POST [ 'vote' ]=="Charles Leclerc") {
    echo '<img class="gif" src="src/gif/gifcharles.gif" alt="gif de charles leclerc">';
  }elseif ($_POST [ 'vote' ]=="Sergio Perez") {
    echo '<img class="gif" src="src/gif/gifperez.gif" alt="gif de charles leclerc">';
  } else{
    echo '<img class="gif" src="src/gif/gifgeorge.gif" alt="gif de charles leclerc">';
  }?>
    

  <h2>Merci <?php echo $_POST [ 'pseudo' ]?> d'avoir voter pour <?php echo $_POST [ 'vote' ]?></h2>
  <button  onclick="location.href = 'index.html' ">Retourner à l'accueil</button>
  </main>
  <!-- <footer>
    <div>
      <img src="src/asset/LogoResponsive.ico" alt="logo BaudryPassion">
      <a href="#">Accueil</a>
    </div>
    <div>
      <span>BaudryPassionⒸ 2022</span>
      <a href="index.html">Accueil</a>
      <a href="">Leclerc, le futur?</a>
      <a href="">F1 et scandale</a>
      <a href="vote.html">Voter</a>
    </div>
  </footer> -->
  <script src="src/js/header.js"></script>
</body>
</html>