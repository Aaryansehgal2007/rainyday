function isTouching(a,b){
    if (a.x-b.x<a.width/2+b.width/2 && 
      b.x-a.x<ar.width/2+b.width/2 &&
      a.y-b.y<a.height/2+b.height/2 && 
      b.y-a.y<a.height/2+b.height/2) {
      return true
    }
    else{
      return false
    }
  
  }




















function mouseDragged(){
  Matter.Body.setPosition(this.bodyA,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  bodyB.fly();
}























function attach(){
  if(keyCode === (32)){
      body1.attach(body2);
  }
}
























function touchtofall(lob1,lob2){
  ob1BodyPosition = lob1.body.position;
  ob2BodyPosition = lmango.body.position;

  var distance = dist(ob1BodyPosition.x, ob1BodyPosition.y, ob2BodyPosition.x, ob2BodyPosition.y);
  if(distance <= lob2.r + lob1.r){
    Matter.Body.setStatic(lob2.body, false);
  }

}
































































function rainfall() {
  
}