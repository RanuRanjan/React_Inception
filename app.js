console.log(React,"--------React")
console.log(ReactDOM,"------------ReactDOM")

const headingtitle = "Welcome to my React Website"
const newheading =React.createElement("h3",{},headingtitle)
const arrayheading = React.createElement("h4",{},headingtitle)
const headingReact = React.createElement("div",{}, [newheading, arrayheading])
const rootReact = ReactDOM.createRoot(reactroot)
rootReact.render(headingReact)