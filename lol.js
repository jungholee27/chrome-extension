// var images = document.getElementsByTagName('img');
// for (var i = 0, l = images.length; i < l; i++) {
//   images[i].srcset = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
// }
const hiChewArr = ['https://cdn.shopify.com/s/files/1/0746/4219/products/hichew_banana2019.png?v=1571709222', 'https://www.candywarehouse.com/item-images/129090-01_hi-chew-fruit-chews-10-piece-candy-packs-mango-10-piece-box.jpg?resizeid=102&resizeh=500&resizew=500', 'https://cdn.shopify.com/s/files/1/0736/7879/products/hi-chew-acai-fruit-chews-japan-candy-district-online-candy-store-kitchener-waterloo_1024x.jpg?v=1558927548', 'https://www.candywarehouse.com/item-images/130001-01_hi-chew-fruit-chews-10-piece-candy-packs-kiwi-10-piece-box.jpg', 'https://grandpajoescandyshop.com/wp-content/uploads/2020/08/watermelon-hi-chew.png', 'https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/216/original/white-background.png']

let images = document.getElementsByTagName('img');
let j = 0;
for (let i = 0, l = images.length; i < l; i++) {
  images[i].src = hiChewArr[j];
  if(j === hiChewArr.length - 1) j = 0;
  j++;
}


function invertHexToRGB(str){
  let newRgb = str;
  if(newRgb[0] === '#') newRgb = newRgb.slice(1,newRgb.length);
  let red = newRgb.slice(0,2);
  let green = newRgb.slice(2,4);
  let blue = newRgb.slice(4,6);
  let obj = {
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9,
    A : 10,
    B : 11,
    C : 12,
    D : 13,
    E : 14,
    F : 15
  }
  function hexToDec(str){
    let dec = obj[str[0]] * 16;
    dec += obj[str[1]];
    return dec;
  }
  red = 255 - hexToDec(red);
  green = 255 - hexToDec(green);
  blue = 255 - hexToDec(blue);

  return `rgb(${red}, ${green}, ${blue})`
}


function invertRgbToRgb(str){
  let rgbStr = str;
  //'rgb(1, 12, 123)'
  while(rgbStr[0] !== '('){
    rgbStr = rgbStr.slice(1, rgbStr.length);
  }
  rgbStr = rgbStr.slice(1, rgbStr.length);
  let red = 255 - Number(rgbStr.slice(0,rgbStr.indexOf(',')));
  rgbStr = rgbStr.slice(rgbStr.indexOf(',')+1, rgbStr.length);
  let green = 255 - Number(rgbStr.slice(0,rgbStr.indexOf(',')));
  rgbStr = rgbStr.slice(rgbStr.indexOf(',')+1, rgbStr.length);
  let blue = 255 - Number(rgbStr.slice(0,rgbStr.indexOf(')')));

  return `rgb(${red}, ${green}, ${blue})`
}

// if '' for bg black
// if '' for text make white
// check what type of string either rgb or hex and use correct function
function emptiesAndType(ele){
  let str = ele.style.background;
  if(ele.style.background === ''){ 
    ele.style.background = 'black';
  }else if(str[0] === 'r' || (str[0] === ' ' && str[1] === 'r')) {
    ele.style.background = invertRgbToRgb(str);
  } else {
    ele.style.background = invertHexToRGB(str);
  }
  str = ele.style.color;
  if(ele.style.color === ''){
    ele.style.color = 'white';
  } else if(str[0] === 'r' || (str[0] === ' ' && str[1] === 'r')) {
    ele.style.color = invertRgbToRgb(str);
  } else {
    ele.style.color = invertHexToRGB(str);
  }
  
}



// want a way to find all classes, id's and elements that are not attributed 
// select for back ground come up with a algo to get inverted color
// for all text use algo to invert text color
//html tags
//textarea button a span table ul li ol p h1, h2, h3, h4, h5 ,h6, dl dt dd tr th td frameset frame form input select option 
//link
const tagObj ={
  0:'div',
  1:'textarea',
  2:'button',
  3:'a',
  4:'span',
  5:'table',
  6:'ul',
  7:'li',
  8:'ol',
  9:'p',
  10:'h1',
  11:'h2',
  12:'h3',
  13:'td',
  14:'frameset',
  15:'frame',
  16:'form',
  17:'input',
  18:'select',
  19:'option',
  20:'link',
  21:'th',
  22:'tr',
  23:'dd',
  24:'dt',
  25:'dl',
  26:'h6',
  27:'h5',
  28:'h4',
  29:'i',
  30:'section',
  31:'main',
  32:'article',
  33:'body',
  34:'footer'
};


for(const prop in tagObj){
  const tagArray = document.getElementsByTagName(tagObj[prop]);
  for (let i = 0, l = tagArray.length; i < l; i++){
    emptiesAndType(tagArray[i]);
  }
}



  const body = document.querySelector('body');
  console.log('here');
  body.addEventListener('keydown', (e) => {
    if(e.code === 'ArrowLeft'){
      asyncDestroy();
      console.log('destroy');
    }
  });
  


function asyncDestroy(){
  
    for(const prop in tagObj){
      const tagArray = document.getElementsByTagName(tagObj[prop]);
      console.log('hi');
      if(tagObj[prop] !== 'body'){
        for (let i = 0; i < tagArray.length; i++){
           tagArray[i].remove();
        }
      }
    }
    document.querySelector('body').style.height = '1080px';
    document.querySelector('body').style.width = '1920px';
    document.querySelector('body').style.background = 'url(https://media.giphy.com/media/lgcUUCXgC8mEo/giphy.gif)';
}




//html tags
//textarea button a span table ul li ol p h1, h2, h3, h4, h5 ,h6, dl dt dd tr th td frameset frame form input select option 
//link

// const divTag = 'div'
// let textCol = document.getElementsByTagName(divTag);
// let thisColor;
// for (let i = 0, l = textCol.length; i < l; i++){
//     thisColor = textCol[i].style.backgroundColor;
//     console.log(thisColor);
//     if(thisColor === '') console.log('this is empty str')
//     if(thisColor === null) console.log('this is null')
//     if(thisColor === undefined) console.log('this is undef')
//     textCol[i].style.backgroundColor = 'rgb(0, 0, 0)';
//     textCol[i].style.color = 'rgb(255, 255, 255)';
//     thisColor = textCol[i].style.backgroundColor;
//     console.log(thisColor);
// }
// console.log(thisColor);
//html tags
//textarea button a span table ul li ol p h1, h2, h3, h4, h5 ,h6, dl dt dd tr th td frameset frame form input select option 
//link