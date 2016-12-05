Mock.mock(/\/get\/movieRanks/, function(options) {
  console.log('ajax %s %s ', options.url, options.type);

  return Mock.mock([{
    "title": "你的名字。",
    "url": "https://movie.douban.com/subject/26683290/",
    "img": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2395733377.jpg"
  }, {
    "title": "神奇动物在哪里",
    "url": "https://movie.douban.com/subject/25726614/",
    "img": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2392444121.jpg"
  }, {
    "title": "佩小姐的奇幻城堡",
    "url": "https://movie.douban.com/subject/7051830/",
    "img": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2398173791.jpg"
  }, {
    "title": "三少爷的剑",
    "url": "https://movie.douban.com/subject/21350556/",
    "img": "https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2399366116.jpg"
  }, {
    "title": "海洋奇缘",
    "url": "https://movie.douban.com/subject/25793398/",
    "img": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2397960879.jpg"
  }]);
});