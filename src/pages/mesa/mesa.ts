import {Mesa} from "../../model/mesa";
import {TranslateService} from "ng2-translate/ng2-translate";
import {IonicService} from "../../providers/ionic.service";
import {NavParams} from "ionic-angular";
import {Component} from "@angular/core";

@Component({
  selector: 'page-mesa',
  templateUrl: './mesa.html'
})

export class MesaPage {

  public mesa: Mesa;

  constructor(
    public navParams: NavParams,
    public translateService: TranslateService,
    public ionicService: IonicService) {

    this.mesa = this.navParams.data.mesa;
  }
  public ionViewDidEnter(): void {

    this.ionicService.removeLoading();
  }

}
