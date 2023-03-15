My solution for Solita Dev Academy pre-assignment

Exercise info: https://github.com/solita/dev-academy-2022-fall-exercise

Endpoints: 
  - station data: https://helsinkicitybikes.herokuapp.com/stations 
  - journey data: https://helsinkicitybikes.herokuapp.com/journeys 

(Note: I only imported June journeys in demo project to save some MongoDB Atlas free tier storage space)

## Importing data

Make a folder named 'data' in projects root and save following files:

* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv>

* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv>

* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv>

* <https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv>

Go to backend directory and run ``` npm run import-data ```

Make sure you have set a MONGODB_URI environment variable. 

Data should be imported to your database.

## Starting app

Following commands are supposed to run in a city-bikes-backend folder. If you're using windows, use wsl or git bash to run commands, scripts are containing linux operations. 

- Run ``` npm run tsc ``` to compile typescript into a javascript build

- Run ``` npm run build:ui ``` to build a production version of frontend code. Script copies build to correct folder in backend for compiled backend to use. 

- Fully compiled app starts using ``` npm start ```
