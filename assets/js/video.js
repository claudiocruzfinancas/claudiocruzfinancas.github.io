var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// Mudar video aqui
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('depo1', {
        height: '640',
        width: '360',
        videoId: '_WAoFVYeHl4',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('depo2', {
        height: '640',
        width: '360',
        videoId: 'VUueH0HHxgI',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('depo3', {
        height: '640',
        width: '360',
        videoId: 'gA6YqF3CFwU',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('depo4', {
        height: '640',
        width: '360',
        videoId: '9EgDDf6XlBg',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('depo5', {
        height: '640',
        width: '360',
        videoId: 'fkjPROOpx0Y',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('depo6', {
        height: '640',
        width: '360',
        videoId: 'EfZctNSQbwo',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('depo7', {
        height: '600',
        width: '1100',
        videoId: 'gn38lZYJpm4',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('depo8', {
        height: '640',
        width: '360',
        videoId: 'mj8qRCrKq_c',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('depo9', {
        height: '640',
        width: '360',
        videoId: 'ROXUiQZBQQc',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('depo10', {
        height: '640',
        width: '360',
        videoId: '1xtsPZNQmlI',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('depo11', {
        height: '640',
        width: '360',
        videoId: '7jdOdmq7Fuw',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('depo12', {
        height: '640',
        width: '360',
        videoId: 'djv3U7LT-bI',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('depo13', {
        height: '640',
        width: '360',
        videoId: 'c6co8UYL3jU',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('depo14', {
        height: '640',
        width: '360',
        videoId: 'gO9zI6qpYxw',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('depo15', {
        height: '640',
        width: '360',
        videoId: 'Zpds7FY-2sk',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player = new YT.Player('obrigado', {
        height: '640',
        width: '1024',
        videoId: 'Zpds7FY-2sk',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.stopVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}