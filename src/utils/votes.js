export function voteCounter(votes) {
    let formattedVotes = votes/1000;
    if (formattedVotes<1) {
        return votes
    }
    if(formattedVotes>1 && formattedVotes<1000){
        return formattedVotes.toFixed(1)+ 'k';
    }
    if(formattedVotes>1000){
        return formattedVotes.toFixed(0)+ 'k';
    }
    
    return (formattedVotes);
}