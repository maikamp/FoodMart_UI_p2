# FoodMart_UI_p2

API repo: https://github.com/jalejr/FoodMartAPI_p2

## Grocery List application to allow users to manage shopping lists

## Project:
FoodMart is a web-based application that connects to an Azure SQL database and leverages Spring Data JPA. This application will allow customers and employees to create, edit and delete grocery lists that ensures availability before going to a store. This REST API was deployed to Azure to handle requests from our React frontend. The deployment of this API was implemented by a CI/CD pipeline from GitHub Actions with Azure Pipeline. Expansion of this idea can make it so a store(s) could have employees prepare an orders for the user to make shopping much faster and efficient.
  
## Tech Stack:
- Spring Boot (Spring 5)
- Azure DevOps
- Azure SQL
- HTML/CSS, JavaScript (Reach goal: React)
- Java 8
### As a Customer I must be able to:
- open main page 
- register
- login/logout
- create a list
- view my list
- remove a list i own
- search for items
- add items to my list
- remove items from my list
- get the total cost of my list
- set the quantity of an item on my list
### As an Employee I must be able to:
- open main page 
- register using Employee number
- login/logout
- view item inventory
- add items to inventory
- update items in inventory
- remove items from inventory
### As a Manager I must be able to:
- add new employee 
- view current employee(s)
- update an employee
- remove an employee
- all other employee functionality

Reach Goals:
- customers can share lists  
- customers can have many lists
  
contributors: Awaab Elamin, Andy Escobar, Joshua Robles, Mike Campbell, Scott Damon
  
  

![p2_erd](https://user-images.githubusercontent.com/70548966/156214482-17d4b360-a4af-4ab1-bccb-13b0ba88c9bc.PNG)
