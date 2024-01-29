document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn').addEventListener('click', function () {
        this.classList.toggle("click");
        document.querySelector('.sidebar').classList.toggle("show");
    });

    var dropdownItems = document.querySelectorAll('.has-dropdown');

    dropdownItems.forEach(function (item) {
        item.addEventListener('click', function () {
            closeOtherDropdowns(item);
            item.querySelector('.dropdown').classList.toggle("show");
            item.querySelector('.fas').classList.toggle("rotate");
        });
    });

    var navLinks = document.querySelectorAll('nav ul li');
    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function () {
            this.classList.add("active");
            var siblings = getSiblings(this);
            siblings.forEach(function (sibling) {
                sibling.classList.remove("active");
            });
        });
    });

    function getSiblings(element) {
        var siblings = [];
        var sibling = element.parentNode.firstChild;

        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== element) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
        }

        return siblings;
    }

    function closeOtherDropdowns(currentItem) {
        var allDropdownItems = document.querySelectorAll('.has-dropdown');

        allDropdownItems.forEach(function (dropdownItem) {
            if (dropdownItem !== currentItem) {
                dropdownItem.querySelector('.dropdown').classList.remove("show");
                dropdownItem.querySelector('.fas').classList.remove("rotate");
            }
        });
    }
});
