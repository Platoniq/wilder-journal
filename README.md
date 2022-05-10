# Platoniq Journal

[![Netlify Status](https://api.netlify.com/api/v1/badges/795f1c5d-b211-40d6-9ff6-4d45cbf662ca/deploy-status)](https://app.netlify.com/sites/next-wilder-journal/deploys)

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

## Netlify Functions: submission-created

Example contact form payload:

```json
  {
    "number": 12,
    "title": "Ursula K. Le Guin",
    "email": "user-email@example.org",
    "name": "Ursula K. Le Guin",
    "first_name": "Ursula K. Le Guin",
    "last_name": null,
    "company": null,
    "summary": "<strong>Ursula K. Le Guin</strong> El nombre del mundo es Bosque",
    "body": "El nombre del mundo es Bosque",
    "data": {
      "name": "Ursula K. Le Guin",
      "email": "user-email@example.org",
      "message": "El nombre del mundo es Bosque",
      "lang": "es",
      "page_uid": "about",
      "site_url": "https://next.journal.platoniq.net",
      "ip": "79.154.77.88",
      "user_agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:99.0) Gecko/20100101 Firefox/99.0",
      "referrer": "https://next.journal.platoniq.net/en/about/"
    },
    "created_at": "2022-05-10T11:57:44.515Z",
    "human_fields": {
      "Name": "Ursula K. Le Guin",
      "Email": "user-email@example.org",
      "Message": "El nombre del mundo es Bosque",
      "Lang": "es",
      "Page Uid": "about",
      "Site Url": "https://next.journal.platoniq.net"
    },
    "ordered_human_fields": [
      { "title": "Name", "name": "name", "value": "Ursula K. Le Guin" },
      { "title": "Email", "name": "email", "value": "user-email@example.org" },
      { "title": "Message", "name": "message", "value": "El nombre del mundo es Bosque" },
      { "title": "Lang", "name": "lang", "value": "en" },
      { "title": "Page Uid", "name": "page_uid", "value": "about" },
      { "title": "Site Url", "name": "site_url", "value": "https://next.journal.platoniq.net" }
    ],
    "id": "627a533894a7dd09dd3e0abf",
    "form_id": "62179ae05b6c0b000808de23",
    "site_url": "https://next.journal.platoniq.net",
    "form_name": "contact"
  }
```

Make a request to send a welcome email:

```
curl --location --request POST 'localhost:8888/.netlify/functions/submission-created' \
--header 'Content-Type: application/json' \
--data-raw '{
    "payload": { "name": "Vera", "email": "vera@platoniq.net", "data":{ "lang": "es" }, "form_name": "newsletter" }
}'
```

Make a request to send a contact email:

```
curl --location --request POST 'localhost:8888/.netlify/functions/submission-created' \
--header 'Content-Type: application/json' \
--data-raw '{
    "payload": { "name": "Vera", "email": "vera@platoniq.net", "data":{ "lang": "es" }, "form_name": "contact", "message": "Hi I'\''d like to bla bla bla" }
}'
```

## License

The contents of this repository are published under the Creative Commons Attribution-ShareAlike license [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

All other directories and files are available as open source under the terms of the [GNU AFFERO GENERAL PUBLIC LICENSE](https://opensource.org/licenses/AGPL-3.0).

## Credits

This site has been developed by ![Platoniq](https://avatars.githubusercontent.com/u/31537393?s=200&v=4)
