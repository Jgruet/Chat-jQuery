$(document).ready(function () {
  const $content = $("#content");
  const $greet = $("#greet");
  const $btLoad = $("#btLoadUser");

  $btLoad.click(function () {
    const genderChoice = $("#gender").val();

    const params = {
      gender: genderChoice,
      nat: $("#nat").val(),
    };

    $.get("https://randomuser.me/api", params, function (response) {
      const user = response.results[0];
      const message = "Bonjour " + user.name.first + " " + user.name.last;
      $("#photo").attr("src", user.picture.large);
      const img = `<img src="${user.picture.large}">`;
      $content.html(img);
      $greet.text(message);
    });
  });

  $("nav a").click(function (event) {
    event.preventDefault();
    const target = $(this).data("target");

    $content.hide();
    $content.load(target + ".html", function () {
      $content.slideDown(500);
    });
  });
});
