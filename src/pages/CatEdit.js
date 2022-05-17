import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editedCat: {
        name: this.props.cat ? this.props.cat.name : "",
        age: this.props.cat ? this.props.cat.age : "",
        enjoys: this.props.cat ? this.props.cat.enjoys : "",
        image: this.props.cat ? this.props.cat.image : ""
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    const { editedCat } = this.state
    editedCat[e.target.name] = e.target.value
    this.setState({editedCat: editedCat})
  }

  handleSubmit = () => {
    const { updateCat, cat } = this.props
    updateCat(this.state.editedCat, cat.id)
    this.setState({submitted: true})
  }

  render() {
    return(
      <div className="page-body">
        <h2>Edit Cat Details</h2>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.editedCat.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="text"
              name="age"
              onChange={this.handleChange}
              value={this.state.editedCat.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleChange}
              value={this.state.editedCat.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image URL</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.editedCat.image}
            />
          </FormGroup>
        </Form>
        <Button onClick={this.handleSubmit} name="submit">
          Submit Cat
        </Button>
        { this.state.submitted && <Redirect to={`/catshow/${this.props.cat.id}`}/> }
      </div>
    )
  }
}
export default CatEdit
