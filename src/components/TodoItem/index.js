// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetail, deleteTodo} = props
  const {id, title} = todoDetail
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-item">
      <div className="container">
        <p className="title">{title}</p>
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
