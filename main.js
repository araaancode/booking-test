let firstCity = document.getElementById("firstCity")
let lastCity = document.getElementById("lastCity")
let count = document.getElementById("count")
var movingDate = document.getElementById("movingDate")
let bus = document.getElementById("bus")

// data
drivers = [
    {
        "id": "1",
        "cities": ["isfahan", "rasht"],
        "arrival": "rasht",
        "movingDate": "1403/03/01",
        "bus": {
            "seats": 22
        },
        "image": "https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzfGVufDB8fDB8fHww"
    },
    {
        "id": "2",
        "cities": ["isfahan", "tabriz"],
        "arrival": "tabriz",
        "movingDate": "1403/02/22",
        "bus": {
            "seats": 6
        },
        "image": "https://plus.unsplash.com/premium_photo-1674823610129-64e6c712fbe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzfGVufDB8fDB8fHww"
    },
    {
        "id": "3",
        "cities": ["isfahan", "tehran"],
        "arrival": "isfahan",
        "movingDate": "1403/02/26",
        "bus": {
            "seats": 2
        }
    },
    {
        "id": "4",
        "cities": ["isfahan", "tehran"],
        "arrival": "isfahan",
        "movingDate": "1403/03/24",
        "bus": {
            "seats": 8
        }
    }
]

document.getElementById("search").addEventListener("click", search)

firstCity.addEventListener("change", (e) => {
    firstCity = e.target.value
})


lastCity.addEventListener("change", (e) => {
    lastCity = e.target.value
})


movingDate.addEventListener("change", (e) => {
    movingDate = e.target.value
})



function search() {
    if (firstCity && lastCity && count && movingDate) {
        for (let i = 0; i < drivers.length; i++) {
            if (firstCity === drivers[i].cities[0] && lastCity === drivers[i].cities[1] && drivers[i].arrival === firstCity && drivers[i].bus.seats >= 1 && drivers[i].movingDate === movingDate) {
                bus.innerHTML += `
               <div class="border rounded-md shadow shadow-md bus grid grid-cols-2 gap-4 m-4">
                    <div style="width: 75%;">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                                <img class="m-4 rounded-md w-50 h-20 inline"
                                    src="https://plus.unsplash.com/premium_photo-1674823610129-64e6c712fbe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzfGVufDB8fDB8fHww"
                                    alt="Card image">
                                <span class="ml-4" id="bus-title"> Card Title 1</span>
                                <span class="ml-4">first city</span>
                                <span class="ml-4">last city</span>
                                <span class="ml-4">arriavl</span>
                                <span class="ml-4">count</span>
                                <span class="ml-4">moving date</span>
                            </div>
                        </div>
                    </div>
                    <div style="width: 25%;" class="border-r border-solid border-gray-300 p-4">
                        <p>12500</p>
                        <button
                            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">رزرو
                            بلیط</button>
                    </div>
                </div>
               `
            }
        }

        document.querySelectorAll('input').value = ""
    } else {
        alert("enter all fields")
    }
}

