var wificonnection="1 Check settings & restart. Make sure Wi-Fi is on. Then turn it off and on again to reconnect.  2  Find the problem type. Device. Try connecting to the Wi-Fi network with another device, like a laptop computer or friend's phone. 3 Troubleshoot by problem type. Device. Delete & re-add network  or else Do you want me to guide you about steps to connect to Wifi Network";
var lighterror="Please Specify More Details About Light By... 1 Room in which light is present.  2 Light color.  3 Light Number";
var lightresponse="The Red Light In Your Kitchen Might Have Some Hardware Problem While Connection. We Couldn't Find Any Solution To That SORRY!!!";
var wifisteps="1 Open setting on your mobile phone. 2 Select Wireless and networks. 3 Turn On Wifi,you will get a list of device. 4 Tap device on which you want to connect and enter password if any.        Following these steps you can connect to a wifi";


exports.handler = (event, context, callback) => {
  switch (event.request.type) {
    case "LaunchRequest":
      context.succeed(generateResponse(buildSpeechletResponse("Welcome to Technie!!! You Can Ask Me About Your Technical Queries.", false)))
      break;
    case "IntentRequest":
      switch (event.request.intent.name) {
        case "GreetHelloWorld":
          context.succeed(generateResponse(buildSpeechletResponse("Hello World", true)))
          break;
        case "WifiConnectionError":
          context.succeed(generateResponse(buildSpeechletResponse(wificonnection, true)))
          break;
        case "LightTurnOnError":
          context.succeed(generateResponse(buildSpeechletResponse(lighterror, true)))
          break;
        case "LightRed":
          context.succeed(generateResponse(buildSpeechletResponse(lightresponse, true)))
          break;
        case "steps":
          context.succeed(generateResponse(buildSpeechletResponse(wifisteps, true)))
          break;
      }
      break;
    }
}
buildSpeechletResponse = (outputText, shouldEndSession) => {
  return {
    outputSpeech: {
      type: "PlainText",
      text: outputText
    },
    shouldEndSession: shouldEndSession
  }
}
generateResponse = (speechletResponse) => {
  return {
    version: "1.0",
    response: speechletResponse
  }
}