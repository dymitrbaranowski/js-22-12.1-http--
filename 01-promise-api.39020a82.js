new Promise(((o,e)=>{const n=Math.random()>.5;setTimeout((()=>{n&&o("вот ваше блюдо"),e("Извините закончились продукты")}),1e3)})).then((function(o){console.log("onMakeOrderSuccess"),console.log(o)})).catch((function(o){console.log("onMakeOrderError"),console.log(o)}));
//# sourceMappingURL=01-promise-api.39020a82.js.map
