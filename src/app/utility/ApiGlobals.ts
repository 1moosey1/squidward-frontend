import {Injectable} from '@angular/core';

@Injectable()
export class ApiGlobals {
  public static tokenName = 'Squidward_id';
  public static apiRoot = 'https://squidward-backend.herokuapp.com';
  public static loginURI = '/api/user/login';
  public static registerURI = '/api/user/register';
  public static ownedURI = '/api/projects/owned';
  public static newURI = '/api/projects/new';
}
