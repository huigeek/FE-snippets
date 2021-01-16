// jsx
// 固有元素， JSX.IntrinsicElements

declare namespace JSX {
  interface IntrinsicElements {
    [elemName:string]: any
  }
}

<foo />

interface FooProp {
  name: string;
  x: number;
  y: number;
}

declare function AnotherComponent(prop: {name: string});
function ComponentFoo(prop: FooProp) {
  return <AnotherComponent name={prop.name} />
}

const Button = (prop: {value: string}, context: {color: string}) => <button></button>
