const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = "tr-TR"

recognition.onstart = function(){
    console.log('Şimdi Konuşabilirsin');
}

recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    console.log(text);
    read(text);
}

function read(text){

    if (text.toLowerCase().includes('neredeyim')) {
        konumSorgula();
    }

    else if (text.toLowerCase().includes('nereye gidebilirim')) {
        getData();
    }

    else {
        hata();
    }
}
