new Promise((function(o,n){var e=Math.random()>.5;setTimeout((function(){e&&o("вот ваше блюдо"),n("Извините закончились продукты")}),1e3)})).then((function(o){console.log("onMakeOrderSuccess"),console.log(o)})).catch((function(o){console.log("onMakeOrderError"),console.log(o)}));
//# sourceMappingURL=01-promise-api.12422454.js.map
