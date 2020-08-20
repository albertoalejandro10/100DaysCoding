const length = 4;
const characters = "#$%()/&";

const processing = () => {

    let pass = "";
    for(let i = 0; i <= 4; i++){
        pass += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return document.write(pass);

}

processing(characters);