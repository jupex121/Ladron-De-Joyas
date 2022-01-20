var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["00430699-0f25-4b6a-b2ef-0dfa4412895d","2aa7f282-3817-4bf1-8e11-1116641788ea"],"propsByKey":{"00430699-0f25-4b6a-b2ef-0dfa4412895d":{"name":"Thief","sourceUrl":null,"frameSize":{"x":275,"y":305},"frameCount":1,"looping":true,"frameDelay":12,"version":"tvI1azBe3AMJyXVx8d0j1UUbWlfM4C23","loadedFromSource":true,"saved":true,"sourceSize":{"x":275,"y":305},"rootRelativePath":"assets/00430699-0f25-4b6a-b2ef-0dfa4412895d.png"},"2aa7f282-3817-4bf1-8e11-1116641788ea":{"name":"Diamond","sourceUrl":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png","frameSize":{"x":400,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png"}}};
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

var thief = createSprite(20,380,15,15);
thief.setAnimation("Thief");
thief.scale = 0.1;

var diamond = createSprite(380,20,15,15);
diamond.setAnimation("Diamond");
diamond.scale = 0.1;

var laser1 = createSprite(200,350,100,5);
laser1.shapeColor = "red";
laser1.velocityX = -1;

var laser2 = createSprite(200,300,100,5);
laser2.shapeColor = "red";
laser2.velocityX = 2;

var laser3 = createSprite(200,250,100,5);
laser3.shapeColor = "red";
laser3.velocityX = -4;

var laser4 = createSprite(200,200,100,5);
laser4.shapeColor = "red";
laser4.velocityX = 8;

var laser5 = createSprite(200,150,100,5);
laser5.shapeColor = "red";
laser5.velocityX = -16;

var laser6 = createSprite(200,100,100,5);
laser6.shapeColor = "red";

function draw() {
  background("black");
  
  createEdgeSprites();

  thief.collide(edges);
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  laser3.bounceOff(edges);
  laser4.bounceOff(edges);
  laser5.bounceOff(edges);
  laser6.bounceOff(edges);
  
  if (keyDown(RIGHT_ARROW)) {
    thief.velocityX = 2;
    thief.velocityY = 0;
  }
  
  if (keyDown(LEFT_ARROW)) {
    thief.velocityX = -2;
    thief.velocityY = 0;
  }
  
  if (keyDown(UP_ARROW)) {
    thief.velocityY = -2;
    thief.velocityX = 0;
  }
  
  if (keyDown(DOWN_ARROW)) {
    thief.velocityY = 2;
    thief.velocityX = 0;
  }
  
  if (laser1.isTouching(thief)|| laser2.isTouching(thief)||
  laser3.isTouching(thief)||laser4.isTouching(thief)||
  laser5.isTouching(thief)||laser6.isTouching(thief)) {
    stroke(0);
    fill("white");
    textSize(20);
    text("El ladrón ha sido capturado",90,190);
    textSize(15);
    text("Presiona la tecla espaciadora para reintentarlo",50,230);
    thief.setVelocity(0,0);
    laser1.setVelocity(0,0);
    laser2.setVelocity(0,0);
    laser3.setVelocity(0,0);
    laser4.setVelocity(0,0);
    laser5.setVelocity(0,0);
    laser6.setVelocity(0,0);
  }
  
  if (keyDown("space")) {
    thief.x = 20;
    thief.y = 380;
    laser1.x = 200;
    laser1.y = 350;
    laser2.x = 200;
    laser2.y = 300;
    laser3.x = 200;
    laser3.y = 250;
    laser4.x = 200;
    laser4.y = 200;  
    laser5.x = 200;
    laser5.y = 150;
    laser1.setVelocity(-1,0);
    laser2.setVelocity(2,0);
    laser3.setVelocity(-4,0);
    laser4.setVelocity(8,0);
    laser5.setVelocity(-16,0);
  }
  
  if (thief.isTouching(diamond)) {
    stroke(0);
    fill("white");
    textSize(20);
    text("¡El ladrón ha conseguido el diamante!",40,90);
    text("Presiona la tecla espaciadora para jugar de nuevo",20,120);
    thief.setVelocity(0,0);
    laser1.setVelocity(0,0);
    laser2.setVelocity(0,0);
    laser3.setVelocity(0,0);
    laser4.setVelocity(0,0);
    laser5.setVelocity(0,0);
    laser6.setVelocity(0,0);
  }
  
  laser6.x = thief.x;
  
  drawSprites();
}

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
