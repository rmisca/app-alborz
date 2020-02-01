(function() {
  var loginMenuButton = document.getElementById("login-menu-button");
  loginMenuButton.addEventListener("click", function(e) {
    var mrLoginForm = document.getElementById("mr-login-form");
    mrLoginForm.style.display = "block";
  });

  function initStorage() {
      var user = {
          username: "Romina",
          password: "1234"
      }
      localStorage.setItem("user", JSON.stringify(user));
  }
  initStorage();

  
})();
