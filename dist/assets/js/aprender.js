"use strict";var key="https://docs.google.com/spreadsheets/d/1Oc3bxvZFv5Xcaftq0BgZhKiVwZdb1TX0gRdY_W1aHno/edit?usp=sharing";Tabletop.init({key:key,callback:function(t,e){var a=e.sheets("Sheet1").all().map(function(t){return{tutorial:t.tutorial,description:t.description,org:t.org,lang:t.lang,link:t.link,type:t.tutorial_type}});new Vue({el:"#renderer",data:{tools:a}})}});