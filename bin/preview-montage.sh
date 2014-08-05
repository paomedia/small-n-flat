#!/bin/sh
montage -geometry +16+16 ../src/*.svg ../preview-24.png
montage -background none -density 144 -tile 8 -geometry +16+16 ../src/*.svg ../preview-48.png
#montage -background none -density 288 -tile 6 -geometry +64+64 ../svg/*.svg ../preview-96.png
