// 菜单栏  hover
var boxes = document.querySelectorAll('#menu .button');
[].forEach.call(boxes, box => {
  box.addEventListener('mousemove', e => {
    // document.body.style.setProperty(
    //   '--bg-color',
    //   box.style.getPropertyValue('--color')
    // );
    // // console.log(box.style.getPropertyValue('--color'))
    var size = parseInt(getComputedStyle(box).width);

    // // scaling
    var x = size * .3 * .7 + .7 * e.offsetX;
    var y = size * .3 * .7 + .7 * e.offsetY;
    box.style.setProperty('--x', `${x}px`);
    box.style.setProperty('--y', `${y}px`);
    // box.style.setProperty('--size', size);
  });
});

var avatar = document.querySelector(".site-author-image");

avatar.addEventListener('mousemove', e => {
  // document.body.style.setProperty(
  //   '--bg-color',
  //   box.style.getPropertyValue('--color')
  // );
  // console.log(box.style.getPropertyValue('--color'))
  var size = parseInt(getComputedStyle(avatar).width);

  // scaling
  var x = size * .3 * .7 + .7 * e.offsetX;
  var y = size * .3 * .7 + .7 * e.offsetY;

  avatar.style.setProperty('--x', x);
  avatar.style.setProperty('--y', y);
  avatar.style.setProperty('--size', size);
});

loadlive2d("live2d", "/model/tia/model.json");