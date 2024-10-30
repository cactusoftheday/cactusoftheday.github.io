document.addEventListener("DOMContentLoaded", function() {
    fetch("/assets/models/models.json")
        .then(response => response.json())
        .then(data => {
            const finishedContainer = document.getElementById("finished-models-container");

            data.finished.forEach(model => {
                const modelDiv = document.createElement("div");
                modelDiv.classList.add("model-container");

                // Create and append the model name header
                const modelName = document.createElement("h2");
                modelName.innerText = model.name;
                modelName.style.paddingBottom = "10px";
                modelDiv.appendChild(modelName);

                // Create the images grid with dynamic classes
                const imagesDiv = document.createElement("div");
                imagesDiv.classList.add("images-grid", `images-${model.images.length}`);

                // Append images to the grid
                model.images.forEach(image => {
                    const img = document.createElement("img");
                    img.src = image.src;
                    img.alt = image.alt;
                    imagesDiv.appendChild(img);
                });

                // Append grid to the model container
                modelDiv.appendChild(imagesDiv);
                finishedContainer.appendChild(modelDiv);

                // Dynamically set max-height based on viewport height
                const viewportHeight = window.innerHeight;
                const headerHeight = modelName.clientHeight;
                const footerHeight = 50; // Adjust this based on your actual footer height
                const maxContainerHeight = viewportHeight - headerHeight - footerHeight - 40; // Adjust padding as needed
                modelDiv.style.maxHeight = `${maxContainerHeight}px`;

                // Adjust grid height after layout
                setTimeout(() => {
                    const availableHeight = modelDiv.clientHeight - headerHeight - 20;
                    imagesDiv.style.height = `${availableHeight}px`;
                }, 120);
            });
        })
        .catch(error => console.error("Error fetching models:", error));
});
