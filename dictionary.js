let resultEr = document.getElementById("result");
let result = document.querySelector(".result");
//function err(){
  // result.style.display="none";
    //resultEr.innerHTML="Match not found";


function fetchWord(wordAsked) {
    info.style.color="#000";
    info.innerHTML="Searching the meaning of <span>"+ wordAsked+"</span>"  ;
   
   let p= fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + wordAsked + "")
   .then((response)=> response.json())
        .then((data) => {
            console.log(data);
            displaydata(data, wordAsked)
        })

}


function displaydata(data,wordAsked) {
    if(data.title){
       info.innerHTML="Can't find the meaning of the word, try again";
       result.style.display = "none";
    }
    else{
        info.innerHTML="";
    resultEr.style.display="none";
    result.style.display = "block";
    let displayword = document.getElementById("display-word").innerHTML = data[0].word;

    let pronunciation = document.querySelector(".details").innerHTML = data[0].phonetic || " ";

    let meaning = document.querySelector(".meaning").innerHTML = data[0].meanings[0].definitions[0].definition || " ";

    let ex = document.querySelector(".example").innerHTML = data[0].meanings[0].definitions[0].example||data[0].meanings[1].definitions[3].example|| " <p> </p>";
    console.log(ex);
    sound.setAttribute('src', `${data[0].phonetics[1].audio}`);
    console.log(sound);
    }
    }
//}
function play() {
    if(!sound){
        sound.mute;
    }
    sound.play();
}

//calling event listener to search a word
let button = document.getElementById("search-button").addEventListener("click", fetchW);

function fetchW(e) {
    let search = document.getElementById("search-bar").value;
    fetchWord(search);

}
document.getElementById("search-bar").addEventListener("keyup",function(e){
	if(e.key=="Enter"){
        console.log(e.key,"hi enter");
		let search=document.getElementById("search-bar").value;
		fetchWord(search);
	}
})