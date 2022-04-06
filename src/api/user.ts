import { http } from '../utils/http';

interface userType extends Promise<any> {
    svg?: string;
    code?: number;
    info?: object;
}

// 获取验证码
export const getVerify = (): userType => {
    return http.request('get', '/captcha');
};

// 登录
export const getLogin = (data: object) => {
    return http.request('post', '/login', { data });
};

// 刷新token
export const refreshToken = (data: object) => {
    return http.request('post', '/refreshToken', { data });
};

// 刷新token
export const login = () => {
    return http.request('get', '/login/saml/login?appCode=abc111&url=https://stscn.lenovo.com/adfs/ls/IdpInitiatedSignOn.aspx?loginToRp=bct&accountSource=ADFS');
};

// export const searchVague = (data: object) => {
//   return http.request("post", "/searchVague", { data });
// };
