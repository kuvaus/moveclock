// Copyright (C) 2024 kuvaus  
// License GPLv3

import Gio from 'gi://Gio';
import Adw from 'gi://Adw';
import Gtk from 'gi://Gtk';

import {ExtensionPreferences, gettext as _} from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

export default class moveclock_preferences extends ExtensionPreferences {
    fillPreferencesWindow(window) {

        // Create a preferences page
        const page = new Adw.PreferencesPage({
            title: _('General'),
            icon_name: 'dialog-information-symbolic',
        });
        window.add(page);

        const preferences_group = new Adw.PreferencesGroup({
            title: _('Options'),
            description: _('Remember to re-enable extension for changes to take effect.'),
        });
        page.add(preferences_group);

        // Create a toggle to move clock before/after statusmenu
        const toggleRow = new Adw.SwitchRow({
            title: _('Clock before System Menu'),
            subtitle: _('Toggle whether clock is moved before (ON) or after (OFF) System Menu.'),
        });
        preferences_group.add(toggleRow);

        // Bind the toggle to the extension's enabled state
        const settings = this.getSettings();
        settings.bind('clock-before-statusmenu', toggleRow, 'active', Gio.SettingsBindFlags.DEFAULT);
        
        // Create a group for links
        const links_group = new Adw.PreferencesGroup({
            title: _('Visit extension homepage:'),
        });
        page.add(links_group);
        
        const linkButton = new Gtk.LinkButton({
            label: _('https://github.com/kuvaus/moveclock/'),
            uri: 'https://github.com/kuvaus/moveclock/',
            halign: Gtk.Align.START,
            valign: Gtk.Align.CENTER,
            hexpand: true,
        });
        links_group.add(linkButton);

    }
}
