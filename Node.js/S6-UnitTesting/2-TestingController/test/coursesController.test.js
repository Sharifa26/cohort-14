const coursesController = require('../controllers/courses.controller');
const coursesModel = require('../models/courses.models');

jest.mock("../models/courses.models", () => ({
  find: jest.fn(),
}));


describe("Testing Courses Controller",()=>{
    
    describe("Testing get All courses method",()=>{
        it('Should return All courses', async() => { 
            const mockCourses = [
                { id: "1", name: "courses 1" },
                { id: "2", name: "courses 2" }
            ];

            coursesModel.find.mockResolvedValue(mockCourses);

            // mock req/res
            const req = { query: {} };
            const res = { send: jest.fn() };

            await coursesController.getAllCourses(req, res);

            expect(res.send).toHaveBeenCalledWith(mockCourses);
        })
    });
});