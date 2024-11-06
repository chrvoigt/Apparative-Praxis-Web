document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(function(tabLink) {
        tabLink.addEventListener("click", function(e) {
            e.preventDefault();

            const target = this.getAttribute("href");
            const targetTab = document.querySelector(target);

            // Remove 'active' class from all tab links and tab contents
            tabLinks.forEach(function(link) {
                link.classList.remove("active");
            });

            tabContents.forEach(function(content) {
                content.classList.remove("active");
            });

            // Add 'active' class to the clicked tab link and corresponding tab content
            this.classList.add("active");
            targetTab.classList.add("active");
        });
    });
});
