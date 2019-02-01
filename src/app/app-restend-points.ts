import { environment } from './../environments/environment';

const env = environment.apiUrl;
export const AppRestEndPoint = {
    REGISTER: env + '/auth/register2',
    LOGIN: env + '/login'
};
