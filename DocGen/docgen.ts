/*
CaseNode Document generator program
Generates documents from templates and data
(C) 2015 Oliver Low
VERSION 0.1.1
Revision
v0.1.1 2015-09-24 incept
*/


interface DocGenParams {
    templateFilepath: string; //filepath to the template
    outputFilepath?: string; //filepath to the output file to overwrite or create
    outputFileType?: string; //filepath to output PDF to overwrite or create
    FormData?: Object; //data to fill in the template. Can be nested and matches using dot notation in the template

}

interface DocGenResults {
    returnCode: Number; //
    errorMessage: string;
    bSuccess: boolean
}

import fs = require('fs');

export function docgen(args: DocGenParams) {
    console.log('Document Generator runs');
    //open the template file
    var fTemplate = fs.readFile(args.templateFilepath, function (err, data) {
        if (err) { console.log(err.message); }
        else {
            console.log("Length: " + data.length.toString());
            //convert the raw data to a string - ABIword uses UTF-8
            var sDoc = data.toString("UTF-8");
            //for each tag in the FormData, look for that tag inside {{}} and replace with the form data
            for (var fieldName in args.FormData) {
                console.log("FOUND {{" + fieldName + "}} at " + sDoc.indexOf('{{' + fieldName + '}}').toString() + " replacing with : " + args.FormData[fieldName]);
                //find the tag and replace it
                sDoc = sDoc.replace('{{' + fieldName + '}}', args.FormData[fieldName]);

            }
            //write back out to the new file
            fs.writeFile(args.outputFilepath, sDoc, function (err) { if(err) console.log(err.message) });
        }

        
    }
        );
    

}
//collect data from input

//DUMMY RUN
var d = new Date();
var sDate = d.getDate().toString() + " September " + d.getFullYear().toString();

docgen({
    templateFilepath: "c:\\temp\\MBT1.abw",
    outputFilepath: "c:\\temp\\output.abw",
    FormData: {
        addressee: "Captain Abraham Nemo",
        salutation: "Captain Nemo",
        address: "c/o Piquad\nDock 12\nHMS Portsmouth",
        OurRef: "AC1\/NEM099\/002",
        YourRef: " ",
        date: sDate,
        matter: "APPLICATION FOR WHALING LICENCE",
        //body: "Thank you for your isntructions.\n\nWhaling is not permitted in the Thames Estuary, so we will

    }
});
