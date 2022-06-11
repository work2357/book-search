$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "미움받을 용기" },
    headers: { Authorization: KakaoAK ${ecb5c7fd0a5ffdcd03d0e2213e04775c} }
    .done(function (msg) {
        alert("Data Saved: " + msg);
    });