var nodeMailer = require('nodeMailer');

var Transporter = nodeMailer.createTransport({
  service:'gmail',
  auth :{
    user:"jayyyantb@gmail.com",
    pass:"tbmhfhjktyflfhql"
  }
});

var mailOptions =  {
  from : "jayyyantb@gmail.com",
  to : "sankitkotwal0510@gmail.com",
  subject: "I used node.js to send this mail",
  text : "helloz xD"
}

Transporter.sendMail(mailOptions, function(error,info){
  if(error)
  {
    console.log(error);
  }
  else{
    console.log("send email: ", info.response);
  }
})
