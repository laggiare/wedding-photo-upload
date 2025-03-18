document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const statusMessage = document.getElementById('statusMessage');
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;

    if (files.length === 0) {
        statusMessage.textContent = 'Please select a file to upload.';
        return;
    }

    statusMessage.textContent = 'Uploading...';

    // Here we would integrate the Google Drive API later
    // For now, just simulate the upload process with a timeout
    setTimeout(() => {
        statusMessage.textContent = 'Upload Successful!';
        fileInput.value = '';  // Clear the file input
    }, 2000);
});
