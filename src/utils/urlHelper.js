export function urlHelper({params}) {
    if (Object.keys(params).length === 0) {
        return 'https://api.reddit.com/r/all.json'
    }
    else if(Object.keys(params).length === 1 && params.filter) {
        return `https://api.reddit.com/r/all/${params.filter}.json`
    }
    else if(Object.keys(params).length === 1 && params.subreddit) {
        return `https://api.reddit.com/r/${params.subreddit}.json`
    }
    else if(Object.keys(params).length === 2) {
        return `https://api.reddit.com/r/${params.subreddit}/${params.filter}.json`
    }
    else if(Object.keys(params).length === 3) {
        return `https://api.reddit.com/r/${params.subreddit}/comments/${params.id}/${params.title}.json`
    }
    return
}