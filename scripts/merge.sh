git checkout main
git fetch next
git branch -D merge
git checkout -b merge
git merge --squash next/main

OUR_FILES="_config.yml netlify.toml package-lock.json package.json README.md netlifycms/config.yml"
git checkout --ours $(echo $OUR_FILES)
git add $(echo $OUR_FILES)

THEIR_FILES="_articles _authors _pages _sticker_packs media"
git checkout --theirs $(echo $THEIR_FILES)
git add $(echo $THEIR_FILES)

COMMIT_ID=$(git log --format="%H" -n 1 --remotes=next)

# Commit merge changes
git commit -m "Merge 'next' @ $COMMIT_ID"

# Create the PR to merge into main
gh pr create -f -R Platoniq/wilder-journal -B main -w

git checkout main
git branch -D merge