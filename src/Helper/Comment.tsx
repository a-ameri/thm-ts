import React from 'react';
import ReactDOM, { render } from 'react-dom';

interface PropsForThis{
  text : String
}

class ReactComment extends React.Component<PropsForThis> {
  

    static defaultProps = {
      trim: true
    }  
  
    componentDidMount() {
      let el : any = ReactDOM.findDOMNode(this)
      ReactDOM.unmountComponentAtNode(el)
      el.outerHTML = this.createComment()
    }
  
    createComment() {
      let text = this.props.text
      text = text.trim();
  
      return `<!-- ${text} -->`
    }
  
    render() {
      return <div />
    }
  }
  export default ReactComment;