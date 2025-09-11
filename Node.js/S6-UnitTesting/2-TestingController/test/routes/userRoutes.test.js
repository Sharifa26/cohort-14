const router = require('../../routes/userRoutes');
const {registerUser,loginUser} = require('../../controllers/userController');
const express = require('express');
jest.mock('../../controllers/userController');

const request = require('supertest');

//creating a instance of express
const app = express();
app.use(express.json());
app.use(router);

//create a User

describe('User Authentication routes',()=>{
    describe('Test POST /register',()=>{
        it('should successfully register a user',async()=>{
            const user = {
                name: "rabiya",
                email: "rabiya@gmail.com",
                password: "rabiya",
                age: 22
            };

            //Mock the register funtion
            registerUser.mockResolvedValue(user);

            const res = await request(app)
                                .post('/register')
                                .send(user)
                                .expect(201);

            expect(res.body).toEqual(user);
            expect(registerUser).toHaveBeenCalledTimes(1);
        });


        it('should return an error if fails',async()=>{
            const user = {
                name: "rabiya",
                email: "rabiya@gmail.com",
                password: "rabiya",
                age: 22
            };

            
            registerUser.mockRejectedValue({message: "User registration fails"});
            
            const res = await request(app)
                                .post('/register')
                                .send(user)
                                .expect(500);
        });
    });
});

