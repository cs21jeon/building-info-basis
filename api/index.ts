var express = require("express");
var app = express();

app.get("/buildinginfo", function (req: any, res: any) {
  const { serviceKey, sigunguCd, bjdongCd, platGbCd, bun, ji, startDate, endDate, numOfRows, pageNo } =
    req.query;

  var api_url =
    "https://apis.data.go.kr/1613000/BldRgstHubService/getBrBasisOulnInfo?";
  var request = require("request");
  var options = {
    url: api_url,
    qs: { serviceKey, sigunguCd, bjdongCd, platGbCd, bun, ji, startDate, endDate, numOfRows, pageNo },
  };

  request.get(options, function (error: any, response: any, body: any) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "application/xml;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.listen(3000, function () {
  console.log(
    "http://127.0.0.1:3000/buildinginfo?sigunguCd=11680&bjdongCd=10300&bun=0012&ji=0000&serviceKey=QOAQrY8Oy2Rp807LlzW8HXV%2BxRK1KRF36oLmg4NXU4%2B%2FxzxPd4oPrDcBJeXbJX9EPpqD5gayASrD482an%2FBlqg%3D%3D app listening on port 3000!"
  );
});
