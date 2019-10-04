## TTS Dashboard | [Live Demo](https://jordanmor.github.io/tts-dashboard-project/)

A product dashboard, used internally by a company, that uses a RESTful API service, an SQL database and a front end built with Angular.

**Screencast of the Tech Talent Select Capstone Project - up for review by The Hartford** 

![TTS Dashboard Screen Cast](tts-dashboard-screencast.gif) 

**Project Assigned:** 09/19/2019  
**Project Due:** 10/04/2019  
**Project Completed:** 10/04/2019

---

## TTS Dashboard Working Features
A REST API that can handle the following:
- connect to a MySQL database, create necessary tables and establish Many to One mappings of relevant entities 
- send, add, update and delete data on products, categories and suppliers
- send data in paginated format
- send product paginated data sorted by id, name, full price, sale price, discount, category or supplier
- send product paginated data by category, supplier, availability, category & availability and supplier & availability
- send product data filtered and sorted  
- sends custom error messages for certain failed http requests

A front end dashboard built with Angular that:
- displays products, categories and suppliers data
- uses modals to add a product, category or supplier
- can toggle from a displayed table row to an editable row where a product, category or supplier's information can be changed and updated
- can delete a product, category or supplier
- utilizes reactive forms with built-in and custom validation (ex. form can not be submitted if sale price exceeds the full price)
- utilizes a dropdown filter that can be toggled and can filter products dynamically by category, supplier, availability, category & availability and supplier & availability
- can sort products by id, name, full price, sale price, **discount**, category or supplier
- highlights sorted and filtered fields
- shows direction of sorted field
- utilizes pagination
- utilizes a page size filter
- handles and displays to user select error messages from backend
- has custom styling and a theme based on three of The Hartford's main website colors


### Languages, Frameworks, Tools, Technologies & Plugins Used

| Languages | Frameworks & Libraries | IDEs & Tools  | Plugins       |
| ------------- | ------------------ | ------------- | ------------- | 
| Java          | Spring Boot        | IntelliJ IDEA | ng-bootstrap  |
| JavaScript    | Spring Data JPA    | VS Code       | font-awesome  | 
| TypeScript    | Spring Web         | Git           |               |
| SQL           | Angular            | GitHub        |               |
|               | Bootstrap 4        | Heroku        |               |
|               | Lodash             |               |               |

---

## Installation Instructions - SERVER
1. git clone https://github.com/jordanmor/tts-dashboard.git
2. Open project in your IDE of choice, e.g., IntelliJ, Eclipse.
3. Choose the project SDK and wait for the IDE to sync the Maven project.
4. Create a MySQL database named `dashboard` using MySQL WorkBench or your tool of choice.
5. Go to the `application.properties` file in `src/main/resources`, comment out the JDBC URL, username and password 
for the Heroku connection and use the following properties to use the app with your local MySQL db
    ```
    spring.datasource.url=jdbc:mysql://localhost:3306/dashboard?useSSL=false&serverTimezone=UTC
    spring.datasource.username={YOUR MYSQL USERNAME}
    spring.datasource.password={YOUR MYSQL PASSWORD}
    ```    
    **Note: Make sure MySQL is running on your local machine.**  
5. Change all of the controllers cross origins annotations to: `@CrossOrigin(origins = "http://localhost:4200")`
6. Run the application, which will connect to the local MySQL db, create the database schema with all relevant tables and columns, populate the tables with initial data from csv files found in `src/main/resources/csv`, and run the REST API that will communicate with your front end.

 ---

## Installation Instructions - CLIENT

1. The Angular front end of this application is located in the directory `client/`
2. If you do not already have the Angular CLI installed, then install it globally using the following command:  
`npm install -g @angular/cli`
3. Open this part of the application with the source-code editor of your choice, e.g., VS Code, Atom, Sublime, IntelliJ IDEA
4. Go to the folder `client/` and run `npm install` to install all necessary dependencies.
5. Go to the file `client/src/core/services/data.service.ts` and:  
  Comment out the following url setting used in production for connecting to the API hosted on Heroku
      ```
    host: string = 'https://ttsdashboard.herokuapp.com';
    ```
    Uncomment the following url setting to use for local development and testing:
    ```
    host = 'http://localhost:8080';
    ```

### Usage Instructions

**Run the application**

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  

You can optionally launch the server and automatically open a browser window by using the CLI command `ng serve --open`

**Build**

Run `ng build` to build the project. The build artifacts will be stored in the folder `../docs/` located in the main project's root directory.

In order for the build files to be saved in the `../docs` folder located outside the angular directory, the normal build output path has been changed in the `angular.json` file settings to the following:
- outputPath set to ../docs
- baseHref to /tts-dashboard-project/

**Build live demo for GitHub** 

Make a duplicate of the `index.html` file in the `docs` directory and rename it to `404.html`. Make sure to keep the `index.html` file.

Commit the `docs` directory to your GitHub repository named `tts-dashboard-project`. Go to the repo's settings and select the `master branch/docs` folder as the source of your GitHub page.

**Additional information**  

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

----

## Original Project Instructions

For the project, imagine you have been tasked with building a product dashboard that your company will use internally. There are a few requirements:

- Create a RESTful API service to add, update, and retrieve product information
- Uses Hibernate to interact with a SQL database
- Utilizes Angular on the front-end 

- Each product is a record with the following columns:
  - id: unique identifier
  - name
  - category: ID relating to category table
  - full_price: up to two places of decimal
  - sale_price: up to two places of decimal
  - availability: boolean value stating is the product is in stock (true) or not (false)
  - supplier: ID relating to supplier table

- The MVP will be able to :
  - Perform basic CRUD functions
  - Return a list of products by category
  - Return a list of products by category and availability
  - Sort products by full price, sale price, and the percentage of discount

- At the end of the project, you should have two parts: 
  - a Java Spring Boot application handling your RESTful API
  - a simple front-end application that interacts and displays the data from your API