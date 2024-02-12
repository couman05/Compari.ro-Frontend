# [Zoompari.ro]

[Zoompari.ro] is a full-stack web application designed to aggregate and compare product prices across various online stores, offering functionalities similar to compari.ro. This application leverages Angular for the frontend, Spring Boot for the backend, MySQL and MongoDB for data storage, and implements data scraping to gather product information.

## Features

- Product search and comparison across multiple online retailers.
- User account creation and management.
- Wishlist and alert system for price drops or stock availability.
- Admin panel for managing products, stores, and scraped data.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Java 8
- npm 6.14.13
- Angular 10
- MySQL Server
- MongoDB
- Maven (for Spring Boot project management)

## Installation

### Frontend Setup

1. Make sure you cloned and properly set up the backend repository found here https://github.com/couman05/Compari.ro-Backend
2. Run `npm install` to install all dependencies.
3. Start the Angular development server using `ng serve`.
4. Open your browser and navigate to `http://localhost:4200`.

## Usage and screenshots of application functionalities

- **Landing page**
  ![image](https://github.com/couman05/Compari.ro-Frontend/assets/103687306/65d0aa27-e092-4cbb-a436-01a648a88e92)
- **Home Page**
  ![image](https://github.com/couman05/Compari.ro-Frontend/assets/103687306/d80f6e85-53c9-4197-8ea7-88e114c60d12)
- **Search and Compare:** Enter a product name to view prices from different stores.
  ![image](https://github.com/couman05/Compari.ro-Frontend/assets/103687306/5d446fde-d821-4ffa-94e1-2b72a0f952cd)
- **Product Page**
  ![image](https://github.com/couman05/Compari.ro-Frontend/assets/103687306/2022b60f-cbc8-43d6-aa5e-dd4b3ee84851)
- **Wishlist**
  ![image](https://github.com/couman05/Compari.ro-Frontend/assets/103687306/77e81560-4845-4d85-ace4-2407d3579a21)
- **Personalized alert email notifications**
  ![image](https://github.com/couman05/Compari.ro-Frontend/assets/103687306/a2761311-4296-4bd3-9c3f-953e168e91a8)
- **Create an Account:** Sign up to access personalized features such as wishlists and alerts.
  ![image](https://github.com/couman05/Compari.ro-Frontend/assets/103687306/61039cc1-d75c-459c-b9a3-58c8c17bbc4e)
- **Admin Panel:** Accessible by admin users for managing application data.
  ![image](https://github.com/couman05/Compari.ro-Frontend/assets/103687306/4d35b892-a6a3-4f1c-964b-a4a1416f525a)


## Data Scraping

Data scraping python scripts are already set up locally. With their help we basically collect data from various sellers on the internet and store that data into our MongoDB collection.

## Team members 

Buze Alexandra-Maria: https://github.com/BuzeAlexandra
Coman Emanuel-Stefan: https://github.com/couman05
Martin Carla-Iulia: https://github.com/carlaIMartin




