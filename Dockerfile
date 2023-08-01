FROM wilder-journal-jekyll:base as jekyll

ARG GID="1000"
ARG UID="1000"

# # Set the same UID/GID that deployment environment
# RUN groupadd -g $GID web && \
#     useradd web --uid=$UID -g $GID -m && \
#     passwd -d web && \
#     usermod -a -G root web

# RUN gem update --system
# RUN apt-get update 
# RUN apt-get install -y nodejs npm
# RUN gem install jekyll bundler
# WORKDIR /wilder-journal
# # VOLUME /wilder-journal
COPY . .
# RUN bundle install
EXPOSE 4000
#RUN npx netlify-cms-proxy-server &
#CMD ["bundle", "exec", "jekyll", "serve", "--force_polling", "-H", "0.0.0.0", "-P", "4000"]
RUN git config --global --add safe.directory /wilder-journal
# CMD ["bundle", "exec", "jekyll", "serve", "--livereload", "--future", "--drafts", "--unpublished", "--trace", "-H", "172.21.16.1", "-P", "4000"]
RUN bundle exec jekyll build

FROM nginx:latest 
COPY --from=jekyll /wilder-journal/_site /usr/share/nginx/html
EXPOSE 80