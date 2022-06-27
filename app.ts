// Types
interface TimeframeDataType {
    current:number,
    previous:number
}

interface DataType {
    title: string,
    timeframes: {
        daily:TimeframeDataType,
        weekly:TimeframeDataType,
        monthly: TimeframeDataType
    }
}

type TimeframeType = 'daily'|'weekly'|'monthly'

// Constantes
let Datas : DataType[]
Datas = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
]
let timeframes:TimeframeType[] = ['daily','weekly','monthly']
let timePeriods = {
    daily:"Day",
    weekly:"Week",
    monthly:"Month"
}


// States
let currentTimeframe: TimeframeType = "weekly"


// Functions
let changeTimeframe = (newTime:Element)=>()=>{
    if(!newTime.classList.contains('active')){
        let previous = document.querySelector('.timeframe.active')
        previous.classList.remove('active')

        for (let index = 0; index < timeframes.length; index++) {
            let time = timeframes[index];
            if(newTime.classList.contains(time)){
                newTime.classList.add('active')
                currentTimeframe = time
            }
        }
        setCardData()
    }
}

let setCardData = ()=>{
    let cards = document.querySelectorAll('.card')
    for (let index = 0; index < cards.length; index++) {
        let card = cards[index];
        if(card.classList.contains('active')){
            card.classList.remove('active')
        }

        let title = card.id === 'self-care' ? 'self care' : card.id.toLowerCase()
        let currentElement = card.querySelector('.duration .time')
        let previousElement = card.querySelector('.previous .time')
        let periodElement = card.querySelector('.previous .period')

        for (let g = 0; g < Datas.length; g++) {
            let data = Datas[g];
            if(data.title.toLowerCase() == title ){
                let timeframe = data.timeframes[currentTimeframe]
                currentElement.innerHTML = timeframe.current.toLocaleString() + " hr" + (timeframe.current > 1 ? "s" : "")
                previousElement.innerHTML = timeframe.previous.toLocaleString() + " hr" + (timeframe.previous > 1 ? "s" : "")
                periodElement.innerHTML = timePeriods[currentTimeframe]
                window.setTimeout(()=>{
                    card.classList.add('active')
                },200)
            }
        }
    }
}
setCardData() // When The page is Loaded


// EventListener
// Change the timeframe

let timeframeElements = document.querySelectorAll('.timeframe')
for (let index = 0; index < timeframeElements.length; index++) {
    const element = timeframeElements[index];
    element.addEventListener('click',changeTimeframe(element))
}
