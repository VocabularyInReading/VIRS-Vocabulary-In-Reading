import { Injectable, Inject, Input } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../interface/IUser'
import 'rxjs/add/operator/do';

@Injectable()
export class RegisterService{


    constructor(private http: HttpClient) {

    }

    // To add new user to data base
    postUser(fName: string, uName: string, pass: string, ulevel:string, email:string) {
        return this.http.post(`/api/user/add`,
            (
                {
                    'fullName': fName,
                    'userName': uName,
                    'password': pass,
                    'userLevel': ulevel,
                    'email': email,
                }
            ))
            .do((res => console.log(res)));
            //.do((res => this.login(uName, pass)));
    }

    login(uName: string, pass: string){
        return this.login(uName, pass);
    }


    getUser(uName: string): Observable<IUser>{
        return this.http.get<IUser>(`/api/user/${uName}`)
            .do((res => console.log(res)));
    }
    patchUser(user: IUser, userName : string, updatePassword: boolean) : Observable<IUser>
    {
        user.updatePassword = updatePassword;
        return this.http.patch<IUser>
        (
            `/api/user/${userName}`
            , user
        ).do(res => console.log(res));
    }
    deleteUser(userName: string, password: string) : Observable<Object>
    {
        return this.http.delete(`/api/user/${userName}/${password}`);
    }

    recoverPassowrd(uName: string) {
        return this.http.get<any>(`/api/user/recovery/${uName}`)
            .do((res => console.log(res)))
    }

        //********************************************************************************* */
    recoverPasswordByEmail(email: any) {
            return this.http.get<any>(`/api/user/recovery_email/${email}/`)
                .do((res => console.log(res)));
        }
        //*********************************************************************************
    
    resetPassword(data: any){
        return this.http.post(`/api/user/recovery_password?token=${data.token}&password=${data.password}`, data)
    }
}
