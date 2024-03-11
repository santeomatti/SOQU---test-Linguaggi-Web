
    const response = await fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json');
    const json = await response.json();
    console.log(json);
    let menualto = document.getElementsByClassName("item_text");
    for (let i=0; i<json.programming_languages_popular.length; i++){
        menualto[i].innerHTML = "<a target =_blank href=https://it.wikipedia.org/wiki/" + json.programming_languages_popular[i] + ">" + json.programming_languages_popular[i] + "</a>";
    }
    let contenuto="https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg"
    let immagine = document.getElementsByTagName("img");
    immagine[4].attributes.src.textContent="https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg";
    



