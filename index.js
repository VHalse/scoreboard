
var home = document.getElementById('hscore')
var guest = document.getElementById('gscore')
var counth = 0
var countg = 0
function addone()
{
    counth+=1
    home.innerHTML = counth
}
function addtwo()
{
    counth+=2
    home.innerHTML = counth
}
function addthree()
{
    counth+=3
    home.innerHTML = counth
}
function add_one()
{
    countg+=1
    guest.innerHTML = countg
}
function add_two()
{
    countg+=2
    guest.innerHTML = countg
}
function add_three()
{
    countg+=3
    guest.innerHTML = countg
}

function newGame()
{
    home.innerHTML = 0
    guest.innerHTML = 0    
}
