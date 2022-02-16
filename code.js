var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5e66e3db-bab3-408c-bfb2-dc5b4dcae385","fa21bc47-53a1-4c46-a34d-6da1ac3ff690","b6553ba2-267d-415c-8746-354ded06a052","cfc19b9a-402b-4434-bcc5-813a79409479","839a31ad-d15e-4a94-a2cd-7d75615a94a8","8db4e75c-c5d3-49c0-8b97-fb885022f3f3","83aa8028-a36c-40cf-a309-84165f0bfcd4","1488d8fa-3433-43d5-9bba-b01911663711"],"propsByKey":{"5e66e3db-bab3-408c-bfb2-dc5b4dcae385":{"name":"hotdog","sourceUrl":null,"frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":12,"version":"nV49780XcxOPU1G1wZJToZkPCvIpyOWN","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/5e66e3db-bab3-408c-bfb2-dc5b4dcae385.png"},"fa21bc47-53a1-4c46-a34d-6da1ac3ff690":{"name":"hamburger","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"b6553ba2-267d-415c-8746-354ded06a052":{"name":"pizza","sourceUrl":"assets/api/v1/animation-library/gamelab/LWgK7TwfdeSP.9VePPYdBp2OAWtJ8aGk/category_food/pizza_bacon.png","frameSize":{"x":396,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"LWgK7TwfdeSP.9VePPYdBp2OAWtJ8aGk","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LWgK7TwfdeSP.9VePPYdBp2OAWtJ8aGk/category_food/pizza_bacon.png"},"cfc19b9a-402b-4434-bcc5-813a79409479":{"name":"court","sourceUrl":"assets/api/v1/animation-library/gamelab/T.BLfNn.3XTblWtBQ7GC1tSx4_8IsEJV/category_backgrounds/background_court.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"T.BLfNn.3XTblWtBQ7GC1tSx4_8IsEJV","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T.BLfNn.3XTblWtBQ7GC1tSx4_8IsEJV/category_backgrounds/background_court.png"},"839a31ad-d15e-4a94-a2cd-7d75615a94a8":{"name":"chef","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"WuVtg0IfgMhJhFjIeke99DyscKZviVvO","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/839a31ad-d15e-4a94-a2cd-7d75615a94a8.png"},"8db4e75c-c5d3-49c0-8b97-fb885022f3f3":{"name":"cheftropezado","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"cUnJZp9mkwEcCsF.d7bqblIAF640qrgw","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/8db4e75c-c5d3-49c0-8b97-fb885022f3f3.png"},"83aa8028-a36c-40cf-a309-84165f0bfcd4":{"name":"trophy","sourceUrl":"assets/api/v1/animation-library/gamelab/ikyy4gW508XzfsabiiDOBA6EL7_XzIel/category_video_games/award_trophy4.png","frameSize":{"x":170,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"ikyy4gW508XzfsabiiDOBA6EL7_XzIel","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":170,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ikyy4gW508XzfsabiiDOBA6EL7_XzIel/category_video_games/award_trophy4.png"},"1488d8fa-3433-43d5-9bba-b01911663711":{"name":"salad","sourceUrl":"assets/api/v1/animation-library/gamelab/mH.Fw5G7d9v2yxQAWeHTclRPGnANtzDY/category_food/salad.png","frameSize":{"x":379,"y":334},"frameCount":1,"looping":true,"frameDelay":2,"version":"mH.Fw5G7d9v2yxQAWeHTclRPGnANtzDY","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":379,"y":334},"rootRelativePath":"assets/api/v1/animation-library/gamelab/mH.Fw5G7d9v2yxQAWeHTclRPGnANtzDY/category_food/salad.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//piso
var Floor=createSprite(200,200);
Floor.setAnimation("court");

text("Presiona enter y consigue la ensalada",110,200);

//premio
var trophy= createSprite(200,200,30,10);
trophy.setAnimation("trophy");
trophy.scale=0.5;
trophy.visible=false;

//puntaje
var deads=0;

//chef obstáculos mesas ensalada
var salad=createSprite(200,30,20,20);
salad.setAnimation("salad");
salad.scale=0.1;

var table1=createSprite(20,280,40,40);
table1.shapeColor=rgb(133,70,30);

var table2=createSprite(20,180,40,40);
table2.shapeColor=rgb(133,70,30);

var table3=createSprite(20,90,40,40);
table3.shapeColor=rgb(133,70,30);

var table4=createSprite(380,280,40,40);
table4.shapeColor=rgb(133,70,30);

var table5=createSprite(380,180,40,40);
table5.shapeColor=rgb(133,70,30);

var table6=createSprite(380,90,40,40);
table6.shapeColor=rgb(133,70,30);


var chef=createSprite(200,380,40,40);
chef.setAnimation("chef");
chef.scale=0.4;

var hamburger=createSprite(20,280,10,10);
hamburger.shapeColor="darkred";
hamburger.setAnimation("hamburger");
hamburger.scale=0.1;

var hotdog=createSprite(380,180,10,10);
hotdog.shapeColor="darkred";
hotdog.setAnimation("hotdog");
hotdog.scale=0.1;

var pizza=createSprite(20,90,10,10);
pizza.shapeColor="darkred";
pizza.setAnimation("pizza");
pizza.scale=0.1;

var cheftropezado= createSprite(200,380,30,30);
cheftropezado.setAnimation("cheftropezado");
cheftropezado.visible=false;
cheftropezado.scale=0.8;

createEdgeSprites();
  //function draw

  
function draw() {
 drawSprites();

 text("muertes",20,10);
 text(deads,75,10);

  //movimiento del chef

    
  if(keyDown(UP_ARROW)){
    chef.y=chef.y-6;
  }
  if(keyDown(DOWN_ARROW)){
    chef.y=chef.y+6;
  }
  
  if(keyDown("ENTER")){
    hamburger.velocityX=15;
    hotdog.velocityX=-15;
    pizza.velocityX=15;
    
  }
  
 
  //objetos dentro del canvas
 
  
  chef.collide(topEdge);
  chef.collide(bottomEdge);
  chef.collide(rightEdge);
  chef.collide(leftEdge);
  
  hamburger.bounceOff(rightEdge);
  hamburger.bounceOff(leftEdge);
  
  hotdog.bounceOff(rightEdge);
  hotdog.bounceOff(leftEdge);
  
  pizza.bounceOff(rightEdge);
  pizza.bounceOff(leftEdge);
  

  if(chef.isTouching(hamburger) || 
     chef.isTouching(hotdog) || 
     chef.isTouching(pizza)){
        deads=deads+1;
        chef.x=200;
        chef.y=380;
  }
  
  if(deads>10){
    text("El chef se tropezo en la cocina con un charco de agua",60,200);
    textSize(15);
    stroke("black");
    fill("black");
    chef.destroy();
    cheftropezado.visible=true;
    hamburger.velocityX=0;
    hotdog.velocityX=0;
    pizza.velocityX=0;
  }
   
   
   if(chef.y<50){ 
                   
     chef.destroy();
     hamburger.destroy();
     hotdog.destroy();
     pizza.destroy();
     trophy.visible=true;
   }
  

}

//Gracias miss Vanessa
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
