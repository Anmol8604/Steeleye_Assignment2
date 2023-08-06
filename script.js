const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <title>Example Page</title>
</head>
<body>
<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>
</body>
</html>`;

const plainTextPositions = [
  { start: 241, end: 247 },
  { start: 518, end: 525 },
];

const plainText =
  "Hi David Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar… Read the full article here ------------------------------------- You received this because you are subscribed to news related to ES0113900J37 , and this story was marked as 82% relevant. Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. To unsubscribe change your email preferences, please click here . -------------------------------------";

function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  const highlightedParts = [];
  let lastPosition = 0;
  for (const { start, end } of plainTextPositions) {
    const word = plainText.slice(start, end);
    const startPosInHTML = htmlContent.indexOf(word, lastPosition);
    if (startPosInHTML !== -1) {
      const endPosInHTML = startPosInHTML + word.length;
      const highlightedPart =
        htmlContent.slice(lastPosition, startPosInHTML) +
        `<mark>${htmlContent.slice(startPosInHTML, endPosInHTML)}</mark>`;
      highlightedParts.push(highlightedPart);
      lastPosition = endPosInHTML;
    }
  }
  highlightedParts.push(htmlContent.slice(lastPosition));
  return highlightedParts.join("");
}

let contentPlace = document.getElementById("tobechanged");
let button = document.querySelector("button");

function original() {
  contentPlace.innerHTML = htmlContent;
  button.textContent = "get output";
}

original();

function changeContent() {
  button.textContent = "original Content";
  contentPlace.innerHTML = highlightHTMLContent(
    htmlContent,
    plainText,
    plainTextPositions
  );
}

function toggleContent() {
  if (button.textContent == "get output") {
    changeContent();
  } else {
    original();
  }
}
