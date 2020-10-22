@calculator @divide
Feature: Divide
  In order to do maths
  As a developer
  I want to divide variables

  Scenario: Simple Division
    Given x is set to 1
    And y is set to 1
    When I divide x by y
    Then the result is 1