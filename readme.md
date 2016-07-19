# vue-p-carousel

carousel component for Vue

## Installation

```shell
$ npm install vue-p-carousel
```

## Usage

```js
import Carousel from 'vue-p-carousel'

new Vue({
  el: '#app',
  data:{,
    items:[
        {
            src:"...",
            alt:"image-1"
        },
        {
            src:"...",
            alt:"image-2"
        },
        {
            src:"...",
            alt:"image-3"
        }
    ]
  },
  components: {
    Carousel: Carousel
  },
})
```

```html
<div id="app">
  <carousel :items="items"></carousel>
</div>
```