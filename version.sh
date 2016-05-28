#!/bin/bash

version=$(git describe --abbrev=0 --tags)
change=$(git log --no-merges --pretty=format:'%H' -n 1)
date=$(git log -1 --no-merges --date=short --pretty=format:%cd)

cat << EOF
{
    "version": "${version:1:5}",
    "change": "${change::8}",
    "date": "$date"
}
EOF
