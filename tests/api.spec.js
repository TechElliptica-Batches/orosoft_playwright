import { test,expect } from '@playwright/test';

test("validate user added successfully", async({request})=>{
    const authResponse = await request.post(
        "http://localhost:4000/api/auth/login",
        {
           data : {
                "email": "admin@acme.test",
                "password": "admin123"
            } 
        }
    )
    expect(authResponse.status()).toBe(200);
    const authJson = await authResponse.json();
    let token =  await authJson.data.token;
    console.log(token);


    const userResponse = await request.post(
        "http://localhost:4000/api/users",
        {
            headers: {
              "Authorization":`Bearer ${token}`
            },
            data: {
                "firstName": "Orosoft",
                "lastName": "User4",
                "email": "orosoftuser4@orosoft.com",
                "phone": "9876543210",
                "role": "QA",
                "status": "Active"
                }
        }
    )

    expect(userResponse.status()).toBe(201);
    const newUserResponseJSON = await userResponse.json();
    let newUserId =  await newUserResponseJSON.data.id;
    console.log(newUserId);


        const getUserResponse = await request.get(
        `http://localhost:4000/api/users/${newUserId}`,
        {
            headers: {
              "Authorization":`Bearer ${token}`
            }    
        }
    )

    expect(getUserResponse.status()).toBe(200);
    const newGetUserResponseJSON = await getUserResponse.json();
    expect(newGetUserResponseJSON).toHaveProperty("email")
    console.log(newGetUserResponseJSON);


})


// post 
// get
// put
// get
// delete
// get

