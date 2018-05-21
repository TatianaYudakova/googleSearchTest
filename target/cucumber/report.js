$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("googleSearchTest/googleSearchTest.feature");
formatter.feature({
  "line": 1,
  "name": "Search on Google",
  "description": "As an user\nI want to search on Google\nSo that I can see results",
  "id": "search-on-google",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Finding some cheese",
  "description": "",
  "id": "search-on-google;finding-some-cheese",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on the \"http://google.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I search for \"egartech\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the first link should be \"www.egartech.com/\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://google.com/",
      "offset": 13
    }
  ],
  "location": "GoogleSearchTestSteps.thePageIsOpen(String)"
});
formatter.result({
  "duration": 8286982364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "egartech",
      "offset": 14
    }
  ],
  "location": "GoogleSearchTestSteps.iSearchFor(String)"
});
formatter.result({
  "duration": 184956932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.egartech.com/",
      "offset": 26
    }
  ],
  "location": "GoogleSearchTestSteps.firstLinkShouldBe(String)"
});
formatter.result({
  "duration": 5087324497,
  "status": "passed"
});
});