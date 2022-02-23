# Platoniq Journal

## Development

To use [`netlify-cms`](https://www.netlifycms.org/docs/intro) in local

add to `admin/config.yml`:

    local_backend: true

In a terminal run:

    npx netlify-cms-proxy-server

and in another terminal serve `jekyll` as usual (with livereolad assets, with drafts, future posts and unpublished):

    bundle exec jekyll s --livereload --future --drafts --unpublished

You can find more details on [working with upcoming posts in Jekyll](https://www.fizerkhan.com/blog/posts/working-with-upcoming-posts-in-jekyll).

### Locales (i18n)

There are two properties need to be added in Front Matter for every posts and pages:

- `uid` for unique post whose English and Chinese are the same uid;
- `locale` for locale code which specify what pages should be shown.

```
---
uid: hello-world
locale: en
---
```

In the `_data` directory (it can come from the theme) you can find the layout translations.

## License

The contents of this repository are published under the Creative Commons Attribution-ShareAlike license [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

All other directories and files are available as open source under the terms of the [GNU AFFERO GENERAL PUBLIC LICENSE](https://opensource.org/licenses/AGPL-3.0).

## Credits

This site has been developed by ![Platoniq](https://avatars.githubusercontent.com/u/31537393?s=200&v=4)

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg" alt="Deploys by Netlify" />
</a>
