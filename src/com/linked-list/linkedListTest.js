// import LinkedList from './LinkedList';
const LinkedList = require('./LinkedList');

const list = new LinkedList();

list.addFirst(1);
list.addFirst(2);
list.addFirst(3);
list.addFirst(4);
list.reverse();

console.log(list.toString());
