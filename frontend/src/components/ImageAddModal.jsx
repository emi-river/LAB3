import PropTypes from 'prop-types'
import './ImageAddModal.css'

const ImageAddModal = ({ closeModal }) => {
  const handleImageFormSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    try {
      const response = await fetch('/api/', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        console.log('Image uploaded successfully')
      } else {
        console.error('Failed to upload image')
      }
    } catch (error) {
      console.error('Error uploading image', error)
    }
  }
  return (
    <div className="modal-overlay">
      <div className="add-image-modal">
        <form
          className="pick-image-btn"
          encType="multipart/form-data"
          onSubmit={handleImageFormSubmit}
        >
          <input className="add-image-input" type="file" name="image" />
          <input className="send-modal-btn" type="submit" value="Upload" />
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
