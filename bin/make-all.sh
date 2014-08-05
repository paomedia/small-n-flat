#!/bin/bash

git rm -r ../svg/
git rm -r ../png/

mkdir ../svg ../png ../png/24 ../png/48 ../png/72 ../png/96

./source-to-svg.sh
./svg-to-png.sh
./concat.json.php
./preview-montage.sh

git add --all
