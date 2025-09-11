const { registerUser } = require('../../controllers/userController');
const UserModel = require('../../models/UserModel');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
});

beforeEach(async () => {
    await mongoose.connection.db.dropDatabase();
});

afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
});

describe("test user Registration", () => {

    it('should register a new user successfully with all fields', async () => {
        const user = {
            name: "rabiya",
            email: "rabiya@gmail.com",
            password: "rabiya",
            age: 22
        };

        const plainPassword = user.password;
        const dbUser = await registerUser(user);

        // console.log("Plain password:", plainPassword);
        // console.log("Hashed password:", dbUser.password);

        expect(dbUser).toHaveProperty('_id');
        expect(dbUser.email).toBe(user.email);
        expect(bcrypt.compareSync(plainPassword, dbUser.password)).toBe(true);
    });
});
