import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from './CatShow'

Enzyme.configure({ adapter: new Adapter()})

describe("When CatShow renders", () => {
  let cat = {
    id: 3,
    name: "Toast",
    age: 1,
    enjoys: "getting all the attention",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  }
  it("displays card data", () => {
    const catShow = shallow(<CatShow cat={cat} />)
    const showHeading = catShow.find("CardTitle").render().text()
    expect(showHeading).toEqual(`Hi! My name is ${cat.name}`)
    const showText = catShow.find("CardText")
    expect(showText.length).toEqual(2)
    const showImg = catShow.find("img")
    expect(showImg.prop("src")).toEqual(`${cat.image}`);
  })
})
