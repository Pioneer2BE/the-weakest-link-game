const fetchQuestion = () => {
    fetch("https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple")
    .then(
        (res)=>{
            return res.json()
        }
    )
    .then(

        (json)=>{ 
            const newQuestion = json.results[0].question;
            const answer = json.results[0].correct_answer;
            const incorrectAnswers = json.results[0].incorrect_answers;

            console.log(newQuestion, incorrectAnswers, answer)
        }

    )
    .catch(
        err=>console.log(err)
    )
}

const formatTime = (time) => {
    // The largest round integer less than or equal to the result of time divided being by 60.
    const minutes = Math.floor(time / 60);

    // Seconds are the remainder of the time divided by 60 (modulus operator)
    let seconds = time % 60;

    // If the value of seconds is less than 10, then display seconds with a leading zero
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    // The output in MM:SS format
    return `${minutes}:${seconds}`;
}


export {fetchQuestion, formatTime}