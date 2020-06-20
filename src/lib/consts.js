export const STORAGE_KEY_JWT = 'OV_JWT';
export const APPPATH = (process.env.REACT_APP_APPPATH?process.env.REACT_APP_APPPATH:'voterambassador');
export const AUDIANCE = process.env.REACT_APP_AUDIANCE;
export const BRANDING_FILE = (process.env.REACT_APP_BRANDING_FILE?process.env.REACT_APP_BRANDING_FILE:'default');
export const BRANDING = require('../branding/'+BRANDING_FILE).branding;
export const BASEURI = (process.env.REACT_APP_BASEURI?process.env.REACT_APP_BASEURI:"/voterambassador");
export const ORGID = process.env.REACT_APP_ORGID;
export const API_DOMAIN = (process.env.REACT_APP_API_DOMAIN?process.env.REACT_APP_API_DOMAIN:'localhost');
export const API_SSL = process.env.REACT_APP_API_SSL;
export const SERVER = 'http'+(API_SSL?'s':'')+'://'+API_DOMAIN+(API_SSL?'':':8080')+'/HelloVoterHQ/'+(ORGID?ORGID+'/':'')+'api/v1';
