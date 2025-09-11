const jwt = require('jsonwebtoken');
const validate  = require('../../middleware/auth.middleware');


jest.mock('jsonwebtoken');

describe('isAuthorized middleware',()=>{
    let req,res,next;

    beforeEach(()=>{
        req = { headers: {} };
        res = {
            send:jest.fn(),
            status: jest.fn().mockReturnThis()
        };
        next = jest.fn();
    });

    it('should return 400 if token is missing',()=>{
        validate(req,res,next);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith({ "Data": 'Token is missing'});
        //expect(next).not.toHaveBeenCalled();


    })
});