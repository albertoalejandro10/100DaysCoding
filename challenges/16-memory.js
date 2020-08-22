const length = 4;

const processing = () => {
    
    const result = "";
    const characters = "#$%()/&";
    
    let pass = "";
    for(let i = 0; i < length; i++){

        pass += characters.charAt(Math.floor(Math.random()*characters.length));
    
    }
    return pass;
}