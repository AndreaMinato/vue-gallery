# vue-gallery

An opinionated gallery component based on vueJS

## What it does

This component will provide you an [unsplash gallery like style](https://unsplash.com/) skeleton to display a list of elements.

## How it works

### Installation

You can install the package from `npm`

```bash
npm i vue-gallery --save
```

or from `cdn`

```html
<script src="https://unpkg.com/vu-gallery"></script>
```

### Usage

Register the component globally:

```js
import Gallery from "vue-gallery";
Vue.component("gallery", Gallery);
```

or locally

```js
import Gallery from "vue-gallery";
//...

export default {
  name: "your-component",
  components: {
    Gallery
    //...
  }
  //...
};
```

Note that if you use the component via cdn you don't have to register it.

Then you can use the component like that

```html
<gallery :width="900" :max-column-width="200" :items="items">
  <div slot-scope="{item}">{{item}}</div>
</gallery>
```

This will generate a gallery whit as many columns as will fits in the width provided, in every column there will be the items provided stacked vertically.

### Options

The defined props are:

```js
{
    items: { // the list of items that will populate the gallery
      required: true
    },
    width: { // the width of the gallery
      required: true,
      type: Number
    },
    maxColumnWidth: { // the max width of every column
      default: 200,
      type: Number
    }
}
```
