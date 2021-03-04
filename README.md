# Bootstrap 5 Multiple Level Dropdown.

For Bootstrap 4, please visit [Bootstrap 4 Multiple Level Dropdown](https://github.com/dallaslu/bootstrap-4-multi-level-dropdown)

Using official HTML without adding extra CSS styles and classes, it's just like native support. 

All things listed in https://v5.getbootstrap.com/docs/5.0/components/dropdowns/ are not effected. You can use css classes and js methods/events/options freely.

Dropdown of bootstrap can be easily changed to infinite level. It's a pity that they didn't do it.

## Usage

### Base
Just add js after bootstrap js files:

```html
<script src="https://raw.githubusercontent.com/dallaslu/bootstrap-5-multi-level-dropdown/master/bootstrap5-dropdown-ml-hack.js"></script>
```
### Hover
If your want a hover tigger, just add class and some custom styles to reduce spacing to avoid triggering mouseleave.
```css
.dropdown-hover-all .dropdown-menu, .dropdown-hover > .dropdown-menu { margin:0 }
```
Then, add classes for dropdown elements;
```html
<div class="dropdown-hover-all">
  <!-- .dropdown elements -->
</div>
<div class="dropdown dropdown-hover">
  <!-- toggle and menu elements -->
</div>
```
## Example
```html
<link rel="stylesheet" href="https://raw.githubusercontent.com/dallaslu/bootstrap-5-multi-level-dropdown/master/bootstrap5-dropdown-ml-hack.css" />
...
<div class="dropdown-hover-all">
  <!-- .dropdown elements -->
</div>
<div class="dropdown dropdown-hover">
  <!-- toggle and menu elements -->
</div>
...
<script src="https://raw.githubusercontent.com/dallaslu/bootstrap-5-multi-level-dropdown/master/bootstrap5-dropdown-ml-hack.js"></script>
```

## Demo

Here is a perfect demo: https://jsfiddle.net/dallaslu/mvk4uhzL/ (works well with Bootstrap v5.0.0)
