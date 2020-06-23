(function($bs) {
    $bs.Dropdown.prototype.toggle = function(_orginal) {
        return function() {
            document.querySelectorAll('.has-child-dropdown-show').forEach(function(e) {
                e.classList.remove('has-child-dropdown-show');
            });
            let dd = this._element.closest('.dropdown').parentNode.closest('.dropdown');
            for (; dd && dd !== document; dd = dd.parentNode.closest('.dropdown')) {
                dd.classList.add('has-child-dropdown-show');
            }
            return _orginal.call(this);
        }
    }($bs.Dropdown.prototype.toggle);

    document.querySelectorAll('.dropdown').forEach(function(dd) {
        dd.addEventListener('hide.bs.dropdown', function(e) {
            if (this.classList.contains('has-child-dropdown-show')) {
                this.classList.remove('has-child-dropdown-show');
                e.preventDefault();
            }
            e.stopPropagation(); // do not need pop in multi level mode
        });
    });

    // for hover
    function getDropdown(element) {
        return $bs.Dropdown.getInstance(element) || new $bs.Dropdown(element);
    }

    document.querySelectorAll('.dropdown-hover, .dropdown-hover-all .dropdown').forEach(function(dd) {
        dd.addEventListener('mouseenter', function(e) {
            let toggle = e.target.querySelector(':scope>[data-toggle="dropdown"]');
            if (!toggle.classList.contains('show')) {
                getDropdown(toggle).toggle();
            }
        });
        dd.addEventListener('mouseleave', function(e) {
            let toggle = e.target.querySelector(':scope>[data-toggle="dropdown"]');
            if (toggle.classList.contains('show')) {
                getDropdown(toggle).toggle();
            }
        });
    });
})(bootstrap);
