  var modal = document.getElementById('myModalContacts');
  var btn = document.getElementById("myContacts");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
      modal.style.display = "block";
  }

  span.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  jQuery(document).ready(function() {
      $(".fancybox").fancybox({
          autoSize : true,
          scrolling : 'auto',
          fitToView : false,
          maxWidth : '100%',
      });
  });
