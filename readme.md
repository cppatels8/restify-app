#Restify Usage
==============

Restify allows you to create new application backend very easily and
conveniently. Let's take an example of bidding application and create it
from the scratch using Restify.

Step 1:
--------

**Define Entities** : Decide the entities required for the application. This is more like categorizing your application into modules. For example in bidding application we have following entities:
      - Products 
      - Bid
      - Results

Step 2:
--------

**Define your Schema**: After creating entities, you'll have to
define attributes for each one of them. For example in bidding application
we define the attributes as follows:

1. Products
        {
            "name": {"type" : "string"},
            "description": {"type": "string"},
            "type": {"type": "string"},
            "openDate": {"type": "string"},
            "closeDate": {"type": "string"},
            "awardedDate": {"type": "string"}
        }

2. Bid
        {
            "productName": {"type": "string"},
            "supplierName":{"type": "string"}, 
            "supplierAddess": {"type": "string"},
            "bidValue": {"type": "string"},
            "bidId": {"type": "string"}
        }

3. Results
        {
            "productName": {"type": "string"},
            "supplierName": {"type": "string"},
            "awardedValue": {"type": "string"},
            "bidId": {"type": "string"}
        }
 
Step 3:
--------

**Declare data model in Restify**: 
  - Navigate to restify services url, http://restify.labs.hashedin.com/services and click on *Create New Entity*
  - Specify the Entity name we decided in *Step 1* for *Name* under *Entities*. Add description for the entity.
  - Specify the attribute names and type from *Step 2* for *Name* and
    *Type* under *Add Fields*
  - Repeat *Step 3* for each of the entities in *Step 1*.

**Congratulations!** you've created the backend of your application.

To view the entities and their attributes created, follow below steps:
  - Navigate to http://restify.labs.hashedin.com/apps.
  - Click on the link *ApiDocs* against your application.
  - Enter the usename and password against each field and click
    "Get token". 
  - Click on any one of the Entity names mentioned in *Step 1*. For example in case of bidding application we click on *Products*. 
  - After clicking on products, we find options like "POST", "GET", "PUT", "DELETE" etc. To view the schema for products click on "GET".
  - We have two options there namely *Model* and *Model Schema*. Click on *Model Schema* to view the attributes and their types. We would also use this model schema to post data for that particular entity.

How make GET request using Api Docs:
-------------------------------
  - Navigate to ApiDocs page using above mentioned steps.
  - Click on GET option.
  - Click on *try it out* button to get the data for that entity.

How make GET request using Api Docs:
-------------------------------
  - Navigate to ApiDocs page using above mentioned steps.
  - Click on POST option.
  - In the data section, input the values in the format we saw in *Model
    Schema* under GET section earlier. For example for products we
provide following data as input:

        {
            "name": "Pen",
            "description": "Pen with black Ink",
            "type": "Stationary",
            "openDate": "24th September 2013",
            "closeDate": "20th December 2013",
        }

  - Click on *try it out* button to post the data for that entity.
  - Verify the data you posted using GET request as mentioned in the
    above steps.

