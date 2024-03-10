# Kirby button block

This plugin allows you to add a self-contained button block via the Kirby Panel.

## Installation

Download, extract and copy this repository to `/site/plugins/button-block`.

## Usage

Once you've installed the plugin, simply add `- button` to your `fieldsets` option in the relevant blueprints. For example...

```
    fieldname:
      type: blocks
      fieldsets:
        - text
				- image
				- gallery
				- markdown
        - button
```

You can also make the button block universally available by adding it to a default list of blocks via your `/site/config/config.php` file...

```
    <?php

    return [
      'blocks' => [
        'fieldsets' => [
          'text',
          'image',
          'gallery',
          'markdown',
          'button'
        ]
      ]
    ];
```

When you add a button block in the Panel, the fields for completion will be displayed on the right-hand side of the screen...

* **Button text:** the text to be displayed on the button.
* **Secondary button:** adds a `secondary` class to allow you to style an alternate button in your CSS ('no' by default).
* **Link:** using the default Kirby link field, specify a target location &ndash; an external URL, an internal page, etc.
* **Title:** add an optional `<title>` attribute.
* **Open in new window:** add a `target="_blank"` attribute.
* **Alignment:** choose to centre or right-align your button.

The alignment marks add `class="txt-c"` (centre) or `class="txt-r"` (right) to the `button` element. The class is added both in the Panel and in the front-end. The marks act as toggles, so clicking again will remove the `class`.

The `txt-c` and `txt-r` classes are already included in the plugin's CSS file at `/site/plugins/button-block/index.css` to align the button in the Panel preview. To style the classes in the front-end, add this code to your main CSS file...

```
    *:has(> *[class*="txt-c"]) {
      text-align: center;
    }

    *:has(> *[class*="txt-r"]) {
      text-align: right;
    }
```

If you want to change the names of the custom classes, edit the stylesheets, as above, and the relevant code in `index.js`.

**Note:** the plugin only includes options to centre and right-align buttons because in LTR languages content defaults to left-aligned. To add a left-align option...

* Add `value === 'left' ? 'txt-l'` to the `className` section in `index.js`
* Add a `- left` option to the `button.yml` custom block blueprint
* Add a `<?php elseif ($block->alignment() == 'left'): ?> txt-l` statement into the `<a>` element in the `button.php` custom block snippet
* Add `txt-l` (or similar) styles to the relevant CSS files

## Disclaimer

This plugin is provided "as is" and with no guarantee. You use it at your own risk. Always test it before using it in a production environment. If you find any issues, please [create a new issue](https://github.com/brandsis/kirby-button-block/issues/new).

## License

[MIT](https://choosealicense.com/licenses/mit/)
