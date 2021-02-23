const modalContainer = $('.image-modal-container')
const modalImagePosition = $('#image-position')
const modalImg = $('#modal-image')
let currentPosition = 1
const images = ['./markers.jpg', './markers2.jpg']
const totalImages = images.length

const closeModal = () => modalContainer.addClass('hidden')

$('.product-image').click(() => {
    modalContainer.removeClass('hidden')

    // Set total image count
    $('#image-count').text(totalImages)

    // Initial position
    modalImagePosition.text(currentPosition)
})

$('#close-modal').click(closeModal)
$('.backdrop').click(closeModal)

const getImageAtIndex = (index) => {
    // Get image src
    return images[index]
}

$('#modal-next').click(() => {
    // Change to next product image
    currentPosition = currentPosition < totalImages ? currentPosition + 1 : 1
    modalImagePosition.text(currentPosition)
    modalImg.attr('src', getImageAtIndex(currentPosition - 1))
})

$('#modal-prev').click(() => {
    // Change to previous image
    currentPosition = currentPosition > 1 ? currentPosition - 1 : totalImages
    modalImagePosition.text(currentPosition)
    modalImg.attr('src', getImageAtIndex(currentPosition - 1))
})