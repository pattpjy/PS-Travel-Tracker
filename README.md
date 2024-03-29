# PS Travel Tracker

An application to manage and track different trips for users and a travel agency.  User should see a dashboard page that shows all of user's trips (past, upcoming and pending. And also total amount user have spent on trips this year. User should able to make a trip request by select a date, duration, number of travelers and choose from a list of destinations. After making these selections, user should see an estimated cost (with a 10% travel agent fee) for the trip. Once user submit the trip request, it will show on the dashboard as “pending”.

<img width="902" alt="Screen Shot 2023-04-28 at 12 32 05 AM" src="https://user-images.githubusercontent.com/111454351/235071983-698edb5b-2146-47ee-852c-17ecbfc067a4.png">

### Built With

[![Javascript][javascript.js]][javascript-url]
[![CSS][css]][css-url]
[![HTML][html]][html-url]
[![Webpack][webpack]][webpack-url]
[![API][api]][api-url]
[![Mocha][mocha]][mocha-url]
[![Chai][chai]][chai-url]
[![Git][git]][git-url]
[![GitHub][github]][github-url]
[![dayjs][dayjs]][dayjs-url]

## Getting Started

### Installation

1. Fork and Clone the repo
   ```sh
   git clone git@github.com:pattpjy/PS-Travel-Tracker.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run npm start
   ```sh
   npm start
   ```
4. Use the Link that is given in the Terminal & Open in Browser
   ```sh
   Example: http://localhost:8080/
   ```
   
## API Installation

5. Clone the repo
   ```sh
   git clone https://github.com/turingschool-examples/travel-tracker-api 
   ```
6. cd into it from terminal

7. Install NPM packages
   ```sh
   npm install
   ```
8. Run npm start
   ```sh
   npm start
   ```
9. Close using control + c

To run the application, make sure that npm package is run on version 16 (nvm use 16) and the server is running. 
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Architecture -->
Architecture Model View Controller Pattern
```mermaid
  classDiagram
   User <--> View
   note for View "querySelector as Obj
                  input, eventListerner"
   View <--> Controller
   Controller <--> API 
   Controller <--> Model
  
   Controller: controller.js
   User: index.html
    class View{
        script.js
        + promtLogIn
        + login method
    }
   class Model{
      tripsRepo.js 
      DestiRepo.js
   }
```
```mermaid
  classDiagram
   Model_Contain-->tripsRepo
   tripsRepo--> DestiRepo
   tripsRepo--> trip_class
   tripsRepo--> traveler_class
   DestiRepo--> Destination_class
```
<!-- ROADMAP -->

See the [open issues](https://github.com/pattpjy/PS-Travel-Tracker/issues) for a full list of proposed features (and known issues).



[patt-badge]: https://img.shields.io/badge/-Patt%20Sookmark-brightgreen
[patt-url]: https://github.com/pattpjy

[mocha]: https://img.shields.io/badge/Mocha-FF2D20?style=for-the-badge&logo=mocha&logoColor=white
[mocha-url]: https://mochajs.org/
[chai]: https://img.shields.io/badge/Chai-20232A?style=for-the-badge&logo=chai&logoColor=61DAFB
[chai-url]: https://www.chaijs.com/
[webpack]: https://img.shields.io/badge/Webpack-563D7C?style=for-the-badge&logo=webpack&logoColor=white
[webpack-url]: https://webpack.js.org/
[dayjs]: https://img.shields.io/badge/-dayjs-fb6052?style=for-the-badge
[dayjs-url]: https://www.npmjs.com/package/dayjs
[css]: https://img.shields.io/badge/CSS-000000?style=for-the-badge&logo=css&logoColor=white
[css-url]: https://www.w3.org/Style/CSS/Overview.en.html
[html]: https://img.shields.io/badge/HTML-4A4A55?style=for-the-badge&logo=HTML&logoColor=FF3E00
[html-url]: https://www.w3schools.com/howto/howto_make_a_website.asp
[javascript.js]: https://img.shields.io/badge/JavaScript-0769AD?style=for-the-badge&logo=javascript&logoColor=white
[javascript-url]: https://www.javascript.com/
[api]: https://img.shields.io/badge/API-15EA75?style=for-the-badge&logo=HTML&logoColor=FF3E00
[api-url]: https://www.w3schools.com/js/js_api_intro.asp
[github]: https://img.shields.io/badge/GitHub-22043C?style=for-the-badge&logo=github&logoColor=FF3E00
[github-url]: https://github.com/
[git]: https://img.shields.io/badge/Git-2E0305?style=for-the-badge&logo=git&logoColor=FF3E00
[git-url]: https://git-scm.com/
