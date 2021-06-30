# Cat Tinder Frontend

$ yarn create react-app cat-tinder-frontend
$ yarn add react-router-dom


Router

Pages:
- Landing page/Home
- Index
- Show
- New
- Edit
- NotFound

Components:
- Header - from Reactstrap
Imported to Home
Behind the scenes a <Link> (or NavLink) renders an <a> with a real href
- Footer

Reactstrap
Reactstrap is Bootstrap for React components
$ yarn add react (?)
$ yarn add react-dom (?)
$ yarn add reactstrap

Since Reactstrap is a library, it does not contain the actual Bootstrap library itself, so below is how to install Bootstrap which is needed for Reactstrap to work properly
$ yarn add bootstrap

Add to src/index.js
import 'bootstrap/dist/css/bootstrap.min.css'


Mock data
- cats



<Route
  exact path={'/catshow/:id'}
  render={ (props) => <CatShow {...props} cats={ this.state.cats } /> }
/>



 const id = this.props.id - 1
 const cat = this.state.cats[id]


 editCat = (editcat) => {
   // logging the editcat object to endure it has been updated
   console.log(editcat)
 }
  
  
  
  
  
  
  Vaughn's Error Handling

add a validator to the form
if(this.validateForm()){
  normal form actions, setting state
} else {
  return false
}

validateForm = () => {
  console.log('sttempting to validate form')
  // how do we let the user know something is wrong?
  const { name, age, form } = this.state.form
  let errors = {}
  let formIsValid = true
  // rewuire a name so the field can't be blanck
  if(!name){
    formIsValid = false
    errors['name'] = 'name cannot be blank'
  }
  if(!age){
    formIsValid = false
    errors['age'] = 'age cannot be blank'
  }
  if(enjoys.length < 10){
    formIsValid = false
    errors['enjoys'] = 'must enter at least 10 characters'
  }
  this.setState({ errors: errors })
  return formIsValid
}

add a state key: errors


<span>{ this.state.errors['name']}


controller { errors: cat.errors, status: 422}
will give an errors object with keys that have validation error messages
