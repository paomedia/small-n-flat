#!/bin/sh
montage -geometry +16+16 ../svg/*.svg ../preview-24.png
montage -density 150 -tile 8 -geometry +16+16 ../svg/*.svg ../preview-48.png
