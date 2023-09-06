import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const authToken = localStorage.getItem('access_token');

        if (authToken) {
            const authReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${authToken}`,
                },
            });
            return next.handle(authReq);
        }

        return next.handle(req);
    }
}
