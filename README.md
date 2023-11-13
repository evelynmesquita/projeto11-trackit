<p align="center">
  <a href="projeto11-trackit-jet-one.vercel.app" target="_blank">
    <img src="public/assets/img/logo.png" height="160" width="160" alt="" />
  </a>
</p>

# Description

In this project, you will build a complete habit tracking application! With features such as registration, login, and plenty of libraries 🙂.

## Requirements

- [x] Desktop version is not required, only mobile

## Login Screen

- [x] Email and password must be sent to the API according to the documentation <br>
- [x] While loading, fields and the button should be disabled, following the layout <br>
- [x] Upon success, the user should be redirected to the route /today <br>
- [x] Upon success, the user should be redirected to the route /today <br>
- [x] Clicking on the link to register should redirect the user to the route /register <br>

## Register Screen

- [x] Data must be sent to the API according to the documentation <br>
- [x] While loading, fields and the button should be disabled, following the layout <br>
- [x] Upon success, the user should be redirected to the route / (Login route) <br>
- [x] In case of failure, an alert should be displayed informing the user and fields/button should be enabled again <br>
- [x] Clicking on the link to log in should redirect the user to the route / (Login route) <br>

## Header and Menu

- [x] The header and menu must have a fixed position, and the user's photo should be displayed in the header according to the layout <br>
- [x] In the menu, the 3 buttons for Habits, Today, and History should redirect the user to the routes /habits, /today, and /history respectively <br>
- [x] The Today button should display a circular progress bar indicating the percentage of the user's habits completed today <br>

## Habits Screen

- [x] Load the user's habits by sending a request to the API according to the documentation and display them below as per the layout
- [x] Clicking to delete a habit should display a 'confirm' to verify if the user really wants to delete the habit. If confirmed, a request should be sent to the API according to the documentation, and the habits reloaded immediately after.
- [x] If the user has no habits registered, the text should be displayed according to the layout
- [x] Clicking on the "+" button should display a habit creation form just below the title as per the layout
- [x] The user should enter the habit's name in a text field and select the days of the week they wish to perform the habit according to the layout
- [x] Upon saving, data should be sent to the API according to the documentation
- [x] While loading, the text field and button should be disabled, as per the layout. The buttons for the days of the week should be disabled, but visual changes during loading are not necessary.
- [x] In case of success, the fields should be cleared and re-enabled, the form should be hidden again, and the list of habits below reloaded
- [x] In case of error, the fields should be re-enabled, and an alert should indicate the problem to the user
- [x] Clicking on Cancel should hide the form. If there were already filled data, it should be retained in case the user reopens the creation form.

## Today Screen

- [x] Load the user's habits for today by sending a request to the API according to the documentation and display them below as per the layout
- [x] The title of the screen should display today's date according to the layout
- [x] The subtitle should display the phrase "No habits completed yet" or "x% of habits completed," depending on the user's progress
- [x] When marking or unmarking a habit as completed, a request should be sent to the API according to the documentation. No loading is necessary.
- [x] When marking a habit as completed, the current sequence count should be displayed in green
- [x] If the current sequence equals the user's record, it should also be displayed in green

## History Screen

- [x] The text should be displayed according to the layout

## Tech Stack

Languages and tools:

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
</p>

## Deploy

The application layout is available on Vercel:

<a href="projeto11-trackit-jet-one.vercel.app" target="_blank">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
</a>
