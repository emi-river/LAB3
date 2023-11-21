import PropTypes from 'prop-types'
import './ImageAddModal.css'

const ImageAddModal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="add-image-modal">
        <form
          className="pick-image-btn"
          method="POST"
          action="/api"
          encType="multipart/form-data"
        >
          <input className="add-image-input" type="file" name="image" />
          <input className="send-modal-btn" type="submit" />
        </form>
        <button className="close-modal-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  )
}

ImageAddModal.propTypes = {
  closeModal: PropTypes.func.isRequired
}

export default ImageAddModal
