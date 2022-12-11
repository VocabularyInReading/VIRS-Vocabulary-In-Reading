import { Component, OnInit, NgModule, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from '../../shared/services/register.service'
import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../../shared/interface/IUser';
import { JsEncryption } from 'app/shared/services/jsEncryption.service';
import {SidebarComponent} from 'app/shared/components/sidebar/sidebar.component'
import { ThrowStmt } from '@angular/compiler';
//import { timingSafeEqual } from 'crypto';

@Component({
    selector: 'app-tests',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    animations: [routerTransition()],
    providers: [RegisterService]
})


export class RegisterComponent implements OnInit {
    
    closeResult: string;

    user: IUser;
    sidebar: SidebarComponent;

    passWord: string;
    userName: string;
    fullName: string;
    userLevel: string;
    userEmail: string;
    
    processing: boolean;
    match: boolean;
    closed: boolean = true;
    registered: boolean = false;
    show: boolean = false;
    login: boolean = false;
    pwordLengthError: boolean;
    emailBlank : boolean;
    userNameBlank : boolean;
    invalidEmail : boolean;
    registrationServerError : boolean;
    emailExists : boolean;
    fullNameBlank : boolean;
    isActive = false;
    showMenu = '';
    
    categoryItems: string[] = ['User Level (Optional)','Student', 'Professor', 'Parent', 'Researcher', 'Faculty'];
    uLevel: string = this.categoryItems[0];

    @Input() uName: string;
    @Input() fName: string;
    @Input() pword: string;
    @Input() cPass: string;
    @Input() email: string;

    @Input() loginUser: string;
    @Input() loginPassword: string;

    constructor(private _modalService: NgbModal, private _register: RegisterService, private _encryptor: JsEncryption) {

    }


    ngOnInit() {
      
    }
    ngAfterViewInit()
    {
        if(!window || !window.location || window.location.hash !== "#login") return;
        
        var aLogin = document.getElementById("aLogin");
        if(!aLogin) return;

        aLogin.click();
        aLogin = null;
    }

    close() {
        this.closed = true;
        this.registered = false;
        this.login = false;
        this.pwordLengthError = false;
        this.show = false;
        this.emailBlank = false;
        this.invalidEmail = false;
        this.userNameBlank = false;
        this.registrationServerError = false;
        this.emailExists = false;
        this.fullNameBlank = false;
    }
    validateUserInput()
    {
        this.emailBlank = !this.email || /^\s+$/.test(this.email);
        this.userNameBlank = !this.uName || /^\s+$/.test(this.uName);
        this.invalidEmail = !this.emailBlank && !/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email);

        this.pwordLengthError = !this.pword || this.pword.length < 6;
        if(!this.pwordLengthError) this.match = this.closed = this.cPass === this.pword;
        this.fullNameBlank = !this.fName || /^\s+$/.test(this.fName);
    }
    //----------------------------------------
    //GetUtser will first verify if the username is in the database already prior registering the user
    getUser(content)
    {
        this.pwordLengthError = false;

        this.validateUserInput();

        if(this.invalidEmail || this.userNameBlank || !this.match || this.pwordLengthError || this.fullNameBlank)
        {
            return;
        }//if


        //this._register.login(this.uName, this.passWord);
        this._register.getUser(this.uName)
            .subscribe(res => {
                this.user = res;
                this.show = true;
                this.processing = false;
                
              
            },
            (err: HttpErrorResponse) =>
            {
                switch(err.status)
                {
                    case 404:
                        this.register(content);
                        this.processing = false;
                        break;
                    default:
                        this.registrationServerError = true;
                        break;
                }//switch
                
            });
           


    }
    findUserLevelSelected() : boolean
    {
        var max = this.categoryItems.length;
        for(var i = 0; i < max; ++i)
        {
            if(this.categoryItems[i] !== this.uLevel) continue;

            max = null;
            return true;
        }//for i
        max = null;
        return false;
    }
    //-----------------------------------------
    //Register will add the user info into the database once all has been verifed
    register(content)
    {
        if (this.uLevel === this.categoryItems[0] || !this.findUserLevelSelected())
        {
            this.uLevel = null;
        }//if

        this.passWord = this._encryptor.encrypt(this.pword);
        this.fullName = this.fName;
        this.userName = this.uName;
        this.userLevel = this.uLevel;
        this.userEmail = this.email;

        this._register.postUser(this.fullName, this.userName, this.passWord, this.userLevel, this.email)
            .subscribe
            (
                res =>
                {
                    this.registered = true;
                    this.login = true;
                    this.redirectToPage("#login");

                },
                (err: HttpErrorResponse) =>
                {
                    switch(err.status)
                    {
                        case 403:
                            this.emailExists = true;
                            break;
                        default:
                            this.registrationServerError = true;
                            break;
                    }//switch
                }//err
            );
    }
    //-----------------------------------------------------------------------------------
    //Opens or closes the modal
    open(content) {
        this._modalService.open(content).result.then((result) => {
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
    getFirstName(){
        if (!this.fullName || /^\s+$/.test(this.fullName)){
            this.fullName = "";
            return;
        }
        var index = !this.fullName ? -1 : this.fullName.indexOf(" ");
        this.fName = index < 1 ? this.fullName : this.fullName.slice(0, index);

    }
    verifyUser(password: string){
        if (this.loginPassword == password){
            this.login = true;
            this.show = true;
            this.loginPassword = '';
            this.loginUser = '';
            localStorage.removeItem("attempt");
            return true;
        }
        else
            return false;
    }
    load(){
        this.passWord = this.user.password;
        this.userName = this.user.userName;
        this.fullName = this.user.fullName;
        this.uLevel = this.user.userLevel;
        this.email = this.user.email;
    }

    redirectToPage(view)
    {
        window.setTimeout(function()
        {
            window.location.href = window.location.href.replace("/register", view);
        }, 2500);
    }


}
