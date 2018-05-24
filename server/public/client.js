// EXPRESS QUOTES
$(document).ready(() => {
    $('#refreshButton').on('click', getQuotes);
    $('#addQuoteButton').on('click', addQuote);
});


function getQuotes(){
    console.log('in getQuotes');
    $.ajax({
        method: 'GET',
        url: '/quotes'
    }).then(function(response){
        console.log('in .then of getQuotes');
        appendQuotes(response);
        });
}

function appendQuotes(array){
    console.log('in appendQuotes');
    $('#appendQuotesHere').empty();
    for( let i = 0; i < array.length; i++ ){
        console.log('in for loop');
        $('#appendQuotesHere').append(`<div><p>${array[i].text}<p><p>by: ${array[i].author}.<p><div>`);
    }
}

function addQuote(){
    console.log('in addQuote');
    let text = $('#quoteText').val();
    let author = $('#quoteAuthor').val();

    let quoteObject = {text: `${text}`, author: `${author}`};

    $('#quoteText').val('');
    $('#quoteAuthor').val('');

    $.ajax({
        method: 'POST',
        url: '/quotes',
        data: quoteObject
    }).then(function(response){
        appendQuotes(response);
    });
}
