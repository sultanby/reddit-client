export function timeConverter(created) {
    let now = new Date();
    let nowInSeconds = now.getTime()/1000;
    let difference = nowInSeconds-created;
    
    // 3600 = seconds in 1 hour
    // 7200 = seconds in 2 hours
    // 86400 = seconds in 1 day
    // 172800 = seconds in 2 days
    // 2419200 = seconds in 1 month(here - 28 days)
    // 4838400 = seconds in 2 month(here - 56 days)
    // 31536000 = seconds in 1 year
    // 63072000 = seconds in 2 years


    if (difference < 60) {
        return 'seconds ago'
    }
    else if (difference < 120)
    {
        return 'a minute ago'
    }
    else if (difference < 3600) { 
        return Math.floor(difference/60) + ' minutes ago'
    }
    else if (difference < 7200) {
        return '1 hour ago'
    }
    else if (difference < 86400) {
        return Math.floor(difference/3600) + ' hours ago'
    }
    else if (difference < 172800) {
        return '1 day ago'
    }
    else if (difference < 2419200) {
        return Math.floor(difference/86400) + ' days ago'
    }
    else if (difference < 2419200) {
        return Math.floor(difference/86400) + ' days ago'
    }
    else if (difference < 4838400) {
        return '1 month ago'
    }
    else if (difference < 31536000) {
        return Math.floor(difference/2419200) + ' months ago'
    }
    else if (difference < 63072000) {
        return 'a year ago'
    }
    else {
        return Math.floor(difference / 31536000) + " years ago";
    }
}