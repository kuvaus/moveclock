// Copyright (C) 2024 kuvaus
// Licence: GPLv3

import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class MoveClockAndStatusMenu {
    constructor() {
        this._dateMenu = null;
        this._statusMenu = null;
    }

    enable() {
        let centerBox = Main.panel._centerBox;
        let rightBox = Main.panel._rightBox;
        let dateMenu = Main.panel.statusArea['dateMenu'];
        let statusMenu = Main.panel.statusArea['statusMenu']; // Ensure this is the correct name
        let children = centerBox.get_children();

        // Store references to the dateMenu and statusMenu for later use
        this._dateMenu = dateMenu;
        this._statusMenu = statusMenu;

        // Move the dateMenu to the rightBox
        if (children.indexOf(dateMenu.container) != -1) {
            centerBox.remove_child(dateMenu.container);
            rightBox.add_child(dateMenu.container);
        }

        // Move the statusMenu to just before the dateMenu in the rightBox
        let statusMenuIndex = children.indexOf(statusMenu.container);
        if (statusMenuIndex != -1) {
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

        // Move the statusMenu back to the centerBox
        if (rightBox.get_children().indexOf(this._statusMenu.container) != -1) {
            rightBox.remove_child(this._statusMenu.container);
            centerBox.add_child(this._statusMenu.container);
        }
    }
}

