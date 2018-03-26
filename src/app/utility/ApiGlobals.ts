import {Injectable} from '@angular/core';

@Injectable()
export class ApiGlobals {

  // Externals
  public static tokenName = 'Squidward_id';
  public static apiDomain = 'squidward-backend.herokuapp.com';
  public static apiRoot = 'https://squidward-backend.herokuapp.com';
  public static loginURI = '/api/user/login';
  public static registerURI = '/api/user/register';
  public static ownedURI = '/api/projects/owned';
  public static developerURI = '/api/projects/developer';
  public static newURI = '/api/projects/new';

  // Internals
  public static loginRoute = '/login';
  public static projectsRoute = '/projects';
}
