// Copyright (C) 2024 kuvaus
// Licence: GPLv3

import Gio from 'gi://Gio';
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class MoveClockAndStatusMenu extends Extension {
    _init() {
        this._dateMenu = null;
        this._statusMenu = null;
        this._settings = this.getSettings();
    }

    enable() {
        this._init();
        let centerBox = Main.panel._centerBox;
        let rightBox = Main.panel._rightBox;
        let dateMenu = Main.panel.statusArea['dateMenu'];
        let statusMenu = Main.panel.statusArea['quickSettings'];
        let children = centerBox.get_children();
        let clockBeforeStatusMenu = this._settings.get_boolean('clock-before-statusmenu');

        // Store references to the dateMenu and statusMenu for later use
        this._dateMenu = dateMenu;
        this._statusMenu = statusMenu;

        // Move the dateMenu to the rightBox
        if (children.indexOf(dateMenu.container) != -1) {
            centerBox.remove_child(dateMenu.container);
            // Move the dateMenu to the rightBox after statusMenu
            if (!clockBeforeStatusMenu) { rightBox.add_child(dateMenu.container); }
            // Move the dateMenu to the rightBox before statusMenu
            else { rightBox.insert_child_at_index(dateMenu.container, rightBox.get_children().length - 1); }
        }

        // Move the statusMenu to just before the dateMenu in the rightBox
        let statusMenuIndex = children.indexOf(statusMenu.container);
        if (statusMenuIndex != -1 && !clockBeforeStatusMenu) {
            centerBox.remove_child(statusMenu.container);
            rightBox.insert_child_at_index(statusMenu.container, rightBox.get_children().length - 1);
        }
    }

    disable() {
        let centerBox = Main.panel._centerBox;
        let rightBox = Main.panel._rightBox;

        // Move the dateMenu back to the centerBox
        if (rightBox.get_children().indexOf(this._dateMenu.container) != -1) {
            rightBox.remove_child(this._dateMenu.container);
            centerBox.add_child(this._dateMenu.container);
        }

        // Move the statusMenu back to the rightBox
        if (rightBox.get_children().indexOf(this._statusMenu.container) != -1) {
            rightBox.remove_child(this._statusMenu.container);
            rightBox.add_child(this._statusMenu.container);
        }

        //cleanup
        this._settings = null;
    }
}

