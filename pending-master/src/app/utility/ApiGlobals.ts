import {Injectable} from '@angular/core';

@Injectable()
export class ApiGlobals {
  apiRoot = 'https://squidward-backend.herokuapp.com';
  loginURI = '/api/user/login';
  registerURI = '/api/user/register';
  ownedURI = '/api/projects/owned';
  newURI = '/api/projects/new';
}