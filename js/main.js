$(document).ready(function() {
  $(".up").on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, "fast");
    return false;
  });

  AOS.init({
    easing: "ease",
    duration: 1500,
    once: true
  });

  $(function() {
    $("#emailme").click(function(event) {
      var email = "NickMinovsky@gmail.com";
      var subject = "";
      var emailBody = "Your message...";
      var attach = "path";
      document.location =
        "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
    });
  });

  $(".nav-item").on("click", event => {
    $(event.currentTarget)
      .children()
      .css("opacity", 1);
    $(event.currentTarget)
      .siblings()
      .children()
      .css("opacity", 0.4);
  });
});
