/**
 * BrainfuckJS v0.1.2
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
     * Base template for 
     * 0 and 1 are special cases
     */
    var TEMPLATE = {
        /**
         * Seperate between Numbers
         */
        SEP:   "?",
        /**
         * Fact to increase a string
         * Represents 1
         */
        FAC:   "+!![]",
        /**
         * How everything starts..
         */
        BASE:  "?!+[]+!!",
        /**
         * Special case 0
         */
        0e0:   "+[]",
        /**
         * Special case 1
         */
        1e0:   "+!![]",
        /**
         * Template already built?
         */
        ready: false
    };

    /**
     * Convert evil data into string
     */
    BRAINFUCK.Evil = function(data) {
        return String.fromCharCode(data);
    }

    /**
     * Build the template if not already built
     *
     * @method BuildTemplate
     * @static
     */
    BRAINFUCK.BuildTemplate = function() {

        if (!TEMPLATE.ready) {
            for (var ii = 1; ii < 1e1-1e0;) {
                TEMPLATE[++ii] = ii-1e0;
            }
        }

    };

    /**
     * Brainfuck Encoder
     * Encode a string into brainfuck
     * 
     * @method Encode
     * @static
     */
    BRAINFUCK.Encode = function() {

        if (!TEMPLATE.ready) BRAINFUCK.BuildTemplate();

        var resObject = {},
            input = arguments[0],
            string = "";

        if (!input || !input.length) return;

        for (var ii = 0e0, inputArray = []; ii < input.length; ++ii) {
            resObject[ii] = {};
            resObject[ii].val = input[ii].charCodeAt(0e0);
            resObject[ii].res = "";
            inputArray.push(input[ii].charCodeAt(0e0));
        }

        for (var ll in resObject) {

            var number = String(resObject[ll].val)
                string = "";

            for (var ii = 0e0; ii < number.length; ++ii) {
                if (parseInt(number[ii]) <= 9 && parseInt(number[ii]) >= 2) {
                    for (var kk = 0e0; kk < TEMPLATE[number[ii]]; ++kk) {
                        if (kk === 0e0) {
                            string += TEMPLATE.BASE;
                            string += TEMPLATE.FAC;
                        } else {
                            string += TEMPLATE.FAC;
                        }
                    }
                } else {
                    if (parseInt(number[ii]) === 0 || 
                        parseInt(number[ii]) === 1) {
                        string += TEMPLATE.SEP;
                        string += TEMPLATE[number[ii]];
                    }
                }
            }

            resObject[ll].res = string;
        }

        return resObject;

    };

    /**
     * Brainfuck Decoder
     * Decode a brainfuck string
     * 
     * @method Decode
     * @static
     */
    BRAINFUCK.Decode = function(object) { console.log(object);

        var resultString = "";

        object.res = object.res.split(TEMPLATE.SEP);
        object.res.shift();

        for (var kk = 0; kk < object.res.length; ++kk) {
            var result = eval('(' + object.res[kk] + ')');
                resultString += String(result);
            if (kk + 1 === object.res.length) {
                return eval.call(window, "BRAINFUCK.Evil(" + resultString + ");");
            }
        }

    };

    /**
     * Do it global, please
     */
    root.BRAINFUCK = BRAINFUCK;

}).call(this);