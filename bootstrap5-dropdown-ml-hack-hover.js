(function($bs) {
    $bs.Dropdown.prototype.toggle = function(_orginal) {
        return function() {
            document.querySelectorAll('.has-child-dropdown-show').forEach(function(e) {
                e.classList.remove('has-child-dropdown-show');
            });
            let dd = this._element.closest('.dropdown').closest('.dropdown');
            for (; dd && ddp !== document; dd = dd.closest('.dropdown')) {
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
    document.querySelectorAll('.dropdown-hover').addEventListener('mouseenter', function() {
        if (!e.target.classList.contains('show')) {
            bs.Dropdown.getInstanec(this.querySelector(':scope>[data-toggle="dropdown"]')).toggle();
        }
    });
    document.querySelectorAll('.dropdown-hover').addEventListener('mouseleave', function() {
        if (e.target.classList.contains('show')) {
            bs.Dropdown.getInstanec(this.querySelector(':scope>[data-toggle="dropdown"]')).toggle();
        }
    });
    document.querySelectorAll('.dropdown-hover-all').addEventListener('mouseenter', function(e) {
        if (e.target.classList.contains('.dropdown') && !e.target.classList.contains('show')) {
            bs.Dropdown.getInstanec(this.querySelector(':scope>[data-toggle="dropdown"]')).toggle();
        }
    });
    document.querySelectorAll('.dropdown-hover-all').addEventListener('mouseenter', function(e) {
        if (e.target.classList.contains('.dropdown') && e.target.classList.contains('show')) {
            bs.Dropdown.getInstanec(this.querySelector(':scope>[data-toggle="dropdown"]')).toggle();
        }
    });
})(bootstrap);