window.__require=function i(e,n,r){function t(s,m){if(!n[s]){if(!e[s]){var o=s.split("/");if(o=o[o.length-1],!e[o]){var u="function"==typeof __require&&__require;if(!m&&u)return u(o,!0);if(a)return a(o,!0);throw new Error("Cannot find module '"+s+"'")}s=o}var c=n[s]={exports:{}};e[s][0].call(c.exports,function(i){return t(e[s][1][i]||i)},c,c.exports,i,e,n,r)}return n[s].exports}for(var a="function"==typeof __require&&__require,s=0;s<r.length;s++)t(r[s]);return t}({mainSkinInfo:[function(i,e){"use strict";cc._RF.push(e,"914ffcbIqRDjKsd1WTgKWhK","mainSkinInfo"),cc.Class({extends:cc.Component,properties:{image:cc.Sprite},onLoad:function(){this.deltaAnimFrame=.33,this.anim=this.idle},update:function(){},playAnimation:function(i){this.curAnimFrame?this.curAnimFrame+=i:this.curAnimFrame=i,this.curAnimFrame<this.deltaAnimFrame||(this.curAnimFrame=0,this.anim.spriteFrameIndex++,this.anim.spriteFrameIndex>=this.idle.length&&(this.anim.spriteFrameIndex=0),this.image.spriteFrame=this.idle[this.anim.spriteFrameIndex])}}),cc._RF.pop()},{}]},{},["mainSkinInfo"]);