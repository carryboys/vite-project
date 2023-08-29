import request from "../request/request";
 
export function getList(params: any) {
    return request({
        url: '/api/getList',
        method: 'post',
        params
    })
}
export function getIpInfo(){
    return request({
        url:'https://api.ipify.org?format=json',
        method:'get',
    })
}