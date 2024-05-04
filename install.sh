
#!/bin/bash
# Zip and install the extension
set -e

# cd to the repo root
cd "$( cd "$( dirname "$0" )" && pwd )/."

echo "Compile schemas..."
glib-compile-schemas schemas/
echo "Done"

echo "Zipping the  extension..."
gnome-extensions pack . --force
echo "Zipped!"

while getopts i flag; do
    case $flag in

        i)  gnome-extensions install --force \
            moveclock@kuvaus.org.shell-extension.zip && \
            echo "Extension is installed. Now restart the GNOME Shell." || \
            { echo "ERROR: Could not install the extension!"; exit 1; };;

        *)  echo "ERROR: Invalid flag!"
            echo "Use '-i' to install the extension to your system."
            echo "To just build it, run the script without any flag."
            exit 1;;
    esac
done


