require('dotenv').config();
const userController = require('./user');
const userDataMapper = require('../../datamappers/user');
const { ApiError } = require('../../helpers/errorHandler');

describe('userController',() => {
  test('createOne should return res.status 200', async () => {
    const mRequest = { 'body' : {
      email: 'toto@gmail.com',
      password: 't',
      pseudonym: 'toto',
    }}
    const mResponse = {status : jest.fn().mockReturnThis(), send:jest.fn(),json : jest.fn().mockReturnThis()};
    const user = await userDataMapper.findOneByEmail('toto@gmail.com');
    if (user){
      await userDataMapper.delete(user.id);
    }
    const res = await userController.createOne(mRequest,mResponse);
    expect(res.status).toBeCalledWith(200);
  });
  test('createOne should return new API Error', async () => {
    const mRequest = { 'body' : {
      email: 'toto@gmail.com',
      password: 't',
      pseudonym: 'toto',
    }}
    const mResponse = {status : jest.fn().mockReturnThis(), send:jest.fn(),json : jest.fn().mockReturnThis()};
    async function createOne() {
      await userController.createOne(mRequest,mResponse)
    }
    // expect(createOne).rejects.toThrowError(new ApiError('Un compte est déjà associé à cette adresse mail', { statusCode: 409 }))
    expect(createOne).rejects.toThrowError(ApiError)
    // expect(createOne).rejects.toThrow()

  });
 
});