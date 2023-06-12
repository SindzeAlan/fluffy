### TASK 6 : DATABASE DESIGN AND IMPLEMENTATION

## DATABSE DESIGN
This is the process of designing the various tables that will be used to holder the data in our market management system.


# THE ENTITY RELATIONSHIP DIAGRAM

An entity relationship diagram is a graphical representation of the entities and their relationships to each other within a database 
It is a visual tool used to model the structure of a database showing how different types of information are related to each other
Each entity is represented by a rectangle and the relationships between the entities are represented by lines connecting them.
The lines have symbols or labels to indicate the type of relationship between the entitites,such as one to one,one to many or many to many
Entities represent objects or concepts within the database. The entites available in our system are :
- The seller
- The MarketPlace
- The product
NB: There is no entity for buyers because they aren’t entities that belong to the system
The sellers, marketplace and product are entities that are part of the system.
Lastly The relationship between the entities is defined as follows:

A seller(one)  has multiple marketplaces. Each marketplace can have multiple products. Each product has a name, an id and a description
So the relationship between the seller and marketplace is one to many and between the marketplace and products is also one to many


Seller:
Seller id(primary key)
First name
Name
Email
Phone
Username
Password

Marketplace:
Marketplace id (primary key)
Seller id(foreign key)
Product id (foreign key)
Name
Location

Product
Name
price
Product id (primary key)
quantity
Picture
Description
    
                       


    

## DATABASE IMPLEMENTATION
This the process of turning the graphical diagram into a physical database table

# SQL IMPLEMENTATION

The DBMS which was used in this case was mysql because of its:
- OPEN SOURCE NATURE:Free to use,access and modify making it and attractive option
- COST  EFFECTIVE
- HIGH SCALABILITY:Can handle large volumes of data 
- COMPATIBILITY:Compatible with a large range of programming languages like php,python and java


create table seller(
    id serial primary key,
    first_name varchar(64),
    last_name varchar(64),
    email varchar(255) not null,
    phone varchar(32) not null,
    username varchar(64) not null,
    password varchar(255) not null
);

create table marketplace(
    id serial primary key,
    seller_id int not null,
    product_id int not null,
    name varchar(64) not null,
    location varchar(64) not null,
    foreign key (seller_id) references seller(id),
    foreign key (product_id) references product(id)
);

create table product(
    id serial primary key,
    price float,
    quantity int,
    picture varchar(255),
    description varchar(255)
);

  
# populating the database
the database was later populated with test data to verify how effectively it works and identify the different erros

