import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  public login(){
    
    if ((<HTMLInputElement>document.getElementById("username")).value !== "" && (<HTMLInputElement>document.getElementById("password")).value !== "") {
            if ((<HTMLInputElement>document.getElementById("username")).value === localStorage.getItem("un") && (<HTMLInputElement>document.getElementById("password")).value === localStorage.getItem("pw")) {
                this.navCtrl.push(HomePage);
            } else {
                document.getElementById("logError").innerHTML = "Username or Password does not match!";
            }
        } else {
            document.getElementById("logError").innerHTML = "Please provide username and password!";
        }
  }
  
  public goToRegister(){
    this.navCtrl.push(RegisterPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
