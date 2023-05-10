const Total = ({parts}) => {
  const total = parts.reduce((acc, part) => acc + part.exercises, 0)
  return (
    <p><span style={{fontWeight: 'bold'}}>total of {total} exercises</span></p>
  )
}

export default Total