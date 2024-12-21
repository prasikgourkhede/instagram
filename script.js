const users = [
    {
        name: "priya_patel",
        image: "https://i.pravatar.cc/150?img=1"
    },
    {
        name: "arjun_sharma",
        image: "https://i.pravatar.cc/150?img=2"
    },
    {
        name: "neha_gupta",
        image: "https://i.pravatar.cc/150?img=3"
    },
    {
        name: "raj_kumar",
        image: "https://i.pravatar.cc/150?img=4"
    },
    {
        name: "ananya_singh",
        image: "https://i.pravatar.cc/150?img=5"
    },
    {
        name: "aditya_verma",
        image: "https://i.pravatar.cc/150?img=6"
    },
    {
        name: "divya_reddy",
        image: "https://i.pravatar.cc/150?img=7"
    },
    {
        name: "rohan_mehta",
        image: "https://i.pravatar.cc/150?img=8"
    },
    {
        name: "ishaan_kapoor",
        image: "https://i.pravatar.cc/150?img=9"
    },
    {
        name: "zara_khan",
        image: "https://i.pravatar.cc/150?img=10"
    }
]

var sum = ""
 
users.forEach(function(elem){
    sum += `<div class="story">
                <div class="hey">
                <img src="${elem.image}" alt="">
            </div>
                <h1>${elem.name}</h1>
            </div>`
    
})
console.log(sum);

var storiyan = document.querySelector(".storiyan")

storiyan.innerHTML = sum