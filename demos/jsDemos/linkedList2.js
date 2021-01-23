let a = {val: 'xx'}
let b = {val: 'yy'}
let c = {val: 'zz'}
let d = {val: 'oo'}

a.next = b
b.next = c
c.next = d

// traverse the linked list
let p = a
while (p) {
  console.log(p.val)
  p = p.next
}

// insert item
let e = {val: 'pp'}
c.next = e
e.next = d

// delete item
c.next = d