$(document).ready(function () {

    $("button").on("click", function (input) {
        var search = $('#keyword').val();
        var numberResults = $('#number').val();
        var endDate = $('#input').val();
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=" + search + "&fl=" + numberResults + "&api-key=2u6xcJDTVR2BOBz2VIEfiAJkCQ2swKX5";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                console.log(response)
            })
    })
})