let searchBtn = document.getElementById("searchBtn")
let date = document.getElementById("search-input")
let list = document.getElementById("search-history")
let form = document.getElementById("search-form")

let arr = []

searchBtn.addEventListener("click", tasks)

function tasks() 
{
    form.addEventListener("submit", function(event)
    { event.preventDefault() })
    saveSearch()
    addSearchToHistory()


}

function getCurrentImageOfTheDay()
{

}

function getImageOfTheDay()
{

}

function saveSearch()
{
    let obj = { "Date": date.value }
    console.log(arr.length)
    arr.push(obj)
    //console.log(arr.length)
    let string = JSON.stringify(arr)
    localStorage.setItem("Dates", string)
}

function addSearchToHistory()
{
    let listItems = document.createElement("li")
    listItems.className = "li"
    let jsonArr = localStorage.getItem("Dates")
    //console.log(jsonArr)
    let searchedDate = JSON.parse(jsonArr)
    //console.log(searchedDate)
    for(let i=0; i<searchedDate.length; i++)
    { listItems.innerHTML = `<a href="#api"> ${searchedDate[i].Date} </a>` }
    list.append(listItems)

}
