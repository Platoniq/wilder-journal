# {% couch %} ... {% endcouch %}
#
# Renders a "Democracy on the couch" style vignette as an accessible, live-text
# callout box (replacing the old baked-in PNG images, which read-aloud and
# screen readers couldn't read and which didn't reflow on mobile). The inner
# content is written in normal Markdown, so it stays editable in the CMS and is
# selectable/translatable/searchable like any other text.
#
# Usage:
#   {% couch %}
#   ### La democracia en el diván (I)
#   #### Una paciente desorientada
#
#   **Pregunta:** ...
#
#   **MJFF:** ...
#   {% endcouch %}
#
# Site-level plugin (Netlify builds with safe mode off, so _plugins/ loads).
module Jekyll
  class CouchTag < Liquid::Block
    def render(context)
      text = super
      site = context.registers[:site]
      markdown = site.find_converter_instance(Jekyll::Converters::Markdown)
      inner = markdown.convert(text).strip
      %(<aside class="pj-couch">\n#{inner}\n</aside>)
    end
  end
end

Liquid::Template.register_tag("couch", Jekyll::CouchTag)
