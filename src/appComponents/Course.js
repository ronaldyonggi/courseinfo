import Header from "./courseComponents/Header"
import Content from "./courseComponents/Content"
import Total from "./courseComponents/Total"

const Course = ({course}) => {
  const name = course.name
  const parts = course.parts

  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default Course