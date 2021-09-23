import {sessionName} from '../constants/app';

// export const getAuth = () => {
//     let sessionData = JSON.parse(localStorage.getItem(sessionName));
//     if (sessionData?.token) return true;
//     return false
// }

export const getSessionToken = () => {
    let sessionData = JSON.parse(localStorage.getItem(sessionName));
    return sessionData?.token;
}

export const saveSession = (token) => {
    localStorage.setItem(sessionName, JSON.stringify({token, dateSession: new Date()}));
}

export const deleteSession = () => {
    localStorage.removeItem(sessionName);
}

/* Format time adding a leading zero for lower than 10 */
export const formatTime = (time) => {

    if (!time || isNaN(time) || Math.sign(time) === -1) return time;

    if (time < 10) {
        return `0${time}`
    } else {
        return time.toString();
    }
}

export const getTimeMsSession = () =>{

    let sessionData = JSON.parse(localStorage.getItem(sessionName));
    if (!!sessionData){
        return new Date(sessionData.dateSession).getTime()
    }else{
        return new Date().getTime()
    }    
}