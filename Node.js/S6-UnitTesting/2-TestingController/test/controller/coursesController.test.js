const coursesController = require('../../controllers/courses.controller');
const coursesModel = require('../../models/courses.models');


jest.mock("../../models/courses.models");


describe("Testing Courses Controller", () => {

    describe("Testing get All courses method", () => {
        it('Should return All courses', () => {
            const mockCourses = [
                { id: "1", name: "courses 1" },
                { id: "2", name: "courses 2" }
            ];
            coursesModel.find.mockReturnValue(mockCourses);
            // mock req/res
            // const req = { query: {} };
            // const res = { send: jest.fn() };

            //await coursesController.getAllCourses(req, res);
            expect(coursesController.getAllCourses()).toBe(mockCourses);
        })
    });

    //     describe("Testing get a courses method", () => {
    //         it('Should return a specific courses courses', () => {
    //             const mockCourse = [
    //                 { id: "1", name: "courses 1" }];
    //             coursesModel.findById = jest.fn().mockImplementation((id) => {
    //                 return id == 1 ? mockCourse : null;
    //             })

    //             expect(coursesController.getById(1)).toBe(mockCourse);
    //             expect(coursesModel.findById).toHaveBeenCalledTimes(1);
    //         });


    //         it('Should throw error if  course is not found', () => {
    //             const mockCourse = [
    //                 { id: "1", name: "courses 1" }];
    //             coursesModel.findById = jest.fn().mockImplementation((id) => {
    //                 throw new Error('Not founds')
    //             })

    //             //expect(coursesController.getById(1)).toBe(mockCourse);
    //             expect(coursesModel.findById).toThrow('Not founds')
    //             expect(coursesModel.findById).toHaveBeenCalledTimes(1);
    //         });
    //     });
});