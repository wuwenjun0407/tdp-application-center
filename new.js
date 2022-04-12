/*
 * @Author: wuwj8
 * @Date: 2022-04-11 12:30:42
 * @LastEditors: your name
 * @LastEditTime: 2022-04-11 12:50:16
 * @FilePath: \tdp-application-center\new.js
 * @Description:
 */

function Animal(type) {
    this.type = type;
}

Animal.prototype.say = function () {
    console.log('say hi');
};

function _new() {
    const Constructor = [].shift.call(arguments);
    const obj = Object.create(Constructor.prototype);
    const result = Constructor.apply(obj, arguments);
    return result instanceof Object ? result : obj;
}

let animal = _new(Animal, '物质');
console.log(animal.type, '111');
animal.say();
