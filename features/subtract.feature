@calculator @subtract
Feature: Subtract
  In order to do maths
  As a developer
  I want to subtract variables

  Scenario: Simple Subtraction
    Given x is set to 1
    And y is set to 1
    When I subtract x and y
    Then the result is 0