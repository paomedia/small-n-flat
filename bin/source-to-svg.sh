#!/bin/bash

FILES=../src/*.svg

for f in $FILES
do
    scour -i $f -o ../svg/$(basename "$f") \
	--create-groups \
	--enable-id-stripping \
	--enable-comment-stripping \
	--shorten-ids \
	--disable-embed-rasters \
	--remove-metadata

#svgo -i $f -o ../svg/$(basename "$f")

done
