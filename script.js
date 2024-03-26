function showEspecs() {
    document.querySelector(".productEspec").style.display = "block";
    document.querySelector(".corpo_geral").style.filter = "blur(4px)";
  }
  
  function closeEspec() {
    document.querySelector(".productEspec").style.display = "none";
    document.querySelector(".corpo_geral").style.filter = "blur(0px)";
  }