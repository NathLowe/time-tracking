// Constantes
var Datas;
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
];
var timeframes = ['daily', 'weekly', 'monthly'];
var timePeriods = {
    daily: "Day",
    weekly: "Week",
    monthly: "Month"
};
// States
var currentTimeframe = "weekly";
// Functions
var changeTimeframe = function (newTime) { return function () {
    if (!newTime.classList.contains('active')) {
        var previous = document.querySelector('.timeframe.active');
        previous.classList.remove('active');
        for (var index = 0; index < timeframes.length; index++) {
            var time = timeframes[index];
            if (newTime.classList.contains(time)) {
                newTime.classList.add('active');
                currentTimeframe = time;
            }
        }
        setCardData();
    }
}; };
var setCardData = function () {
    var cards = document.querySelectorAll('.card');
    var _loop_1 = function (index) {
        var card = cards[index];
        if (card.classList.contains('active')) {
            card.classList.remove('active');
        }
        var title = card.id === 'self-care' ? 'self care' : card.id.toLowerCase();
        var currentElement = card.querySelector('.duration .time');
        var previousElement = card.querySelector('.previous .time');
        var periodElement = card.querySelector('.previous .period');
        for (var g = 0; g < Datas.length; g++) {
            var data = Datas[g];
            if (data.title.toLowerCase() == title) {
                var timeframe = data.timeframes[currentTimeframe];
                currentElement.innerHTML = timeframe.current.toLocaleString() + " hr" + (timeframe.current > 1 ? "s" : "");
                previousElement.innerHTML = timeframe.previous.toLocaleString() + " hr" + (timeframe.previous > 1 ? "s" : "");
                periodElement.innerHTML = timePeriods[currentTimeframe];
                window.setTimeout(function () {
                    card.classList.add('active');
                }, 200);
            }
        }
    };
    for (var index = 0; index < cards.length; index++) {
        _loop_1(index);
    }
};
setCardData(); // When The page is Loaded
// EventListener
// Change the timeframe
var timeframeElements = document.querySelectorAll('.timeframe');
for (var index = 0; index < timeframeElements.length; index++) {
    var element = timeframeElements[index];
    element.addEventListener('click', changeTimeframe(element));
}
