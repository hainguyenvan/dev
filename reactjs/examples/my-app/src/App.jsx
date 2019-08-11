import React from 'react';

class  Header extends React.Component {

   constructor(props) {
      super(props);
      this.state =  {
         header: 'Header'
      }

      console.log('props:', this.props.headerProp);
   }

   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
         </div>
      );
   }
}

class Footer extends React.Component {

   render() {
      return (
         <div>
            <h1>Footer</h1>
         </div>
      );
   }
}

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         headerProps: 'test 101'
      }
   }

   render() {
      return (
         <div>
            <Header headerProp={this.state.headerProps}/>
            <Footer/>
            {/* <p data-myattribute = "somevalue">This is the content!!!</p> */}
         </div>
      );
   }
}
export default App;