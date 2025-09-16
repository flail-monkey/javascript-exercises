// const getTheTitles = function(books) {
//     titles = []
//     for (i=0; i<books.length; i++)
//         {
//         titles.push(books[i].title)
//         }
//     return titles
// };

// function getTheTitles(books)
//     {
//     titles = []
//     for (i=0; i<books.length; i++)
//         {
//         titles.push(books[i].title)
//         }
//     return titles
//     }

function getTheTitles(books)
    {
    return books.map(item => item.title)
    }

// Do not edit below this line
module.exports = getTheTitles;
