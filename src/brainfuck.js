/** 
 * BrainfuckJS v0.1.0
 * www.github.com/felixmaier/BrainfuckJS
 * @author Felix Maier
 */
(function() { 'use strict'


    var root = this;

    /**
     * Static namespace class
     */
    var BRAINFUCK = BRAINFUCK || {};

    /**
     * Base Interpreter Charlist
     */
    BRAINFUCK.BASE = {
        0 : "<>",
        1 : "<",
        2 : ">",
        3 : "<<",
        4 : ">>",
        5 : "<<>>",
        6 : "<<<",
        7 : ">>>",
        8 : "<<<>>>",
        9 : "<<<<",
        SEP: "|"
    };


    /**
     * Brainfuck Decoder
     * Decode a string from brainfuck into a string
     * 
     * @method Decode
     * @static
     */
    BRAINFUCK.Decode = function(data) {

        if (!data || !data.length ) return "";

        var blanks = /\S+/g,
            seperator = /[|]/g;

        var _decode = function(data) {

            var resultString = "";

            for (var ii = 0e0; ii < data.length; ++ii) {

                var currentArray = data[ii].split(seperator);

                var resultArray = [];

                for (var kk = 0e0; kk < currentArray.length; ++kk) {
                    for (var ll in BRAINFUCK.BASE) {
                        if (!isNaN(ll)) {
                            if (currentArray[kk] === BRAINFUCK.BASE[ll]) {
                                resultArray.push(ll);
                                if (kk + 1e0 === currentArray.length) {
                                    for (var nn = 0e0, holder = ""; nn < resultArray.length; ++nn) {
                                        holder += resultArray[nn];
                                        if (nn + 1e0 === resultArray.length) {
                                            resultString += String.fromCharCode(holder);
                                            holder = "";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            return resultString;

        };

        return _decode(data.match(blanks));

    };

    /**
     * Brainfuck Encoder
     * Encode a brainfucked string back to a human readable string
     * 
     * @method Encode
     * @static
     */
    BRAINFUCK.Encode = function(data) {

        if (!data || !data.length) return "";

        var _encode = function(data) {

            var resultString = "";

            for (var ii = 0e0; ii < data.length; ++ii) {

                var dataString = String(data[ii].charCodeAt(0e0));

                var resultArray = [];

                for (var kk = 0e0; kk < dataString.length; ++kk) {

                    if (BRAINFUCK.BASE[dataString[kk]]) {

                        resultArray.push(BRAINFUCK.BASE[dataString[kk]]);

                        if (kk + 1e0 === dataString.length) {

                            for (var ll = 0e0, holder = ""; ll < resultArray.length; ++ll) {
                                if (ll + 1 === resultArray.length) {
                                    holder += BRAINFUCK.BASE.SEP;
                                    holder += resultArray[ll];
                                    holder += " ";
                                    resultString += holder;
                                } else {
                                    if (ll === 1 || resultArray.length === 1) {
                                        holder += BRAINFUCK.BASE.SEP;
                                    }
                                    holder += resultArray[ll];
                                }
                            }
                        }
                    }
                }
            }

            return resultString;

        };

        return _encode(data);

    };

    /**
     * Do it global, please
     */
    root.BRAINFUCK = BRAINFUCK;

}).call(this);