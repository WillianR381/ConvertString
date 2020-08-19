const textArea = document.querySelector('#content');

function upperCase(){
    textArea.value = textArea.value.toUpperCase();
}

function lowerCase(){
    textArea.value =  textArea.value.toLowerCase();
}

function clearText(){
    textArea.value = "";
}

function copyText(){
    textArea.select();
    document.execCommand('copy');
}


function downloadText(){
    let textAreaContent = document.querySelector('#content').value
    var blob = new Blob([textAreaContent], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "Text.txt");
}



function titleCase(){
    titlecase2(textArea.value);

    function titlecase2(str){
        str = str.toLowerCase().split(' ');
     
        let final = [ ];
     
         for(let  word of str){
           final.push(word.charAt(0).toUpperCase()+ word.slice(1));
         }
     
      textArea.value = final.join(' ')
     
    }
}



function inverseCase(){
    inverseCase2(textArea.value);

    function inverseCase2(str) {
        str = str.split('');
        
        for (var i = 0; i < str.length; i++) {
            
            
            if (str[i] === str[i].toUpperCase()) {
                
                str[i] = str[i].toLowerCase();
                
            } else if (str[i]=== str[i].toLowerCase()) {
                
                str[i] = str[i].toUpperCase();
            }
            
        }
        
        textArea.value =  str.join('');
        
    }
}


function sentenceCase(){
    sentenceCase2(textArea.value)

    function  sentenceCase2(str){
        str = str.toLowerCase().split('.');
     
        let final = [ ];
     
         for(let  word of str){
           final.push(word.charAt(0).toUpperCase()+ word.slice(1) );
         }
     
      textArea.value = final.join('.')
    }
}

