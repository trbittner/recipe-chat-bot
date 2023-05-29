# Notes

This is my attempt to create a recipe chatbot using Sveltekit and wit.ai.  The first thing to do is create the interface.  I'm using [this snippet](https://svelte.dev/repl/ce61cb87ea604812a1d1639de66f7a5d?version=3.46.3) as starting point.

* **1**
  * Bouncing Dots.  There's a lot for me to unpack in the CSS here.  I'm unfamiliar with `flex` layouts, so I'm studying [this](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) page.
  * The animation portion seems relatively straight forward, but I looked up
  * some of parameters on the MDN (Mozilla Developer Network) site above.
* **2**
  * Though this is for jQuery, I like the composition of [this chatbot interface](https://codepen.io/TVBZ/pen/WmPPyR) a bit more, so we'll use it in conjunction with the svelte example.
  * I've learned a lot about CSS for instance the `fr` [unit](https://www.digitalocean.com/community/tutorials/css-css-grid-layout-fr-unit) and the `vh` [unit](https://www.w3schools.com/cssref/css_units.php).
  * [This tutorial](https://www.digitalocean.com/community/cheatsheets/css-flexbox) helped me create a better CSS `flexbox`.
* **3**
  * It appears that the current set up for replit and vite do not allow
form posts due to CSRF concerns.  I've been unable to solve those because I
can't find the appropriate origin and destination.  However, I can get
around this with the node adapter for sveltekit.  Depending on my patience
I may try and tinker with the vite issue more in the future (though I've
already spent 4-6 hours on it already).
* [This](https://www.stefanjudis.com/today-i-learned/prevent-npm-install-for-not-supported-node-js-versions/) helped me understand how to start installing packages and removing them across node version mismatches.
* [This](https://svelte.dev/repl/149d2f3766e9425f8fe39207cad5ac13?version=3.31.0) may solve my input problems.
  * Actually I didn't need it, because I had an error blocking the input update, which masked the bug I was trying to fix.  Turns out the component binding worked as expected the first time out.
  * While exploring ideas for layouts that leverage better design skills than mine (i.e. a computer's), I found [this site for logo design](https://app.logo.com/).  It doesn't seem to have the - "you can design a logo but can't use it until you pay" bullshit attached to it.
* [This is an extremely well written tutorial on sveltekit, SASS, and markdown support](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog).
  