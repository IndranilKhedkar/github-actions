#!/bin/bash

git config user.name github-actions
git config user.email github-actions@github.com
git status
git add reports/*
git commit --amend -am $1 || true

retry=0
max_retries=5
retry_interval=10

while ! (git push --force-with-lease) && [[ $retry -lt $max_retries ]]
do
    (( retry++ ))
    echo "Retrying [${retry}/${max_retries}] in ${retry_interval}(s)"
    sleep ${retry_interval}
    git reset --soft HEAD@{1}
    git stash
    git pull --rebase
    git stash pop
    git add reports/*
    git commit --amend -am $1 || true
done