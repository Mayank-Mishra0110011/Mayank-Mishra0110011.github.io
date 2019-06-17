
var TO_ADDRESS = "mayankmishra0110011@gmail.com";

function formatMailBody(obj, order) {
    var result = "";
    if (!order) {
        order = Object.keys(obj);
    }           
    for (var idx in order) {
        var key = order[idx];
        result += "<h4 style='text-transform: capitalize; margin-bottom: 0'>" + key + "</h4><div>" + sanitizeInput(obj[key]) + "</div>";
    }
    return result;
}

function sanitizeInput(rawInput) {
    var placeholder = HtmlService.createHtmlOutput(" ");
    placeholder.appendUntrusted(rawInput);
    return placeholder.getContent();
 }

function doPost(e) {
    try {
        Logger.log(e);
        var mailData = e.parameters;
        var orderParameter = e.parameters.formDataNameOrder;
        var dataOrder;
        if (orderParameter) {
            dataOrder = JSON.parse(orderParameter);
        }
        var sendEmailTo = (typeof TO_ADDRESS !== "undefined") ? TO_ADDRESS : mailData.formGoogleSendEmail;
        if (sendEmailTo) {
            MailApp.sendEmail({
                to: String(sendEmailTo),
                subject: "Contact form submitted",
                htmlBody: formatMailBody(mailData, dataOrder)
            });
        }
        return ContentService.createTextOutput(JSON.stringify({"result":"success","data": JSON.stringify(e.parameters) })).setMimeType(ContentService.MimeType.JSON);
    }
    catch (error) {
        Logger.log(error);
        return ContentService.createTextOutput(JSON.stringify({"result":"error", "error": error})).setMimeType(ContentService.MimeType.JSON);
    }
}
