document.addEventListener('DOMContentLoaded', function() {
    const link = document.getElementById('manga-link');
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Extract the current chapter number from the URL
        const url = new URL(link.href);
        const pathParts = url.pathname.split('-');
        let chapterNumber = parseInt(pathParts[pathParts.length - 1]);

        // Check if the chapter number is a valid number
        if (!isNaN(chapterNumber)) {
            // Increment the chapter number by 2
            chapterNumber += 2;

            // Update the URL with the new chapter number
            pathParts[pathParts.length - 1] = chapterNumber;
            url.pathname = pathParts.join('-');

            // Redirect to the new URL automatically
            window.location.href = url.href;
        } else {
            console.error('Invalid chapter number in URL');
        }
    });
});

