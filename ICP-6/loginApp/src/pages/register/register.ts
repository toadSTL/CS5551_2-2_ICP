import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  public register(){
        if ((<HTMLInputElement>document.getElementById("un")).value !== "" && (<HTMLInputElement>document.getElementById("pw")).value !== "" && (<HTMLInputElement>document.getElementById("pwc")).value !== "") {
            if((<HTMLInputElement>document.getElementById("pw")).value == (<HTMLInputElement>document.getElementById("pwc")).value){
                localStorage.setItem("un", ((<HTMLInputElement>document.getElementById("un")).value));
                localStorage.setItem("pw", ((<HTMLInputElement>document.getElementById("pw")).value));
                this.navCtrl.pop()   
            }else{
                document.getElementById("regError").innerHTML = "Password confirmation must match Password!  Please re-enter!";
            }
        }
        else {
            document.getElementById("regError").innerHTML = "Please provide username and password and please confirm password!";
        }
  }

}
