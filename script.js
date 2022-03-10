function sendMoney() {
   var SName = document.getElementById("SenderName").value;
   var Amount = parseInt(document.getElementById("enterAmount").value);
   var RName = document.getElementById("ReceiverName").value;

   var ispresentSender = document.getElementById(SName);
   var ispresentReceiver = document.getElementById(RName);
   
   if (!ispresentSender) {
      alert("Customer is not present in the Data-Base");
   }
   else if(!ispresentReceiver){
      alert("Customer is not present in the Data-Base");
   }
   else {
      var SenderTotalAmount = document.getElementById(SName).innerHTML;
      console.log(SenderTotalAmount);
      if (Amount > SenderTotalAmount) {
         alert("Insufficient Balance.")
      }
      else {

         var finalAmountofReceiver = parseInt(document.getElementById(RName).innerHTML) + Amount;
         var finalAmountofSender = parseInt(document.getElementById(SName).innerHTML) - Amount;


         document.getElementById(SName).innerHTML = finalAmountofSender;
         document.getElementById(RName).innerHTML = finalAmountofReceiver;

         alert(`Successful Transaction !!  
       $${Amount} is sent to ${RName}@email.com.`)

         // transaction history 
         var createPTag = document.createElement("li");
         var textNode = document.createTextNode(`Rs ${Amount} is sent from the sender with Email-id ${SName}@email.com
      to recepient with Email-id ${RName}@email.com on ${Date()}.`);
         createPTag.appendChild(textNode);
         var element = document.getElementById("transaction-history-body");
         element.insertBefore(createPTag, element.firstChild);
      }
   }
}

