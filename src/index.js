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
    let decoded = expr.split('**********');
    decoded = decoded.map((item) => item.match(/\d{10}|\*{10}/g));
    return decoded.map((word) => word.map(function(letter){
        let res = '';
        for(let i = 0; i < 10; i += 2){
            switch(letter[i] + letter[i+1]){
                case '11':
                    res += '-';
                    break;
                case '10':
                    res += '.';
            }
        }
        res = MORSE_TABLE[res];
        return res;
    }).join('')).join(' ');
}

module.exports = {
    decode
}