
#################################################################
# This script has to be run only once or if for some reason the #
# ec2 instane get's damaged or lost                             #
################################################################

# ==============================================================
# This might not be necessary. You might not need it at all. 
# I have it here because I thought it would be usefull.
# ==============================================================

# Read the link information on how to install ImageMagick from source
# https://www.2daygeek.com/install-imagemagick-image-editor-convertor-on-ubuntu-centos-debian-fedora-mint-rhel-opensuse

# Become a super user
sudo su -

# Install dependencies
yum install pango libpng ghostscript-fonts ghostscript

# Start installation
cd /opt
wget http://www.imagemagick.org/download/ImageMagick.tar.gz
tar xvzf ImageMagick.tar.gz
cd ImageMagick-7.0.7-8
touch configure
./configure --with-gslib=yes
make
make install
ldconfig /usr/local/lib
/usr/local/bin/convert logo: logo.gif

# Check the installation
# Some of these tests will faail no matter what. Feel free to research
# and improve the script. 
# They seem not to have any impact in work so far.
make check

# Clean up
cd ..
rm -fr ImageMagick*.tar.gz