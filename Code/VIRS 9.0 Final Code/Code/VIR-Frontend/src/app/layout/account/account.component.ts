import { Component, Input, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from 'app/shared/services/register.service';
import { IUser } from 'app/shared/interface/IUser';
import { HttpErrorResponse } from '@angular/common/http';
import { JsEncryption } from 'app/shared/services/jsEncryption.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
    animations: [routerTransition()],
})
export class UserAccount implements OnInit
{
    closeResult: string;
    password: string = null;
    passwordConfirm: string = null;
    confirmDelete: boolean = false;
    user : IUser;
    userEdit : IUser;

    constructor(private modal: NgbModal, private _register: RegisterService, private _encryptor: JsEncryption) { }
    
    ngOnInit()
    {
        this.user = <IUser>{};
        this.userEdit = <IUser>{};
        this.updateUserValues();
    }
    copyUser(l : IUser, r : IUser)
    {
        l.email = r.email;
        l.fullName = r.fullName;
        l.userLevel = r.userLevel;
        l.userName = r.userName;
        l.updatedUserName = r.userName;
    }
    sanitizeData(field, key)
    {
        if(field && field !== "null" && typeof undefined != field) return field;

        localStorage.setItem(key, "");
        return "";
    }
    updateUserValues()
    {
        this.user.updatedUserName = this.user.userName = localStorage.getItem('userName');

        this.user.fullName = this.sanitizeData(localStorage.getItem('currentUser'), 'currentUser');
        this.user.userLevel = this.sanitizeData(localStorage.getItem('level'), 'level');
        this.user.email = this.sanitizeData(localStorage.getItem('email'), 'email');
    }
    openEdit(content)
    {
        this.copyUser(this.userEdit, this.user);
        this.open(content);
    }
    //TODO:probably we should create some sort of helper class so that this open and dimiss methods don't need to be repeated on each view that it's used on
    open(content) {
        console.log('opened');
        this.modal.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    openDelete(content) {
        console.log('opened');
        this.modal.open(content, { size: 'lg' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    openAlert(content)
    {
        console.log('opened');
        
        this.modal.open(content, { size: 'sm' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
    updateElement(id : string, elementValue: string)
    {
        var node = document.getElementById(id);
        
        if(!node) return;

        node.innerText = !elementValue ? "" : elementValue;
        node = null;
    }
    setUpdateError(msgBody: string)
    {
        this.setUpdateResult("Update Error", msgBody);
    }
    setDeleteError(msgBody: string)
    {
        this.setUpdateResult("Delete Error", msgBody);
    }
    setDeleteSuccess(msgBody: string)
    {
        this.setUpdateResult("Delete Success", msgBody);
    }
    setUpdateSuccess(msgBody: string)
    {
        this.setUpdateResult("Update Complete", msgBody);
    }
    setUpdateResult(header: string, msgBody: string)
    {
        var updateResultHeader = document.getElementById("updateResultHeader");
        if(updateResultHeader)
        {
            updateResultHeader.innerText = header;
            updateResultHeader = null;
        }//if

        var updateMsg = document.getElementById("updateMsg");
        if(!updateMsg) return;

        updateMsg.innerText = msgBody;
        updateMsg = null;
    }
    isEmpty(str)
    {
        return !str || /^\s+$/.test(str);
    }
    validateUser(user : IUser)
    {
        return user && !this.isEmpty(user.fullName) && !this.isEmpty(user.email) && !this.isEmpty(user.userName) && /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(user.email);
    }
    deleteUser(content)
    {
        //validate passwords are not null/empty
       if(this.isEmpty(this.password) || this.isEmpty(this.passwordConfirm))
       {
           this.openAlert(content);
           this.setDeleteError("One or both password fields are empty");
           return;
       }//if
       //validate passwords are equal
       if(this.password !== this.passwordConfirm)
       {
           this.openAlert(content);
           this.setDeleteError("The passwords entered do not match");
           return;
       }//if

        //validate that checkbox is checked
        if(!this.confirmDelete)
        {
            this.openAlert(content);
            this.setDeleteError("Confirmation checkmark is NOT checked.");
            return;
        }//if

        this.user.userName = localStorage.getItem("userName");
        //get user name from local storage
        if(!this.user.userName || this.isEmpty(this.user.userName))
        {
            this.deleteUserFromLocalStorage();
            this.openAlert(content);
            this.hideBtnUpdateAlert();
            this.setDeleteError("There was an error retrieving the user name. Please login and try again.");
            this.redirectToPage("#login");
            return;
        }//if
        this._register.deleteUser(this.user.userName, this._encryptor.encrypt(this.password))
        .subscribe(r =>
        {
            this.deleteUserFromLocalStorage();
            this.openAlert(content);
            this.hideBtnUpdateAlert();
            this.setDeleteSuccess("User " + this.user.userName + " was successfully deleted.");
            this.redirectToPage("");
        },
        (err: HttpErrorResponse) =>
        {
            this.openAlert(content);
            var msg = "";
            switch(err.status)
            {
                case 401:
                    msg = "Password entered is invalid. Please try again."
                    break;
                case 404:
                    this.hideBtnUpdateAlert();
                    this.deleteUserFromLocalStorage();
                    msg = "The user was not found. Please ensure that the account was NOT deleted on another window/tab/browser.";
                    this.redirectToPage("");
                    break;
                case 504:
                    msg = "There was an connection error. Please ensure you are connected to a network and that there is internet access.";
                    break;
                case 400:
                default:
                    msg = "There was error trying to delete the account. Please try again.";
            }//switch
            this.setDeleteError(msg);
        });
    }
    deleteUserFromLocalStorage()
    {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("email");
        localStorage.removeItem("userName");
    }
    redirectToPage(view)
    {
        window.setTimeout(function()
        {
            window.location.href = window.location.href.replace("/account", view);
        }, 2500);
    }
    hideBtnUpdateAlert()
    {
        var btnUpdateAlert = document.getElementById("btnUpdateAlert");
        if(!btnUpdateAlert) return;

        btnUpdateAlert.className = "hidden";
        btnUpdateAlert = null;
    }
    openChangePassword()
    {
        window.location.href = window.location.href.replace("/account", "/change-password");
    }
    updateUser(content)
    {
        if(!this.validateUser(this.userEdit))
        {
            this.openAlert(content);
            this.setUpdateError("Please fill in the email, user name, and/or full name and ensure that the email is valid");
            return;
        }//if
        if(this.isEmpty(this.userEdit.userLevel)) this.userEdit.userLevel = null;
        var userName = this.user.userName;
        this.userEdit.userName = this.userEdit.updatedUserName;
        this._register
            .patchUser
            (
                this.userEdit
                , userName
                , false
            )
            .subscribe
            (
                r =>
                {
                    if(!this.userEdit.userLevel) this.userEdit.userLevel = "";
                    this.openAlert(content);
                    this.setUpdateSuccess("Account updated");

                    localStorage.setItem("userName", this.userEdit.userName);
                    localStorage.setItem("currentUser", this.userEdit.fullName);
                    localStorage.setItem("level", this.userEdit.userLevel);
                    localStorage.setItem("email", this.userEdit.email);
                    
                    this.updateUserValues();
                    this.updateElement("userNameView", this.userEdit.userName);
                    this.updateElement("fullNameView", this.userEdit.fullName);
                    this.updateElement("userLevelView", this.userEdit.userLevel);
                    this.updateElement("emailView", this.userEdit.email);
                }
                ,
                (err: HttpErrorResponse) =>
                {
                    var errMsg = "";
                    switch(err.status)
                    {
                        case 400:
                            errMsg = "Please ensure that the email, user name, and/or full name are valid and not empty.";
                            break;
                        case 403:
                            errMsg = "The user name and/or the email selected already exists. Please choose a different one.";
                            break;
                        case 404:
                            errMsg = "The user name provided was not found. Please make sure your user name was not updated in another open window/tab/browser.";
                            break;
                        case 500:
                            errMsg = "There was an error in processing the update. Please try again in a moment. If the problem persists, please contact an administrator.";
                            break;
                        default:
                            errMsg = "There was an unknown error. Please try again";
                    }//switch

                    this.openAlert(content);
                    this.setUpdateError(errMsg);

                    errMsg = null;
                });
    }

}

