What is API ?

application programming interface 

zomato ->  Java
weather api ->  Python
google map -> go lang

API 
SOAP - 5% - secure protocol
REST - 95% 


REST - infrastructure 


App1 <-> json  <-> App2

1 - Authorization ,  (headers)
username-password
auth-api - username, password 
OAuth - token 
REST are stateless

2 - Resource - endpoint

3 - data 
   a - queryparam - key value
   https://www.google.com/lcoation?source=mumbai&target=pune

   b - pathparam - 
   https://www.linkedin.com/in/krishnaa-shinde-49901b1b7/

   c - payload - json
   https://www.google.com/lcoation

   {
    "source":"mumbai",
    "target":"pune",
    "trasport": "bus"
    "time": "noon"
   }


4 - Method (CRUD) - Create, read, update and delete 

    GET - Read 
    POST - Create - not idempotant call
    PUT - Update - entire resource update
    PATCH - Update - partial resource update
    DELETE - Delete

5 - Response 

1 - response header (cookies, user-agent)
2 - Response code - 
    1XX - informational
    2XX - success code
    3XX - redirectional code
    4XX - client side error
    5XX - server side error - (defect)


3 - Response body


Error Code
401 - Un-authorized
403 - forbidden

i will create one api for you 
1 - POSTMAN  api tetsing from manual 
2 - Playwright 


test pyramid 
install postman


users -  
products - down


{
    "data": {
        "id": "a14d92ef-8145-41ad-81ea-605ea7a59fe3",
        "firstName": "Orosoft",
        "lastName": "User1",
        "email": "orosoftuser1@orosoft.com",
        "phone": "9876543210",
        "role": "QA",
        "status": "Active",
        "createdAt": "2026-05-29T06:05:12.733Z"
    }
}


schema

429 - too many request

client ->   API gateway   ->  server

