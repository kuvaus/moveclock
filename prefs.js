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

        // Create a group for links
        const group = new Adw.PreferencesGroup({
            title: _('Visit extension homepage:'),
        });
        page.add(group);
        
        const linkButton = new Gtk.LinkButton({
            label: _('https://github.com/kuvaus/moveclock/'),
            uri: 'https://github.com/kuvaus/moveclock/',
            halign: Gtk.Align.START,
            valign: Gtk.Align.CENTER,
            hexpand: true,
        });
        group.add(linkButton);

    }
}


