/* eslint-disable prettier/prettier */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protubuPackage = 'auth';



export interface PaginationDto{
    page: number;
    skip: number;
}+

export interface UpdateUserDto{
    id: string;
    SocialMedia: SocialMedia | undefined
}

export interface findOneUserDto{
    id: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Empty{ }

export interface Users {
    users: User[];
}

export interface createUserDto{
    username: string;
    password: any;
    age: number;
}

export interface User{
    id: string;
    username: string;
    password: string;
    age: number;
    subscribed: boolean;
    socialMedia: SocialMedia | undefined;
}

export interface SocialMedia {
    twitterUri?: string | undefined;
    facebookUri?: string | undefined;
}

export const AUTH_PACKAGE_NAME = "auth";

export interface UserServiceClient{
    createUser(request: createUserDto): Observable<User>;

    findAllUsers(request: Empty): Observable<User>;


}
