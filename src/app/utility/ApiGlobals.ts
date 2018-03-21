import {Injectable} from '@angular/core';

@Injectable()
export class ApiGlobals {
  tokenName = 'Squidward_id';
  apiRoot = 'https://squidward-backend.herokuapp.com';
  loginURI = '/api/user/login';
  registerURI = '/api/user/register';
  ownedURI = '/api/projects/owned';
  newURI = '/api/projects/new';
}
