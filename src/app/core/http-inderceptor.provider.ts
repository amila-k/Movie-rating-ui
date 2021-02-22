import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Interceptor } from "./http.interceptor";

export const interceptorProvider: any = {
  provide: HTTP_INTERCEPTORS,
  useClass: Interceptor,
  multi: true,
};
