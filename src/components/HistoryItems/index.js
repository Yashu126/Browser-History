import './index.css'

const HistoryItems = props => {
  const {eachItem, onDelete} = props

  const onDeleteItem = () => {
    onDelete(eachItem.id)
  }

  return (
    <li className="each-history">
      <p>{eachItem.timeAccessed}</p>
      <img
        src={eachItem.logoUrl}
        alt="domain logo"
        width="20"
        className="app-logo"
      />
      <p>{eachItem.title}</p>
      <p>{eachItem.domainUrl}</p>
      <button type="button" onClick={onDeleteItem} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItems
