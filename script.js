

    var BASE_OBJECT = {
        SEP:   "?",
        FAC:   "+!![]",
        BASE:  "?!+[]+!!",
        0e0:   "+[]",
        1e0:   "+!![]",
    };

    for (var ii = 1; ii < 1e1-1e0;) {

        BASE_OBJECT[++ii] = ii-1e0;

    }

    var input = "Hello World!";

    var resObject = {};

    for (var ii = 0e0, inputArray = []; ii < input.length; ++ii) {
        resObject[ii] = {};
        resObject[ii].val = input[ii].charCodeAt(0e0);
        resObject[ii].len = String(input[ii].charCodeAt(0e0)).length;
        resObject[ii].res = "";
        inputArray.push(input[ii].charCodeAt(0e0));
    }


    for (var ll in resObject) {

        var number = String(resObject[ll].val);

        var string = "";

        for (var ii = 0e0; ii < number.length; ++ii) {

            if (parseInt(number[ii]) < 9 && parseInt(number[ii]) >= 2) {

                for (var kk = 0e0; kk < BASE_OBJECT[number[ii]]; ++kk) {

                    if (kk === 0e0) {

                        string += BASE_OBJECT.BASE;

                        string += BASE_OBJECT.FAC;

                    } else {

                        string += BASE_OBJECT.FAC;
                    
                    }

                }
            
            } else {

                if (kk === 0e0) {

                    string += BASE_OBJECT.BASE;

                } else {

                    string += "?" + BASE_OBJECT[number[ii]];

                }
                
            }

        }
        
        resObject[ll].res = string;

    }

    var resultArray = [];

    var output = function(data) {
    
        resultArray.push(data);
        
    }

    var string = "";

    // Validation
    for (var ii in resObject) {

        resObject[ii].res = resObject[ii].res.split(BASE_OBJECT.SEP);

        resObject[ii].res.shift();

        for (var kk = 0; kk < resObject[ii].res.length; ++kk) {
            
            var result = eval('(' + resObject[ii].res[kk] + ')');
            
                string += String(result);

            if (kk + 1 === resObject[ii].res.length) {

                eval.call(window, "output(" + string + ");");
            
                string = "";
                
            }

        }

    }


    for (var ii = 0e0; ii < resultArray.length; ++ii) {
        
        document.write(String.fromCharCode(resultArray[ii]));
        
    }
    
    
    
    