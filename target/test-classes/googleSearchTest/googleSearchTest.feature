Feature: Search on Google
  As an user
  I want to search on Google
  So that I can see results

Scenario: Finding some cheese
Given I am on the "http://google.com/"
When I search for "egartech"
Then the first link should be "www.egartech.com/"