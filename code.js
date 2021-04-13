var l1 = 0;
var l2 = 0;
var x=0;
var Name;
var des;
var pic;
var comment;
var m = 0;

onEvent("sign", "click", function( ) {
  createRecord("users", {name:getText( "text_input1"),
  password:getText( "text_input2"),
  phone:getNumber("text_input3"),    
  mail:getText( "text_input4"),
  pic:getImageURL("image6")
  }, function(record) {
    setScreen("screen2");
  });
  
});

timedLoop(1000, function() {
  setImageURL("image6",getImageURL("photo_select2"))
});

onEvent("login", "click", function( ) {
  readRecords("users", {}, function(records) {
    
    for (var i =0; i < records.length; i++) {
if (getText( "text_input5")==records[i].name&&getText( "text_input6")==records[i].password) {
setScreen("home");
}
else {
  showElement( "n");
}
    }

      
  });

});


onEvent("already", "click", function( ) {
  setScreen("screen2")
});

onEvent("add1", "click", function( ) {
  setScreen("add");
});


onEvent("button6", "click", function( ) {
 l1=0;
 l2=0;
 createRecord("post", { 
 Name:getText("text_input5"),
 des:getText("text_area2"),
 pic:getImageURL("photo_select1"),
 comment:"",
 like:l1,
 dislike:l2,
 pic2:getImageURL("image8")
 }, function(record) {
    setScreen("home");
  });
   
});
timedLoop(1000, function() {
  setImageURL("image13",getImageURL("photo_select1"));
});
onEvent("button7", "click", function( ) {
  setScreen("home");
});

timedLoop(1000, function() {
  readRecords("post", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      setText( "label1",records[i].Name);
      setText( "text_area3",records[i].des);
      setImageURL("image2",records[i].pic);
      setText("comment",records[i].comment);
      setText("1",records[i].like);
      setText("2",records[i].dislike);
   //   setImageURL("image3",records[i].pic2);

    }
  });
  
});
onEvent("image4", "click", function( ) {
setProperty("image4", "image","icon://fa-heart");
setProperty("image7","image", "assets/heart2.png");  
readRecords("post", {Name:getText( "label1")}, function(records) {
     for (var i =0; i < records.length; i++) {
  x=records[i].id;
  l1=records[i].like;
  l2=records[i].dislike;

Name=records[i].Name;
des=records[i].des;
pic=records[i].pic;
comment=records[i].comment;
  }

updateRecord("post", {id:x,like:l1+1,
dislike:l2,
Name:Name,
des:des,
pic:pic,
comment:comment,


}, function(record, success) {
  
});

  });
  
});


onEvent("image7", "click"
, function( ) {
setProperty("image4", "image","icon://fa-heart-o");
setProperty("image7","image","assets/heart1.png");
  readRecords("post", {Name:getText( "label1")}, function(records) {
     for (var i =0; i < records.length; i++) {
  x=records[i].id;
  l1=records[i].like;
  l2=records[i].dislike;

Name=records[i].Name;
des=records[i].des;
pic=records[i].pic;
comment=records[i].comment;
  }

updateRecord("post", {id:x,like:l1,
dislike:l2+1,
Name:Name,
des:des,
pic:pic,
comment:comment,


}, function(record, success) {
  
});

  });
  
});
onEvent("send1", "click", function( ) {
  readRecords("post", {Name:getText( "label1")}, function(records) {
     for (var i =0; i < records.length; i++) {
  x=records[i].id;
  l1=records[i].like;
  l2=records[i].dislike;

Name=records[i].Name;
des=records[i].des;
pic=records[i].pic;
comment=records[i].comment;
  }

updateRecord("post", {id:x,
like:l1,
dislike:l2,
Name:Name,
des:des,
pic:pic,
comment:comment+getText("text_input5")+"  :   "+getText("text_input7")+ "\n",


}, function(record, success) {
  setText("text_input7","");
});

  });
});

onEvent("chat1", "click", function( ) {
  setScreen("chat");
});

onEvent("image1", "click", function( ) {
  createRecord("chat", {chat:getText("text_input5")+"  :   "+getText("text_input8")}, function(record) {
  setText( "text_input8","");
  });
  
});

timedLoop(1000, function() {
   var Comments = getColumn("chat", "chat");
   setText("text_area1", Comments.join("\n" + "\n"));
});
onEvent("button1", "click", function( ) {
  setScreen("home");
});

onEvent("user1", "click", function( ) {
  setScreen("users");
});
timedLoop(1000, function() {
 users = getColumn("users","name")
 setText( "text_area4",users.join("\n" + "\n"));
    
});
var users;


onEvent("button2", "click", function( ) {
 readRecords("users", {name:getText("u")}, function(records) {
    for (var i =0; i < records.length; i++) {
    setScreen("result");
    setText("text_area6",records[i].name);
    setText("text_area7",records[i].mail);
    setText("text_area8",records[i].phone);
    setImageURL("image5",records[i].pic);
    }
  });
  
   
});
onEvent("button3", "click", function( ) {
  setScreen("users");
  
});
onEvent("button4", "click", function( ) {
  setScreen("home");
});



onEvent("me1", "click", function( ) {
  setScreen("screen4");
});




onEvent("button8", "click", function( ) {
  setScreen("home");
});

onRecordEvent("post", function(record, eventType) {
  if (eventType === 'create') {
setProperty("image4", "image","icon://fa-heart-o");
setProperty("image7","image","assets/heart2.png");
  } 
});
onEvent("label1", "click", function( ) {
  readRecords("users", {name:getText( "label1")}, function(records) {
    for (var i =0; i < records.length; i++) {
setScreen("result2");
    setText("11",records[i].name);
    setText("22",records[i].mail);
    setText("33",records[i].phone);
    setImageURL("44",records[i].pic);
    }
  });
  
});
onEvent("back", "click", function( ) {
  setScreen("home");
});


