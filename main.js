/* HOT INPUT */



/*
<div class="col-sm-4 question-wrapper">
  <div class="panel-danger question"><a id="link-facebookBroken" href="https://support.mozilla.org/en-US/kb/fix-problems-facebook-games-chat-and-more">Facebook Broken</a></div>
</div>
*/

var phonehome = function (info) {
  console.log("phonehome:", info);
};

var add_expanded = function (options) {
  /* var $div = $("<div />").
    addClass("col-sm-2").
    addClass("expanded_tile").
    text("Expanded for " + options.word);
  */
    $('#expanded').
    text("Expanded for " + options.word + " : " +
      JSON.stringify(options, null, 2));
};

var input_tile = function (options) {
  var $div = $("<div />").
    addClass("col-sm-1").
    addClass("input_tile").

    addClass("color-" + options.color).
    text(options.word);

    $div.click(function () {
      // phone home?
      phonehome($.extend(true,options, {msg: "decided"}));
      $(this).addClass('decided')
      .fadeOut();
    });

    $div.hover(
      function () {
        add_expanded(options);
        console.log("hover on", options);
        $(this).addClass('tall');
      },
      function () {
        $(this).removeClass('tall');
      }
    );
  return $div;
};

var words = [
  'facebook',
  'google',
  'fanfiction',
  'video',
  "slow",
  "suck",
  "search",
  "stink",
  'facebook',
  'google',
  'fanfiction',
  'video',
  "slow",
  "suck",
  "search",
  "stink",
  'facebook',
  'google',
  'fanfiction',
  'video',
  "slow",
  "suck",
  "search",
  "stink",
  'facebook',
  'google',
  'fanfiction',
  'video',
  "slow",
  "suck",
  "search",
  "stink",
  'facebook',
  'google',
  'fanfiction',
  'video',
  "slow",
  "suck",
  "search",
  "stink",
  'facebook',
  'google',
  'fanfiction',
  'video',
  "slow",
  "suck",
  "search",
  "stink",
  'facebook',
  'google',
  'fanfiction',
  'video',
  "slow",
  "suck",
  "search",
  "stink",
  'facebook',
  'google',
  'fanfiction',
  'video',
  "slow",
  "suck",
  "search",
  "stink",
  'facebook',
  'google',
  'fanfiction',
  'video',
  "slow",
  "suck",
  "search",
  "stink",
  "stink",
  'facebook',
  'google',
  'fanfiction',
  'video',
  "slow",
  "suck",
  "search",
  "stink",
  'facebook',
  'google',
  'fanfiction',
  'video',
  "stink",
  'facebook',
  'google',
  'fanfiction',
  'video',
  "slow",
  "suck",
  "search",
  "stink",
  'facebook',
  'google',
  'fanfiction',
  'video'
];

$(function () {
  var d = $("#tiles");
  words.forEach(function (k,ii) {

    d.append(input_tile({id: ii, word: k, color: 'red',
      comments: ['Wut?', "Awesome!"]}));
  });
});

