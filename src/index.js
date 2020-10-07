const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morse = '';
    let result = '';
    //console.log(result);
    function getChar(morse) {
        if (morse == '**********') return ' ';
        let curious;
        let prev = 0;
        let morseStr = '';
        for (let j = 0; j < morse.length; j++){
            if (j != 0) prev = curious;
            curious = morse[j];
            if (prev != 0) {
                if (curious == 0) {
                    morseStr += '.';
                } else {
                    morseStr += '-';
                    curious = 0;
                }
            }
        }
        return MORSE_TABLE[morseStr];
    }
    for (let i = 0; i < expr.length; i++) {

        if ((i !== 0) && (i % 10 === 0)) {
            result += getChar(morse);
            morse = '';
        }
        morse += expr[i];
        if (i == expr.length - 1 ) result += getChar(morse);
    }
    return result.trim();
}

module.exports = {
    decode
}