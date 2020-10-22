@calculator @addition
Feature: Addition
  In order to do maths
  As a developer
  I want to add variables

  Scenario: Simple Addition
    Given x is set to 1
    And y is set to 1
    When I add x and y
    Then the result is 2

  Scenario Outline: Lots of Addition
    Given x is set to <x>
    And y is set to <y>
    When I add x and y
    Then the result is <result>

    Examples:
      | x   | y | result |
      | 100 |         5 |    105 |
      |  99 |      1234 |   1333 |
      |  12 |         5 |     17 |