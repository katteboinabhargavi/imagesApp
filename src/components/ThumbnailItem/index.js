// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {key, details, updateThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = details
  const clickThumbnail = () => {
    updateThumbnail(id)
  }
  const activeThumbnailBtnClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="list">
      <button
        className={`button ${activeThumbnailBtnClassName}`}
        type="button"
        onClick={clickThumbnail}
      >
        <img src={thumbnailUrl} className="image-2" alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
