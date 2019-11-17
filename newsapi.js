var NewsAPI = require('newsapi');
var newsapi = new NewsAPI('c09984e8cfd34f47a2788984173a7026');
// To query articles:
newsapi.articles({
    source: 'associated-press',
    sortBy: 'top' // optional
}).then(function (articlesResponse) {
    console.log(articlesResponse);
    /*
      {
        status: "ok",
        source: "associated-press",
        sortBy: "top",
        articles: [...]
      }
     */
});
// To query sources:
newsapi.sources({
    category: 'technology',
    language: 'en',
    country: 'us' // optional
}).then(function (sourcesResponse) {
    console.log(sourcesResponse);
    /*
      {
        status: "ok",
        sources: [...]
      }
    */
});
// For both methods you can also use traditional Node callback style:
newsapi.articles({
    source: 'associated-press',
    sortBy: 'top'
}, function (err, articlesResponse) {
    if (err)
        console.error(err);
    else
        console.log(articlesResponse);
});
