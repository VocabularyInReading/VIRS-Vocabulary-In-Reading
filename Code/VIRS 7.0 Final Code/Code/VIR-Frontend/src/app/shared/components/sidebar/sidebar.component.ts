import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from 'app/shared/services/register.service';
import { IUser } from 'app/shared/interface/IUser';
import { HttpErrorResponse } from '@angular/common/http';
import { JsEncryption } from 'app/shared/services/jsEncryption.service';
import { ChangePasswordComponent } from '../../../layout/change-password/change-password.component'
import { HttpResponse } from 'selenium-webdriver/http';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    providers: [RegisterService, ChangePasswordComponent], //both are new, added by @M
})
export class SidebarComponent implements OnInit {

    fullName: string;
    userName: string;
    passWord: string;
    firstName: string;
    level: string;
    email: string;
    emailRecovery: string;
    emailRecoveryByEmail: string;

    processing: boolean;
    show: boolean;
    login: boolean;
    successEmailSend: boolean;
    emailRecoveryMessage: string

    closeResult: string;
    isActive = false;
    showMenu = '';
    user: IUser;
    
    @Input() loginUser: string;
    @Input() loginPassword: string;
    constructor(private modal: NgbModal, private _register: RegisterService, private _encryptor: JsEncryption, private _changePassword: ChangePasswordComponent) { }


    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    ngOnInit()
    {
        if (localStorage.getItem("currentUser") != null)
        {
            this.fullName = localStorage.getItem("currentUser");
            this.getFirstName();

            this.show = true;
            this.login = true;
        }//if
    }
    ngAfterViewInit()
    {
        if(!window || !window.location || window.location.hash !== "#login") return;
        
        var aLogin = document.getElementById("aLogin");
        if(!aLogin) return;

        aLogin.click();
        aLogin = null;
    }

    //-----------------------------------------------------------------------------------
    //Opens or closes the modal
    open(content) {
        this.emailRecoveryMessage = ''
        this.successEmailSend = false
        console.log('opened');
        this.modal.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    //-----------------------------------------------------------------------------------

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    //-----------------------------------------------------------------------------------

    getUser(content) {

        event.preventDefault();
        console.log(this.loginUser);

        //console.log(this.loginUser);
        if (!this.loginUser) {
            this.processing = false;
            this.open(content);
            return;
        }//if
        this._register.getUser(this.loginUser)

            .subscribe(res => {
                this.user = res;
                if (this.verifyUser(this.user.password)) {
                    localStorage.setItem('currentUser', res.fullName);
                    localStorage.setItem('userName', res.userName);
                    localStorage.setItem('level', res.userLevel);
                    localStorage.setItem('email', res.email);
                    this.load();
                    this.getFirstName();

                    localStorage.setItem('currentUser', this.fullName);
                    localStorage.setItem('userName', this.userName);
                    localStorage.setItem('level', this.level);
                    localStorage.setItem('email', this.email);
                    //this.login = true;
                }//if
                else {
                    this.processing = false;
                    this.open(content);
                }
                /*//this is to test the encryption funstions ive created. (found in the jsEncription.service class)
                var temp: string;
                temp = this._encryptor.encrypt(this.user.fullName)
                console.log(this._encryptor.decrypt(this._encryptor.encrypt(this.user.fullName)));
               */
            },
                (err: HttpErrorResponse) => {   //this.change
                    this.processing = false;
                    this.open(content);
                    if (err.error instanceof Error) {
                        console.log('Client-side Error occured');
                    } else {


                        console.log('Server-side Error occured');
                    }
                })


    }

    logout() {
        this.show = false;
        this.login = false;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userName');
    }

submit()
{
    if(this.emailRecovery)
    {
    
        this.recoveryPassword();
    
    }
    else if (this.emailRecoveryByEmail)
    {
        this.recoveryPasswordWithEmail();
    }
    else
    {
        this.successEmailSend = true;
        this.emailRecoveryMessage = 'Please enter an email or username';
        this.setResetButtonDisabled(false);
    }//else

}
setResetButtonDisabled(disabled : boolean) : void
{
    var btnRecovery = <HTMLButtonElement>document.getElementById("btnRecovery");
    if(!btnRecovery) return;
    
    btnRecovery.disabled = false;
}
    recoveryPassword()
    {
        this.successEmailSend = false
        if (!this.emailRecovery || this.emailRecovery.trim() === "")
        {
            this.successEmailSend = true;
            this.emailRecoveryMessage = 'Please enter an email or username';
            this.setResetButtonDisabled(false);
        }//if
            this._register.recoverPassowrd(this.emailRecovery)
                .subscribe((res: HttpResponse) =>
                {
                    this.setResetButtonDisabled(false);
                }, (err: HttpErrorResponse) =>
                {
                    this.setResetButtonDisabled(false);
                    switch(err.status)
                    {
                        case 200:
                            this.successEmailSend = true;
                            this.emailRecoveryMessage = 'Email sent! Check your email inbox.';
                            break;
                        case 404:
                            this.successEmailSend = true;
                            this.emailRecoveryMessage = `The user ${this.emailRecovery} was NOT found.`;
                            break;
                        default:
                            this.successEmailSend = true;
                            this.emailRecoveryMessage = `There was an error sending the email recovery to user ${this.emailRecovery}. Please try again`;
                            break;
                    }//switch
                });
    }
//****          ***              ***                 **** */
    recoveryPasswordWithEmail()
    {
        this.successEmailSend = false
        if (!this.emailRecoveryByEmail || this.emailRecoveryByEmail.trim() === "")
        {
            this.successEmailSend = true;
            this.emailRecoveryMessage = 'Please fill in email or username.';
            return;
        }//if

        this._register.recoverPasswordByEmail(this.emailRecoveryByEmail)
            .subscribe((res: HttpResponse) =>
            {
                this.setResetButtonDisabled(false);
            }, (err: HttpErrorResponse) =>
            {
                this.setResetButtonDisabled(false);
                switch(err.status)
                {
                    case 200:
                        this.successEmailSend = true;
                        this.emailRecoveryMessage = 'Email sent! You should check your email box.';
                        break;
                    case 404:
                        this.successEmailSend = true;
                        this.emailRecoveryMessage = `The user ${this.emailRecovery} was NOT found.`;
                        break;
                    default:
                        this.successEmailSend = true;
                        this.emailRecoveryMessage = `There was an error sending the email recovery to user ${this.emailRecovery}. Please try again`;
                        break;
                }//switch
            });
    }

    getFirstName()
    {
        if(!this.fullName || /^\s+$/.test(this.fullName))
        {
            this.fullName = "";
            return;
        }//if

        var index = !this.fullName ? -1 : this.fullName.indexOf(" ");

        this.firstName = index < 1 ? "" : this.fullName.slice(0, index);
        this.firstName = index < 1 ? this.fullName :  this.fullName.slice(0, index);
    }

    verifyUser(password: string) {
        password = this._encryptor.decrypt(password);
        if (this.loginPassword == password) {
            this.login = true;
            this.show = true;
            this.loginPassword = '';    //This clears the string where the user entered his info
            this.loginUser = '';        //This clears the string where the user entered his info
            localStorage.removeItem("attempt");// use this to reset the values of the attempts.
            return true;

        } else
        {
            return false;
        }
    }

    load() {
        this.passWord = this.user.password;
        this.userName = this.user.userName;
        this.fullName = this.user.fullName;
        this.level = this.user.userLevel;
        this.email = this.user.email;

    }
}
