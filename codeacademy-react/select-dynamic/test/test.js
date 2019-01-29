let mount = require('enzyme/mount'),
    appModule = require('../src/Parent'),
    Child = require('../src/Child').Child,
    Sibling = require('../Sibling').Sibling,
    components = appModule.__ReactComponents,
    TestedComponent = components[0];

describe('', function () {
  it("In Parent.js, <Sibling /> should have an attribute of name={this.state.name}.", function () {
    let wrapper = mount(<TestedComponent />);
    expect(wrapper.find(Sibling).props().name).to.equal(wrapper.state().name);
  });
  it("In Parent.js, <Child /> should not have a name attribute.", function () {
    let wrapper = mount(<TestedComponent />);
    expect(wrapper.find(Child).props().name).to.not.exist;
  });
  it("In Sibling.js, make sure that the <h1> and <h2> contain this.props.name, and not Frarthur.", function () {
    
    var allText = function allText () {
      if (this.length < 2) return this.text();
      
      return this.map(function(node){
        return node.text();
      }).reduce(function(p,c){
        return p + c;
      }, '');
    }; 
    
    let name = "ohoyyyooz",
	    wrapper = mount(<Sibling name={name} />);
     
	  ['h1','h2'].forEach(function (selector) {
     expect(allText.call(wrapper.find(selector)).indexOf(name)).to.be.above(-1);
     expect(allText.call(wrapper.find(selector)).indexOf('Frarthur')).to.equal(-1); 
    });
  });
}); 