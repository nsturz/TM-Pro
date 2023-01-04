# TM Pro

A full stack web application for professional artists and tour managers who want to keep track of touring artist data.

## Why I Built This

I spent nearly 10 years travelling around the country as a touring musician throughout my 20's. While on the road, there were many moving parts, and it could become difficult to stay organized. TM Pro is something that I wish I could have used during my time on the road, and this idea was central to my decision making process when building this application.

## Tehcnologies Used

- React.js
- Express.js
- Node.js
- Google Maps API
- Webpack
- Bootstrap 5
- PostgreSQL
- HTML5
- CSS3
- Dokku

## Live Demo

Try TM Pro live at https://tm-pro.nicksturz.dev/#

## Features

- User can add a new artist
- User can create new tour dates for each artist
- User can add details (schedule, notes, contacts, venue info) to each tour date
- User can view tour dates and all corresponding info on the main dashboard view.
- User can edit tour dates for each artist
- User can delete tour dates for each artist
- User can view a “Route Overview” that shows the distance that is to be travelled to the next city, with details about distance and duration.

## Preview 

### Add a new date

![Kapture 2023-01-03 at 17 08 37](https://user-images.githubusercontent.com/94485412/210466678-a0587a08-69dc-4698-9a1f-c7ae303f2cbf.gif)


### Dashboard view

![Kapture 2023-01-03 at 16 59 59](https://user-images.githubusercontent.com/94485412/210466631-e47ce906-71bd-405f-89c9-75f5d8ef0035.gif)

### Route Overview

![Kapture 2023-01-03 at 17 01 24](https://user-images.githubusercontent.com/94485412/210466655-14054090-8c92-4a2b-8e5a-42bbfc48ba01.gif)

## Getting started

1. Clone the repository.

```shell
git@github.com:nsturz/final-project.git
```

2. Install all dependencies with NPM.

    ```shell
    npm install
    ```
    
3. Create an `.env.example file`, and change the name in the `DATABASE_URL` from `changeme` to a name of your choice.
    ```shell
    cp .env.example .env
    ```
    
4. Start PostgreSQL.
   ```shell
   sudo service postgresql start
   ```
   
5.  Create the database in the PostgreSQL database server. Use the database name you selected above.
  ```shell
  createdb nameOfDatabase
  ```
  
6. Import starting data from `data.sql`.  
  ```shell
  npm run db:import
  ```
  
7. Start the database. 
```shell
pgweb --db=nameOfDatabase
```

8. Start the project. It can be viewed at `http://localhost:3000 ` in your web browser. 
```shell 
npm run dev
```
