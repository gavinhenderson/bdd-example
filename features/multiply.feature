@calculator @multiply
Feature: Multiply
  In order to do maths
  As a developer
  I want to multiply variables

  Scenario: Simple Multiplication
    Given x is set to 1
    And y is set to 1
    When I multiply x and y
    Then the result is 1