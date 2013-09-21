function pasteSelection() 
{
    $("#errorlog").html("Checking for selected text..");
    
    //Select current tab to send message
    chrome.tabs.query({
        "active": true,
        "currentWindow": true,
        "status": "complete",
        "windowType": "normal"
    }, function (tabs) {
        //It returns array so looping over tabs result
        for (tab in tabs) {

            //Send Message to a tab
            chrome.tabs.sendMessage(tabs[tab].id, {
                method: "getSelection"
            });
        }
    });
}

function opengmail()
{
  var text = $("#text").val();
  
  //change domain where you have sender.php  
  jQuery.post("http://yourdomain/sender.php",
  {body: text}, 
  function(data){
      $("#errorlog").html("Sent!");
      $("#text").val(""); 
      self.close(); 
  });                                              
}

//Adding a handler when message is recieved from content scripts
chrome.extension.onMessage.addListener(function (response, sender) 
{
    //Set text to text area
    var text = document.getElementById('text');
    if(response.data.length > 0)
    {
      $("#errorlog").html("Coppied. Ready to send");
      text.value = response.data;
    }
});

// Bind On click event to pasteSelection() function
document.addEventListener("DOMContentLoaded", function () 
{
    pasteSelection();                                 
    document.getElementById("get").onclick = pasteSelection;
    document.getElementById("send").onclick = opengmail;
});