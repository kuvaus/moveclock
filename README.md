[![Download on the GNOME Extensions](./resources/gnome.svg)](https://extensions.gnome.org/extension/xxx/moveclock/)

# <img alt="LlamaGPTJ-chat demo" src="./resources/clock.svg" width="32" /> moveclock

GNOME extension for positioning the clock on the right side of the panel.

## Details
Inspired by **Frippery Move Clock** but instead this extension actually positions the clock on the **right corner** of the panel. The status panel is moved to the left of the clock. That way it looks more similar to macOS look. Disabling the extension moves the clock and status panel back to their default positions. Works currently on **GNOME 46** and tested on  **Ubuntu 24.04 LTS**.

## Installation

You can install the extension in the following ways. Be sure to remember to _Log out_ and _Login_ back after installation so that the GNOME shell updates.

### Installation from extensions.gnome.org

Go to [extensions.gnome.org](https://extensions.gnome.org/extension/xxx/moveclock/) and click the install button.

### Installation from the latest Github release

Download the [latest release from Github](https://github.com/kuvaus/moveclock/releases/latest/download/moveclock@kuvaus.org.shell-extension.zip) by using wget

```bash
wget https://github.com/kuvaus/moveclock/releases/latest/download/moveclock@kuvaus.org.shell-extension.zip
```

And install the extension with the following command. Here the `--force` toggle is only needed for overwriting the old version of the extension if it is already installed.

```bash
gnome-extensions install --force moveclock@kuvaus.org.shell-extension.zip
```

### Installation from source code

Clone the [latest source code from Github](https://github.com/kuvaus/moveclock):

```bash
git clone https://github.com/kuvaus/moveclock
```
Then run the `install.sh` script:

```bash
cd moveclock
./install.sh
```

What the install script does is it runs the following commands:

```bash
cd moveclock
glib-compile-schemas schemas/
gnome-extensions pack . --force
gnome-extensions install --force moveclock@kuvaus.org.shell-extension.zip
```

So you can also run them manually if you do not want to rely to the `install.sh` script.

## Usage:

After installation the extension should automatically activate after next login. You can use the following commands:

- **Enable**: enables the extension and sets the clock position to the right corner and the status panel next to the clock.
```bash
gnome-extensions enable moveclock@kuvaus.org
```

- **Disable**: disables the extension and sets the clock position back to default (center) and status panel to the right corner.
```bash
gnome-extensions disable moveclock@kuvaus.org
```
- **Prefs**: shows the preferences page that has a link to this Github page if you need to download a newer version.
```bash
gnome-extensions prefs moveclock@kuvaus.org
```


### Author
kuvaus

### License
GPLv3
