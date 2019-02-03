import { environment } from './../environments/environment';

const env = environment.apiUrl;
export const AppRestEndPoint = {
    REGISTER: env + '/register',
    LOGIN: env + '/login'
};
