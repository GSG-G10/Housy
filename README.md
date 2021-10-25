# Real Estate
Real Estate is an App that facilitates to access and rent or buy available homes.

## Team Members :busts_in_silhouette::-
1.  Mohammed haroon
2.  MOhammed salah
3.  ameera
4.  Elham Fadel



# Main problem 🌚:
The problem is that in popular areas a person should go to the site and see the house or the real estate that he want to buy and he should employ a broker to find him a house and this process costs a lot of time and effort.

# Solution 💡:
A site that is a real estate broker to facilitate communication and negotiation between the seller and the buyer, saving them time and effort on the buyer by providing images, real price and more details, place, so he will know which place will select.

# User stories 📖:

* #####  AS a USER I can :
    1. see a group of houses or real estate with more details (Home page).
    2. Sign up for the app.
    3. login in to the app.
    4. see specific information about any house.
    5. add houses to my favorite list.
    6. AS a USER want to search by different locations, prices, and the number of rooms in the house

* #### AS a Host I can :
    1. able to hosting the house or room.
    2. need control panel to manage my houses.

* #### AS a admin I can :
    1. approve estate 
    2. delete any estate 
    3. delete user
    4. add anouter admin

    
    
# User Journey ✈️:

* As a user, I can see all available houses that can rent, search to find houses, appointment booking and I can add any liked house to my favorite list from my favorite list, inside my profile I have my information and control panel for my own houses available to rent.


* As a host ,I can see all my houses and add new house to renting ,i can edit my profile and my houses information .




# Prototype 
![](https://i.imgur.com/8FiBXmn.png)


# DB schema

![](https://i.imgur.com/sF5ZjzT.png)

## Technologies 💻:-
**BackEnd**: Node JS & Express JS.
**FrontEnd**: React JS,Material Ui.
**Database**: PostgreSQL.

## How to Launch App Locally :
 * clone repo:
 ```git clone https://github.com/GSG-G10/Housy.git && cd Housy```
* Run `npm i` to install the packages for the app as general.
* Run `cd client` and `npm i` to install the packages for the client.


### Database Setup 📋
* Make sure you have installed PostgreSQL and psql
```
CREATE DATABASE {database name};
CREATE USER {user name} WITH superuser password {password}
ALTER DATABASE {database name} OWNER TO {user name};
```
* Run the following command in the database pgcli terminal
`\i server/database/config/build.sql` .


### Start the App :-


To run Server, In your terminal Type: 

* `npm run dev` then you should be able to go to [localhost](http://localhost:5000/) 
 To run client-side, In your terminal Type:
* `cd client` => `npm start` then you will be able to run [localhost](http://localhost:3000/) 
Now you can view the app live in the Browser!

