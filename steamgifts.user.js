// ==UserScript==
// @name        SteamGiftsBot
// @namespace   steam
// @description SteamGiftsBot
// @include     http://www.steamgifts.com/
// @include     http://www.steamgifts.com/giveaway/*
// @version     1
// @grant       none
// ==/UserScript==
reserve = 25;
enterUnderEntetys = 1000;
window.addEventListener('load', function () {
  //window.location.href.indexOF("giveaway") == -1 &&
  console.log('start');
  for (i = document.getElementsByClassName('giveaway__heading').length - 25; i < document.getElementsByClassName('giveaway__heading').length; i++)
  {
    ret = enterGift(i);
    if (ret == - 1)
    return;
  }
  //Enter

  timeOut();
  console.log('win3');
  document.getElementsByClassName('sidebar__entry-insert') [0].click();
  console.log('win4');
}, false);
function enterGift(index)
{
  console.log('enter' + index);
  if (document.getElementsByClassName('nav__points') [0].textContent > reserve)
  {
    if (document.getElementsByClassName('giveaway__heading').length > 0)
    {
      //Ueberpruefung ob das "giftindex" element ausgegraut ist
      if (document.getElementsByClassName('giveaway__row-inner-wrap') [index].className.indexOf('faded') > - 1 || checkUsers(index) > enterUnderEntetys)
      {
        return;
        //timeOut();
      } 
      else
      {
        //Open gift page
        var gift = document.getElementsByClassName('giveaway__heading');
        window.location.href = gift[index].getElementsByTagName('a') [0].href;
        console.log('seite' + gift[index].getElementsByTagName('a') [0].href);
        return - 1;
      }
    }
  } 
  else
  {
    return;
  }
  //On /giveaway/ page
  //if we have not enough points

  if (document.getElementsByClassName('sidebar__error is-disabled').length > 0 && document.getElementsByClassName('sidebar__error is-disabled') [0].className.indexOf('is-disabled') > - 1)
  {
    console.log('need more points' + index);
    timeOut();
  }
}
function timeOut() {
  console.log('startTimeout');
  time = Math.floor((Math.random() * 9000) + 6000);
  setTimeout(function () {
    window.location.href = 'http://www.steamgifts.com/'
  }, time);
}
function checkUsers(index) {
  string = document.getElementsByTagName('span') [10 + 5 * index].innerHTML.replace(' entries', '');
  if (string.indexOf('hours ago') > - 1) {
    document.getElementsByTagName('span') [11 + 5 * index].innerHTML.replace(' entries', '')
  } 
  else {
    document.getElementsByTagName('span') [10 + 5 * index].innerHTML.replace(' entries', '')
  }
}
