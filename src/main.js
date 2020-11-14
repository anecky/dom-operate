const div = dom.create("<div>newDiv</div>")
console.log(div)
dom.after(test,div)
const div2 = dom.create("<div>爸爸</div>")
dom.wrap(test,div2)
console.log(div)

dom.attr(test1,'class','test1')
console.log(dom.attr(test1,'class'))

console.log(dom.parent(ts1))

console.log(dom.children(test1))

let listener=()=>{dom.on(ts1,'click',()=>console.log(1))}


console.log('find test1',dom.find('#test1'))

dom.off(ts1,'click',listener)

console.log('dom siblings',dom.siblings(ts1))
console.log('dom.next',dom.next(ts1))
console.log(dom.previous(ts2))


dom.each(dom.children(test1),(node)=>{dom.style(node,'color','red')})
console.log(dom.index(ts1))

