const parent =React.createElement('div',{id:"parent"},[
    React.creatElement('div',{id:"child"},[
        React.creatElement('h1',{},"im an h1 tag"),
        React.creatElement('h2',{},"im an h2 tag"),
    ]),
    React.creatElement('div',{id:"child"},[
        React.creatElement('h1',{},"im an h1 tag"),
        React.creatElement('h2',{},"im an h2 tag"),
    ]),
]);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);