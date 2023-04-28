# Software Design

## Actors
In our system, we will have 3 actors.

- The user
- The seller
- The customer

### The user
Represent the main actor of the system.

### The seller
It's a potential seller looking for customer.

### The system
Represent the AI behind the application.


## Use Case Diagram
![use_case_diagram](img/use_case.png)

### User case description

#### Check price of a good
The user enter the name of a good and get the estimation price.
It can see more information like:

- estimation by location
- estimation by market
- how the estimation was done
- if another customers approved it

#### Browse a Market
The user open the market page and can see registered markets by location and the market price stability level of each market.
Can also see the different market sales places.

#### Send a feedback
When the user detect a wrong estimation or a fraud in the application, he can send signal it.
These different signalling can be:

- Feedback about a market price
- Feedback about a sales place

#### Create sales place
The seller enter some information about him and his sales place.

#### Update an article
The seller enter some information about the article he offer.

#### Update market price
The AI is frequently analyzing collected data to offer better estimation.


## Activity Diagram

### Check market price
![activity_check_market_price_diagram](img/activity_check_market_price.png)

### Browse a market
![activity_browse_market_diagram](img/activity_browse_market.png)

### Send feedback
![activity_send_feedback_diagram](img/activity_send_feedback.png)

### Create sales place
![activity_create_sales_place_diagram](img/activity_create_sales_place.png)

### Update article
![activity_update_article_diagram](img/activity_update_article.png)

### Update market price
![activity_update_market_diagram](img/activity_update_market.png)


## Class diagram
TODO