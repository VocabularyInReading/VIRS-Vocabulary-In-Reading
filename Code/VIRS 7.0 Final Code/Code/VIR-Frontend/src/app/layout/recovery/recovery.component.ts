import { Component, OnInit, NgModule, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from '../../shared/services/register.service'
import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../../shared/interface/IUser';
import { JsEncryption } from 'app/shared/services/jsEncryption.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-tests',
    templateUrl: './recovery.component.html',
    styleUrls: ['./recovery.component.scss'],
    animations: [routerTransition()],
    providers: [RegisterService]
})


export class RecoveryComponent implements OnInit {

    closeR: string;
    userpass: IUser;
    token: string;

    encrypass: string; // new user's password encrypted
    storepassW: string;
    localStorUsername: string;  //to save current user name from the localStorage

    logged: boolean = false;
    serverError: boolean = true;
    userNotFound: boolean = false;
    passprocessing: boolean;
    passmatch: boolean;
    curentpassmatch: boolean;
    passclosed: boolean = true;
    passregistered: boolean = false;
    passshow: boolean = false;
    passwordLenghtError: boolean;
    restored: boolean
    emailSent: boolean;
    tokenValid: boolean;
    userNameDb: string;
    emailDb: string;

    userEmail: string;


    @Input() currentpassW: string; //getting current password from html
    @Input() newpassW: string; //getting new password from html
    @Input() copynewpassW: string; //getting copy of the new password from html to confirm new passw

    //@Input() emailEnter: string;// get email from customer from html
    @Input() userNameEnter: string; // get username from customer from html



    constructor(private _passModalService: NgbModal, private _passRegister: RegisterService,
        private _passEncryptor: JsEncryption, private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this.token = this._route.snapshot.queryParamMap.get('token')
    }

    // close
    passClose() {
        this.passclosed = true;
        this.passregistered = false;
        this.logged = false;
        this.passwordLenghtError = false;
        this.passshow = false;
        this.serverError = false;
        this.userNotFound = false;
    }


    // ** (ok) ** finding if the password has at least 6 characters 
    newpasswLenght() {
        this.passshow = false;

        if (!this.newpassW || this.newpassW.length < 6) {
            this.passwordLenghtError = true;
        }
        else {
            this.passwordLenghtError = false;
        }
    }

    // ** (ok) ** to compare the new password and its copy/ confirming newpassword basically
    newpasswCompare() {
        if (this.newpassW === this.copynewpassW) {
            this.passmatch = true;
            this.passclosed = true;
            this.curentpassmatch = true;
        }
        else {
            this.passmatch = false;
            this.passclosed = false;
        }
    }

    //  ** (ok) ** verifies if the user is in the data based current password retrieved from data base with the enter current password from html
    changeUserPassword(content) {
        this.passwordLenghtError = false;
        this.newpasswLenght();
        this.newpasswCompare();
        this.serverError = false;
        console.log(this.currentpassW)
        console.log(this.newpassW)
        let password = this._passEncryptor.encrypt(this.currentpassW);
        let newPassword = this._passEncryptor.encrypt(this.newpassW);
        console.log(this.newpassW)
        console.log(newPassword)
        if (!this.passmatch || !this.curentpassmatch || this.passwordLenghtError) {
            this.logged = false
            return;
        }//if

        // saving the encrypted password
        this.logged = false;
        var updatePassword = true;
        this._passRegister.resetPassword({ 'token': this.token, 'password': newPassword })
            .subscribe(res => {
                this.restored = true
            }, (err) => {
                switch (err.status) {
                    case 200:
                        this.restored = true
                        break;
                    case 401:
                        this.passclosed = false;
                        this.userNotFound = false;
                        this.serverError = false;
                        break;
                    case 404:
                        this.userNotFound = true;
                        this.passclosed = true;
                        this.serverError = false;
                        break;
                    case 500:
                        this.serverError = true;
                        this.userNotFound = false;
                        this.passclosed = true;
                        break;
                }
            })
    }


    // --------------------*************   MY code   *************-----------------------------------  

    resetUserPassword(content) {
        this.passwordLenghtError = false;
        this.newpasswLenght();
        this.newpasswCompare();
        this.validToken();
        this.serverError = false;

        //this.sendEmail();

        var user = {};
        user["updatePassword"] = true;
        //user["password"] = this._passEncryptor.encrypt(this.currentpassW);
        user["newPassword"] = this._passEncryptor.encrypt(this.newpassW);

        if (!this.passmatch || !this.curentpassmatch || this.passwordLenghtError || !this.tokenValid)// add || this.tokenValid
        {
            this.logged = false
            return;
        }//if

        // saving the encrypted password
        this.logged = false;
        var updatePassword = true;
        this._passRegister.patchUser(<IUser>user, this.userNameEnter, updatePassword)
            .subscribe
            (res => {
                this.logged = true;
                user = null;
                updatePassword = null;
            },
            (err: HttpErrorResponse) => {
                switch (err.status) {
                    case 401:
                        this.passclosed = false;
                        this.userNotFound = false;
                        this.serverError = false;
                        break;
                    case 404:
                        this.userNotFound = true;
                        this.passclosed = true;
                        this.serverError = false;
                        break;
                    case 500:
                        this.serverError = true;
                        this.userNotFound = false;
                        this.passclosed = true;
                        break;
                }//switch
                user = null;
                updatePassword = null;
            }
            );

    }
    sendEmail() {
        if (this.userNameEnter != null) {
            this._passRegister.getUser(this.userNameEnter)
                .subscribe(res => {
                    this.userEmail = res.email
                    //send the email to this.userEmail
                    this.emailSent = true;
                },
                    (err: HttpErrorResponse) => {
                        if (err.error instanceof Error) {
                            console.log('Client-side Error occured');
                        } else {
                            this.passprocessing = false;
                            console.log('Server-side Error occured');
                        }
                    }
                );
        }
        else {
            this.emailSent = false;

        }
    }

    validToken() {
        this.sendEmail() //I'm not sure if you calles form here or from the html
        // if (emailSent){
        // if (token)
        //{this.tokenValid = true}
    }


    // --------------------------------------------------------------------------------------  

    // ** (ok) ** Opens or closes the modal
    open(content) {
        this._passModalService.open(content).result.then((result) => {
            this.closeR = `Closed with: ${result}`;
        }, (reason) => {
            this.closeR = `Dismissed ${this.getPassDismissReason(reason)}`;
        });
    }



    //  ** (ok) **  
    private getPassDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
