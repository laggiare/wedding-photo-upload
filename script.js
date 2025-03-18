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

    const formData = new FormData();
    formData.append('file', files[0]);

    fetch('https://your-cloudflare-worker-url.com', { // Replace with your Cloudflare Worker URL
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        statusMessage.textContent = 'Upload successful!';
    })
    .catch(error => {
        statusMessage.textContent = 'Upload failed: ' + error.message;
    });
});
