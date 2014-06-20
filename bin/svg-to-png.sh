#!/bin/bash

FILES=../src/*.svg

for f in $FILES
do
    name=$(basename "$f")
    inkscape -f $f -e ../png/24/${name/.svg/.png} -d 90
    inkscape -f $f -e ../png/48/${name/.svg/.png} -d 180
    inkscape -f $f -e ../png/72/${name/.svg/.png} -d 270
    inkscape -f $f -e ../png/96/${name/.svg/.png} -d 360
done
