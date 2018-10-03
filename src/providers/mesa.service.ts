import {Injectable} from "@angular/core";
import {UtilsService} from "./utils.service";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {AppConfig} from "../app/app.config";
import {School} from "../model/school";
import {Mesa} from "../model/mesa";
import {Avatar} from "../model/avatar";

@Injectable()
export class MesaService {

  constructor(
    public http: Http,
    public utilsService: UtilsService) { }

  public getMyMesa(): Observable<Mesa> {

    let options: RequestOptions = new RequestOptions({
      headers: this.utilsService.setAuthorizationHeader(new Headers(), this.utilsService.currentUser.id)
    });

    var url: string = this.utilsService.getMyUrl() + AppConfig.MYMESA_URL;

    return this.http.get(url, options)
      .map((response: Response, index: number) => Mesa.toObject(response.json()))
      .catch((error: Response) => this.utilsService.handleAPIError(error));
  }
}
