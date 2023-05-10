const Total = ({parts}) => {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <p><span style={{fontWeight: 'bold'}}>total of {total} exercises</span></p>
  )
}

export default Total